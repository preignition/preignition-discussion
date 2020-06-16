import { LitElement } from 'lit-element';
import { DefaultValueMixin, DoNotSetUndefinedValue } from '@preignition/preignition-mixin';
import { LitNotify } from '@morbidick/lit-element-notify';

export class Base extends
DefaultValueMixin(
  LitNotify(
    DoNotSetUndefinedValue(
      LitElement))) {

  static get properties() {

    return {

      ...super.properties,

      /*
       * `log`  true to show log
       */
      log: {
        type: Boolean,
      }
    };
  }

}

export default Base;
