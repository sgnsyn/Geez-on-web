const initPath = "/keyman/init.js";
const keymanPath = "/keyman/keymanweb.js";

function getElt(path) {
  const url = chrome.runtime.getURL(path);
  const script = document.createElement("script");
  script.src = url;
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

chrome.runtime.onMessage.addListener((message) => {
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
});

async function setInitKey() {
  const { keyboard } = await chrome.storage.local.get(["keyboard"]);
  window.postMessage({ type: "chi", val: keyboard }, "*");
}

setTimeout(setInitKey, 700);
