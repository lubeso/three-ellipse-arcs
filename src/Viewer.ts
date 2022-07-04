import { Renderable } from './Renderable.js';
import { Ellipse } from './Ellipse.js';

import { SVG } from './utils.js'

/**
 * Type representing viewer configuration settings.
 */
export interface ViewerConfig {
    /**
     * Viewer width.
     */
    readonly width: number;
    /**
     * Viewer height.
     */
    readonly height: number;
}

/**
 * Interactive widget for visualizing three-ellipses-arcs.
 */
export class Viewer extends Renderable<SVGSVGElement> {

    /**
     * Viewer configuration settings
     */
    private readonly config: ViewerConfig;
    /**
     * Ellipses to be rendered.
     */
    private readonly ellipses: Ellipse[] = [];

    /**
     * Create a new Viewer instance.
     * @param config viewer configuration
     * @param pointer corresponding DOM element
     */
    protected constructor (
        config: ViewerConfig,
        pointer: SVGSVGElement
    ) {
        super(pointer);
        this.config = Object.assign({}, config);
    }

    /**
     * Return the `i`-th ellipse.
     * @param i numerical index of desired ellipse.
     */
    public getEllipse(i: number): Ellipse {
        if (i >= 0 && i < this.ellipses.length) {
            return this.ellipses[i];
        } else {
            const message = i < 0 ?
                `Index cannot be negative` :
                `Index cannot be greater than ${this.ellipses.length}`;
            throw new Error(message);
        }
    }

    /**
     * Add a new ellipse.
     * @param ellipse the ellipse to add.
     */
    public addEllipse(ellipse: Ellipse): Viewer {
        this.ellipses.push(ellipse);
        return this;
    }

    public get width(): number {
        return this.config.width;
    }

    public get height(): number {
        return this.config.height;
    }

    /**
     * Create a new viewer.
     * @param config viewer configuration.
     */
    public static make(config: ViewerConfig): Viewer {
        const pointer = SVG.createElement('svg', {
            attributes: {
                viewBox: `0 0 ${config.width} ${config.height}`,
            }
        });
        return new Viewer(config, pointer)
    }

}
