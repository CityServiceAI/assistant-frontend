import { Box, Typography } from '@mui/material';

import { locale } from '@/locale';
import { ChatMessage, ROLE } from '@/types';

import MessageItem from './MessageItem';
import { styleChat } from './style';

interface ChatProps {
  messages: ChatMessage[];
  examples: string[];
  onExampleClick: (text: string) => void;
}

const Chat = ({ messages, examples, onExampleClick }: ChatProps) => {
  const hasUserMessages = messages.some((msg) => msg.author === ROLE.USER);

  return (
    <Box sx={styleChat.root}>
      <Box sx={styleChat.messages}>
        {messages.map((msg) => (
          <MessageItem key={msg.id} author={msg.author} text={msg.text} />
        ))}
      </Box>

      {!hasUserMessages && (
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
