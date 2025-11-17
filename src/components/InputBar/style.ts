import type { SxProps, Theme } from '@mui/material/styles';

interface StyleInput {
  root: SxProps<Theme>;
  textField: SxProps<Theme>;
  button: SxProps<Theme>;
}

export const styleInput: StyleInput = {
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 1.5,
    bgcolor: 'background.paper',
    borderRadius: 999,
    boxShadow: 1,
    p: 1,
  },
  textField: {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      borderRadius: 999,
      paddingRight: 0,
    },
  },
  button: {
    px: 3,
    alignSelf: 'center',
  },
};
