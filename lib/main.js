var data = require("sdk/self").data;
var tabs = require('sdk/tabs');
var frame = require("sdk/panel").Panel({
	width: 500,
	height: 500
});

var button = require("sdk/ui/button/action").ActionButton({
	id: "add2weeklyjs",
	label: "Add2WeeklyJS",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});

function handleClick(state) {
	frame.contentURL = "http://braziljs.github.io/add2weekly/mdl-add2weekly.html?t=" + escape(tabs.activeTab.title) + "&l=" + escape(tabs.activeTab.url.replace(/http:\/\/|https:\/\//i, ''));
	frame.show({
		position: button
    });
}