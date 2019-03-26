$("body").on("click", ".filter", function (e) {
	e.preventDefault();

	console.log("Hello, world!");

	const $this_filter = $(this);

	const state_name = $this_filter.val();

	$(".state.active").removeClass("active");
	$("." + state_name).addClass("active");

	console.log("We made it!");
	console.log("state name" + state_name)


});