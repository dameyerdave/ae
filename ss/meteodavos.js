var page = require('webpage').create();
//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 1024, height: 768 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 180, left: 160, width: 670, height: 600 };
//the rest of the code is the same as the previous example
phantom.addCookie({
  name: 'privacysettings',
  value: '%5B%22required%22,%22ads%22,%22analytics%22%5D',
  domain: 'www.meteoblue.com'
});
page.open('https://www.meteoblue.com/de/wetter/vorhersage/woche/davos_schweiz_2661039', function() {
    page.render('/var/www/html/ae/ss/meteodavos.png');
    phantom.exit();
});
