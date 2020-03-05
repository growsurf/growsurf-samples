import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleGrowSurfReady = this.handleGrowSurfReady.bind(this);
  }

  /**
   * NOTE: Perform any async operations here
   * e.g. fetch user information from an API or generate the
   * hash to automatically authenticate your
   * users with GrowSurf.
   *
   * For now we'll just return an object
   *
   * See: https://docs.growsurf.com/getting-started/participant-auto-authentication
   */
  async getAuthInfo() {
    return {
      email: '<PARTICIPANT_EMAIL>',
      hash: '<PARTICIPANT_HASH>'
    };
  };

  async autoAuthParticipant() {
    const authInfo = await this.getAuthInfo();
    window.growsurf.init(authInfo);
  }

  insertGrowsurfScript() {
    const script = document.createElement('script');
    script.src = 'https://growsurf.com/growsurf.js?v=2.0.0';
    script.setAttribute('grsf-campaign', '<CAMPAIGN_ID>');
    script.async = true;
    document.head.appendChild(script);
  }

  async handleGrowSurfReady() {
    // remove our listener
    window.removeEventListener('grsfReady', this.handleGrowSurfReady, false);
    // auto authenticate the participant
    await this.autoAuthParticipant();
  }

  componentDidMount () {
    if (!window.growsurf) {
      // insert the GrowSurf script
      this.insertGrowsurfScript();
      // Listen and wait for the Growsurf Universal Code to initialize
      window.addEventListener('grsfReady', this.handleGrowSurfReady);
    } else {
      // Authorize authenticate your participant (Optional)
      this.handleGrowSurfReady();
    }
  }

  render() {
    return (
      <div style={{ margin: 'auto', width: '400px' }}>
        <div className='App'>REACT + GROWSURF</div>
        <div data-grsf-block-form></div>
      </div>
    ) 
  }
}

export default App;
