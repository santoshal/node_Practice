import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarOpen:boolean=false;
  title = 'nodePracticeAngular';

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
