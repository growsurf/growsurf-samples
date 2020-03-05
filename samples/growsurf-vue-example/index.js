const app = new Vue({
  el: '#app',
  data: {
    grsfReady: false
  }
});

const handleGrowSurfReady = () => {
  // Remove our listener
  window.removeEventListener('grsfReady', handleGrowSurfReady);
  // Display the GrowSurf embeddable element
  app.grsfReady = true;
};

// Listen and wait for the Growsurf Universal Code to initialize
window.addEventListener('grsfReady', handleGrowSurfReady);