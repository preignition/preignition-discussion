import { LitElement, html, css } from 'lit-element';

import '@material/mwc-tab-bar';
import '@material/mwc-tab';
import '@material/mwc-button';
import '@material/mwc-formfield';
import { Router } from '@vaadin/router';


import './discussion-demo.js';

import { github, preignition, DemoRoot } from '@preignition/preignition-demo';

/**
 * This component combines all the examples to be displayed. See the basic/intermediate/advanced folders for the actual examples.
 */

class discussionDemo extends DemoRoot {

  constructor() {
    super();
    this.activeTab = location.pathname === '/' ? 'intro' : location.pathname.replace('/', '');
    this.tabs = ['intro', 'form'];

  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      { path: '/', component: 'demo-readme' },
      { path: '/intro', component: 'demo-readme' },
      { path: '/form', component: 'form-demo' },
      { path: '/dom', component: 'dom-demo' },
      { path: '/discussion', component: 'discussion-demo' },
      {
        path: '(.*)',
        redirect: '/',
        action: () => {
          this.activeTab = 'intro';
        }
      }
    ]);
  }

  render() {
    return html `
      <div id="header">
        <span class="logo"><a href="https://preignition.org">${preignition}</a></span>
        <h1>Preignition discussions - ${this.capitalize(this.activeTab)} API and demos</h1>
        <a class="github" href="https://www.github.com/preignition/preignition-discussion" target="_blank">${github}</a>
      </div>

      <mwc-tab-bar class="tab-bar">
        <mwc-tab @click=${() => this.switchRoute('intro')} label="Intro"></mwc-tab>
        <mwc-tab @click=${() => this.switchRoute('discussion')} label="discussion"></mwc-tab>
      </mwc-tab-bar>

      <div id="outlet">
      </div>
      <p class="footer">Made with love by <a target="_blank" href="https://preignition.org/">preignition</a>, with precious help of <a target="_blank" href="https://github.com/web-padawan/api-viewer-element">api-viewer-element</a> and <a target="_blank" href="https://github.com/runem/web-component-analyzer">web-component-analyzer</a></p>
    `;
  }

}

customElements.define('preignition-discussion-demo', discussionDemo);
