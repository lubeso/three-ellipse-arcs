import type { ElementAttributes } from './ElementAttributes.js';
import type { ElementConfig } from './ElementConfig.js';

/**
 * List of valid attributes for HTML elements.
 */
export interface HTMLElementAttributes extends ElementAttributes {
    'accept': string;
    'accept-charset': string;
    'accesskey': string;
    'action': string;
    'align': string;
    'allow': string;
    'alt': string;
    'async': string;
    'autocapitalize': string;
    'autocomplete': string;
    'autofocus': string;
    'autoplay': string;
    'buffered': string;
    'capture': string;
    'challenge': string;
    'charset': string;
    'checked': string;
    'cite': string;
    'class': string;
    'code': string;
    'codebase': string;
    'cols': string;
    'colspan': string;
    'content': string;
    'contenteditable': string;
    'contextmenu': string;
    'controls': string;
    'coords': string;
    'crossorigin': string;
    'csp': string;
    'data': string;
    'datetime': string;
    'decoding': string;
    'default': string;
    'defer': string;
    'dir': string;
    'dirname': string;
    'disabled': string;
    'download': string;
    'draggable': string;
    'enctype': string;
    'enterkeyhint': string;
    'for': string;
    'form': string;
    'formaction': string;
    'formenctype': string;
    'formmethod': string;
    'formnovalidate': string;
    'formtarget': string;
    'headers': string;
    'hidden': string;
    'high': string;
    'href': string;
    'hreflang': string;
    'http-equiv': string;
    'icon': string;
    'id': string;
    'importance': string;
    'integrity': string;
    'ismap': string;
    'itemprop': string;
    'keytype': string;
    'kind': string;
    'label': string;
    'lang': string;
    'language': string;
    'list': string;
    'loop': string;
    'low': string;
    'manifest': string;
    'max': string;
    'maxlength': string;
    'minlength': string;
    'media': string;
    'method': string;
    'min': string;
    'multiple': string;
    'muted': string;
    'name': string;
    'novalidate': string;
    'open': string;
    'optimum': string;
    'pattern': string;
    'ping': string;
    'placeholder': string;
    'poster': string;
    'preload': string;
    'radiogroup': string;
    'readonly': string;
    'referrerpolicy': string;
    'rel': string;
    'required': string;
    'reversed': string;
    'role': string;
    'rows': string;
    'rowspan': string;
    'sandbox': string;
    'scope': string;
    'scoped': string;
    'selected': string;
    'shape': string;
    'size': string;
    'sizes': string;
    'slot': string;
    'span': string;
    'spellcheck': string;
    'src': string;
    'srcdoc': string;
    'srclang': string;
    'srcset': string;
    'start': string;
    'step': string;
    'style': string;
    'summary': string;
    'tabindex': string;
    'target': string;
    'title': string;
    'translate': string;
    'type': string;
    'usemap': string;
    'value': string;
    'width': string;
}

/**
 * Interface for configuration of an HTML element.
 */
export type HTMLElementConfig<
    T extends HTMLElement,
    A extends HTMLElementAttributes,
    P extends Node,
    C extends Node
> = ElementConfig<T, A, P, C>;