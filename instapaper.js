(function($) {
	var count = $("#bookmark_list > div").length;
	var updateCount = function() {
		if ($("#content h2 span.count").length == 0) {
			$("#content h2").prepend('<span class="count">' + count + '</span>');
		} else {
			$("#content h2 span.count").text(count);
		}
		document.title = "Instapaper (" + count + ")";
	};
	updateCount();

	$(".deleteButton").bind("click", function() {
		count--;
		updateCount();
		return false;
	});
})(jQuery)
