import { Box, Typography } from '@mui/material';

import { ROLE, type Role } from '@/types';

import { styleMessage } from './style';

interface MessageItemProps {
  author: Role;
  text: string;
}

const MessageItem = ({ author, text }: MessageItemProps) => {
  const isUser = author === ROLE.USER;

  return (
    <Box sx={styleMessage.row}>
      <Box sx={isUser ? styleMessage.bubbleUser : styleMessage.bubbleBot}>
        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageItem;
