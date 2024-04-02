import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-left',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.css'
})
export class NavLeftComponent {
  selectedMenu: string | undefined;
  private subscription: Subscription;

  constructor(private menuService: MenuService) {
    this.subscription = this.menuService.selectedMenu$.subscribe(menu => {
      this.selectedMenu = menu;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
