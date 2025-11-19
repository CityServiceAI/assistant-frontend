import type { Conversation } from '@/types';

export const sendConversation = async (body: Conversation): Promise<Conversation> => {
  const response = await fetch('/api/conversations/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Conversation API error: ${response.status}`);
  }

  const result = response.json() as Promise<Conversation>;
  console.log(await result);
  return result;
};
