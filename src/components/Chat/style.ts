import type { SxProps, Theme } from '@mui/material/styles';

interface StyleChat {
  root: SxProps<Theme>;
  messages: SxProps<Theme>;
  examplesBox: SxProps<Theme>;
  examplesTitle: SxProps<Theme>;
  exampleItem: SxProps<Theme>;
  loader: SxProps<Theme>;
  loaderText: SxProps<Theme>;
}

export const styleChat: StyleChat = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    p: 2,
    overflow: 'hidden',
    minHeight: 0,
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    pr: 1,
    minHeight: 0,
  },
  examplesBox: {
    mt: 2,
    p: 2,
    borderRadius: 3,
    bgcolor: 'grey.50',
    border: (theme) => `1px solid ${theme.palette.divider}`,
  },
  examplesTitle: {
    fontSize: 13,
    fontWeight: 500,
    mb: 1,
    color: 'text.secondary',
  },
  exampleItem: {
    fontSize: 14,
    p: 1,
    borderRadius: 999,
    bgcolor: 'background.paper',
    border: '1px solid transparent',
    cursor: 'pointer',
    mb: 1,
    transition: 'background-color 0.15s ease, border-color 0.15s ease',
    '&:hover': {
      borderColor: 'secondary.main',
      bgcolor: 'secondary.50',
    },
  },
  loader: {
    px: 1.5,
    py: 1,
    borderRadius: 3,
    bgcolor: 'grey.100',
    border: (theme) => `1px solid ${theme.palette.divider}`,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
  },
  loaderText: {
    fontSize: 13,
    color: 'text.secondary',
  },
};
