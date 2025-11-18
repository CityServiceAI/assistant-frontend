import { useMemo } from 'react';

import { welcomeText } from '@/components/Chat/text';
import type { Conversation, ConversationMessage } from '@/types';

export const useChatMessages = (conversation: Conversation | null): ConversationMessage[] => {
  const welcomeMessage: ConversationMessage = {
    role: 'assistant',
    content: welcomeText,
    agent: 'ui-welcome',
  };

  return useMemo(
    () => [welcomeMessage, ...(conversation?.messages ?? [])],
    [conversation, welcomeMessage],
  );
};
