export function saveData(data) {
  chrome.storage.local.set(data);
}

export async function loadData(keys) {
  const data = await chrome.storage.local.get(keys);
  return data;
}
