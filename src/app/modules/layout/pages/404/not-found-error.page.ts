import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-error',
  template: `
    <nz-result nzStatus="404" nzTitle="404" nzSubTitle="Sorry, the page you visited does not exist.">
      <div nz-result-extra>
        <button nz-button nzType="primary" routerLink="/">Back Home</button>
      </div>
    </nz-result>
  `
})
export class NotFoundErrorComponent { }
