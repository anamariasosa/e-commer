jQuery(document).ready(function($) {
	$('.product__menu_tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
});
