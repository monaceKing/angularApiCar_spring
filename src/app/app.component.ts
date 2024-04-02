import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NavLeftComponent } from "./nav-left/nav-left.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, NavLeftComponent, CommonModule ]
})
export class AppComponent {
  isNavOpen: boolean = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
