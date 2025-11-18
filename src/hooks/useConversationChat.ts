import { useCallback, useState } from 'react';

import type { Conversation, ConversationMessage, ConversationRequest } from '@/types';

import { sendConversation } from '../api';

export const useConversationChat = () => {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [finalRequest, setFinalRequest] = useState<string | null>(null);

  const sendUserMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const newMessage: ConversationMessage = {
        role: 'user',
        content: trimmed,
        agent: null,
      };
      const baseMessages = conversation?.messages ?? [];
      const nextMessages = [...baseMessages, newMessage];

      setConversation((prev) => {
        if (prev) {
          return {
            ...prev,
            messages: nextMessages,
          };
        }

        return {
          id: 'pending',
          context: null,
          messages: nextMessages,
          debug: [],
        } as Conversation;
      });

      setIsSending(true);
      try {
        const requestBody: ConversationRequest = conversation
          ? {
              id: conversation.id,
              context: conversation.context ?? null,
              messages: nextMessages,
            }
          : {
              messages: nextMessages,
            };

        const updated = await sendConversation(requestBody);

        setConversation(updated);
      } finally {
        setIsSending(false);
      }
    },
    [conversation],
  );

  const clearFinalRequest = useCallback(() => {
    setFinalRequest(null);
  }, []);

  const regenerateFinalRequest = useCallback(() => {
    console.log('Regenerate final request', conversation);
  }, [conversation]);

  return {
    conversation,
    isSending,
    finalRequest,
    sendUserMessage,
    clearFinalRequest,
    regenerateFinalRequest,
  };
};
