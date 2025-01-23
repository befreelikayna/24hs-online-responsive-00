import { useEffect, useRef, useState } from 'react';

export const useScrollSync = (dependencies: any[] = []) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const scrollToBottom = () => {
    if (scrollRef.current && shouldAutoScroll) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (!isUserScrolling) {
      scrollToBottom();
    }
  }, [...dependencies]);

  const handleScroll = (callback?: () => void) => {
    if (!scrollRef.current) return;

    const { scrollHeight, scrollTop, clientHeight } = scrollRef.current;
    const isNearBottom = scrollHeight - scrollTop <= clientHeight + 100;
    
    // Se o usuário está rolando manualmente
    setIsUserScrolling(true);
    
    // Se chegou perto do final, habilita o auto-scroll novamente
    if (isNearBottom) {
      setShouldAutoScroll(true);
      setIsUserScrolling(false);
    } else {
      setShouldAutoScroll(false);
    }

    if (isNearBottom) {
      callback?.();
    }
  };

  return {
    scrollRef,
    scrollToBottom,
    handleScroll,
    isUserScrolling
  };
};