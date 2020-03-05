# GrowSurf + Vue.js

## Introduction

The repository contains some sample code to demonstrate the use of Vue.js and GrowSurf. In the example, GrowSurf
is initialized and displayed within the view.

## Quickstart

Install the dependencies:

```
npm i
```

Replace the following snippet of code within the `index.html` header with the snippet of code provided to you within
the last step of the GrowSurf campaign editor OR update the `<CAMPAIGN_ID>` variable with the id of your campaign.

```
(function(g,r,s,f){g.growsurf={};g.grsfSettings={campaignId:"<CAMPAIGN_ID>",version:"2.0.0"};s=r.getElementsByTagName("head")[0];f=r.createElement("script");f.async=1;f.src="https://growsurf.com/growsurf.js"+"?v="+g.grsfSettings.version;f.setAttribute("grsf-campaign", g.grsfSettings.campaignId);!g.grsfInit?s.appendChild(f):"";})(window,document);

```

Run the application:

```
npm start
```

Open your browser:

[http://127.0.0.1:8081](http://127.0.0.1:8081)


## Author
@demelvin
