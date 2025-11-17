import type { SxProps, Theme } from '@mui/material/styles';

interface StyleMessage {
  row: SxProps<Theme>;
  bubbleBot: SxProps<Theme>;
  bubbleUser: SxProps<Theme>;
}

export const styleMessage: StyleMessage = {
  row: {
    display: 'flex',
    mb: 1.5,
  },
  bubbleBot: {
    maxWidth: '70%',
    bgcolor: 'grey.100',
    borderRadius: 3,
    p: 1.5,
    fontSize: 14,
    lineHeight: 1.5,
    color: 'text.primary',
    whiteSpace: 'pre-line',
  },
  bubbleUser: {
    maxWidth: '70%',
    ml: 'auto',
    bgcolor: 'primary.main',
    color: '#FFFFFF',
    borderRadius: 3,
    p: 1.5,
    fontSize: 14,
    lineHeight: 1.5,
    whiteSpace: 'pre-line',
  },
};
