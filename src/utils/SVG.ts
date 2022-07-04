import type {
    SVGElementAttributes,
    SVGElementConfig
} from '../@types/SVG.js';
import { initElement } from './initElement.js';

export const NAMESPACE_URI = 'http://www.w3.org/2000/svg';

/**
 * Create the specified SVG element with the specified configuration.
 * @param qualifiedName the SVG element tag name
 * @param config the SVG element configuration
 */
export function createElement<
    K extends keyof SVGElementTagNameMap,
    A extends SVGElementAttributes,
    P extends Node,
    C extends Node
>(
    qualifiedName: K,
    config: Partial<SVGElementConfig<SVGElementTagNameMap[K], A, P, C>>
): SVGElementTagNameMap[K] {
    const element = document.createElementNS(NAMESPACE_URI, qualifiedName);
    initElement(element, config);
    return element;
}