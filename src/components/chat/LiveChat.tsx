import { useState } from "react";
import { MessagesList } from "./message/MessagesList";
import { ChatInput } from "./ChatInput";
import { UserInfo } from "./UserInfo";
import { useChatMessages } from "./hooks/useChatMessages";
import { useScrollSync } from "./hooks/useScrollSync";
import { isAndroid } from "react-device-detect";
import { useIsMobile } from "@/hooks/use-mobile";

interface LiveChatProps {
  filterUserMessages?: boolean;
  onUnreadCountChange?: (count: number) => void;
}

export const LiveChat = ({ filterUserMessages = false, onUnreadCountChange }: LiveChatProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
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

  // Calcula o padding bottom baseado no dispositivo
  const getBottomPadding = () => {
    if (isMobile && isAndroid) {
      return "pb-[calc(env(safe-area-inset-bottom)+48px)]"; // 48px é aproximadamente a altura dos botões de navegação
    }
    return "pb-[env(safe-area-inset-bottom)]";
  };

  return (
    <div className="flex flex-col h-full relative">
      {selectedUser ? (
        <UserInfo userName={selectedUser} onClose={() => setSelectedUser(null)} />
      ) : (
        <div 
          ref={scrollRef} 
          className="absolute top-0 left-0 right-0 bottom-[80px] overflow-y-auto pb-4"
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
      <div className={`fixed bottom-0 left-0 right-0 z-50 ${getBottomPadding()} bg-background/95 backdrop-blur-sm shadow-lg`}>
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