'use strict';

export default class Component {

	_childs = [];
	props = {};
	_actions = {};

	constructor({ selector, props = {} }) {
		this.element = document.querySelector(selector);
		this.setProps(props)
	}

	/**
	 * View component
	 * @returns {string}
	 */
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

	/**
	 * re-init component
	 */
	drawing() {
		this.beforeRender();
		this.element.innerHTML = this.render();
		this.afterRender();
	}

	beforeRender() { }

	afterRender() { }

	setAction({ nameEvent, nameAction, selector, detailCallback, bubbles = true }) {
		this.on(nameEvent, selector, (event) => {
			this.element.dispatchEvent(new CustomEvent(nameAction, { bubbles, detail: (detailCallback && detailCallback(event) || null) }));
		})
	}

	/**
	 * find end return child component.
	 * if component not fonund return null
	 * @param {Component} soughtValue - component searched child
	 * @returns {(Component|null)} 
	 */
	getChild(soughtValue) {
		return this._childs.find(child => child instanceof soughtValue) || null;
	}

	/**
	 * @param {Object} obj - Key and value obj set in this props
	 */
	setProps(obj) {
		for (let key in obj) {
			this.props[key] = obj[key];
		}
		
		this.drawing();
	}

	/**
	 * Contecting child element to this component
	 * @param {Object} child - Contecting child element
	 * @param {string} child.selector - Selector
	 * @param {Component} child.component - Child element type
	 * @param {Object} child.props - Default props
	 */
	connect({ selector, component, props }) {
		if (!this.element.querySelector(selector)) return;
		this._childs.push(new component({ selector, props }));
	}

	hide() {
		this.element.style.display = 'none';
	}

	show() {
		this.element.style.display = 'block';
	}
}