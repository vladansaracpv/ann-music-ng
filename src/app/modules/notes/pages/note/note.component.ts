import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  title: string;
  returnUrl: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.title = data.title;
      this.returnUrl = data.returnUrl;
    });
  }

  goBack() {
    this.router.navigate([this.returnUrl]);
  }

}
