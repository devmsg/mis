import $ from 'jquery'
const domain         = 'http://ao.anyi.hk:1314/api';
const XHRList        = {};
const setTimeoutList = {};

function postXHREvent(name, path, postData) {
	XHRList[name] && XHRList[name].abort();

	return XHRList[name] = $.post(path, postData);
}

function getXHREvent(name, path, postData) {
	XHRList[name] && XHRList[name].abort();

	return XHRList[name] = $.get(path, postData);
}

export function postLoginXHR() {
	const path = domain + '/admin/public/login';

	return postXHREvent('postLoginXHR', path);
}