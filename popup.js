document.getElementById("copyBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const match = tab.url.match(/(tt\d{7,8})/);
  const status = document.getElementById("status");

  if (match) {
    const imdbId = match[1];
    await navigator.clipboard.writeText(imdbId);
    status.textContent = `Copied: ${imdbId}`;

    // Send message to background to show badge
    chrome.runtime.sendMessage({ type: "copied" });
  } else {
    status.textContent = "No IMDB ID found in URL.";
  }
});
