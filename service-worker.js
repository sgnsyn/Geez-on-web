chrome.runtime.onInstalled.addListener(initialization);

const initialConfigs = {
  state: true,
  theme: "system",
  keyboard: "GA",
  shortcut: {
    mainKey: "CTRL",
    secondaryKey: "x",
  },
};

async function initialization() {
  await chrome.storage.local.set(initialConfigs);
}

async function getConfigs() {
  const configs = await chrome.storage.local.get([
    "theme",
    "state",
    "keyboard",
    "shortcut",
  ]);
  if (!configs) {
    return initialConfigs;
  }
  return configs;
}

async function setConfig(val) {
  await chrome.storage.local.set(val);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action == "set") {
    setConfig(message.data);
  }

  if (message.action == "get") {
    console.log(message.action);
    getConfigs().then((configs) => {
      sendResponse(configs);
    });
    return true;
  }

  if (message?.for == "content_script") {
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(function (tab) {
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
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(function (tab) {
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
