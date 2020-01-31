import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { NoteComponent } from '@modules/notes/components';
import { AdDirective } from '@modules/scales/shared';

@Component({
  selector: 'app-new-scale',
  templateUrl: './new-scale.component.html',
  styleUrls: ['./new-scale.component.scss']
})
export class NewScaleComponent implements OnInit {
  selectedValue = 'C';
  notes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];

  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  createNoteComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NoteComponent);

    const viewContainerRef = this.adHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as NoteComponent).note = this.selectedValue;
  }

  clearNotes() {
    this.adHost.viewContainerRef.clear();
  }

}
