define([
	"../var/support"
], function( support ) {

var input,
	div = document.createElement( "div" );

support.focusinBubbles = "onfocusin" in window;

		//check to see if the browser sucks
	div.innerHTML = "<input type='checkbox' disabled/>";
	input = div.getElementsByTagName("input")[ 0 ];
	input.disabled = false;
	input.click();

	support.persistDynamicDisabledState = !input.checked;

	div = null;

return support;

});
