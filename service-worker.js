chrome.runtime.onInstalled.addListener(initialization)

const initialConfigs= {
    state :  true,
    theme : "system",
    keyboard : "GA",
    shortcut : {
        mainKey : "CTRL",
        secondaryKey :"x"
    }
}

async function initialization(){
    await chrome.storage.local.set(initialConfigs)
}

async function getConfigs(){
    const configs = await chrome.storage.local.get(["theme", "state", "keyboard", "shortcut"]);
    if (!configs){
        return initialConfigs
    }
    return configs
}

async function setConfig(val){
    await chrome.storage.local.set(val)
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if (message.action == "set"){
        setConfig(message.data)
    }
    
    if (message.action == "get"){
        console.log(message.action)
        getConfigs().then( configs =>{
            sendResponse(configs)
        })
        return true
    }
});

