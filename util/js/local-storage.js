const initialConfigs = {
  state: true,
  theme: "system",
  keyboard: "GA",
  pracitceKeyboard: "GA",
  awpm: 0,
  practices: 0,
};

export function saveData(data) {
  chrome.storage.local.set(data);
}

export async function loadData(keys) {
  const data = await chrome.storage.local.get(keys);

  const toSave = {};

  // Create a esult object, which will be a copy of `data`.

  for (const key of keys) {
    if (data[key] === undefined && initialConfigs.hasOwnProperty(key)) {
      const defaultValue = initialConfigs[key];
      data[key] = defaultValue;
      toSave[key] = defaultValue;
    }
  }

  if (Object.keys(toSave).length > 0) {
    saveData(toSave);
  }

  return data;
}
