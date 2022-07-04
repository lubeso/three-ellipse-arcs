import type { ElementAttributes } from '../@types/ElementAttributes.js';
import type { ElementConfig } from '../@types/ElementConfig.js';

/**
 * Apply the specified configuration to the element.
 * @param element an element in the document.
 * @param config the element configuration.
 */
export function initElement<
    T extends Element,
    A extends ElementAttributes,
    P extends Node,
    C extends Node
>(
    element: T,
    config: Partial<ElementConfig<T, A, P, C>> = {}
): void {
    if (config.properties) {
        setProperties(element, config.properties);
    }
    if (config.attributes) {
        setAttributes(element, config.attributes)
    }
    if (config.parent) {
        appendToParent(element, config.parent);
    }
    if (config.children) {
        appendChildren(element, config.children);
    }
}

/**
 * Apply the specified attributes to the element.
 * @param element an element in the document.
 * @param attributes the attributes to apply.
 */
function setAttributes<
    T extends Element,
    A extends ElementAttributes
>(
    element: T,
    attributes: Partial<A>,
): void {
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
}

/**
 * Apply the specified properties for the element.
 * @param element an element in the document.
 * @param properties the attributes to apply.
 */
function setProperties<
    T extends Element
>(
    element: T,
    properties: Partial<T>
): void {
    for (const [key, value] of Object.entries(properties)) {
        (element as any)[key] = value;
    }
}

/**
 * Append the element to the specified parent.
 * @param element an element in the document.
 * @param parent the parent to append to.
 */
function appendToParent<
    T extends Element,
    P extends Node
>(
    element: T,
    parent: P,
): void {
    parent.appendChild(element);
}

/**
 * Append the specified children to the element.
 * @param element an element in the document.
 * @param children the children to append.
 */
function appendChildren<
    T extends Element,
    C extends Node
>(
    element: T,
    children: C[],
): void {
    for (const child of children) {
        element.append(child)
    }
}