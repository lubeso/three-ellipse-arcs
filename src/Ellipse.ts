import type { Point2D } from './@types/Point2D.js';
import { Renderable } from './Renderable.js';

/**
 * Type representing llipse configuration settings.
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
        throw new Error('not implemented yet');
    }

    public get center(): Point2D {
        throw new Error('not implemented yet');
    }

    public get rx(): number {
        throw new Error('not implemented yet');
    }

    public get ry(): number {
        throw new Error('not implemented yet');
    }

    public get rotation(): number {
        throw new Error('not implemented yet');
    }

    /**
     * Create a new ellipse.
     * @param config ellipse configuration
     */
    public static make(
        config: Partial<EllipseConfig>
    ): Ellipse {
        throw new Error('not implemented yet');
    }

}