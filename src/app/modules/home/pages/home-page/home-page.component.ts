import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardComponent } from '../../../../shared/card/card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {}
