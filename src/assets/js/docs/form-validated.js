var APP = APP || {};
(function ($) {
	'use strict';

	APP.validated = {
		init: function () {
			var forms = document.querySelectorAll('.needs-validation')

			// Loop over them and prevent submission
			Array.prototype.slice.call(forms)
				.forEach(function (form) {
					form.addEventListener('submit', function (event) {
						if (!form.checkValidity()) {
							event.preventDefault();
							event.stopPropagation();
						}

						form.classList.add('was-validated')
					}, false)
				})
		},
	};

	$(document).ready(function () {
		APP.validated.init();
	})
})(jQuery);
