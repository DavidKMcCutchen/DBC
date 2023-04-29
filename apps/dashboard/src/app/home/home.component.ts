import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'self-branding-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('headerState', [
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      state('hidden', style({ transform: 'translateY(-100%)', opacity: 0 })),
      transition('visible => hidden', animate('300ms ease-out')),
      transition('hidden => visible', animate('300ms ease-in')),
    ]),
    trigger('bgColorState', [
      state('light', style({ backgroundColor: 'white' })),
      state('dark', style({ backgroundColor: 'black' })),
      transition('light <=> dark', animate('500ms ease')),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  headerState = 'visible';
  bgColorState = 'light';
  projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'assets/images/project1.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'assets/images/project2.jpg',
    },
    // ...add more projects
  ];
  name = '';
  title  = '';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollThreshold = 200; // Adjust this value to determine when the header should disappear
    const bgColorChangeThreshold = 800; // Adjust this value to determine when the background color should change

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.headerState = currentScroll > scrollThreshold ? 'hidden' : 'visible';
    this.bgColorState = currentScroll > bgColorChangeThreshold ? 'dark' : 'light';
  }

  

  constructor() {
    
  }

  ngOnInit() {
    this.name = 'David Kirtland McCutchen';
    this.title = 'Full Stack Developer';
  }


}
