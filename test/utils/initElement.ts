import { initElement } from '../../src/utils/initElement.js';
import { expect } from '@esm-bundle/chai';

/** Testing strategy:
 * config:
 *  - is empty
 *  - specifies properties
 *  - specifies attributes
 *  - specifies parent
 *  - specifies children
 */
describe('initElement', () => {
    it('config: is empty', () => {
        const p = document.createElement('p');
        initElement(p);
        const actual = p.outerHTML;
        const expected = `<p></p>`;
        expect(actual).to.be.equal(expected);
    });
    it('config: specifies properties', () => {
        const p = document.createElement('p');
        initElement(p, {
            properties: { textContent: 'text' }
        });
        const actual = p.outerHTML;
        const expected = `<p>text</p>`;
        expect(actual).to.be.equal(expected);
    });
    it('config: specifies attributes', () => {
        const p = document.createElement('p');
        initElement(p, {
            attributes: { id: 'test' }
        });
        const actual = p.outerHTML;
        const expected = `<p id="test"></p>`;
        expect(actual).to.be.equal(expected);
    });
    it('config: specifies attributes', () => {
        const parent = document.createElement('div');
        const p = document.createElement('p');
        initElement(p, {
            properties: { textContent: 'text' },
            parent: parent
        });
        const actual = parent.outerHTML;
        const expected = `<div><p>text</p></div>`;
        expect(actual).to.be.equal(expected);
    });
    it('config: specifies attributes', () => {
        const children = [];
        for (let i = 0; i < 5; i++) {
            const p = document.createElement('p');
            children.push(p);
        }
        const div = document.createElement('div');
        initElement(div, { children });
        const actual = div.outerHTML;
        const expected = `<div>${
            children
                .map(p => p.outerHTML)
                .reduce((soFar, current) => soFar + current)
        }</div>`;
        expect(actual).to.be.equal(expected);
    });
});