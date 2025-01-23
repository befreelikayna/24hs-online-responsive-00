import { useState } from "react";
import { MessagesList } from "./message/MessagesList";
import { ChatInput } from "./ChatInput";
import { UserInfo } from "./UserInfo";
import { useChatMessages } from "./hooks/useChatMessages";
import { useScrollSync } from "./hooks/useScrollSync";

interface LiveChatProps {
  filterUserMessages?: boolean;
  onUnreadCountChange?: (count: number) => void;
}

export const LiveChat = ({ filterUserMessages = false, onUnreadCountChange }: LiveChatProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const {
    messages,
    handleReaction,
    handleReply,
    addMessage,
    markAllAsRead
  } = useChatMessages(onUnreadCountChange);

  const { scrollRef, scrollToBottom, handleScroll, isUserScrolling } = useScrollSync([messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    if (selectedMessageId) {
      handleReply(selectedMessageId, newMessage);
    } else {
      addMessage(newMessage);
    }
    
    setNewMessage("");
    
    if (!isUserScrolling) {
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleUserSelect = (userName: string) => {
    setSelectedUser(userName);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const filteredMessages = filterUserMessages
    ? messages.filter(message => message.userName === "Você")
    : messages;

  return (
    <div className={`flex flex-col h-full relative transition-all duration-300 ${isCollapsed ? 'h-16' : ''}`}>
      {selectedUser ? (
        <UserInfo userName={selectedUser} onClose={() => setSelectedUser(null)} />
      ) : (
        <div 
          ref={scrollRef} 
          className={`absolute top-0 left-0 right-0 ${isCollapsed ? 'bottom-0' : 'bottom-0 overflow-y-auto pb-16'}`}
          onScroll={() => handleScroll()}
        >
          {!isCollapsed && (
            <MessagesList
              messages={filteredMessages}
              selectedMessageId={selectedMessageId}
              onMessageSelect={setSelectedMessageId}
              onReaction={handleReaction}
              onReply={handleReply}
              onUserSelect={handleUserSelect}
            />
          )}
        </div>
      )}
      {!isCollapsed && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <ChatInput
            value={newMessage}
            onChange={setNewMessage}
            onSend={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
};