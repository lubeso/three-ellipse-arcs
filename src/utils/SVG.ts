import type {
    SVGElementAttributes,
    SVGElementConfig
} from '../@types/SVG.js';

/**
 * Create the specified SVG element with the specified configuration.
 * @param _qualifiedName the SVG element tag name
 * @param _config the SVG element configuration
 */
export function createElement<
    K extends keyof SVGElementTagNameMap,
    A extends SVGElementAttributes,
    P extends Node,
    C extends Node
>(
    _qualifiedName: K,
    _config: Partial<SVGElementConfig<SVGElementTagNameMap[K], A, P, C>>
): SVGElementTagNameMap[K] {
    throw new Error('not implemented yet');
}