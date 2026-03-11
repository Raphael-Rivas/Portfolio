import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-portfolio-apprentissage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-apprentissage.component.html',
  styleUrl: './portfolio-apprentissage.component.css'
})
export class PortfolioApprentissageComponent implements AfterViewInit {
  ngAfterViewInit() {
    document.body.className = 'portfolio-apprentissage-page';
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }
  }
}
