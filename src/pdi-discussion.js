import { html, css } from 'lit-element';
import { nothing } from 'lit-html';
import { Base } from './base-class.js';
import deleteStyle from './delete-style.js';
import '@preignition/lit-firebase';

class PdiDiscussion extends Base {
  static get styles() {
    return [deleteStyle, css `
    :host {
      display: block;
      position: relative;
      padding: var(--space-small);
      box-shadow: var(--shadow-card);
      z-index: var(--z-index-toast);
      width: var(--pdi-discussion-witdh, 300px);
      border-radius: var(--pdi-discussion-radius, 8px);
      background-color: var(--pdi-background-color, #fff);
    }

    :host([hide-resolved]) {
      scale: 1;
      translate: 0px;
      transition: scale 500ms ease-in, translate 500ms ease-in;
      line-height: initial; 
    }
    
    :host(:focus), :host(:hover), :host([active]) {
      outline: none;
      z-index: calc( var(--z-index-toast) + 1);
      box-shadow: 0 2px 6px 0 rgba(0, 41, 77, 0.07), 0 -1px 0 0 var(--primary-color-tr), -1px 0 0 0 var(--primary-color-tr), 1px 0 0 0 var(--primary-color-tr), 0 1px 0 0 var(--primary-color-tr);
    }

    :host([resolved][hide-resolved]) {
      scale: 0;
      translate: 1000px;
    }
    `];
  }

  render() {
    return html `
      ${this.deleteTemplate}
      ${this.mainTemplate}
      ${!this.id || this.active ? html `
        <pdi-comment .active="${this.active}" type="${!this.id ? 'comment' : 'reply'}" state="edit"  .metaPath="${this.metaPath}" .dataPath="${this.dataPath}"></pdi-comment>
        ` : ''}
    `;
  }
  get deleteTemplate() {
    if (!this.deleting) {return nothing;}
    return html `

      <div class="deleting">
        <div>
           <div >Delete this comment ?</div>
           <mwc-button  raised dense label="cancel"  @click="${e => this.deleting = false}"></mwc-button>
           <mwc-button  raised dense label="delete"  @click="${this.doDelete}"></mwc-button>
        </div>
      </div>
    `;
  }

  get mainTemplate() {
    if (!this.id) {return '';}
    return html `
      <lif-query .path="${this.dataPath(this.id)}/items" @data-changed="${this.onDataChanged}"></lif-query>
      <pdi-comment .active="${this.active}" .resolved="${this.resolved}" .id="${this.id}" .metaPath="${this.metaPath}" .dataPath="${this.dataPath}"></pdi-comment>
      ${(this.items || []).map(item => {
        if (item.type === 'reply') {
          return html `<pdi-comment .active="${this.active}" .dataPath="${this.dataPath}" .metaPath="${this.metaPath}" type="reply" .id=${item.$key}></pdi-comment>`;
        }
      })}`;
  }

  onDataChanged(e) {
    this.items = e.detail.value;
    this.active = false;
    // Note(cg): first time we add a comment, .
    // if (this.items.length === 1) {
    //   this.state = 'saved';
    // }
  }

  static get properties() {
    return {

      /*
       * `active` true when discussion is active
       */
      active: {
        type: Boolean,
        reflect: true
      },

      id: {
        type: String
      },

      /*
       * current user id
       */
      uid: {
        type: String
      },

      /*
       * a function returning path where comment is stored
       */
      dataPath: {
        type: Function,
      },
      /*
       * a function returning path where comment is stored
       */
      metaPath: {
        type: Function,
      },

      /*
       * `replies` an array of replies {uid, timestamp, body}
       */
      items: {
        type: Array,
      },

      /*
       * `deleting` true when we are deleting
       */
      deleting: {
        type: Boolean,
      },

      /*
       * `resolved` true when issue is resolved
       */
      resolved: {
        type: Boolean,
        reflect: true,
      },

      /*
       * `hideResolved` set true to hide resloved (and animateion)
       */
      hideResolved: {
        type: Boolean,
        attribute: 'hide-resolved'
      },
    };
  }

  constructor(){
   super();
   this.dataPath =  id => `/comment/${id || ''}`;
   this.metaPath = id => `/commentMeta/${id || ''}/updated`;
   this.deleting = false
   this.resolved = false;
   this.hideResolved = false;
  }

  updated(props) {
    if (props.has('id')) {
      this.active = false;
    }
    super.updated(props);
  }


  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('tabindex', '0');
    // this.addEventListener('blur', () => { this.active = false; this.deleting = false; });
    // this.addEventListener('focus', () => {this.active = true;});
    this.addEventListener('focus', this._onFocus);
    this.addEventListener('blur', this._onBlur);

    this.addEventListener('pdi-discussion-deactivate', this._onDeactivate);
    this.addEventListener('pdi-discussion-pre-delete', this._onPredelete);
    this.addEventListener('pdi-discussion-cancel', this._onCancel);
    this.addEventListener('pdi-discussion-resolve', this._onResolve);
    this.addEventListener('pdi-discussion-create', this._onCreate);
  }

  disconnectedCallback() {
    this.removeEventListener('focus', this._onFocus);
    this.removeEventListener('blur', this._onBlur);

    this.removeEventListener('pdi-discussion-deactivate', this._onDeactivate);
    this.removeEventListener('pdi-discussion-pre-delete', this._onPredelete);
    this.removeEventListener('pdi-discussion-cancel', this._onCancel);
    this.removeEventListener('pdi-discussion-resolve', this._onResolve);
    this.removeEventListener('pdi-discussion-create', this._onCreate);
    super.disconnectedCallback();
  }

  _onBlur(e) {
    this.active = false;
    this.deleting = false;
  }

  _onFocus() {
    this.active = true;
  }

  _onDeactivate() {
    this.active = false;
  }

  _onPredelete(e) {
     e.stopPropagation();
     this.deleting = true;
  }

  _onCreate(e) {
    const type = this.id ? 'reply' : 'comment';
    e.detail.type = type;
    if (type === 'reply') {
      e.detail.id = this.id;
    }
  }

  _onCancel(e) {
    e.stopPropagation();
    if (!this.id) {
      this.parentNode.removeChild(this);
    }
  }

  _onResolve() {
    this.resolved = true;
  }

  doDelete() {
    const cancelled = !this.dispatchEvent(new CustomEvent('pdi-discussion-delete', { detail: { id: this.id, type: this.type }, cancelable: true, bubbles: true, composed: true }));
    if (!cancelled) {
       // Note(cg): only remove node if the event has not been cancelled
       // this allow to handle removal on listening pdi-discussion-delete.
      this.parentNode.removeChild(this);
    }
  }
}

// Register the new element with the browser.
customElements.define('pdi-discussion', PdiDiscussion);
