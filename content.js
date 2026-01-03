// import { loadData } from "./util/js/local-storage";

const initPath = "/keyman/init.js";
const keymanPath = "/keyman/keymanweb.js";

// Create a Trusted Types policy
const trustedPolicy = trustedTypes.createPolicy("keyman-extension-policy", {
  createScriptURL: (url) => url,
});

function getElt(path) {
  const url = chrome.runtime.getURL(path);
  const script = document.createElement("script");
  script.src = trustedPolicy.createScriptURL(url);
  return script;
}

let key = getElt(keymanPath);
let init = getElt(initPath);

document.body.appendChild(key);
setTimeout(() => {
  document.body.appendChild(init);
}, 500);

setTimeout(async () => {
  window.postMessage({ type: "init" }, "*");
  const { state } = await chrome.storage.local.get(["state"]);
  if (!state) {
    setTimeout(() => {
      window.postMessage({ type: "rm" }, "*");
    }, 1500);
  }
}, 1000);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.for == "sc") {
    if (message.data) {
      window.postMessage({ type: "add" }, "*");
    }
    if (!message.data) {
      window.postMessage({ type: "rm" }, "*");
    }
  }
  if (message.for == "ch") {
    window.postMessage({ type: "ch", val: message.value }, "*");
  }
  if (message.action === "ping") {
    sendResponse({ response: "pong" });
    return true;
  }
});

async function setInitKey() {
  // const { keyboard } = await loadData(["keyboard"]);
  let keyboard = "GA";
  window.postMessage({ type: "chi", val: keyboard }, "*");
}

setTimeout(setInitKey, 700);
