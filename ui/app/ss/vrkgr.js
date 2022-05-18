var page = require('webpage').create();
//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 1024, height: 768 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 280, left: 30, width: 980, height: 740 };
//the rest of the code is the same as the previous example
page.open('http://www.strassen.gr.ch/sites/strassenzustand/karte.html', function() {
    page.render('/usr/share/nginx/html/ss/vrkgr.png');
    phantom.exit();
});
