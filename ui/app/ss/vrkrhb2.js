var page = require('webpage').create();
page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};
//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 1024, height: 768 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 350, left: 0, width: 680, height:550 };
//the rest of the code is the same as the previous example
page.open('https://www.rhb.ch/de/betriebslage', function() {
    page.onCallback = function(data) {
	if (data.exit) {
    		page.render('/usr/share/nginx/html/ss/vrkrhbdesc.png');
        	phantom.exit();
        }
    };
    page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
    	page.evaluate(function() {
		//$('.viewmode_map').click();
		window.callPhantom({ exit: true });
    	});
    });
});
