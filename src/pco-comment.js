import { html, css } from 'lit-element';
import { Base } from '../base-class.js';

class PdiComment extends Base {

  static get styles() {
    return css `
    :host {
      display: block;
    }
    `;
  }

  render() {
    return html `
      <p>A paragraph</p>
    `;
  }
}

// Register the new element with the browser.
customElements.define('pdi-comment', PdiComment);