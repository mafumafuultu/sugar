/**
 * author: mafumafuultu
 * license: MIT
 */

const select = {
	id: id => document.getElementById(id),
	cls: cls => document.getElementsByClassName(cls),
	q: q => document.querySelector(q),
	qq: q => document.querySelectorAll(q)
};

const head = document.head;
const body = document.body;

/**
 * 
 * @param {String} n tagname
 */
const create = n => document.createElement(n);
const append = (e, ...v) => (e.append(...v), e);
const setAttr = (e, v) => (e.setAttribute(...v), e);

const attr_parse = {
	'#' : v => ['id', v.replace('#', '')],
	'.' : v => ['class', v.replace('.', '')],
	'[' : v => v.replace(/[\[\]]/g, '').split(/=/),
	':' : v => [v.replace(':', ''), v.replace(':', '')]
};

/**
 * 
 * @param {String} s 
 */
const attr = s => s.replace(/[\s()\]]/g, '').split(/\b(?=[.#:\[])/).reduce((a,v) => (attr_parse[v[0]] ? a.push(attr_parse[v[0]](v)) : 0, a), []);
/**
 * 
 * @param {*} v 
 */
const is_emp = v => v == null;
/**
 * 
 * @param {Element} v
 * @param {Function} f
 * @param {any} els
 */
const req_obj = (v, f, els = {}) => is_emp(v) ? els : f(v);

const style = {
	add : (id, s) => head.append(node('style', `#${id}`, s)),
	rep : (id, s) => select.id(id).textContent = s,
	rm : id => req_obj(select.q(`style#${id}`), v => v.remove(), {}),
};
/**
 * 
 * @param {String} n tagName
 * @param {String|Object} a attribute
 * @param {...any} c text, node
 * @returns {Element} node
 */
const node = (n, a = '', ...c) => append((typeof a === 'string' ? attr(a) : Object.entries(a)).reduce(setAttr, create(n)), ...c);

export {head, body, node, create, select, attr, style};
