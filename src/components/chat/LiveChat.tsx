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
      setSelectedMessageId(null);
    }
    
    setNewMessage("");
    
    if (!isUserScrolling) {
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleUserSelect = (userName: string) => {
    setSelectedUser(userName);
  };

  const filteredMessages = filterUserMessages
    ? messages.filter(message => message.userName === "Você")
    : messages;

  return (
    <div className="flex flex-col h-full relative">
      {selectedUser ? (
        <UserInfo userName={selectedUser} onClose={() => setSelectedUser(null)} />
      ) : (
        <div 
          ref={scrollRef} 
          className="absolute top-0 left-0 right-0 bottom-[calc(80px+env(safe-area-inset-bottom))] overflow-y-auto pb-4"
          onScroll={() => handleScroll()}
        >
          <MessagesList
            messages={filteredMessages}
            selectedMessageId={selectedMessageId}
            onMessageSelect={setSelectedMessageId}
            onReaction={handleReaction}
            onReply={handleReply}
            onUserSelect={handleUserSelect}
          />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 pb-safe bg-background/80 backdrop-blur-sm border-t border-border/30">
        <ChatInput
          value={newMessage}
          onChange={setNewMessage}
          onSend={handleSendMessage}
          isReply={!!selectedMessageId}
        />
      </div>
    </div>
  );
};