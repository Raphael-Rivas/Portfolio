import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  @HostListener('window:scroll')
  onScroll() {
    const body = document.querySelector('body');
    if (body) {
      window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
    }
  }

  toggleMobileNav() {
    const body = document.querySelector('body');
    const toggle = document.querySelector('.mobile-nav-toggle');
    if (body && toggle) {
      body.classList.toggle('mobile-nav-active');
      toggle.classList.toggle('bi-list');
      toggle.classList.toggle('bi-x');
    }
  }
}
