import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

  noteForm = new FormGroup({
    name: new FormControl('', Validators.required),
    octave: new FormControl('', [Validators.required, Validators.min(3), Validators.max(5)]),
  });

  get name() { return this.noteForm.get('name'); }
  get octave() { return this.noteForm.get('octave'); }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.noteForm);
  }
}
