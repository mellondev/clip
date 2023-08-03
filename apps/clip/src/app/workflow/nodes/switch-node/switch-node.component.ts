import { Component, Input } from '@angular/core';
import { BaseQuestionComponent } from '../question-node.component';

@Component({
  selector: 'clip-switch-node',
  templateUrl: './switch-node.component.html',
  styleUrls: ['./switch-node.component.scss'],
})
export class SwitchNodeComponent extends BaseQuestionComponent {
  override questionType = 'Switch';
  @Input() name = '';
}
