import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
  useEffect(() => {
    // DOM Elements
    const widgetButton = document.getElementById('widgetButton');
    const chatContainer = document.getElementById('chatContainer');
    const minimizeButton = document.getElementById('minimizeButton');
    const endChatButton = document.getElementById('endChatButton');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput') as HTMLInputElement;
    const sendButton = document.getElementById('sendButton') as HTMLButtonElement;
    const introContainer = document.getElementById('introContainer');
    const introGif = document.getElementById('introGif') as HTMLImageElement;
    const chatTitle = document.getElementById('chatTitle');
    const statusText = document.getElementById('statusText');

    // Form Elements
    const leadFormOverlay = document.getElementById('leadFormOverlay');
    const leadForm = document.getElementById('leadForm');
    const inputName = document.getElementById('inputName') as HTMLInputElement;
    const inputEmail = document.getElementById('inputEmail') as HTMLInputElement;
    const inputPhone = document.getElementById('inputPhone') as HTMLInputElement;
    const formTitle = document.getElementById('formTitle');
    const formSubtitle = document.getElementById('formSubtitle');
    const formSubmitBtn = document.getElementById('formSubmitBtn');

    if (!widgetButton || !chatContainer || !chatMessages || !chatInput || !sendButton) return;

    // State flags
    let initialMessageDisplayed = false;
    let introShownThisSession = false;
    let languageSelected = false;
    let selectedLanguage = 'en'; 
    let sessionActive = false;
    let userData = { name: '', email: '', phone: '' };

    // Webhook & session - UPDATED URLs
    const WEBHOOK_URL_EN = 'https://n8n.srv1040836.hstgr.cloud/webhook/tradmak-english-chatbot';
    const WEBHOOK_URL_AR = 'https://n8n.srv1040836.hstgr.cloud/webhook/tradmak-arabic-chatbot';
    let SESSION_ID = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    let userIP = 'unknown';
    let userCountryCode = '+1';

    async function getUserIP() {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        userIP = data.ip || 'unknown';
        if (data.country_calling_code) userCountryCode = data.country_calling_code;
      } catch (error) {
        try {
          const response = await fetch('https://ipwho.is/');
          const data = await response.json();
          if(data.success) {
            userIP = data.ip || 'unknown';
            if (data.calling_code) userCountryCode = '+' + data.calling_code;
          }
        } catch (e) {
          userIP = 'unknown';
          userCountryCode = '+1';
        }
      }
    }
    getUserIP();

    function loadGif() {
      if (!introGif) return;
      // Using a placeholder as requested
      introGif.src = `https://res.cloudinary.com/dsscxxw0b/image/upload/v1766125757/grok-video-c9cbca29-e201-4bfa-a9f2-eb8c862001b82-ezgif.com-video-to-gif-converter_jvegh1.gif`;
    }

    /**
     * Converts markdown-like syntax into HTML
     * **bold** -> <b>bold</b>
     * [text](url) -> <a href="url">text</a>
     * naked urls -> <a href="url">url</a>
     */
    function formatMessage(text: string): string {
      let formatted = text
        // Bold: **text**
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        // Markdown Links: [text](url)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>')
        // Naked URLs (that aren't already part of an a tag)
        .replace(/(?<!href=")(?<!">)(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>')
        // Line breaks
        .replace(/\n/g, '<br>');
      
      return formatted;
    }

    /**
     * Enhanced typewriter that handles HTML tags
     */
    function typeWriter(element: HTMLElement, html: string, speed = 15, onFinish: (() => void) | null = null) {
      let i = 0;
      let currentHtml = "";
      
      function type() {
        if (i < html.length) {
          if (html[i] === '<') {
            // Find the end of the tag and append it instantly
            let tagEnd = html.indexOf('>', i);
            if (tagEnd !== -1) {
              currentHtml += html.slice(i, tagEnd + 1);
              i = tagEnd + 1;
              // Continue immediately without delay for the tag itself
              type();
              return;
            }
          }
          
          currentHtml += html[i];
          i++;
          element.innerHTML = currentHtml + '<span class="typing-cursor"></span>';
          smoothScrollToBottom();
          setTimeout(type, speed);
        } else {
          element.innerHTML = currentHtml; // Remove cursor
          if (onFinish) onFinish();
        }
      }
      type();
    }

    function addTimestamp(messageElement: HTMLElement) {
      const timestampDiv = document.createElement('div');
      timestampDiv.className = 'message-timestamp';
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      timestampDiv.textContent = time;
      messageElement.appendChild(timestampDiv);
    }

    function smoothScrollToBottom() {
      if (chatMessages) {
        chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
      }
    }

    function endSession() {
      sessionActive = false;
      if (chatInput) {
        chatInput.disabled = true;
        chatInput.placeholder = selectedLanguage === 'ar' ? "انتهت الجلسة" : "Session ended";
      }
      if (sendButton) sendButton.disabled = true;

      const endMsg = document.createElement('div');
      endMsg.className = 'system-message-box';
      endMsg.textContent = selectedLanguage === 'ar'
        ? "تم إنهاء المحادثة. شكراً لتواصلكم."
        : "Chat session ended. Thank you.";
      chatMessages?.appendChild(endMsg);
      smoothScrollToBottom();
    }

    function startNewSession() {
      sessionActive = true;
      SESSION_ID = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      initialMessageDisplayed = false;
      languageSelected = false;
      selectedLanguage = 'en';
      userData = { name: '', email: '', phone: '' };

      if (chatMessages) chatMessages.innerHTML = '';
      if (chatInput) {
        chatInput.disabled = true;
        chatInput.placeholder = "Select language...";
        chatInput.value = '';
      }
      if (sendButton) sendButton.disabled = true;

      if (chatContainer) chatContainer.classList.remove('arabic');
      if (chatTitle) chatTitle.textContent = 'TradMAK Intelligence';
      if (statusText) statusText.textContent = "AI Orchestration Active";

      if (leadFormOverlay) {
        leadFormOverlay.style.display = 'none';
        leadFormOverlay.classList.remove('active');
      }
    }

    function displayInitialMessage() {
      if (initialMessageDisplayed || !chatMessages) return;
      const botMsg = document.createElement('div');
      botMsg.className = 'bot-message';
      chatMessages.appendChild(botMsg);
      const welcomeText = "Welcome to TradMAK Ecosystem. Select a language to initiate the neural link:";
      typeWriter(botMsg, formatMessage(welcomeText), 20, () => {
        addTimestamp(botMsg);
        setTimeout(() => showLanguageSelection(), 500);
      });
      initialMessageDisplayed = true;
      smoothScrollToBottom();
    }

    function showLanguageSelection() {
      if (!chatMessages) return;
      const langContainer = document.createElement('div');
      langContainer.className = 'language-selection-container';
      
      const englishButton = document.createElement('button');
      englishButton.className = 'language-pill';
      englishButton.textContent = 'English';
      englishButton.onclick = () => selectLanguage('en');

      const arabicButton = document.createElement('button');
      arabicButton.className = 'language-pill';
      arabicButton.textContent = 'العربية';
      arabicButton.onclick = () => selectLanguage('ar');

      langContainer.appendChild(englishButton);
      langContainer.appendChild(arabicButton);
      chatMessages.appendChild(langContainer);
      smoothScrollToBottom();
    }

    function selectLanguage(lang: string) {
      if (!chatInput || !chatContainer || !chatTitle || !statusText || !chatMessages) return;
      selectedLanguage = lang;
      languageSelected = true;
      chatInput.placeholder = lang === 'ar' ? 'يرجى إكمال البيانات...' : 'Please complete details...';

      if (lang === 'ar') {
        chatContainer.classList.add('arabic');
        chatTitle.textContent = 'TradMAK Intelligence';
        statusText.textContent = 'نظام الذكاء الاصطناعي نشط';
      } else {
        chatContainer.classList.remove('arabic');
        chatTitle.textContent = 'TradMAK Intelligence';
        statusText.textContent = "AI Orchestration Active";
      }

      chatMessages.innerHTML = '';
      showLeadForm();
    }

    function showLeadForm() {
      if (!leadFormOverlay) return;
      if (inputName && !userData.name) inputName.value = '';
      if (inputEmail && !userData.email) inputEmail.value = '';
      if (inputPhone) {
        inputPhone.value = userCountryCode;
        userData.phone = '';
      }

      leadFormOverlay.style.display = 'flex';
      setTimeout(() => leadFormOverlay.classList.add('active'), 10);

      if (selectedLanguage === 'ar') {
        if(formTitle) formTitle.textContent = 'البيانات الشخصية';
        if(formSubtitle) formSubtitle.textContent = 'أدخل بياناتك لبدء المحادثة الذكية';
        if(formSubmitBtn) formSubmitBtn.textContent = 'بدء';
        if(inputName) inputName.placeholder = 'الاسم الكامل';
        if(inputEmail) inputEmail.placeholder = 'البريد الإلكتروني';
        leadFormOverlay.classList.add('arabic');
      } else {
        if(formTitle) formTitle.textContent = 'Authentication';
        if(formSubtitle) formSubtitle.textContent = 'Initialize session with your details.';
        if(formSubmitBtn) formSubmitBtn.textContent = 'Initialize';
        if(inputName) inputName.placeholder = 'Full Name';
        if(inputEmail) inputEmail.placeholder = 'Corporate Email';
        leadFormOverlay.classList.remove('arabic');
      }
    }

    if (inputPhone) {
      inputPhone.addEventListener('keydown', (e) => {
        const cursorPosition = inputPhone.selectionStart || 0;
        if (cursorPosition <= userCountryCode.length && e.key === 'Backspace') e.preventDefault();
      });
      inputPhone.addEventListener('input', (e) => {
        let val = inputPhone.value;
        if (!val.startsWith(userCountryCode)) {
          inputPhone.value = userCountryCode;
          val = userCountryCode;
        }
        let userPart = val.substring(userCountryCode.length).replace(/\D/g, '');
        if (userPart.length > 10) userPart = userPart.substring(0, 10);
        inputPhone.value = userCountryCode + userPart;
      });
    }

    if (leadForm) {
      leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = inputName.value.trim();
        const email = inputEmail.value.trim();
        const phone = inputPhone.value.trim();
        const userPhonePart = phone.substring(userCountryCode.length);

        if (!name || !email || !phone || userPhonePart.length === 0) return;

        userData = { name, email, phone };
        if (leadFormOverlay) {
          leadFormOverlay.classList.remove('active');
          setTimeout(() => leadFormOverlay.style.display = 'none', 300);
        }

        if (chatInput) {
          chatInput.disabled = false;
          chatInput.placeholder = selectedLanguage === 'ar' ? 'أدخل رسالتك...' : 'Enter your command...';
        }
        if (sendButton) sendButton.disabled = false;

        displayFullWelcomeMessage();
      });
    }

    function displayFullWelcomeMessage() {
      if (!chatMessages) return;
      const botMsg = document.createElement('div');
      botMsg.className = 'bot-message';
      chatMessages.appendChild(botMsg);

      const welcomeText = selectedLanguage === 'ar'
        ? `أهلاً بك **${userData.name}**. تم إنشاء الرابط العصبي بنجاح. كيف يمكن لترادماك مساعدتك اليوم؟`
        : `Welcome **${userData.name}**. Neural link established. How can TradMAK assist your trade workflow today?`;

      typeWriter(botMsg, formatMessage(welcomeText), 20, () => {
        addTimestamp(botMsg);
      });
      smoothScrollToBottom();
    }

    const handleWidgetClick = function() {
      chatContainer.classList.add('active');
      widgetButton.style.display = 'none';
      if (!sessionActive) startNewSession();

      if (!introShownThisSession) {
        introShownThisSession = true;
        if (introContainer) {
          introContainer.style.display = 'flex';
          loadGif();
          setTimeout(() => {
            introContainer.classList.add('active');
            setTimeout(() => {
              introContainer.classList.add('fade-out');
              setTimeout(() => {
                introContainer.style.display = 'none';
                displayInitialMessage();
              }, 600); 
            }, 1800); 
          }, 100);
        }
      } else {
        if (!languageSelected && !initialMessageDisplayed) displayInitialMessage();
      }
    };
    widgetButton.addEventListener('click', handleWidgetClick);

    const handleMinimize = function() {
      chatContainer.classList.remove('active');
      widgetButton.style.display = 'flex';
    };
    if (minimizeButton) minimizeButton.addEventListener('click', handleMinimize);

    if (endChatButton) endChatButton.addEventListener('click', endSession);

    async function sendMessageToWebhook(message: string) {
      if (!sendButton || !chatMessages || !sessionActive) return;
      sendButton.disabled = true;

      // Ensure typing indicator is added and visible
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'typing-indicator-swiss';
      typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
      chatMessages.appendChild(typingIndicator);
      smoothScrollToBottom();

      try {
        const webhookUrl = selectedLanguage === 'ar' ? WEBHOOK_URL_AR : WEBHOOK_URL_EN;
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message,
            session_id: SESSION_ID,
            user_ip: userIP,
            language: selectedLanguage,
            user_name: userData.name,
            user_email: userData.email,
            user_phone: userData.phone
          })
        });

        if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseText = await response.text();
        let out = "";
        
        try {
          const rawData = JSON.parse(responseText);
          const data = Array.isArray(rawData) ? rawData[0] : rawData;
          out = data?.output || data?.response || data?.text || data?.message || data?.data || responseText;
        } catch (e) {
          out = responseText || (selectedLanguage === 'ar' ? "يقوم وكيل ترادماك بالمعالجة... سيتابع المتخصصون لدينا قريباً." : "TradMAK agent processing... Our trade specialists will follow up shortly.");
        }
        
        typingIndicator.remove();
        
        if (!sessionActive) return;

        const botReply = document.createElement('div');
        botReply.className = 'bot-message';
        chatMessages.appendChild(botReply);
        
        typeWriter(botReply, formatMessage(out), 15, () => addTimestamp(botReply));
        smoothScrollToBottom();
      } catch (error) {
        console.error('Webhook Fetch Error:', error);
        typingIndicator.remove();
        const err = document.createElement('div');
        err.className = 'system-error-msg';
        err.style.color = 'red';
        err.style.fontSize = '11px';
        err.style.padding = '10px';
        err.textContent = selectedLanguage === 'ar' 
          ? "فشل الاتصال. يرجى المحاولة مرة أخرى." 
          : "Communication Link Failed. Please try again.";
        chatMessages.appendChild(err);
        smoothScrollToBottom();
      } finally {
        if (sessionActive) sendButton.disabled = false;
      }
    }

    const handleSend = function() {
      if (!sessionActive) return;
      const message = chatInput.value.trim();
      if (message) {
        const userMsg = document.createElement('div');
        userMsg.className = 'user-message';
        userMsg.textContent = message;
        chatMessages.appendChild(userMsg);
        addTimestamp(userMsg);
        chatInput.value = '';
        smoothScrollToBottom();
        sendMessageToWebhook(message);
      }
    };
    sendButton.addEventListener('click', handleSend);

    const handleKeypress = function(e: KeyboardEvent) {
      if (e.key === 'Enter') sendButton.click();
    };
    chatInput.addEventListener('keypress', handleKeypress);

    return () => {
      widgetButton.removeEventListener('click', handleWidgetClick);
      if (minimizeButton) minimizeButton.removeEventListener('click', handleMinimize);
      if (endChatButton) endChatButton.removeEventListener('click', endSession);
      sendButton.removeEventListener('click', handleSend);
      chatInput.removeEventListener('keypress', handleKeypress);
    }
  }, []);

  return (
    <>
      <style>{`
        :root {
          --swiss-blue: #00A4DA;
          --swiss-blue-bright: #33BDEC;
          --swiss-creme: #F7F7F5;
          --swiss-black: #050505;
          --swiss-gray: #D1D5DB;
          --glass-bg: rgba(255, 255, 255, 0.7);
          --glass-border: rgba(255, 255, 255, 0.5);
        }

        .tradmak-chat-v2 {
          font-family: 'Switzer', sans-serif;
          position: relative;
          z-index: 9999;
        }

        /* Widget button */
        .widget-btn-v2 {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          background: var(--swiss-black);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          z-index: 999;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .widget-btn-v2:hover {
          transform: scale(1.1) translateY(-4px);
          background: var(--swiss-blue);
          box-shadow: 0 12px 40px rgba(0, 164, 218, 0.3);
        }

        .widget-btn-v2 i {
          color: white;
          font-size: 20px;
        }

        /* Chat container */
        .chat-container-v2 {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 360px;
          height: 520px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: none;
          flex-direction: column;
          z-index: 1000;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chat-container-v2.active {
          display: flex;
          opacity: 1;
          transform: translateY(0);
        }

        /* Blue Header */
        .chat-header-v2 {
          position: sticky;
          top: 0;
          padding: 16px 20px;
          background: var(--swiss-blue);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 20;
          color: white;
        }

        .header-main-v2 {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-avatar-v2 {
          width: 36px;
          height: 36px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .header-avatar-v2 img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .chat-title-v2 {
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: white;
        }

        .chat-status-v2 {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-dot-v2 {
          width: 6px;
          height: 6px;
          background: #10B981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10B981;
        }

        .header-actions-v2 {
          display: flex;
          gap: 4px;
        }

        .action-btn-v2 {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          opacity: 0.8;
          cursor: pointer;
          font-size: 10px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .action-btn-v2:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.2);
        }

        /* Messages */
        .chat-messages-v2 {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scrollbar-width: none;
          background: transparent;
        }

        .bot-message {
          align-self: flex-start;
          max-width: 85%;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 12px 16px;
          border-radius: 4px 18px 18px 18px;
          font-size: 13px;
          line-height: 1.5;
          color: var(--swiss-black);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .chat-link {
          color: var(--swiss-blue);
          text-decoration: underline;
          font-weight: 600;
          transition: color 0.2s;
        }

        .chat-link:hover {
          color: var(--swiss-blue-bright);
        }

        .user-message {
          align-self: flex-end;
          max-width: 85%;
          background: var(--swiss-blue);
          color: white;
          padding: 12px 16px;
          border-radius: 18px 4px 18px 18px;
          font-size: 13px;
          line-height: 1.5;
          box-shadow: 0 8px 24px rgba(0, 164, 218, 0.15);
        }

        .message-timestamp {
          font-size: 9px;
          color: #9CA3AF;
          margin-top: 4px;
          font-family: monospace;
          opacity: 0.8;
        }

        /* Typing Indicator CSS */
        .typing-indicator-swiss {
          display: flex;
          gap: 4px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          width: fit-content;
          margin-bottom: 12px;
          align-self: flex-start;
        }

        .typing-indicator-swiss span {
          width: 6px;
          height: 6px;
          background: var(--swiss-blue);
          border-radius: 50%;
          animation: swiss-bounce 1.4s infinite ease-in-out both;
        }

        .typing-indicator-swiss span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator-swiss span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes swiss-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 14px;
          background: var(--swiss-blue);
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        /* Lead Form Overlay */
        .lead-form-v2 {
          position: absolute;
          top: 68px;
          left: 0;
          width: 100%;
          height: calc(100% - 68px);
          background: rgba(247, 247, 245, 0.8);
          backdrop-filter: blur(20px);
          z-index: 50;
          display: none;
          flex-direction: column;
          padding: 32px;
          box-sizing: border-box;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .lead-form-v2.active {
          display: flex;
          opacity: 1;
        }

        .form-title-v2 {
          font-size: 20px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          color: var(--swiss-black);
        }

        .form-subtitle-v2 {
          font-size: 12px;
          color: #6B7280;
          margin-bottom: 32px;
          font-weight: 500;
        }

        .input-v2 {
          width: 100%;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 14px;
          margin-bottom: 16px;
          outline: none;
          transition: all 0.3s;
        }

        .input-v2:focus {
          border-color: var(--swiss-blue);
          background: white;
          box-shadow: 0 0 0 4px rgba(0, 164, 218, 0.1);
        }

        .submit-btn-v2 {
          width: 100%;
          padding: 16px;
          background: var(--swiss-black);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          margin-top: 12px;
          transition: all 0.3s;
        }

        .submit-btn-v2:hover {
          background: var(--swiss-blue);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 164, 218, 0.2);
        }

        /* Language Pills */
        .language-selection-container {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }

        .language-pill {
          padding: 10px 20px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
        }

        .language-pill:hover {
          background: var(--swiss-blue);
          color: white;
          border-color: var(--swiss-blue);
          transform: translateY(-2px);
        }

        /* Input area */
        .input-area-v2 {
          padding: 16px 20px 20px 20px;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chat-input-v2 {
          flex: 1;
          border: 1px solid rgba(0, 0, 0, 0.03);
          background: #F3F4F6;
          border-radius: 14px;
          padding: 12px 18px;
          font-size: 13px;
          outline: none;
          transition: all 0.2s;
        }

        .chat-input-v2:focus {
          background: white;
          border-color: var(--swiss-blue);
          box-shadow: 0 0 0 3px rgba(0, 164, 218, 0.05);
        }

        .send-btn-v2 {
          width: 44px;
          height: 44px;
          background: var(--swiss-blue);
          border-radius: 14px;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(0, 164, 218, 0.2);
        }

        .send-btn-v2:hover {
          transform: scale(1.05);
          background: var(--swiss-blue-bright);
        }

        /* Intro Container */
        .intro-container {
          position: absolute;
          inset: 0;
          background: white;
          z-index: 1001;
          display: none;
          align-items: center;
          justify-content: center;
          transition: opacity 0.6s;
        }

        .intro-container.active { display: flex; opacity: 1; }
        .intro-container.fade-out { opacity: 0; pointer-events: none; }
        .intro-gif { width: 100%; height: 100%; object-fit: contain; }

        /* Arabic */
        .arabic { direction: rtl; }
        .arabic .bot-message { border-radius: 18px 4px 18px 18px; align-self: flex-end; }
        .arabic .user-message { border-radius: 4px 18px 18px 18px; align-self: flex-start; }
      `}</style>

      <div className="tradmak-chat-v2">
        <div className="widget-btn-v2" id="widgetButton">
          <i className="fas fa-message"></i>
        </div>

        <div className="chat-container-v2" id="chatContainer">
          <div className="intro-container" id="introContainer">
            <img id="introGif" alt="TradMAK Intro" className="intro-gif" />
          </div>

          <div className="chat-header-v2">
            <div className="header-main-v2">
              <div className="header-avatar-v2">
                <img src="https://res.cloudinary.com/dsscxxw0b/image/upload/v1764105516/Gemini_Generated_Image_nhzs87nhzs87nhzs_ztkrfm.png" alt="TM" />
              </div>
              <div>
                <div className="chat-title-v2" id="chatTitle">TradMAK Intelligence</div>
                <div className="chat-status-v2">
                  <div className="status-dot-v2"></div>
                  <span id="statusText">Agent Active</span>
                </div>
              </div>
            </div>
            
            <div className="header-actions-v2">
              <button className="action-btn-v2" id="endChatButton" title="Close Session">✕</button>
              <button className="action-btn-v2" id="minimizeButton" title="Minimize">▼</button>
            </div>
          </div>

          <div className="chat-messages-v2" id="chatMessages"></div>

          <div className="lead-form-v2" id="leadFormOverlay">
            <h3 className="form-title-v2" id="formTitle">Authorization</h3>
            <p className="form-subtitle-v2" id="formSubtitle">Secure authentication required.</p>
            <form id="leadForm">
              <input type="text" className="input-v2" id="inputName" placeholder="Full Name" required />
              <input type="email" className="input-v2" id="inputEmail" placeholder="Corporate Email" required />
              <input type="tel" className="input-v2" id="inputPhone" placeholder="Contact Number" required />
              <button type="submit" className="submit-btn-v2" id="formSubmitBtn">Start Session</button>
            </form>
          </div>

          <div className="input-area-v2">
            <input type="text" className="chat-input-v2" id="chatInput" placeholder="Type a message..." />
            <button className="send-btn-v2" id="sendButton">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
