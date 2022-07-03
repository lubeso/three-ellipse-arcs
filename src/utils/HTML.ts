import type {
    HTMLElementAttributes,
    HTMLElementConfig
} from '../@types/HTML.js';

/**
 * Create the specified HTML element with the specified configuration.
 * @param _qualifiedName the HTML element tag name
 * @param _config the HTML element configuration
 */
export function createElement<
    K extends keyof HTMLElementTagNameMap,
    A extends HTMLElementAttributes,
    P extends Node,
    C extends Node
>(
    _qualifiedName: K,
    _config: Partial<HTMLElementConfig<HTMLElementTagNameMap[K], A, P, C>>
): HTMLElementTagNameMap[K] {
    throw new Error('not implemented yet');
}