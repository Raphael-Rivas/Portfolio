import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects';

declare var AOS: any;
declare var Swiper: any;

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = PROJECTS.find(p => p.id === id);
  }

  ngAfterViewInit() {
    document.body.className = 'portfolio-details-page';
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }
    this.initSwiper();
  }

  private initSwiper() {
    setTimeout(() => {
      document.querySelectorAll('.init-swiper').forEach((el) => {
        if (typeof Swiper !== 'undefined') {
          new Swiper(el, {
            loop: false,
            speed: 600,
            autoplay: { delay: 5000 }
          });
        }
      });
    }, 100);
  }
}
