import { Box } from '@mui/material';
import { useState } from 'react';

import { ChatMessage, ROLE } from '@/types';

import { sendChatMessage } from './api';
import { appStyles } from './App.style';
import Chat from './components/Chat';
import { welcomeText, examples } from './components/Chat/text';
import FinalRequest from './components/FinalRequest';
import InputBar from './components/InputBar';
import { locale } from './locale';

const App = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      author: ROLE.ASSISTANT,
      text: welcomeText,
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [finalRequest, setFinalRequest] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleExampleClick = (text: string) => {
    setInputValue(text);
  };

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setIsSending(true);

    // Локально додаємо повідомлення користувача
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      author: 'user',
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    try {
      // Потім заміниш на реальний бек: /agents/normalize / agents/chat тощо
      const response = await sendChatMessage({ prompt: trimmed });

      setMessages(response.messages);
      setFinalRequest(response.finalRequest ?? null);
    } catch (error) {
      console.error(error);
      // TODO: показати нотифікацію про помилку
    } finally {
      setIsSending(false);
    }
  };

  const handleClearFinal = () => {
    setFinalRequest(null);
  };

  const handleRegenerateFinal = async () => {
    // Тут можна буде надіслати весь контекст messages для перегенерації
    // поки що просто лог

    console.log('Regenerate final request');
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
              onClear={handleClearFinal}
              onRegenerate={handleRegenerateFinal}
            />
          </Box>
        )}
        <Box sx={appStyles.chatCard}>
          <Box sx={appStyles.chatInner}>
            <Chat messages={messages} examples={examples} onExampleClick={handleExampleClick} />
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
