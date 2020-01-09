import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss']
})
export class ScalesComponent implements OnInit {
  scaleTonic = 'C';
  notes = 'C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B'.split(' ');
  scaleTypes = [
    'pelog',
    'scriabin',
    'iwato',
    'kumoijoshi',
    'in-sen',
    'hirajoshi',
    'flat three pentatonic',
    'flat six pentatonic',
    'major pentatonic',
    'ritusen',
    'egyptian',
    'super locrian pentatonic',
    'locrian pentatonic',
    'vietnamese 1',
    'minor pentatonic',
    'minor six pentatonic',
    'minor #7M pentatonic',
    'malkos raga',
    'neopolitan major pentatonic',
    'mixolydian pentatonic',
    'ionian pentatonic',
    'lydian pentatonic',
    'lydian #5P pentatonic',
    'lydian dominant pentatonic',
    'whole tone pentatonic',
    'minor hexatonic',
    'augmented',
    'minor blues',
    'major blues',
    'piongio',
    'prometheus neopolitan',
    'prometheus',
    'mystery #1',
    'six tone symmetric',
    'whole tone',
    'locrian major',
    'double harmonic lydian',
    'harmonic minor',
    'altered',
    'locrian #2',
    'melodic minor fifth mode',
    'lydian dominant',
    'lydian',
    'lydian augmented',
    'melodic minor second mode',
    'melodic minor',
    'locrian',
    'augmented heptatonic',
    'dorian #4',
    'lydian diminished',
    'phrygian',
    'leading whole tone',
    'lydian minor',
    'phrygian dominant',
    'balinese',
    'neopolitan major',
    'minor',
    'romanian minor',
    'harmonic major',
    'double harmonic major',
    'dorian',
    'hungarian minor',
    'hungarian major',
    'oriental',
    'flamenco',
    'todi raga',
    'dominant',
    'persian',
    'major',
    'enigmatic',
    'ionian augmented',
    'lydian #9',
    'purvi raga',
    'spanish heptatonic',
    'bebop',
    'bebop minor',
    'bebop major',
    'bebop locrian',
    'minor bebop',
    'diminished',
    'ichikosucho',
    'minor six diminished',
    'half-whole diminished',
    'kafi raga',
    'composite blues',
    'chromatic'
  ];
  scaleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.scaleForm = this.fb.group({
      tonic: ['C', Validators.required],
      type: ['major', Validators.required]
    });
  }

  selectScale() {
    console.log(this.scaleForm.value);
    if (this.scaleForm.valid) {
      const { tonic, type } = this.scaleForm.value;
      this.router.navigateByUrl(`scales/${tonic}-${String(type).split(' ').join('-')}`);
    } else {
      this.router.navigateByUrl('scales');
    }
  }
}
