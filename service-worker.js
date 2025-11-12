chrome.runtime.onInstalled.addListener(initialization);

const initialConfigs = {
  state: true,
  theme: "system",
  keyboard: "GA",
};

async function initialization() {
  await chrome.storage.local.set(initialConfigs);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.for == "content_script") {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            for: "sc",
            data: message.data,
          },
          (response) => {
            if (chrome.runtime.lastError) {
              console.log("some tab didn't accept it");
            }
          },
        );
      });
    });
  }
  if (message?.for == "ch") {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            for: "ch",
            value: message.value,
          },
          (response) => {
            if (chrome.runtime.lastError) {
              console.log("some tab didn't accept it");
            }
          },
        );
      });
    });
  }
});
