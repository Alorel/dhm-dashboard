import {cloneDeep, isEqual} from 'lodash-es';
import {distinctUntilChanged} from 'rxjs/operators';

export function distinctUntilObjectChanged<T>() {
  return distinctUntilChanged<T>(isEqual);
}

distinctUntilObjectChanged.cloned = function <T>() {
  return distinctUntilChanged<T>((a: any, b: any) => isEqual(cloneDeep(a), b));
};
