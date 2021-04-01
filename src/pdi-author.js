import { html, css } from 'lit-element';
import { Base } from './base-class.js';
// import TimeAgo from 'javascript-time-ago';

// // Load locale-specific relative date/time formatting rules.
// import en from 'javascript-time-ago/locale/en/index.js'

// // Add locale-specific relative date/time formatting rules.
// TimeAgo.addLocale(en)

// // Create relative date/time formatter.
// const timeAgo = new TimeAgo('en-US')


class PdiAuthor extends Base {
  static get styles() {
    return css `
    :host {
      display: block;
    }

     img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }

      .photo {
        border-radius: 50%;
        height: var(--author-image-size, 40px);
        width: var(--author-image-size, 40px);
        overflow: hidden;
      }

      :host([type=comment]) .photo {
        border: solid var(--color-primary) 2px;

      }

      .author {
        display: flex;
        font-size: var(--font-size-small);
      }
      .names-date {
        flex: 1;
        margin: auto;
        margin-left: var(--space-x-small);
      }

      .name {
        font-weight: 500;
      }

      .date {
        color: var(--secondary-text-color, #737373);
        font-size: var(--font-size-x-small);
      }
    `;
  }

  render() {
    return this.user ? html `
       <div class="author">
        <div class="photo"><img src="${this.user.photoURL || this.defaultURL}" alt="${this.user.displayName}"></div>
        <div class="names-date">
          <div class="name">${this.user.displayName.length > 16 ? this.user.displayName.substring(0, 13) + ' ...' : this.user.displayName}</div>
          <div class="date">${this.timestamp ? new Date(this.timestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''}</div>
        </div>
      </div>
    ` : '';
  }

  static get properties() {
    return {
      ...super.properties,

      /*
       * `id`
       */
      id: {
        type: String,
      },

      /*
       * `defaultURL`
       */
      defaultURL: {
        type: String,
      },

      /*
       * `type` {comment|reply}
       */
      type: {
        type: String,
        reflect: true
      },

      /*
       * `uid`
       */
      uid: {
        type: String,
      },

      /*
       * `user` [{userId, displayName, photoURL}] array, the first item is the owner
       */
      user: {
        type: Object,
      },

      /*
       * `timestamp` when was the article published
       */
      timestamp: {
        type: String,
      },
    };
  }

  constructor(){
   super();
   this.defaultURL =  'https://preignition.org/images/gravatar.png'
   this.type = 'comment'
  }
  updated(props) {
    if (props.has('uid')) {
      this.onUid(this.uid);
    }
    super.updated(props);
  }


  async onUid(uid) {
    if (uid) {
      this.user = {
        displayName: await firebase.database().ref(`/userData/profile/${uid}/displayName`).once('value').then(snap => snap.val()),
        photoURL: await firebase.database().ref(`/userData/profile/${uid}/photoURL`).once('value').then(snap => snap.val())
      };
    }
  }
}

// Register the new element with the browser.
customElements.define('pdi-author', PdiAuthor);
