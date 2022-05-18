var page = require('webpage').create();
//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 900, height: 2000 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 1310, left: 205, width: 750, height: 850 };
// The user agent
// phantom.set('settings.userAgent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9');
//the rest of the code is the same as the previous example
phantom.addCookie({
  name: 'privacysettings',
  value: '%5B%22required%22,%22analytics%22%5D',
  domain: 'www.meteoblue.com'
});
phantom.addCookie({
  name: 'darkmode',
  value: false,
  domain: 'www.meteoblue.com'
})
page.open('https://www.meteoblue.com/de/wetter/vorhersage/woche/thusis_schweiz_2658371', function() {
    page.render('/usr/share/nginx/html/ss/meteothusis.png');
    phantom.exit();
});
