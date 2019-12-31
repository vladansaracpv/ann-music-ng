import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScaleResolver implements Resolve<string[]> {

  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return of('C,D,E,F,G,A,B').pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
