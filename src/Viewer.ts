import {
    SVGElementConfig as RenderConfig,
    SVGElementAttributes,
} from './types.js';
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
export class Viewer<
    A extends SVGElementAttributes,
    P extends Node,
    C extends Node
> extends Renderable<SVGSVGElement> {

    /**
     * Viewer configuration settings
     */
    private readonly viewerConfig: ViewerConfig;
    /**
     * Viewer rendering settings
     */
    private readonly renderConfig: Partial<RenderConfig<SVGSVGElement, A, P, C>>;
    /**
     * Ellipses to be rendered.
     */
    private readonly ellipses: Ellipse<SVGElementAttributes, Node, Node>[] = [];

    /**
     * Create a new Viewer instance.
     * @param viewerConfig viewer configuration
     * @param renderConfig render configuration
     * @param pointer corresponding DOM element
     */
    protected constructor (
        viewerConfig: ViewerConfig,
        renderConfig: Partial<RenderConfig<SVGSVGElement, A, P, C>>,
        pointer: SVGSVGElement
    ) {
        super(pointer);
        this.viewerConfig = Object.assign({}, viewerConfig);
        this.renderConfig = Object.assign({}, renderConfig);
    }

    /**
     * Return the `i`-th ellipse.
     * @param i numerical index of desired ellipse.
     */
    public getEllipse(i: number): Ellipse<SVGElementAttributes, Node, Node> {
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
    public addEllipse(
        ellipse: Ellipse<SVGElementAttributes, Node, Node>
    ): Viewer<A, P, C> {
        this.ellipses.push(ellipse);
        return this;
    }

    public get width(): number {
        return this.viewerConfig.width;
    }

    public get height(): number {
        return this.viewerConfig.height;
    }

    /**
     * Create a new viewer.
     * @param viewerConfig viewer configuration.
     * @param renderConfig render configuration.
     */
    public static make<
        A extends SVGElementAttributes,
        P extends Node,
        C extends Node
    >(
        viewerConfig: ViewerConfig,
        renderConfig: Partial<RenderConfig<SVGSVGElement, A, P, C>> = {}
    ): Viewer<A, P, C> {
        const pointer = SVG.createElement('svg', {
            properties: renderConfig.properties,
            attributes: {
                ...renderConfig.attributes,
                width: `${viewerConfig.width}`,
                height: `${viewerConfig.height}`,
            },
            parent: renderConfig.parent,
            children: renderConfig.children,
        });
        return new Viewer(viewerConfig, renderConfig, pointer)
    }

}
