import type { SxProps, Theme } from '@mui/material/styles';

interface StyleFinal {
  root: SxProps<Theme>;
  header: SxProps<Theme>;
  titleBlock: SxProps<Theme>;
  title: SxProps<Theme>;
  subtitle: SxProps<Theme>;
  buttons: SxProps<Theme>;
  content: SxProps<Theme>;
}

export const styleFinal: StyleFinal = {
  root: {
    p: 2,
    borderRadius: 3,
    bgcolor: 'background.paper',
    boxShadow: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 1.5,
    gap: 2,
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    m: 0,
  },
  subtitle: {
    fontSize: 13,
    color: 'text.secondary',
    m: 0,
    mt: 0.5,
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  content: {
    mt: 1,
    p: 1.5,
    borderRadius: 2,
    border: (theme) => `1px solid ${theme.palette.divider}`,
    fontSize: 14,
    lineHeight: 1.5,
    whiteSpace: 'pre-line',
  },
};
