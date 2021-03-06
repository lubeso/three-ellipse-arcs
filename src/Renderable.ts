/**
 * Abstract class representing all renderable objects.
 * 
 * This class is a wrapper around the DOM API, intended for 
 * use in designing custom elements. Rather than managing 
 * direct references to DOM elements, a Renderable instance 
 * is defined as a collection discrete components and any 
 * accompanying metadata.
 */
export abstract class Renderable<T extends Element> {

    /**
     * A Renderable instance is defiend by its corresponding 
     * element in the document.
     */
    public readonly pointer: T;

    /**
     * Create a new Renderable instance.
     * @param pointer the corresponding DOM element 
     * for this instance
     */
    protected constructor(pointer: T) {
        this.pointer = pointer;
    }

}