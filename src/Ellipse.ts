import type {
    SVGElementConfig as RenderConfig,
    SVGElementAttributes,
    Point2D
} from './types.js';
import { Renderable } from './Renderable.js';

import { SVG } from './utils.js';

/**
 * Type representing ellipse configuration settings.
 */
export interface EllipseConfig {
    /**
     * The center point of the ellipse.
     */
    readonly center: Point2D; 
    /**
     * Length of horizontal radius..
     */
    readonly rx: number;
    /**
     * Length of vertical radius.
     */
    readonly ry: number;
    /**
     * Angle of rotation about the center point.
     */
    readonly rotation: number;
}

export class Ellipse<
    A extends SVGElementAttributes,
    P extends Node,
    C extends Node
> extends Renderable<SVGEllipseElement> {

    /**
     * An ellipse is defined by its configuration settings.
     */
    private readonly ellipseConfig: EllipseConfig;
    private readonly renderConfig: Partial<RenderConfig<SVGEllipseElement, A, P, C>>;

    /**
     * Create a new ellipse.
     * @param ellipseConfig ellipse configuration.
     * @param renderConfig render configuration.
     * @param pointer corresponding DOM element.
     */
    protected constructor (
        ellipseConfig: EllipseConfig,
        renderConfig: Partial<RenderConfig<SVGEllipseElement, A, P, C>>,
        pointer: SVGEllipseElement
    ) {
        super(pointer);
        this.ellipseConfig = Object.assign({}, ellipseConfig);
        this.renderConfig = Object.assign({}, renderConfig);
    }

    public get center(): Point2D {
        return this.ellipseConfig.center;
    }

    public get rx(): number {
        return this.ellipseConfig.rx;
    }

    public get ry(): number {
        return this.ellipseConfig.ry;
    }

    public get rotation(): number {
        return this.ellipseConfig.rotation;
    }

    /**
     * Create a new ellipse.
     * @param ellipseConfig ellipse configuration
     * @param renderConfig render configuration
     */
    public static make<
        A extends SVGElementAttributes,
        P extends Node,
        C extends Node
    >(
        ellipseConfig: EllipseConfig,
        renderConfig: Partial<RenderConfig<SVGEllipseElement, A, P, C>> = {}
    ): Ellipse<A, P, C> {
        const pointer = SVG.createElement('ellipse', {
            properties: renderConfig.properties,
            attributes: {
                ...renderConfig.attributes,
                'cx': `${ellipseConfig.center.x}`,
                'cy': `${ellipseConfig.center.y}`,
                'rx': `${ellipseConfig.rx}`,
                'ry': `${ellipseConfig.ry}`,
                'transform': `rotate(${ellipseConfig.rotation})`,
                'transform-origin': `${ellipseConfig.center.x} ${ellipseConfig.center.y}`,
            },
            parent: renderConfig.parent,
            children: renderConfig.children
        });
        return new Ellipse<A, P, C>(ellipseConfig, renderConfig, pointer);
    }

}