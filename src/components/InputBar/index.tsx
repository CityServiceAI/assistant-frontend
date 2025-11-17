import { Box, Button, TextField } from '@mui/material';

import { locale } from '@/locale';

import { styleInput } from './style';

import type { KeyboardEvent } from 'react';

interface InputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isSending?: boolean;
}

export default function InputBar({ value, onChange, onSend, isSending }: InputBarProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  };

  return (
    <Box sx={styleInput.root}>
      <TextField
        sx={styleInput.textField}
        size="small"
        multiline
        maxRows={4}
        placeholder={locale.placeholders.inputPlaceholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant="contained"
        color="primary"
        sx={styleInput.button}
        onClick={onSend}
        disabled={!value.trim() || isSending}
      >
        {locale.labels.sendButtonLabel}
      </Button>
    </Box>
  );
}
