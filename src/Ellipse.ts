import type { Point2D } from './@types/Point2D.js';
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

export class Ellipse extends Renderable<SVGEllipseElement> {

    /**
     * An ellipse is defined by its configuration settings.
     */
    private readonly config: EllipseConfig;

    /**
     * Create a new ellipse.
     * @param config ellipse configuration.
     * @param pointer corresponding DOM element.
     */
    protected constructor (
        config: EllipseConfig,
        pointer: SVGEllipseElement
    ) {
        super(pointer);
        this.config = Object.assign({}, config);
    }

    public get center(): Point2D {
        return this.config.center;
    }

    public get rx(): number {
        return this.config.rx;
    }

    public get ry(): number {
        return this.config.ry;
    }

    public get rotation(): number {
        return this.config.rotation;
    }

    /**
     * Create a new ellipse.
     * @param config ellipse configuration
     */
    public static make(config: EllipseConfig): Ellipse {
        const pointer = SVG.createElement('ellipse', {
            attributes: {
                'cx': `${config.center.x}`,
                'cy': `${config.center.y}`,
                'rx': `${config.rx}`,
                'ry': `${config.ry}`,
                'transform': `rotate(${config.rotation})`,
                'transform-origin': `${config.center.x} ${config.center.y}`,
            }
        });
        return new Ellipse(config, pointer);
    }

}