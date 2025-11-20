export const ROLE = {
  USER: 'user',
  ASSISTANT: 'assistant',
} as const;

export type Role = (typeof ROLE)[keyof typeof ROLE];

export interface ConversationMessage {
  role: Role;
  content: string;
  agent?: string | null;
}

export interface ConversationContext {
  issue_category?: string | null;
  issue_address?: string | null;
  issue_category_level?: string | null;
  issuer_name?: string | null;
  service_provider_name?: string | null;
  service_provider_email?: string | null;
  service_provider_phones?: string[] | null;
  emergency?: string | null;
}

export interface Summary {
  normalized_description: string;
  context_notes: string;
}

export interface Conversation {
  id?: string;
  context?: ConversationContext | null;
  messages: ConversationMessage[];
  summary?: Summary;
  trace?: Array<Record<string, unknown>> | null;
  need_clarification?: boolean | null 
}
