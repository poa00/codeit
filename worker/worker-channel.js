
// client-side
// client/service worker communication channel


// setup worker channel
function setupWorkerChannel() {

  // create broadcast channel
  const broadcast = new BroadcastChannel('worker-channel');

  // add message listener
  broadcast.onmessage = (event) => {
    
    console.log(event);
    /*
    if (event.data.type === 'json') {
      
      console.log(JSON.parse(event.data.payload));
      
    } else {
      
      console.log(event.data.payload);
      
    }*/
    
  };

  // send request
  broadcast.postMessage({
    type: 'hello!'
  });
  
}


// setup worker channel
window.addEventListener('load', () => {
  setupWorkerChannel();
});

