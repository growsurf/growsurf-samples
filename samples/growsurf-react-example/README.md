# GrowSurf + React

## Introduction

The repository contains some sample code to demonstrate the use of React and GrowSurf. In the example, GrowSurf
is initialized within a component asynchronously and [auto authenticates a participant](https://docs.growsurf.com/getting-started/participant-auto-authentication).

## Quickstart

Install the dependencies:

```
npm i
```

Update the following variables within the `App.js` source code:


**Auth Auth**

In the following snippet of code, replace `<PARTICIPANT_EMAIL>` with the email of an actual participant that exists 
within your campaign and the `<PARTICPANT_HASH>` with the hash generated using your campaigns auto authentication secret key. More
information about how to generate that can be found [here](https://docs.growsurf.com/getting-started/participant-auto-authentication).

```
  async getAuthInfo() {
    return {
      email: '<PARTICIPANT_EMAIL>',
      hash: '<PARTICIPANT_HASH>'
    };
  };
```

This snippet is used to demonstrate GrowSurfs auto authentication feature and should be replaced with an API call to your server. More
information about how to generate that can be found [here](https://docs.growsurf.com/getting-started/participant-auto-authentication)

**Campaign Id**
Replace `<CAMPAIGN_ID>` within the following snippet of code:

```
  insertGrowsurfScript() {
    const script = document.createElement('script');
    script.src = 'https://growsurf.com/growsurf.js?v=2.0.0';
    script.setAttribute('grsf-campaign', '<CAMPAIGN_ID>');
    script.async = true;
    document.head.appendChild(script);
  }

```

Run the application:

```
npm start
```

## Author
@demelvin
