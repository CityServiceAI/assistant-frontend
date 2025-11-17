import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Button, IconButton, Tooltip } from '@mui/material';

import { locale } from '@/locale';

import { styleFinal } from './style';

interface FinalRequestProps {
  text: string;
  onClear: () => void;
  onRegenerate: () => void;
}

const FinalRequest = ({ text, onClear, onRegenerate }: FinalRequestProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      // TODO: додати snackbar / нотифікацію
    } catch (error) {
      console.error('Copy failed', error);
    }
  };

  return (
    <Box sx={styleFinal.root}>
      <Box sx={styleFinal.header}>
        <Box sx={styleFinal.titleBlock}>
          <Box component="h2" sx={styleFinal.title}>
            {locale.titles.finalTitle}
          </Box>
          <Box component="p" sx={styleFinal.subtitle}>
            {locale.titles.finalSubtitle}
          </Box>
        </Box>
        <Box sx={styleFinal.buttons}>
          <Button variant="outlined" size="small" onClick={onRegenerate}>
            {locale.labels.regenerateLabel}
          </Button>
          <Tooltip title={locale.labels.copyLabel}>
            <IconButton size="small" onClick={handleCopy}>
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title={locale.labels.hideLabel}>
            <IconButton size="small" onClick={onClear}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Box sx={styleFinal.content}>{text}</Box>
    </Box>
  );
};

export default FinalRequest;
