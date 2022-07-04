import type { ElementAttributes } from './ElementAttributes.js';

/**
 * Abstract interface for configuration of an Element in a Document.
 */
export interface ElementConfig<
    T extends Element,
    A extends ElementAttributes,
    P extends Node,
    C extends Node,
> {
    /**
     * Element-specific properties, e.g. `textContent` for `p` elements.
     */
    properties: Partial<T>;
    /**
     * Element attributes.
     */
    attributes: Partial<A>;
    /**
     * Parent element.
     */
    parent: P;
    /**
     * Child elements, in order of appearance.
     */
    children: C[];
}