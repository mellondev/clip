import { Component, Input } from '@angular/core';
import { BaseQuestionComponent } from '../question-node.component';

@Component({
  templateUrl: 'simple-node.component.html',
  styleUrls: ['simple-node.component.scss'],
})
export class SimpleNodeComponent extends BaseQuestionComponent {
  override questionType = 'simple';
  @Input() name = '';
}
