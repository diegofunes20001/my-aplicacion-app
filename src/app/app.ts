import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
onContactClick() {
throw new Error('Method not implemented.');
}
developerName: any;
onSocialClick(arg0: string) {
throw new Error('Method not implemented.');
}
currentYear: any;
companyName: any;
getAngularVersion() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('my-aplicacion-app');
}
