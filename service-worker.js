import { loadData } from "./util/js/local-storage.js";

chrome.runtime.onInstalled.addListener(initialization);

const initialConfigs = {
  state: true,
  theme: "system",
  keyboard: "GA",
  pracitceKeyboard: "GA",
  awpm: 0,
  practices: 0,
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

function attachHandler(state) {
  let text = "dis";
  if (state) {
    text = "en";
  }
  console.log(text, "text is ");
  chrome.action.setIcon({
    path: {
      16: `/assets/ext-icons/${text}_16.png`,
      32: `/assets/ext-icons/${text}_32.png`,
      48: `/assets/ext-icons/${text}_48.png`,
      128: `/assets/ext-icons/${text}_128.png`,
    },
  });
}

async function init() {
  const { state } = await loadData(["state"]);
  attachHandler(state);
}

init();
