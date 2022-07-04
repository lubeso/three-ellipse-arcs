import { Ellipse } from '../src/Ellipse.js';
import type { ViewerConfig } from '../src/Viewer.js';
import { Viewer } from '../src/Viewer.js';
import { expect } from '@esm-bundle/chai';

const TEST_CONFIG: ViewerConfig = {
    width: 100,
    height: 200,
};

describe('Viewer', () => {
    /** Testing strategy
     * returns:
     *  - expected output
     */
    describe('factory method', () => {
        it('returns: expected output', () => {
            const viewer = Viewer.make(TEST_CONFIG);
            const tests = [
                { actual: viewer.width, expected: TEST_CONFIG.width },
                { actual: viewer.height, expected: TEST_CONFIG.height },
            ];
            for (const { actual, expected } of tests) {
                expect(actual).to.be.equal(expected);
            }
        });
    });
    /** Testing strategy
     * this:
     *  - has =0 ellipses, has >0 ellipses
     */
    describe('addEllipse', () => {
        const viewer = Viewer.make(TEST_CONFIG);
        it('this: has =0 ellipses', () => {
            const ellipse = Ellipse.make({
                center: { x: 0, y: 0 },
                rx: 1,
                ry: 2,
                rotation: 0,
            });
            viewer.addEllipse(ellipse);
            expect(viewer.getEllipse(0)).to.be.equal(ellipse);
        });
        it('this: has >0 ellipses', () => {
            const ellipse = Ellipse.make({
                center: { x: -1, y: 1 },
                rx: 2,
                ry: 1,
                rotation: 45,
            });
            viewer.addEllipse(ellipse);
            expect(viewer.getEllipse(1)).to.be.equal(ellipse);
        });
    });
    /** Testing strategy
     * i:
     *  - within bounds, out of bounds
     */
    describe('getEllipse', () => {
        const ellipse = Ellipse.make({
            center: { x: -1, y: 1 },
            rx: 2,
            ry: 1,
            rotation: 45,
        });
        const viewer = Viewer
            .make(TEST_CONFIG)
            .addEllipse(ellipse);
        it('i: within bounds', () => {
            expect(viewer.getEllipse(0)).to.be.equal(ellipse);
        });
        it('i: out of bounds', () => {
            expect(viewer.getEllipse(1)).to.throw();
        });
    });
});