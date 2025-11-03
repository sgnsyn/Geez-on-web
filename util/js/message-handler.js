async function sendMessage(message) {
  chrome.runtime.sendMessage(message);
}
async function messageListener(msg) {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === msg.action) {
      msg.callback();
    }
  });
}

export { sendMessage, messageListener };
