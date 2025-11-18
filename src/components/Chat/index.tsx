import { Box, Typography, CircularProgress } from '@mui/material';
import { useRef, useEffect } from 'react';

import { locale } from '@/locale';
import { ConversationMessage } from '@/types';

import MessageItem from './MessageItem';
import { styleChat } from './style';

interface ChatProps {
  messages: ConversationMessage[];
  examples: string[];
  onExampleClick: (text: string) => void;
  isThinking: boolean;
  showExamples: boolean;
}

const Chat = ({ messages, examples, onExampleClick, isThinking, showExamples }: ChatProps) => {
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;

    el.scrollTo({
      top: el.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages.length]);

  return (
    <Box sx={styleChat.root}>
      <Box sx={styleChat.messages} ref={messagesRef}>
        {messages.map((msg, i) => (
          <MessageItem key={i} author={msg.role} text={msg.content} />
        ))}

        {isThinking && (
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Box sx={styleChat.loader}>
              <CircularProgress size={14} />
              <Typography sx={styleChat.loaderText}>{locale.placeholders.loader}</Typography>
            </Box>
          </Box>
        )}
      </Box>

      {showExamples && (
        <Box sx={styleChat.examplesBox}>
          <Typography sx={styleChat.examplesTitle}>{locale.tips.firstExample}</Typography>
          {examples.map((example) => (
            <Box key={example} sx={styleChat.exampleItem} onClick={() => onExampleClick(example)}>
              {example}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Chat;
