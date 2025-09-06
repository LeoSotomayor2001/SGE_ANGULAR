import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: false,
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
@Input() errors: string[] | null = null;
}
