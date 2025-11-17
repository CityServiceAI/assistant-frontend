import type { ChatRequestDto, ChatResponseDto } from '@/types';

export const sendChatMessage = async (body: ChatRequestDto): Promise<ChatResponseDto> => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Chat API error: ${response.status}`);
  }

  return response.json() as Promise<ChatResponseDto>;
};
