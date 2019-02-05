import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {GM} from '../../interfaces/greasemonkey';

export function getGameValue<T = number>(variable: string): Observable<T> {
  return timer(0, 1000).pipe(
    map(() => GM.unsafeWindow[variable])
  );
}
