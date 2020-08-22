import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // receiving below 4 properties from app component template html
  @Input() title = '';
  @Input() username = '';
  @Input() content = '';
  @Input() imageUrl = '';

  constructor() {}

  ngOnInit(): void {}
}
