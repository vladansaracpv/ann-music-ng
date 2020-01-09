import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {
  scale = {
    name: 'F major',
    notes: 'F - G - A - Bb - C - D - E',
    intervals: 'P1 - M2 - M3 - P4 - P5 - M6 - M7',
    formula: '0 - 2 - 4 - 5 - 7 - 9 - 11',
    signature: 'Bb'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(): void {
    this.router.navigateByUrl('scales');
  }

}
