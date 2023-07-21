import { Component, Input } from '@angular/core';
import { Feature } from '../feature-catalog/feature.model';

@Component({
  selector: 'clip-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss'],
})
export class FeatureItemComponent {
  @Input({required: true}) feature!: Feature;
}
