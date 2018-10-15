require('nightwatch-cucumber')({
	cucumberArgs: [
		'--require', 'step_definitions',
		'features'
	],
});


module.exports = {
	custom_assertions_path: '',
	live_output: false,
	disable_colors: false,
	globals_path: 'globals',
	page_objects_path: 'objects',

	test_settings: {
		default: {
			launch_url: 'http://google.com',
			default_path_prefix: '',
			selenium_port: 9515,
			selenium_host: 'localhost',

			start_driver: true,
			log_file: './logs/driver.log',
			chrome_driver: '/usr/local/bin/chromedriver',

			desiredCapabilities: {
				browserName: 'chrome',
				acceptSslCerts: true,
				javascriptEnabled: true,
			},
		},
	},
};
