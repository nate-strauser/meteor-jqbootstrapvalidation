Package.describe({
	summary: "Latest version jqBootstrapValidation"
});

Package.on_use(function (api){
	api.use('jquery', 'client');
	api.use('bootstrap', 'client');
	api.add_files('lib/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.6.js', 'client');
});