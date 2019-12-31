import { AntdModule } from './antd.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BtnGroupComponent, PropertySelectorComponent } from './components';

const DECLARABLES = [BtnGroupComponent, PropertySelectorComponent];
const EXPORTABLES = [BtnGroupComponent, PropertySelectorComponent];

@NgModule({
  declarations: [
    ...DECLARABLES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AntdModule,
  ],
  exports: [
    AntdModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...EXPORTABLES
  ]
})
export class SharedModule { }
