import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteProps } from 'ann-music-note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  title: string;
  returnUrl: string;
  note: NoteProps;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.title = data.title;
      this.returnUrl = data.returnUrl;
      this.note = data.note;
      console.log('Note', this.note);
    });
  }

  goBack() {
    this.router.navigate([this.returnUrl]);
  }

}
