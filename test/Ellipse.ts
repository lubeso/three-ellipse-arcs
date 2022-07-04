
import type { EllipseConfig } from '../src/Ellipse.js';
import { Ellipse } from '../src/Ellipse.js';
import { expect } from '@esm-bundle/chai';

describe('Ellipse', () => {
    /** Testing strategy
     * returns:
     *  - expected output
     */
    describe('factory method', () => {
        const ellipseConfig: EllipseConfig = {
            center: { x: 0, y: 0 },
            rx: 1,
            ry: 2,
            rotation: 45,
        };
        it('returns: expected output', () => {
            const ellipse = Ellipse.make(ellipseConfig);
            const tests = [
                { actual: ellipse.center, expected: ellipseConfig.center },
                { actual: ellipse.rx, expected: ellipseConfig.rx },
                { actual: ellipse.ry, expected: ellipseConfig.ry }
                { actual: ellipse.rotation, expected: ellipseConfig.rotation },
            ];
            for (const { actual, expected } of tests) {
                expect(actual).to.be.equal(expected);
            }
        });
    });
});