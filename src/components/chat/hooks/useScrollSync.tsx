import { useEffect, useRef } from 'react';

export const useScrollSync = (dependencies: any[] = []) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [...dependencies]);

  const handleScroll = (callback?: () => void) => {
    if (!scrollRef.current) return;

    const { scrollHeight, scrollTop, clientHeight } = scrollRef.current;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      callback?.();
    }
  };

  return {
    scrollRef,
    scrollToBottom,
    handleScroll
  };
};