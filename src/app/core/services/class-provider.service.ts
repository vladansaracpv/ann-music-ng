import { Logger } from './type-provider.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NameLogger extends Logger {
  name = 'Ng4Music: ';
  constructor(private logger: Logger) { super(); }

  log(msg: any) { super.log(this.name + msg); }
  error(msg: any) { super.error(this.name + msg); }
  warn(msg: any) { super.warn(this.name + msg); }
}
