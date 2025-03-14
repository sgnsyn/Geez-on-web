function setConfig(data){
      chrome.runtime.sendMessage({ action: "set", data });
}

async function getConfigs(){
    return new Promise((resolve, reject)=>{
        chrome.runtime.sendMessage({action:"get"},(response)=>{
            resolve(response)
        })
    })
}

export {setConfig, getConfigs}
