import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.component.html',
  styles: []
})
export class ScrollTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isVisible = window.scrollY > 100;
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
