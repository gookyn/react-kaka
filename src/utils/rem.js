(function(doc, win) {
	document.addEventListener('DOMContentLoaded', function() {
		if(window.FastClick) window.FastClick.attach(document.body);
	}, false);

	var _root = doc.documentElement,
		resizeEvent = 'orientationchange' in win ? 'orientationchange' : 'resize',
		resizeCallback = function() {
			var clientWidth = _root.clientWidth;
			_root.style.fontSize = clientWidth / 37.5 + 'px';
			document.body && (document.body.style.fontSize = 1.4 + 'rem');
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvent, resizeCallback, false);
	doc.addEventListener('DOMContentLoaded', resizeCallback, false);
})(document, window);