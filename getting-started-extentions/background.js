const color = '#3aa757';
const apiKey = "Test";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ apiKey });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
