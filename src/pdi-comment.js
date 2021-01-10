import { html, css } from 'lit-element';
import { nothing} from 'lit-html';
import { resizeTextarea, parse } from '@preignition/preignition-util';
import { Base } from './base-class.js';
import deleteStyle from './delete-style.js';

import '@material/mwc-icon-button';
import '@material/mwc-button';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item.js';


class PdiComment extends Base {

  static get styles() {
    return [deleteStyle, css `
    :host {
      display: block;
      position: relative;
    }

    :host([type=reply]) {
      border-top: solid 1px var(--color-gray-light);
      margin-top: var(--space-x-small);
    }
    :host([type=reply]) .header  {
      margin-top: var(--space-x-small);
      margin-left: 10px;
      --author-image-size: 36px;
    }

    .header {
      display: flex;
      align-items: center;
      margin-bottom: var(--space-x-small);
    }

    .author {
      flex: 1;
    }

    textarea {
      height: 25px;
      resize: none;
      max-height: 9em;
      width: calc(100% - 5px);
      border-color: var(--color-gray-light);
      border-radius: var(--space-xx-small);
      
    }
    textarea:focus {
      outline:  var(--color-primary) auto 1px;
    }


    mwc-icon-button {
      color: var(--color-gray-dark);
    }

    .tools, .resolve {
      scale: 0.8;
    }
    .tools {
      transform-origin: left;
    }
    .resolve {
      transform-origin: center;
    }

    .tool {
      opacity: 0.6
    }
    :host([active]) .tool, :host(:hover) .tool, .tool.solid  {
      opacity: 1
    }

    #parsed {
      font-size: 0.9rem;  
    }

    #parsed p {
      margin-top: 2px;
      margin-bottom: 2px;
    }


    `];
  }
  render() {
    const isEditing = this.state === 'edit' || this.state === 'saving';
    return html `
      ${this.deleteTemplate}
      ${this.mainTemplate}
      <div class="body">
        ${isEditing ? html `<textarea rows="1" .readOnly="${this.state === 'saving'}" @input="${this.onInput}" placeholder="${this.type === 'reply' ? 'Reply...' : ''}" .value="${this.body || ''}"></textarea>` : ''}
        ${!isEditing ? html `<div id="parsed">${parse(this.body || '', {ADD_ATTR: ['target']})}</div>` : ''}
      </div>
      ${this.state === 'edit' || !this.id ? html `
         <div class="tools">
           ${!this.id ? html `<mwc-button .disabled="${!this.hasChange}" outlined dense label="${this.type === 'reply' ? 'Reply' : 'Comment'}"  @click="${this.onCreate}"></mwc-button>` : ''}
           ${this.state === 'edit' && this.id ? html `<mwc-button .disabled="${!this.hasChange}" outlined dense label="Save"  @click="${this.onSave}"></mwc-button>` : ''}
          <mwc-button outlined dense label="cancel"  @click="${this.onCancel}"></mwc-button>
        </div>
        ` : ''}
    `;
  }
  get deleteTemplate() {
    if (!this.deleting) {return nothing;}
    return html `
      <div class="deleting">
        <div>
           <div>Delete this reply ?</div>
           <mwc-button raised dense label="cancel" @click="${e => this.deleting = false}"></mwc-button>
           <mwc-button raised dense label="delete" @click="${this.doDelete}"></mwc-button>
        </div>
      </div>
    `
  }

  get resolveTemplate() {
    return this.resolved ?  
      html `<mwc-button class="tool resolve" outlined dense @click="${this.onReopen}" label="re-open"></mwc-button>` :  
      html `<mwc-button class="tool resolve" outlined dense @click="${this.onResolve}" label="resolve"></mwc-button>`
  }

  get mainTemplate() {
    if (!this.id) { return html `<div class="header">`; }
    return html `
       <lif-document .path="${this.dataPath(this.id)}/body" @data-changed="${e => this.body = e.detail.value}"></lif-document>
       <lif-document .path="${this.metaPath(this.id)}" @data-changed="${e => this.meta = e.detail.value}"></lif-document>
        <div class="header">
        <pdi-author class="author" .type="${this.type}" .timestamp="${this.meta && this.meta.timestamp}" .uid="${this.meta && this.meta.by}" ></pdi-author>
        ${this.type === 'comment' ? this.resolveTemplate : nothing}
        <div class="tool ${this.solid ? 'solid' : ''}" style="position: relative;">
          <mwc-icon-button @click="${this.openMenu}" @focus="${e => e.stopPropagation()}" icon="more_vert" label="Open Menu"></mwc-icon-button>
          <mwc-menu quick id="menu" @opened="${e => this.solid = true}" @closed="${e => this.solid = false}">
            <mwc-list-item @click="${this.onEdit}">Edit</mwc-list-item>
            <mwc-list-item @click="${this.onDelete}">Delete</mwc-list-item>
          </mwc-menu>
         </div>
      </div>
    `;
  }
  static get properties() {
    return {

      /*
       * `state` one of {new|edit|saved}
       */
      state: {
        type: String,
      },

      /*
       * `type` {comment|reply}
       */
      type: {
        type: String,
        value: 'comment',
        reflect: true
      },

      /*
       * `active` true when discussion is active
       */
      active: {
        type: Boolean,
        reflect: true
      },

      body: {
        type: String
      },

      meta: {
        type: Object
      },


      /*
       * `id` of this comment
       */
      id: {
        type: String,
      },

      /*
       * `deleting` true when we are deleting
       */
      deleting: {
        type: Boolean,
        value: false
      },

      dataPath: {
        type: Function,
      },

      metaPath: {
        type: Function,
      },

       /*
       * `resolved` true when issue is resolved
       */
      resolved: {
        type: Boolean
      },

      /*
       * `hasChange` true when smth has changed
       */
      hasChange: {
        type: Boolean,
      },

      /*
       * `solid` true when tool must not be transparent
       */
      solid: {
        type: Boolean,
      },

    };
  }

  constructor() {
    super();
    this.state = 'saved';
    // this.addEventListener('blur', () => {this.deleting = false;});
    this.addEventListener('keydown', e => {
      if (e.ctrlKey && e.key === 'Enter') {
        this.onCtrEnter();
        return;
      }
      if (e.key === 'Escape') {
        this.onCancel();
      }
    });
  }

  firstUpdated() {
    if (!this.id && this.textarea) {
      this.textarea.focus();
    }

  }

  removeSelf() {
    this.parentNode.removeChild(this);
  }

  openMenu(e) {
    this.renderRoot.querySelector('#menu').open = true;
  }

  onSave() {
    this.dispatchEvent(new CustomEvent('pdi-discussion-save', { detail: { id: this.id, value: this.textarea.value }, bubbles: true, composed: true }));
    this.state = 'saving';
    this.hasChange = false;
  }

  // Note(cg): should be called by component listening to `pdi-discussion-save`. 
  // and called when save is done
  savedCallback() {
    this.state = 'saved';
  }

  onEdit(e) {
    this.state = 'edit';
    this.deactivate()
    setTimeout(() => {
      this.textarea.focus();
    }, 40);
  }

  onCancel() {
    if (this.id) {
      this.state = 'saved';
      return;
    }
    this.dispatchEvent(new CustomEvent('pdi-discussion-cancel', { detail: { id: this.id, value: this.textarea.value }, bubbles: true, composed: true }));
    this.removeSelf();
  }

  onCreate() {
    this.dispatchEvent(new CustomEvent('pdi-discussion-create', { detail: { value: this.textarea.value }, bubbles: true, composed: true }));
    this.state = 'saving';
  }

  // Note(cg): should be called by component listening to `pdi-discussion-create`. 
  // and called when created is done
  createdCallback(id) {
    this.state = 'saving';
    if (!this.id) {
      this.id = id;
    }
  }


  onDelete() {
    if (this.type === 'reply') {
      this.deleting = true;
      return;
    }
    this.dispatchEvent(new CustomEvent('pdi-discussion-pre-delete', {bubbles: true, composed: true }));

  }

  doDelete() {
    const cancelled = !this.dispatchEvent(new CustomEvent('pdi-discussion-delete', { detail: { id: this.id, type: this.type }, cancelable: true, bubbles: true, composed: true }));
    if (!cancelled) {
      if (this.type === 'comment') {
        this.parentNode.removeChild(this);
        return;
      }
      const parent = this.shadowRoot.host;
      parent.parentNode.removeChild(parent);
    }
  }
  
  onResolve() {
    this.dispatchEvent(new CustomEvent('pdi-discussion-resolve', { detail: { id: this.id }, bubbles: true, composed: true }));
  }

  onReopen() {
    this.dispatchEvent(new CustomEvent('pdi-discussion-reopen', { detail: { id: this.id }, bubbles: true, composed: true }));
  }

  resolveCallback() {
    this.dispatchEvent(new CustomEvent('pdi-discussion-resolved', { detail: { id: this.id }, bubbles: true, composed: true }));
  }

  deactivate() {
    this.dispatchEvent(new CustomEvent('pdi-discussion-deactivate', { bubbles: true, composed: true }));
  }

  onInput(e) {
    this.hasChange = true;
    resizeTextarea(e.currentTarget);
  }

  onCtrEnter() {
    if (this.state === 'edit') {
      if (this.id) {
        this.onSave();
      } else {
        this.onCreate();
      }
    }
  }

  get textarea() {
    return this.renderRoot.querySelector('textarea');
  }

}

// Register the new element with the browser.
customElements.define('pdi-comment', PdiComment);
