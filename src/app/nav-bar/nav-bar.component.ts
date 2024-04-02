import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(
    private menuService: MenuService,
    private router: Router
    ) { }

    onMenuClick(menu: string) {
      this.menuService.setSelectedMenu(menu); // Sélectionnez le menu
    }

}
