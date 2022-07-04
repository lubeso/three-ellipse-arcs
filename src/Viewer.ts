import { Renderable } from './Renderable.js';
import { Ellipse } from './Ellipse.js';

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
    private readonly ellipses: Ellipse[];

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
        throw new Error('not implemented yet');
    }

    /**
     * Return the `i`-th ellipse.
     * @param i numerical index of desired ellipse.
     */
    public getEllipse(i: number): Ellipse {
        throw new Error('not implemented yet');
    }

    /**
     * Add a new ellipse.
     * @param ellipse the ellipse to add.
     */
    public addEllipse(ellipse: Ellipse): Viewer {
        throw new Error('not implemented yet');
    }

    public get width(): number {
        throw new Error('not implemented yet');
    }

    public get height(): number {
        throw new Error('not implemented yet');
    }

    /**
     * Create a new viewer.
     * @param config viewer configuration.
     */
    public static make(config: ViewerConfig): Viewer {
        throw new Error('not implemented yet');
    }

}
