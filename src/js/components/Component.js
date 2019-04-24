'use strict';

export default class Component {

	_childs = [];
	state = {};

	constructor({ selector, props = {} }) {
		this.element = document.querySelector(selector);
		this.props = props
		this.drawing();
	}

	render() {
		console.error('Overwrite function "render"');
		return '';
	}

	on(eventName, selector, callback) {
		this.element.addEventListener(eventName, (event) => {
			if (!event.target.closest(selector)) return;
			callback(event);
		});
	}

	drawing() {
		this.beforeRender();
		this.element.innerHTML = this.render();
		this.afterRender();
	}

	beforeRender() { }

	afterRender() { }

	getChild(soughtValue) {
		return this._childs.find(child => child instanceof soughtValue) || null;
	}

	setState(state) {
		for (let key in state) {
			this.state[key] = state[key];
		}
	}

	connect({ selector, component, props }) {
		if (!this.element.querySelector(selector)) return;
		this._childs.push(new component({ selector, props }));
	}
}