import { ChordsService } from './chords.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ChordResolver implements Resolve<any> {
    constructor(private router: Router, private chordService: ChordsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return of({ name: 'C major' }).pipe(catchError((err) => this.router.navigateByUrl('/')));
    }

}
