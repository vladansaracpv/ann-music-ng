import { Component } from '@angular/core';

@Component({
  selector: 'app-authorization-error',
  template: `
    <nz-result nzStatus="403" nzTitle="403" nzSubTitle="Sorry, you are not authorized to access this page.">
      <div nz-result-extra>
        <button nz-button nzType="primary" routerLink="/">Back Home</button>
      </div>
    </nz-result>
  `
})
export class AuthorizationErrorComponent { }
