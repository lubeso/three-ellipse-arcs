import type { ElementAttributes } from '../@types/ElementAttributes.js';
import type { ElementConfig } from '../@types/ElementConfig.js';

/**
 * Apply the specified configuration to the element.
 * @param _element an element in the document.
 * @param _config the element configuration.
 */
export function initElement<
    T extends Element,
    A extends ElementAttributes,
    P extends Node,
    C extends Node
>(
    _element: T,
    _config: ElementConfig<T, A, P, C>
) {
    throw new Error('not implemented yet');
}

/**
 * Apply the specified attributes to the element.
 * @param _element an element in the document.
 * @param _attributes the attributes to apply.
 */
function _setAttributes<
    T extends Element,
    A extends ElementAttributes
>(
    _element: T,
    _attributes: A,
): void {
    throw new Error('not implemented yet');
}

/**
 * Apply the specified properties for the element.
 * @param _element an element in the document.
 * @param _properties the attributes to apply.
 */
function _setProperties<
    T extends Element
>(
    _element: T,
    _properties: Partial<T>
): void {
    throw new Error('not implemented yet');
}

/**
 * Append the element to the specified parent.
 * @param _element an element in the document.
 * @param _parent the parent to append to.
 */
function _appendToParent<
    T extends Element,
    P extends Node
>(
    _element: T,
    _parent: P,
): void {
    throw new Error('not implemented yet');
}

/**
 * Append the specified children to the element.
 * @param _element an element in the document.
 * @param _children the children to append.
 */
function _appendChildren<
    T extends Element,
    C extends Node
>(
    _element: T,
    _children: C[],
): void {
    throw new Error('not implemented yet');
}