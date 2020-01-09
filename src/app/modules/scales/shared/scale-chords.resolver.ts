import { ScalesService } from './scales.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScaleChordsResolver implements Resolve<string[]> {

  constructor(private router: Router, private scaleService: ScalesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.scaleService.getScaleChords(route.params['id']).pipe(
      catchError((err) => this.router.navigateByUrl('/'))
    );
  }
}
