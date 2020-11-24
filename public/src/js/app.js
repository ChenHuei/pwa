let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  deferredPrompt = event;

  return false;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(
    (registration) => {
      console.log("Service worker registration succeeded");
    },
    (error) => {
      console.log("Service worker registration failed");
    }
  );
} else {
  console.log("Service workers are not supported.");
}
