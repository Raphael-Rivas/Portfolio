import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements AfterViewInit {
  ngAfterViewInit() {
    document.body.className = 'resume-page';
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }
  }
}
