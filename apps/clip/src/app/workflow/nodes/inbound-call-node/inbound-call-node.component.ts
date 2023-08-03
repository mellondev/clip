import { Component, Input } from '@angular/core';
import { BaseQuestionComponent } from '../question-node.component';

@Component({
  selector: 'clip-inbound-call-node',
  templateUrl: './inbound-call-node.component.html',
  styleUrls: ['./inbound-call-node.component.scss'],
})
export class InboundCallNodeComponent extends BaseQuestionComponent {
  override questionType = 'inbound-call';
  @Input() name = '';
}
