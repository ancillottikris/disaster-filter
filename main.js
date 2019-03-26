$("body").on("change", "input[type='checkbox']", function (e) {
	let selection = [];

	$("input[type='checkbox']:checked").each(function () {
		const $this_checkbox = $(this),
			id = $this_checkbox.attr("id");

		selection.push(`.${id}`);
	});

	selection = selection.join(",");

	console.log(selection);

	$(".state.active").removeClass("active");
	$(selection).addClass("active");

	console.log("We made it!");
	// console.log("state name" + state_name)
});


$("body").on("change", "#state", function () {
	console.log("Change on all checkbox");
	if ($("#state:checked").length > 0) {
		console.log("Checkbox is checked");
		$("input[type='checkbox']:not(#state):checked").each(function () {
			$(this).prop("checked", false);
		});
		// $("input[type='checkbox']:not(#state):checked").trigger("change");
		console.log("Unchecking all other checkboxes");
	}
});

$("body").on("change", "input[type='checkbox']:not(#state)", function () {
	console.log("Change on other checkboxes");
	if ($("input[type='checkbox']:not(#state):checked").length > 0) {
		console.log("There are other checkboxes checked");
		$("#state:checked").prop("checked", false).trigger("change");
		console.log("Removed check from all");
	}
});