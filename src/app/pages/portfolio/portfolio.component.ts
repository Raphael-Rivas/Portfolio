import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects';

declare var AOS: any;
declare var Isotope: any;
declare var imagesLoaded: any;

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {
  projects: Project[] = PROJECTS.filter(p => p.id !== 'legends');

  ngAfterViewInit() {
    document.body.className = 'portfolio-page';
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }
    this.initIsotope();
  }

  private initIsotope() {
    setTimeout(() => {
      document.querySelectorAll('.isotope-layout').forEach((isotopeItem) => {
        const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
        const container = isotopeItem.querySelector('.isotope-container');
        if (container && typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
          imagesLoaded(container, () => {
            new Isotope(container, {
              itemSelector: '.isotope-item',
              layoutMode: layout,
              filter: filter,
              sortBy: sort
            });
          });
        }
      });
    }, 100);
  }
}
