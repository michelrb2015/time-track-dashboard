import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() current!: number;
  @Input() previous!: number;
  @Input() title!: string;

  route: string = '';
  background_color: string = '';

  constructor() { }

  ngOnInit(): void {
    this.route = `assets/images/icon-${this.title.replace(' ', '-').toLowerCase()}.svg`;

    switch (this.title) {
      case 'Work':
        this.background_color = 'light-orange'
        break;
      case 'Play':
        this.background_color = 'soft-blue'
        break;
      case 'Study':
        this.background_color = 'light-red'

        break;
      case 'Exercise':
        this.background_color = 'lime-green'

        break;
      case 'Social':
        this.background_color = 'violet'

        break;
      case 'Self Care':
        this.background_color = 'soft-orange'

        break;

      default:
        break;
    }
  }

}

