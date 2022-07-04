import { HTMLElementAttributes } from './HTML.js';
import { SVGElementAttributes } from './SVG.js';

/**
 * Abstract interface for all Element types in a Document.
 */
export type ElementAttributes = HTMLElementAttributes | SVGElementAttributes;