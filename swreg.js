if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serwo.js')
    .then((register) => {
      register.addEventListener('update found', () => {
        var installingsw = register.installing;
        console.log("serviceWorker is being installed", installingsw);
      })
    })
    .catch((e) => {
      console.log("error" + e);
    })
} else {
  console.log("Browser not supporting serviceWorker");
}
