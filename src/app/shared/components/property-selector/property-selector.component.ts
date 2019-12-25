import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property-selector',
  templateUrl: './property-selector.component.html',
  styleUrls: ['./property-selector.component.scss']
})
export class PropertySelectorComponent implements OnInit {
  @Input() properties: string[];
  @Input() defaultProperty?: string;
  @Output() changed = new EventEmitter<string>();

  property: string;

  ngOnInit() {
    this.property = this.defaultProperty || this.properties[0];
  }


  setNewProperty(direction: number) {
    const i = this.getNewPropertyIndex(direction);
    this.property = this.properties[i];
    this.emitChange(this.property);
  }

  getNewPropertyIndex(direction: number) {
    const i = this.properties.indexOf(this.property);
    const numOfProps = this.properties.length;
    const next = ((i + direction) + numOfProps) % numOfProps;
    return next;
  }

  emitChange(property: string) {
    this.changed.emit(property);
  }

}
