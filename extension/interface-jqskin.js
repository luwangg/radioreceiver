$(function() {
	$('<img />').panel({
		id: 'panel',
		image: 'images/panel.png',
		left: 0,
		top: 0
	}).appendTo('#draw');

	// LED
	$('<img />').switch({
		id: 'led',
		image: 'images/led_big_white.png',
		left: 352,
		top: 75,
		width: 32,
		height: 32,
		value: 0,
		clickable: false
	}).appendTo('#draw');

	// Toggle Switch
	$('<img />').switch({
		id: 'sw',
		image: 'images/toggle_sw.png',
		left: 190,
		top: 370,
		width: 32,
		height: 32,
		value: 0,
		clickable: true,
		click: (function() {
			$('#led').switch("value", $(this).switch("value"));
		})
	}).appendTo('#draw');
	
	// Volume
	$('<img />').knob({
		id: 'knob37', image: 'images/knob_white_big_mid.png',
		left: 80, top: 320, width: 60, height: 60, value: 40,
		change: (function() {var v = Math.floor($(this).knob("value") / 51); $('#led04').switch("value", v); })
	}).appendTo('#draw');

	// Band Switch
	$('<img />').knob({
		id: 'knob25', image: 'images/knob_white_big_mid.png',
		left: 550, top: 310, width: 60, height: 60, value: 50
	}).appendTo('#draw');

});


