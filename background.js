chrome.runtime.onInstalled.addListener(() => {
  // Set badge background color
  chrome.action.setBadgeBackgroundColor({ color: "#f5c518" });
});

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "copied") {
    chrome.action.setBadgeText({ text: "✓" });
    setTimeout(() => chrome.action.setBadgeText({ text: "" }), 2000);
  }
});
