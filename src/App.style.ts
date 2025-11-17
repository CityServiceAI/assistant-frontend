import type { SxProps, Theme } from '@mui/material/styles';

interface AppStyles {
  root: SxProps<Theme>;
  container: SxProps<Theme>;
  header: SxProps<Theme>;
  logoBlock: SxProps<Theme>;
  logoSquare: SxProps<Theme>;
  headerTexts: SxProps<Theme>;
  title: SxProps<Theme>;
  subtitle: SxProps<Theme>;
  finalWrapper: SxProps<Theme>;
  chatCard: SxProps<Theme>;
  chatInner: SxProps<Theme>;
  inputWrapper: SxProps<Theme>;
}

export const appStyles: AppStyles = {
  root: {
    minHeight: '100vh',
    bgcolor: 'background.default',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    py: 4,
  },
  container: {
    width: '100%',
    maxWidth: 960,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    px: 2,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    mb: 1,
  },
  logoBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  logoSquare: {
    width: 36,
    height: 36,
    borderRadius: 2,
    bgcolor: 'primary.main',
  },
  headerTexts: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    m: 0,
    fontSize: 22,
    fontWeight: 600,
    color: 'text.primary',
  },
  subtitle: {
    m: 0,
    mt: 0.5,
    fontSize: 14,
    color: 'text.secondary',
  },
  finalWrapper: {
    mb: 1,
  },
  chatCard: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 1,
    minHeight: 360,
    maxHeight: '60vh',
  },
  chatInner: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  inputWrapper: {
    mt: 2,
  },
};
