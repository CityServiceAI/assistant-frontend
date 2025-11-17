export const ROLE = {
  USER: 'user',
  ASSISTANT: 'assistant',
} as const;

export type Role = (typeof ROLE)[keyof typeof ROLE];

export interface ChatMessage {
  id: string;
  author: Role;
  text: string;
}

export interface ChatRequestDto {
  prompt: string;
}

export interface ChatResponseDto {
  messages: ChatMessage[];
  finalRequest?: string | null;
}
