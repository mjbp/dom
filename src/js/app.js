import { PATHS } from './constants';
import Promise from 'promise-polyfill';
import Load from 'storm-load';

const onInit = [];

{
	window.Promise = window.Promise ? window.Promise : Promise;

	if(!Object.assign || !('classList' in document.createElement('_'))) 
		Load(`${PATHS.JS_ASYNC}/polyfills.min.js`)
			.then(() => onInit.map(f => f()));
	else onInit.map(fn => fn());

	onLoad.length && window.addEventListener('load', [].map.bind(onLoad, f => f()));

	//if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js');
}