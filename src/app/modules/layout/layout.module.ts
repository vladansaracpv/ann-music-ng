import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  NotFoundErrorComponent
} from '.';
import { LayoutComponent } from './components/layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundErrorComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundErrorComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
