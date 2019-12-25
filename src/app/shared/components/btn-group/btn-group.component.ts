import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-group',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.scss']
})
export class BtnGroupComponent implements OnInit {
  @Input() group: Record<string, string>;
  @Input() shape = '';
  @Input() size = 'default';
  @Input() type = 'default';

  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
