var page = require('webpage').create();
//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 900, height: 2000 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 1310, left: 205, width: 750, height: 850 };
//the rest of the code is the same as the previous example
phantom.addCookie({
  name: 'privacysettings',
  value: '%5B%22required%22,%22ads%22,%22analytics%22%5D',
  domain: 'www.meteoblue.com'
});
phantom.addCookie({
  name: 'darkmode',
  value: false,
  domain: 'www.meteoblue.com'
})
page.open('https://www.meteoblue.com/de/wetter/vorhersage/woche/sankt-moritz_schweiz_2658813', function() {
    page.render('/usr/share/nginx/html/ss/meteostmoritz.png');
    phantom.exit();
});
