import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  imageUrl: string =
    'https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/logo_usage/NDSU.logo.typebox.jpg';

  isSpecial: boolean = false;
  username: string = '';

  onMouseOver(): void {
    this.isSpecial = !this.isSpecial;
  }

  checkEmpty(): boolean {
    return this.username == '';
  }

  onClick(): void {
    this.username = 'hello world';
  }
}
