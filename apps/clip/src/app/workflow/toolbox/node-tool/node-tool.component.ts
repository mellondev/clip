import { Component, Input } from '@angular/core';

@Component({
  selector: 'clip-node-tool',
  templateUrl: './node-tool.component.html',
  styleUrls: ['./node-tool.component.scss'],
})
export class NodeToolComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() iconName = '';
  @Input() questionType = '';
}
