import { a as __extends, b as __assign, M as MDCFoundation, _ as __decorate, B as BaseElement, g as addHasRemoveClass, m as matches } from '../common/foundation-6ef82166.js';
import { h as html, n as noChange, N as NodePart, d as templateFactory } from '../common/lit-html-96fe430f.js';
import { query, property, css, customElement } from '../lit-element.js';
import { d as directive } from '../common/directive-651fd9cf.js';
import { s as supportsCssVariables, M as MDCRippleFoundation } from '../common/foundation-0d07c0ae.js';
import { c as classMap } from '../common/class-map-4c8464c9.js';
import { o as observer } from '../common/observer-0bd28502.js';

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition',
};
var strings = {
    CONTENT_SELECTOR: '.mdc-tab-indicator__content',
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends(MDCTabIndicatorFoundation, _super);
    function MDCTabIndicatorFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCTabIndicatorFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                computeContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                setContentStyleProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
        return this.adapter.computeContentClientRect();
    };
    return MDCTabIndicatorFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/* istanbul ignore next: subclass is not a branch statement */
var MDCFadingTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends(MDCFadingTabIndicatorFoundation, _super);
    function MDCFadingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFadingTabIndicatorFoundation.prototype.activate = function () {
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    return MDCFadingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/* istanbul ignore next: subclass is not a branch statement */
var MDCSlidingTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends(MDCSlidingTabIndicatorFoundation, _super);
    function MDCSlidingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
        // Early exit if no indicator is present to handle cases where an indicator
        // may be activated without a prior indicator state
        if (!previousIndicatorClientRect) {
            this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
            return;
        }
        // This animation uses the FLIP approach. You can read more about it at the link below:
        // https://aerotwist.com/blog/flip-your-animations/
        // Calculate the dimensions based on the dimensions of the previous indicator
        var currentClientRect = this.computeContentClientRect();
        var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
        // Force repaint before updating classes and transform to ensure the transform properly takes effect
        this.computeContentClientRect();
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
        this.adapter.setContentStyleProperty('transform', '');
    };
    MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    return MDCSlidingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation));

class TabIndicatorBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.icon = '';
        this.fade = false;
    }
    get mdcFoundationClass() {
        return this.fade ? MDCFadingTabIndicatorFoundation :
            MDCSlidingTabIndicatorFoundation;
    }
    render() {
        const contentClasses = {
            'mdc-tab-indicator__content--icon': this.icon,
            'material-icons': this.icon,
            'mdc-tab-indicator__content--underline': !this.icon,
        };
        return html `
      <span class="mdc-tab-indicator ${classMap({
            'mdc-tab-indicator--fade': this.fade
        })}">
        <span class="mdc-tab-indicator__content ${classMap(contentClasses)}">${this.icon}</span>
      </span>
      `;
    }
    updated(changedProperties) {
        if (changedProperties.has('fade')) {
            this.createFoundation();
        }
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { computeContentClientRect: () => this.contentElement.getBoundingClientRect(), setContentStyleProperty: (prop, value) => this.contentElement.style.setProperty(prop, value) });
    }
    computeContentClientRect() {
        return this.mdcFoundation.computeContentClientRect();
    }
    activate(previousIndicatorClientRect) {
        this.mdcFoundation.activate(previousIndicatorClientRect);
    }
    deactivate() {
        this.mdcFoundation.deactivate();
    }
}
__decorate([
    query('.mdc-tab-indicator')
], TabIndicatorBase.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-tab-indicator__content')
], TabIndicatorBase.prototype, "contentElement", void 0);
__decorate([
    property()
], TabIndicatorBase.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], TabIndicatorBase.prototype, "fade", void 0);

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const style = css `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}`;

let TabIndicator = class TabIndicator extends TabIndicatorBase {
};
TabIndicator.styles = style;
TabIndicator = __decorate([
    customElement('mwc-tab-indicator')
], TabIndicator);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const style$1 = css `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`;

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const supportsCssVariablesWin = supportsCssVariables(window);
/**
 * force the ripple directive to share API names with `mwc-ripple` after Closure
 * Compiler.
 */
class RippleIntermediate {
    constructor(foundation) {
        this.foundation = foundation;
    }
    startPress() {
        this.foundation.activate();
    }
    endPress() {
        this.foundation.deactivate();
    }
    startFocus() {
        this.foundation.handleFocus();
    }
    endFocus() {
        this.foundation.handleBlur();
    }
    destroy() {
        this.foundation.destroy();
    }
    setUnbounded(value) {
        this.foundation.setUnbounded(value);
    }
}
// NOTE: This is a workaround for
// https://bugs.webkit.org/show_bug.cgi?id=173027. Since keyframes on
// pseudo-elements (:after) are not supported in Shadow DOM, we put the keyframe
// style into the <head> element.
const isSafari = navigator.userAgent.match(/Safari/);
let didApplyRippleStyle = false;
const applyRippleStyle = () => {
    didApplyRippleStyle = true;
    const styleElement = document.createElement('style');
    const part = new NodePart({ templateFactory });
    part.appendInto(styleElement);
    part.setValue(style$1);
    part.commit();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.head.appendChild(styleElement);
};
/**
 * Applied a ripple to the node specified by {surfaceNode}.
 * @param options {RippleNodeOptions}
 */
const rippleNode = (options) => {
    if (isSafari && !didApplyRippleStyle) {
        applyRippleStyle();
    }
    // TODO(sorvell): This directive requires bringing css yourself. We probably
    // need to do this because of ShadyCSS, but on Safari, the keyframes styling
    // must be global. Perhaps this directive could fix that.
    const surfaceNode = options.surfaceNode;
    const interactionNode = options.interactionNode || surfaceNode;
    // only style interaction node if not in the same root
    if (interactionNode.getRootNode() !== surfaceNode.getRootNode()) {
        if (interactionNode.style.position === '') {
            interactionNode.style.position = 'relative';
        }
    }
    const adapter = {
        browserSupportsCssVars: () => supportsCssVariablesWin,
        isUnbounded: () => options.unbounded === undefined ? true : options.unbounded,
        isSurfaceActive: () => matches(interactionNode, ':active'),
        isSurfaceDisabled: () => Boolean(interactionNode.hasAttribute('disabled')),
        addClass: (className) => surfaceNode.classList.add(className),
        removeClass: (className) => surfaceNode.classList.remove(className),
        containsEventTarget: (target) => interactionNode.contains(target),
        registerInteractionHandler: (type, handler) => interactionNode.addEventListener(type, handler, applyPassive()),
        deregisterInteractionHandler: (type, handler) => interactionNode.removeEventListener(type, handler, applyPassive()),
        registerDocumentInteractionHandler: (evtType, handler) => 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.documentElement.addEventListener(evtType, handler, applyPassive()),
        deregisterDocumentInteractionHandler: (evtType, handler) => 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener('resize', handler),
        deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
        updateCssVariable: (varName, value) => surfaceNode.style.setProperty(varName, value),
        computeBoundingRect: () => surfaceNode.getBoundingClientRect(),
        getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
    };
    const rippleFoundation = new MDCRippleFoundation(adapter);
    rippleFoundation.init();
    return new RippleIntermediate(rippleFoundation);
};
const rippleInteractionNodes = new WeakMap();
/**
 * A directive that applies a Material ripple to a part node. The directive
 * should be applied to a PropertyPart.
 * @param options {RippleOptions}
 */
const ripple = directive((options = {}) => (part) => {
    const surfaceNode = part.committer.element;
    const interactionNode = options.interactionNode || surfaceNode;
    let rippleFoundation = part.value;
    // if the interaction node changes, destroy and invalidate the foundation.
    const existingInteractionNode = rippleInteractionNodes.get(rippleFoundation);
    if (existingInteractionNode !== undefined &&
        existingInteractionNode !== interactionNode) {
        rippleFoundation.destroy();
        rippleFoundation = noChange;
    }
    // make the ripple, if needed
    if (rippleFoundation === noChange) {
        rippleFoundation =
            rippleNode(Object.assign({}, options, { surfaceNode }));
        rippleInteractionNodes.set(rippleFoundation, interactionNode);
        part.setValue(rippleFoundation);
        // otherwise update settings as needed.
    }
    else {
        if (options.unbounded !== undefined) {
            rippleFoundation
                .setUnbounded(options.unbounded);
        }
        if (options.disabled !== undefined) {
            rippleFoundation
                .setUnbounded(options.disabled);
        }
    }
    if (options.active === true) {
        rippleFoundation.startPress();
    }
    else if (options.active === false) {
        rippleFoundation.endPress();
    }
});

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
    ACTIVE: 'mdc-tab--active',
};
var strings$1 = {
    ARIA_SELECTED: 'aria-selected',
    CONTENT_SELECTOR: '.mdc-tab__content',
    INTERACTED_EVENT: 'MDCTab:interacted',
    RIPPLE_SELECTOR: '.mdc-tab__ripple',
    TABINDEX: 'tabIndex',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabFoundation = /** @class */ (function (_super) {
    __extends(MDCTabFoundation, _super);
    function MDCTabFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTabFoundation.defaultAdapter), adapter)) || this;
        _this.focusOnActivate_ = true;
        return _this;
    }
    Object.defineProperty(MDCTabFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                activateIndicator: function () { return undefined; },
                deactivateIndicator: function () { return undefined; },
                notifyInteracted: function () { return undefined; },
                getOffsetLeft: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                getContentOffsetLeft: function () { return 0; },
                getContentOffsetWidth: function () { return 0; },
                focus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTabFoundation.prototype.handleClick = function () {
        // It's up to the parent component to keep track of the active Tab and
        // ensure we don't activate a Tab that's already active.
        this.adapter.notifyInteracted();
    };
    MDCTabFoundation.prototype.isActive = function () {
        return this.adapter.hasClass(cssClasses$1.ACTIVE);
    };
    /**
     * Sets whether the tab should focus itself when activated
     */
    MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
        this.focusOnActivate_ = focusOnActivate;
    };
    /**
     * Activates the Tab
     */
    MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
        this.adapter.addClass(cssClasses$1.ACTIVE);
        this.adapter.setAttr(strings$1.ARIA_SELECTED, 'true');
        this.adapter.setAttr(strings$1.TABINDEX, '0');
        this.adapter.activateIndicator(previousIndicatorClientRect);
        if (this.focusOnActivate_) {
            this.adapter.focus();
        }
    };
    /**
     * Deactivates the Tab
     */
    MDCTabFoundation.prototype.deactivate = function () {
        // Early exit
        if (!this.isActive()) {
            return;
        }
        this.adapter.removeClass(cssClasses$1.ACTIVE);
        this.adapter.setAttr(strings$1.ARIA_SELECTED, 'false');
        this.adapter.setAttr(strings$1.TABINDEX, '-1');
        this.adapter.deactivateIndicator();
    };
    /**
     * Returns the dimensions of the Tab
     */
    MDCTabFoundation.prototype.computeDimensions = function () {
        var rootWidth = this.adapter.getOffsetWidth();
        var rootLeft = this.adapter.getOffsetLeft();
        var contentWidth = this.adapter.getContentOffsetWidth();
        var contentLeft = this.adapter.getContentOffsetLeft();
        return {
            contentLeft: rootLeft + contentLeft,
            contentRight: rootLeft + contentLeft + contentWidth,
            rootLeft: rootLeft,
            rootRight: rootLeft + rootWidth,
        };
    };
    return MDCTabFoundation;
}(MDCFoundation));

// used for generating unique id for each tab
let tabIdCounter = 0;
class TabBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCTabFoundation;
        this.label = '';
        this.icon = '';
        this.hasImageIcon = false;
        this.isFadingIndicator = false;
        this.minWidth = false;
        this.isMinWidthIndicator = false;
        this.indicatorIcon = '';
        this.stacked = false;
        this.focusOnActivate = true;
        this._active = false;
        this.initFocus = false;
    }
    get active() {
        return this._active;
    }
    _handleClick() {
        this.mdcFoundation.handleClick();
    }
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    connectedCallback() {
        this.dir = document.dir;
        super.connectedCallback();
    }
    firstUpdated() {
        super.firstUpdated();
        // create an unique id
        this.id = this.id || `mdc-tab-${++tabIdCounter}`;
    }
    render() {
        const classes = {
            'mdc-tab--min-width': this.minWidth,
            'mdc-tab--stacked': this.stacked,
        };
        let iconTemplate = html ``;
        if (this.hasImageIcon || this.icon) {
            // NOTE: MUST be on same line as spaces will cause vert alignment issues
            // in IE
            iconTemplate = html `
        <span class="mdc-tab__icon material-icons"><slot name="icon">${this.icon}</slot></span>`;
        }
        let labelTemplate = html ``;
        if (this.label) {
            labelTemplate = html `
        <span class="mdc-tab__text-label">${this.label}</span>`;
        }
        const rippleDirective = ripple({
            interactionNode: this,
            unbounded: false,
        });
        return html `
      <button
        @click="${this._handleClick}"
        class="mdc-tab ${classMap(classes)}"
        role="tab"
        aria-selected="false"
        tabindex="-1">
        <span class="mdc-tab__content">
          ${iconTemplate}
          ${labelTemplate}
          ${this.isMinWidthIndicator ? this.renderIndicator() : ''}
        </span>
        ${this.isMinWidthIndicator ? '' : this.renderIndicator()}
        <span class="mdc-tab__ripple" .ripple="${rippleDirective}"></span>
      </button>`;
    }
    renderIndicator() {
        return html `<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { setAttr: (attr, value) => this.mdcRoot.setAttribute(attr, value), activateIndicator: (previousIndicatorClientRect) => this._tabIndicator
                .activate(previousIndicatorClientRect), deactivateIndicator: () => this._tabIndicator.deactivate(), notifyInteracted: () => this.dispatchEvent(new CustomEvent(MDCTabFoundation.strings.INTERACTED_EVENT, {
                detail: { tabId: this.id },
                bubbles: true,
                composed: true,
                cancelable: true,
            })), getOffsetLeft: () => this.offsetLeft, getOffsetWidth: () => this.mdcRoot.offsetWidth, getContentOffsetLeft: () => this._contentElement.offsetLeft, getContentOffsetWidth: () => this._contentElement.offsetWidth, focus: () => {
                if (this.initFocus) {
                    this.initFocus = false;
                }
                else {
                    this.mdcRoot.focus();
                }
            } });
    }
    activate(clientRect) {
        // happens only on initialization. We don't want to focus to prevent scroll
        if (!clientRect) {
            this.initFocus = true;
        }
        this.mdcFoundation.activate(clientRect);
        this.setActive(this.mdcFoundation.isActive());
    }
    deactivate() {
        this.mdcFoundation.deactivate();
        this.setActive(this.mdcFoundation.isActive());
    }
    setActive(newValue) {
        const oldValue = this.active;
        if (oldValue !== newValue) {
            this._active = newValue;
            this.requestUpdate('active', oldValue);
        }
    }
    computeDimensions() {
        return this.mdcFoundation.computeDimensions();
    }
    computeIndicatorClientRect() {
        return this.tabIndicator.computeContentClientRect();
    }
    // NOTE: needed only for ShadyDOM where delegatesFocus is not implemented
    focus() {
        this.mdcRoot.focus();
    }
}
__decorate([
    query('.mdc-tab')
], TabBase.prototype, "mdcRoot", void 0);
__decorate([
    query('mwc-tab-indicator')
], TabBase.prototype, "tabIndicator", void 0);
__decorate([
    property()
], TabBase.prototype, "label", void 0);
__decorate([
    property()
], TabBase.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], TabBase.prototype, "hasImageIcon", void 0);
__decorate([
    property({ type: Boolean })
], TabBase.prototype, "isFadingIndicator", void 0);
__decorate([
    property({ type: Boolean })
], TabBase.prototype, "minWidth", void 0);
__decorate([
    property({ type: Boolean })
], TabBase.prototype, "isMinWidthIndicator", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'active' })
], TabBase.prototype, "active", null);
__decorate([
    property()
], TabBase.prototype, "indicatorIcon", void 0);
__decorate([
    property({ type: Boolean })
], TabBase.prototype, "stacked", void 0);
__decorate([
    observer(async function (value) {
        await this.updateComplete;
        this.mdcFoundation.setFocusOnActivate(value);
    }),
    property({ type: Boolean })
], TabBase.prototype, "focusOnActivate", void 0);
__decorate([
    query('mwc-tab-indicator')
], TabBase.prototype, "_tabIndicator", void 0);
__decorate([
    query('.mdc-tab__content')
], TabBase.prototype, "_contentElement", void 0);

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const style$2 = css `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding-right:24px;padding-left:24px;position:relative;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;background:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab .mdc-tab__text-label{color:rgba(0,0,0,.6)}.mdc-tab .mdc-tab__icon{color:rgba(0,0,0,.54);fill:currentColor}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{position:relative;display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;width:24px;height:24px;font-size:24px;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab__ripple{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.mdc-tab__ripple::before,.mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-tab__ripple.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple::before,.mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab__ripple.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab__ripple::before,.mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab__ripple:hover::before{opacity:.04}.mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before,.mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-tab__ripple:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-tab__ripple.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none;flex:1 0 auto;display:flex;justify-content:center}.mdc-tab{height:var(--mdc-tab-height, 48px);margin-left:0;margin-right:0;padding-right:var(--mdc-tab-horizontal-padding, 24px);padding-left:var(--mdc-tab-horizontal-padding, 24px)}.mdc-tab--stacked{height:var(--mdc-tab-stacked-height, 72px)}.mdc-tab::-moz-focus-inner{border:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mdc-tab-text-label-color-default, rgba(0, 0, 0, 0.6))}.mdc-tab:not(.mdc-tab--active) .mdc-tab__icon{color:var(--mdc-tab-color-default, rgba(0, 0, 0, 0.54))}`;

let Tab = class Tab extends TabBase {
};
Tab.styles = style$2;
Tab = __decorate([
    customElement('mwc-tab')
], Tab);

export { Tab };
