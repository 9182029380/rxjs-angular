import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsComponent } from "./components/components.component";

@Component({
  selector: 'app-root',
  imports: [ComponentsComponent],
  template: `
    <app-components/>
    
    `,
  styles: [
    `
    main {
     padding:16px;
    }
    `
  ],
})
export class AppComponent {
  title = 'my-rxjs-app';
}
