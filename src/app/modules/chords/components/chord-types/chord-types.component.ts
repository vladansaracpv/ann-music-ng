import { ChordsService } from './../../shared/chords.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chord-types',
  templateUrl: './chord-types.component.html',
  styleUrls: ['./chord-types.component.scss']
})
export class ChordTypesComponent implements OnInit {
  @Input() types: string[];
  @Output() selected = new EventEmitter<{ checked: boolean, tag: string }>();
  @Output() allSelected = new EventEmitter<boolean>();

  checked = false;
  selectedTags: string[] = [];

  constructor(private chordService: ChordsService) { }

  ngOnInit() {
    console.log('Types: ', this.types);
  }

  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    this.selected.emit({ checked, tag });
  }

  getAllTypes(checked: boolean) {
    this.allSelected.emit(checked);
  }

}
