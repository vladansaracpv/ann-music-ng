import { silentLogger, SilentLogger, Logger, NameLogger } from './services';
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    Logger, // Type provider. Token: Logger, instance: Logger
    { provide: SilentLogger, useValue: silentLogger }, // Value provider. Token: SilentLogger, instance: silentLoger
    { provide: NameLogger, useClass: NameLogger, deps: [Logger] } // Class provider. Token: NameLogger, instance: NameLogger(Logger)
  ]
})
export class CoreModule { }
