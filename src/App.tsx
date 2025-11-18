import { Box } from '@mui/material';
import { useState } from 'react';

import { appStyles } from './App.style';
import Chat from './components/Chat';
import { examples } from './components/Chat/text';
import FinalRequest from './components/FinalRequest';
import InputBar from './components/InputBar';
import { useChatMessages } from './hooks/useChatMessages';
import { useConversationChat } from './hooks/useConversationChat';
import { locale } from './locale';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [hasUserStarted, setHasUserStarted] = useState(false);

  const {
    conversation,
    isSending,
    finalRequest,
    sendUserMessage,
    clearFinalRequest,
    regenerateFinalRequest,
  } = useConversationChat();

  const chatMessages = useChatMessages(conversation);

  const handleExampleClick = (text: string) => {
    setInputValue(text);
  };

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setHasUserStarted(true);
    setInputValue('');
    await sendUserMessage(trimmed);
  };

  return (
    <Box sx={appStyles.root}>
      <Box sx={appStyles.container}>
        <Box sx={appStyles.header}>
          <Box sx={appStyles.logoBlock}>
            <Box sx={appStyles.logoSquare} />
          </Box>
          <Box sx={appStyles.headerTexts}>
            <Box component="h1" sx={appStyles.title}>
              {locale.titles.chatTitle}
            </Box>
            <Box component="p" sx={appStyles.subtitle}>
              {locale.tips.chatTip}
            </Box>
          </Box>
        </Box>

        {finalRequest && (
          <Box sx={appStyles.finalWrapper}>
            <FinalRequest
              text={finalRequest}
              onClear={clearFinalRequest}
              onRegenerate={regenerateFinalRequest}
            />
          </Box>
        )}

        <Box sx={appStyles.chatCard}>
          <Box sx={appStyles.chatInner}>
            <Chat
              messages={chatMessages}
              examples={examples}
              onExampleClick={handleExampleClick}
              isThinking={isSending}
              showExamples={!hasUserStarted}
            />
          </Box>
        </Box>

        <Box sx={appStyles.inputWrapper}>
          <InputBar
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSend}
            isSending={isSending}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
