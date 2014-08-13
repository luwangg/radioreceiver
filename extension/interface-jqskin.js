//function constructSkin(interface) {
$(function() {

	// Hide original interface
	$('.top').css({ display: 'none'});
	$('.bottom').css({ display: 'none'});


	$('<img />').panel({
		id: 'panel',
		image: 'images/panel.png',
		left: 0,
		top: 0
	}).appendTo('#draw');


	var freq_base = 82.5;
	var freq_detail = 0;
	var freq = (freq_base + freq_detail).toFixed(2);

	// Frequency display
	var num = $('<div>')
		.css({
			position: 'absolute',
			left: 230,
			top: 120,
			fontSize: 25,
			color: '#aaaaaa'
		})
		.text(freq)
		.appendTo('#draw');

	var meter = $('<img />').knob({
		id: 'meter', image: 'images/meter.png',
		left: 50 + 276, top: 90 + 15, width: 146, height: 95, value: 50, sense: 500, flames: 31,
		change: (function() {
		})
	}).appendTo('#draw');

	// Center Dial
	$('<img />').knob({
		id: 'dial1', image: 'images/dial1.png',
		left: 50 + 240, top: 90 + 100, width: 220, height: 220, value: 50, sense: 2000, flames: 61,
		change: (function() {
			var val = $('#dial1').knob('value');	// 0 .. 100
			freq_detail = (val - 50) / 50 * 1.5;	// -1.5 .. +1.5
			freq = (freq_base + freq_detail).toFixed(2);
			num.text(freq);
			radio.setFrequency(freq * 1000000);
		})
	}).appendTo('#draw');

	// Right Dial
	$('<img />').knob({
		id: 'dial2', image: 'images/dial2.png',
		left: 50 + 460, top: 90 - 10, width: 150, height: 150, value: 50, sense: 1000, flames: 31,
		change: (function() {
			var val = $('#dial2').knob('value');
			meter.knob('value', val);
			freq_base = 78 + 22 * val / 100;
			freq = (freq_base + freq_detail).toFixed(2);
			num.text(freq);
			radio.setFrequency(freq * 1000000);
		})
	}).appendTo('#draw');


	// LED
	$('<img />').switch({
		id: 'led',
		image: 'images/led_big_white.png',
		left: 33,
		top: 416,
		width: 32,
		height: 32,
		value: 0,
		clickable: false
	}).appendTo('#draw');

	// Toggle Switch
	$('<img />').switch({
		id: 'sw',
		image: 'images/switch.png',
		left: 170,
		top: 350,
		width: 30,
		height: 45,
		value: 0,
		clickable: true,
		click: (function() {
			$('#led').switch("value", $(this).switch("value"));
			if ($(this).switch("value")) 
				radio.start();
			else
				radio.stop();
		})
	}).appendTo('#draw');
	
	// Volume
	$('<img />').knob({
		id: 'knob37', image: 'images/knob2.png',
		left: 40, top: 300, width: 110, height: 110, value: 40,
		change: (function() {
			var v = $(this).knob("value") / 100;
			radio.setVolume(v);
		})
	}).appendTo('#draw');

	// Band Switch
	$('<img />').knob({
		id: 'knob25', image: 'images/knob_white_big_mid.png',
		left: 530, top: 290, width: 60, height: 60, value: 50
	}).appendTo('#draw');

});


