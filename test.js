import test from 'ava';
import jsdom from 'jsdom';
import ready from './raf-ready';

global.document = jsdom.jsdom();
global.window = document.defaultView;

test('check if dom is ready using readyState', t => {
	ready(() => {
		const el = document.createElement('p');
		el.id = 'unicorn';
		document.body.appendChild(el);
	});
});
