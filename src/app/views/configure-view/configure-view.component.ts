import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configure-view',
  templateUrl: './configure-view.component.html',
  styleUrls: ['./configure-view.component.css'],
})
export class ConfigureViewComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToWelcomeView() {
    this.router.navigate(['']);
  }

  navigateToPlayView() {
    this.router.navigate(['play']);
  }

}
