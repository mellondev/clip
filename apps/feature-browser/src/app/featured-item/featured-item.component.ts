import { Component, Input } from '@angular/core';
import { Feature } from '../feature-catalog/feature.model';

@Component({
  selector: 'clip-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.scss'],
})
export class FeaturedItemComponent {
  
  @Input({required: true}) feature!: Feature;
}
