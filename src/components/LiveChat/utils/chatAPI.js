const WEBHOOK_URL = 'https://hook.eu1.make.com/blu5npwyywsl17i1mqbtfw466nq7ssqu';

export const sendMessageToAI = async (messageData) => {
  try {
    // Debug: Log the webhook URL to ensure we're using the correct one
    console.log('Sending message to webhook:', WEBHOOK_URL);
    
    const payload = {
      message: messageData.text,
      sessionId: messageData.sessionId,
      timestamp: messageData.timestamp,
      userContext: {
        ...messageData.userContext,
        currentPage: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      messageHistory: messageData.recentMessages,
      quickAction: messageData.quickAction || null
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseText = await response.text();
    
    // Try to parse as JSON first, fallback to plain text
    let aiResponse;
    try {
      aiResponse = JSON.parse(responseText);
    } catch {
      aiResponse = { text: responseText, type: 'text' };
    }

    return {
      success: true,
      data: aiResponse
    };
  } catch (error) {
    console.error('Error sending message to AI:', error);
    return {
      success: false,
      error: error.message,
      fallbackMessage: "I'm having trouble connecting right now. Please try again in a moment, or feel free to email us at hello@zaidistudio.co.ke for immediate assistance."
    };
  }
};

export const simulateTypingDelay = (text) => {
  // Simulate realistic typing speed (average 40 WPM = ~200 chars/min)
  const baseDelay = 500; // Minimum delay
  const typingSpeed = 3; // chars per 100ms
  const calculatedDelay = Math.min(text.length * typingSpeed * 100, 3000); // Max 3 seconds
  return baseDelay + calculatedDelay;
};

export const formatMessageForDisplay = (message) => {
  if (typeof message === 'string') {
    return { text: message, type: 'text' };
  }
  
  return {
    text: message.text || message.message || '',
    type: message.type || 'text',
    quickReplies: message.quickReplies || [],
    buttons: message.buttons || [],
    metadata: message.metadata || {}
  };
};
