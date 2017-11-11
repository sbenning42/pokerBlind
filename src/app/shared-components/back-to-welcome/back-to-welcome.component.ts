import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-back-to-welcome',
  templateUrl: './back-to-welcome.component.html',
  styleUrls: ['./back-to-welcome.component.css'],
})
export class BackToWelcomeComponent implements OnInit {

  @Output() backToWelcomeEvent = new EventEmitter();

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
  }

  backToWelcome() {
    this.game.reset();
    this.backToWelcomeEvent.emit();
  }

}
