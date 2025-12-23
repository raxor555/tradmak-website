
import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
  useEffect(() => {
    // DOM Elements
    const widgetButton = document.getElementById('widgetButton');
    const chatContainer = document.getElementById('chatContainer');
    const minimizeButton = document.getElementById('minimizeButton');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput') as HTMLInputElement;
    const sendButton = document.getElementById('sendButton') as HTMLButtonElement;
    const introContainer = document.getElementById('introContainer');
    const introGif = document.getElementById('introGif') as HTMLImageElement;

    // Form Elements
    const leadFormOverlay = document.getElementById('leadFormOverlay');
    const leadForm = document.getElementById('leadForm') as HTMLFormElement;
    const inputName = document.getElementById('inputName') as HTMLInputElement;
    const inputEmail = document.getElementById('inputEmail') as HTMLInputElement;
    const inputPhone = document.getElementById('inputPhone') as HTMLInputElement;

    if (!widgetButton || !chatContainer || !chatMessages || !chatInput || !sendButton) return;

    // State flags
    let initialMessageDisplayed = false;
    let introShownThisSession = false;
    let selectedLanguage = 'en'; 
    let sessionActive = false;
    let userData = { name: '', email: '', phone: '' };
    let countryCodePrefix = '+971 '; // Default to UAE if detection fails

    // GIF Source - Provided by User
    const GIF_URL = 'https://res.cloudinary.com/dsscxxw0b/image/upload/v1766125757/grok-video-c9cbca29-e201-4bfa-a9f2-eb8c862001b82-ezgif.com-video-to-gif-converter_jvegh1.gif';
    
    // Preload GIF
    if (introGif) {
      const img = new Image();
      img.src = GIF_URL;
      img.onload = () => { 
        introGif.src = GIF_URL; 
      };
    }

    const WEBHOOK_URL_EN = 'https://n8n.srv1040836.hstgr.cloud/webhook/tradmak-english-chatbot';
    const WEBHOOK_URL_AR = 'https://n8n.srv1040836.hstgr.cloud/webhook/tradmak-arabic-chatbot';
    let SESSION_ID = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    // Auto-detect Country Code
    fetch('https://ipwho.is/')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.calling_code && inputPhone) {
          countryCodePrefix = `+${data.calling_code} `;
          inputPhone.value = countryCodePrefix;
        }
      })
      .catch(e => {
        console.log('Country code fetch failed', e);
        if (inputPhone) inputPhone.value = countryCodePrefix;
      });

    // Enforcement of non-removable country code
    inputPhone?.addEventListener('keydown', (e: KeyboardEvent) => {
      const cursor = inputPhone.selectionStart || 0;
      if ((e.key === 'Backspace' || e.key === 'Delete') && cursor <= countryCodePrefix.length) {
        e.preventDefault();
      }
    });

    inputPhone?.addEventListener('input', () => {
      if (!inputPhone.value.startsWith(countryCodePrefix)) {
        inputPhone.value = countryCodePrefix + inputPhone.value.replace(/^\+?\d*\s?/, '').trim();
      }
    });

    // Corporate Email Validation Helper
    const isCorporateEmail = (email: string) => {
      const blocked = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'mail.ru', 'yandex.ru', 'protonmail.com', 'zoho.com'];
      const domain = email.split('@')[1]?.toLowerCase();
      return domain && !blocked.includes(domain);
    };

    function formatMessage(text: string): string {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#00A4DA;text-decoration:underline;">$1</a>')
        .replace(/\n/g, '<br>');
    }

    function typeWriter(element: HTMLElement, html: string, speed = 15, onFinish: (() => void) | null = null) {
      let i = 0;
      let currentHtml = "";
      function type() {
        if (i < html.length) {
          if (html[i] === '<') {
            let tagEnd = html.indexOf('>', i);
            if (tagEnd !== -1) {
              currentHtml += html.slice(i, tagEnd + 1);
              i = tagEnd + 1;
              type();
              return;
            }
          }
          currentHtml += html[i];
          i++;
          element.innerHTML = currentHtml + '<span style="border-right:2px solid #00A4DA;margin-left:2px;animation:blink 1s infinite;"></span>';
          if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
          setTimeout(type, speed);
        } else {
          element.innerHTML = currentHtml;
          if (onFinish) onFinish();
        }
      }
      type();
    }

    function addTimestamp(messageElement: HTMLElement) {
      const timeDiv = document.createElement('div');
      timeDiv.style.fontSize = '9px';
      timeDiv.style.color = '#999';
      timeDiv.style.marginTop = '6px';
      timeDiv.style.textAlign = 'right';
      timeDiv.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      messageElement.appendChild(timeDiv);
    }

    function selectLanguage(lang: string) {
      selectedLanguage = lang;
      if (lang === 'ar') chatContainer.classList.add('arabic');
      else chatContainer.classList.remove('arabic');
      if (chatMessages) chatMessages.innerHTML = '';
      showLeadForm();
    }

    function showLeadForm() {
      if (!leadFormOverlay) return;
      leadFormOverlay.style.display = 'flex';
      setTimeout(() => leadFormOverlay.classList.add('active'), 10);
    }

    leadForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailVal = inputEmail.value.trim();
      
      if (!isCorporateEmail(emailVal)) {
        alert(selectedLanguage === 'ar' ? 'يرجى إدخال بريد إلكتروني خاص بالشركة فقط.' : 'Please enter a corporate email address only.');
        inputEmail.style.borderColor = '#ef4444';
        return;
      }

      userData = { name: inputName.value, email: emailVal, phone: inputPhone.value };
      if (leadFormOverlay) {
        leadFormOverlay.classList.remove('active');
        setTimeout(() => leadFormOverlay.style.display = 'none', 400);
      }
      chatInput.disabled = false;
      chatInput.placeholder = selectedLanguage === 'ar' ? 'أدخل أمرك...' : 'Enter command...';
      sendButton.disabled = false;
      displayFullWelcomeMessage();
    });

    function displayInitialMessage() {
      if (initialMessageDisplayed || !chatMessages) return;
      const botMsg = document.createElement('div');
      botMsg.className = 'bot-message';
      chatMessages.appendChild(botMsg);
      typeWriter(botMsg, "TradMAK Intelligence Swarm activated. Select operational language:", 15, () => {
        addTimestamp(botMsg);
        showLanguageSelection();
      });
      initialMessageDisplayed = true;
    }

    function showLanguageSelection() {
      if (!chatMessages) return;
      const langContainer = document.createElement('div');
      langContainer.className = 'language-selection-container';
      
      const enBtn = document.createElement('button');
      enBtn.className = 'language-pill';
      enBtn.textContent = 'English';
      enBtn.onclick = () => selectLanguage('en');
      
      const arBtn = document.createElement('button');
      arBtn.className = 'language-pill';
      arBtn.textContent = 'العربية';
      arBtn.onclick = () => selectLanguage('ar');
      
      langContainer.appendChild(enBtn);
      langContainer.appendChild(arBtn);
      chatMessages.appendChild(langContainer);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function displayFullWelcomeMessage() {
      if (!chatMessages) return;
      const botMsg = document.createElement('div');
      botMsg.className = 'bot-message';
      chatMessages.appendChild(botMsg);
      const welcomeText = selectedLanguage === 'ar'
        ? `أهلاً بك **${userData.name}**. تم تفعيل الاتصال الآمن. كيف يمكننا مساعدتك اليوم؟`
        : `Access Granted. Welcome **${userData.name}**. How can TradMAK assist you today?`;
      typeWriter(botMsg, formatMessage(welcomeText), 15, () => {
        addTimestamp(botMsg);
        showServiceOptions();
      });
    }

    function showServiceOptions() {
      if (!chatMessages) return;
      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'service-options-container';
      optionsContainer.id = 'serviceOptionsContainer';

      const services = [
        { id: 'agents', title: 'AI Agents', icon: '🤖' },
        { id: 'whatsapp', title: 'WhatsApp API', icon: '💬' },
        { id: 'digital', title: 'Digital Exp', icon: '🌐' },
        { id: 'chatbots', title: 'AI Chatbots', icon: '🤖' }
      ];
      services.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'service-option';
        btn.innerHTML = `<span class="service-icon">${s.icon}</span><span>${s.title}</span>`;
        btn.onclick = () => handleServiceClick(s.title);
        optionsContainer.appendChild(btn);
      });
      chatMessages.appendChild(optionsContainer);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function showAIAgentOptions() {
      if (!chatMessages) return;
      const aiOptionsContainer = document.createElement('div');
      aiOptionsContainer.className = 'service-options-container';
      aiOptionsContainer.id = 'aiAgentOptionsContainer';

      const aiServices = [
        { title: 'AI Agents', message: 'Tell me more about AI Agents' },
        { title: 'AAAS', message: 'Tell me more about AAAS' }
      ];

      aiServices.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'service-option';
        btn.innerHTML = `<span class="service-icon">🤖</span><span>${s.title}</span>`;
        btn.onclick = () => {
          document.getElementById('aiAgentOptionsContainer')?.remove();
          const uMsg = document.createElement('div');
          uMsg.className = 'user-message';
          uMsg.textContent = s.title;
          chatMessages?.appendChild(uMsg);
          addTimestamp(uMsg);
          sendMessageToWebhook(s.message);
        };
        aiOptionsContainer.appendChild(btn);
      });
      chatMessages.appendChild(aiOptionsContainer);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleServiceClick(title: string) {
      const serviceContainer = document.getElementById('serviceOptionsContainer');
      if (serviceContainer) serviceContainer.remove();

      const uMsg = document.createElement('div');
      uMsg.className = 'user-message';
      uMsg.textContent = title;
      chatMessages?.appendChild(uMsg);
      addTimestamp(uMsg);

      if (title === 'AI Agents') {
        showAIAgentOptions();
      } else {
        sendMessageToWebhook(title);
      }
    }

    async function sendMessageToWebhook(message: string) {
      if (!sessionActive) return;
      const typing = document.createElement('div');
      typing.style.padding = '12px';
      typing.style.fontSize = '12px';
      typing.style.color = '#999';
      typing.textContent = 'Agent processing...';
      chatMessages?.appendChild(typing);
      if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;

      try {
        const url = selectedLanguage === 'ar' ? WEBHOOK_URL_AR : WEBHOOK_URL_EN;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, session_id: SESSION_ID, user_name: userData.name, language: selectedLanguage })
        });
        const txt = await res.text();
        let out = "";
        try {
          const raw = JSON.parse(txt);
          const data = Array.isArray(raw) ? raw[0] : raw;
          out = data?.output || data?.response || data?.text || txt;
        } catch {
          out = txt;
        }
        typing.remove();
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-message';
        chatMessages?.appendChild(botMsg);
        typeWriter(botMsg, formatMessage(out), 10, () => addTimestamp(botMsg));
      } catch (err) {
        typing.remove();
        console.error(err);
      }
    }

    widgetButton.onclick = () => {
      chatContainer.classList.add('active');
      widgetButton.style.display = 'none';
      sessionActive = true;
      if (!introShownThisSession) {
        introShownThisSession = true;
        if (introContainer) {
          introContainer.classList.add('active');
          setTimeout(() => {
            introContainer.style.opacity = '0';
            setTimeout(() => {
              introContainer.classList.remove('active');
              introContainer.style.display = 'none';
              displayInitialMessage();
            }, 800);
          }, 5000);
        }
      }
    };

    minimizeButton.onclick = () => {
      chatContainer.classList.remove('active');
      widgetButton.style.display = 'flex';
    };

    sendButton.onclick = () => {
      const val = chatInput.value.trim();
      if (val) {
        const u = document.createElement('div');
        u.className = 'user-message';
        u.textContent = val;
        chatMessages?.appendChild(u);
        addTimestamp(u);
        chatInput.value = '';
        sendMessageToWebhook(val);
      }
    };

    chatInput.onkeypress = (e) => { if (e.key === 'Enter') sendButton.click(); };
  }, []);

  return (
    <div className="tradmak-chat-v2">
      <div className="widget-btn-v2" id="widgetButton">
        <i className="fas fa-message"></i>
      </div>
      
      <div className="chat-container-v2" id="chatContainer">
        <div className="intro-container" id="introContainer">
           <img id="introGif" className="intro-gif" alt="TradMAK Authorization" />
        </div>

        <div className="chat-header-v2">
          <div className="header-main-v2 flex items-center gap-4">
            <div className="header-avatar-v2">
              <img src="https://res.cloudinary.com/dsscxxw0b/image/upload/v1764105516/Gemini_Generated_Image_nhzs87nhzs87nhzs_ztkrfm.png" alt="TM" />
            </div>
            <div>
              <div className="chat-title-v2 font-bold text-white">TradMAK Intelligence</div>
              <div className="chat-status-v2 flex items-center gap-2">
                <div className="status-dot-v2 w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[10px] text-green-500 uppercase font-bold tracking-widest">Neural Link Active</span>
              </div>
            </div>
          </div>
          <div className="header-actions-v2">
            <button className="action-btn-v2 text-white/50 hover:text-white" id="minimizeButton">▼</button>
          </div>
        </div>

        <div className="chat-messages-v2" id="chatMessages"></div>

        <div className="lead-form-v2" id="leadFormOverlay">
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-black">Authorization</h3>
          <p className="text-sm text-gray-500 mb-8">Establish secure identification to proceed.</p>
          <form id="leadForm">
            <input type="text" className="input-v2" id="inputName" placeholder="Full Name" required />
            <input type="email" className="input-v2" id="inputEmail" placeholder="Corporate Email" required />
            <input type="tel" className="input-v2" id="inputPhone" placeholder="Contact Number" required />
            <button type="submit" className="submit-btn-v2">Establish Link</button>
          </form>
        </div>

        <div className="input-area-v2">
          <input type="text" className="chat-input-v2" id="chatInput" placeholder="Awaiting command..." disabled />
          <button className="send-btn-v2" id="sendButton" disabled>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
