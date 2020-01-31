import { SilentLogger, AppLogger, Logger, NameLogger } from './core/services';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-layout></app-layout>`,
})
export class AppComponent {
  title = 'app';
  constructor(@Inject(SilentLogger) silent: AppLogger, loger: Logger, nameLogger: NameLogger) {
    silent.log('Hello');
    nameLogger.log('Welcome');
  }
}
