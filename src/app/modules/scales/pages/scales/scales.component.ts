import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


const tagsFromServer = ['Major', 'Minor', 'Pentatonic Major', 'Pentatonic Minor'];

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss']
})
export class ScalesComponent implements OnInit {

  notes = 'CDEFGAB'.split('');
  hotTags = tagsFromServer;
  selectedTags: string[] = [];

  scaleForm = new FormGroup({
    tonic: new FormControl('C', Validators.required),
    type: new FormControl('major', Validators.required),
  });

  get tonic() { return this.scaleForm.get('tonic'); }
  get type() { return this.scaleForm.get('type'); }

  ngOnInit() {
  }

  onBack(): void {
    console.log('onBack');
  }

  submitForm() {
    console.log(this.scaleForm);
  }




  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    console.log('You are interested in: ', this.selectedTags);
  }

}
