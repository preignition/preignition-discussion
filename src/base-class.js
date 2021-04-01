import { LitElement } from 'lit-element';
import { DefaultValueMixin, DoNotSetUndefinedValue } from '@preignition/preignition-mixin';

const deep = (action, obj, keys, id, key) => {
  keys = keys.split('.');
  id = keys.splice(-1, 1);
  for (key in keys) obj = obj[keys[key]] = obj[keys[key]] || {};
  return action(obj, id);
};

const get = (obj, prop) => obj[prop];
const set = n => (obj, prop) => (obj[prop] = n);

export class Base extends
DefaultValueMixin(
    DoNotSetUndefinedValue(
      LitElement)) {
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

  get(path) {
    return deep(get, this, path);
  }

  set(path, value) {
    return deep(set(value), this, path);
  }
}

export default Base;
