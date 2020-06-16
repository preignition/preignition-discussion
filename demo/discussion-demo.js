import { html, css } from 'lit-element';
import { DemoBase, } from '@preignition/preignition-demo';

class discussionDemo extends DemoBase {

  static get properties() {
    return {
      
      /*
       * location of web-content-analyzer json output
       */
      src: {
        type: String,
        value: '/docs/discussion.json'

      },

      readme: {
        type: String,
        value: '/src/discussion/README.md'
      },


    };
  }


  render() {
    return html `
    <demos-container>
      <div slot="header">
        <demo-readme src="${this.readme}"></demo-readme>
      </div>
      <fancy-accordion >
          

          <expansion-panel >
              <div slot="header">pwi-error-panel</div>
              <mwc-tab-bar class="tab-bar" .activeIndex="${this.tabs.indexOf(this.activeTab)}" theme="centered">
                <mwc-tab isMinWidthIndicator @click=${() => this.activeTab = 'intro'} label="intro"></mwc-tab>
                <mwc-tab isMinWidthIndicator @click=${() => this.activeTab = 'api'} label="api"></mwc-tab>
            </mwc-tab-bar >
            ${this.activeTab === 'intro' ? html `
              <h2>discussion Example</h2>
              <pco-discussion></pco-discussion>
             ` : ''}
            ${this.activeTab === 'api' ? html `
              <h2>API</h2>
              <demo-api-viewer selected="pwi-error-panel"  src="/docs/pwi-cron-builder.json">` : ''}
          </expansion-panel>




          
      </fancy-accordion>

  
    </demos-container>
    
    `;
  }

  constructor() {
    super();
    this.tabs = ['intro', 'api', 'demo2'];
    this.activeTab = 'intro';
  }

}

customElements.define('discussion-demo', discussionDemo);
