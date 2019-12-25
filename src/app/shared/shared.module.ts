import { AntdModule } from './antd.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnGroupComponent, PropertySelectorComponent } from './components';

const DECLARABLES = [BtnGroupComponent, PropertySelectorComponent];
const EXPORTABLES = [BtnGroupComponent, PropertySelectorComponent];

@NgModule({
  declarations: [
    ...DECLARABLES
  ],
  imports: [
    CommonModule,
    AntdModule,
  ],
  exports: [
    AntdModule,
    ...EXPORTABLES
  ]
})
export class SharedModule { }
