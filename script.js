/**
 * 
 * @authors David Adewoyin (david.adewoyin@baruchmail.cuny.edu)
 * @date    2016-01-20 16:23:19
 */

/* .height() function - The height() method sets or returns the height of the selected elements.

When this method is used to return height, it returns the height of the FIRST matched element.

When this method is used to set height, it sets the height of ALL matched elements. 

Some other related, good functions to know:

width() - Sets or returns the width of an element
innerWidth() - Returns the width of an element (includes padding)
innerHeight() - Returns the height of an element (includes padding)
outerWidth() - Returns the width of an element (includes padding and border)
outerHeight() - Returns the height of an element (includes padding and border)

*/

// Get the height of the header and subtract it from the rest of the page
	var windowHeight = $(window).height();
	var headerHeight = $("#header").height();
	var codeContainerHeight = windowHeight - headerHeight;

	$(".codeContainer").height(codeContainerHeight + "px");

	$(".toggle").click(function() {

/* .toggleClass() function - The toggleClass() method toggles between adding and removing one or more class names from the selected elements.

This method checks each element for the specified class names. The class names are added if missing, and removed if already set - This creates a toggle effect.
*/

		$(this).toggleClass("selected");

		var activeDiv = $(this).html();

/* The toggle() method toggles between hide() and show() for the selected elements.

This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible - This creates a toggle effect.

Note: Hidden elements will not be displayed at all (no longer affects the layout of the page).

Tip: This method can also be used to toggle between custom functions.
*/

		$("#"+activeDiv+"Container").toggle();

/* The filter() method returns elements that match a certain criteria.

This method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned.

This method is often used to narrow down the search for an element in a group of selected elements.

Tip: The filter() method is the opposite of the not() method.
*/

		var showingDivs = $(".codeContainer").filter(function () {

		return($(this).css("display") != "none");

		// This function will return true if the display of this particular div is NOT set to none

		}).length;

		var width = 100/showingDivs;

		$(".codeContainer").width(width + "%");

	});

$("#runButton").click(function () {

	// Change the html in the html tag in the contents of the iframe to "test"

	$("#resultFrame").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());

	// document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());

});
