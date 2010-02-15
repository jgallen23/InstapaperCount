(function($) {
	var count = $("#bookmark_list > div").length;
	var updateCount = function() {
		var countElement = $("#content h2 span.count");
		if (countElement.length == 0) {
			$("#content h2 span:eq(1)").before('<span class="count">(' + count + ')</span>');
		} else {
			countElement.text("("+count+")");
		}
		document.title = "Instapaper (" + count + ")";
	};
	updateCount();

	$(".archiveButton").bind("click", function() {
		count--;
		updateCount();
		return false;
	});
})(jQuery)
