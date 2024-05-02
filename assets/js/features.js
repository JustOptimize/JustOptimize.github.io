// Funny little feature that allows you to redirect to some URIs by adding ?run=URI

// Thanks Endermanch for ms-cxh:// links, check his blog https://enderman.ch/blog/the-windows-oobe
const REDIRECT_WHITELIST = [
	'calculator://',
	'ms-contact-support://',
	'ms-cxh://',
	'ms-cxh://setaddlocalonly',
	'ms-cxh://setaddnewuser',
	'ms-cxh://aadpinresetauth',
	'ms-cxh://nthentngconly',
	'ms-cxh://aadwebauth',
	'ms-cxh://nth',
	'ms-cxh://frx/inclusive',
	'ms-cxh://wlt',
	'ms-cxh://wltu',
];

const run = new URLSearchParams(window.location.search).get('run');
if (run && REDIRECT_WHITELIST.includes(run)) {
	window.location = run;
}
