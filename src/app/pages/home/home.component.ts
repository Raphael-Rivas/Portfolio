import { Component, AfterViewInit } from '@angular/core';

declare var Typed: any;
declare var AOS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    document.body.className = 'index-page';
    this.initAOS();
    this.initTyped();
  }

  private initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }
  }

  private initTyped() {
    const el = document.querySelector('.typed');
    if (el && typeof Typed !== 'undefined') {
      const items = el.getAttribute('data-typed-items');
      if (items) {
        new Typed('.typed', {
          strings: items.split(','),
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }
    }
  }
}
