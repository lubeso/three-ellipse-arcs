/**
 * Abstract interface for all Element types in a Document.
 */
export interface ElementAttributes {
    /**
     * Allow any string as an element attribute
     * - TODO: guarantee malicious input handling.
     */
    [key: string]: string;
}