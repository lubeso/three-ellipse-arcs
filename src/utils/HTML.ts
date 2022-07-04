import type {
    HTMLElementAttributes,
    HTMLElementConfig
} from '../@types/HTML.js';
import { initElement } from './initElement.js';

/**
 * Create the specified HTML element with the specified configuration.
 * @param qualifiedName the HTML element tag name
 * @param config the HTML element configuration
 */
export function createElement<
    K extends keyof HTMLElementTagNameMap,
    A extends HTMLElementAttributes,
    P extends Node,
    C extends Node
>(
    qualifiedName: K,
    config: Partial<HTMLElementConfig<HTMLElementTagNameMap[K], A, P, C>>
): HTMLElementTagNameMap[K] {
    const element = document.createElement(qualifiedName);
    initElement(element, config);
    return element;
}