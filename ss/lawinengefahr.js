var page = require('webpage').create();
//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 2048, height: 768 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 340, left: 715, width: 800, height: 570 };
//the rest of the code is the same as the previous example
page.open('https://www.slf.ch/de/lawinenbulletin-und-schneesituation.html#lawinengefahr', function() {
    page.render('/var/www/html/ae/ss/lawinengefahr.png');
    phantom.exit();
});
