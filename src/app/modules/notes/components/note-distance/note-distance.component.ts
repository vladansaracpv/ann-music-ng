import { NotesService } from '@core/services/notes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-distance',
  templateUrl: './note-distance.component.html',
  styleUrls: ['./note-distance.component.scss']
})
export class NoteDistanceComponent implements OnInit {
  distanceForm: FormGroup;
  result: number;

  constructor(private fb: FormBuilder, private noteService: NotesService) { }

  ngOnInit() {
    this.distanceForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      metric: ['midi', Validators.required]
    });
  }

  calculateDistance() {
    for (const key in this.distanceForm.controls) {
      if (key in this.distanceForm.controls) {
        this.distanceForm.controls[key].markAsDirty();
        this.distanceForm.controls[key].updateValueAndValidity();
      }
    }
    if (this.distanceForm.valid) {
      const { from, to, metric } = this.distanceForm.value;
      this.noteService.getNoteDistance({ name: from }, { name: to }, metric).subscribe((res) => {
        this.result = res;
      });
    }
    console.log(this.distanceForm.value);
  }

}
