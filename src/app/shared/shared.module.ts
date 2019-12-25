import { AntdModule } from './antd.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
    AntdModule,
  ],
  exports: [
    AntdModule,
    CommonModule,
    ReactiveFormsModule,
    ...EXPORTABLES
  ]
})
export class SharedModule { }
