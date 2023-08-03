import { Component, Input, OnInit } from '@angular/core';
import {
  BrowserUIAngular,
  jsPlumbService,
} from '@jsplumbtoolkit/browser-ui-angular';

@Component({
  selector: 'clip-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {
  @Input() toolkitId = '';
  toolkit?: BrowserUIAngular;

  constructor(private $jsplumb: jsPlumbService) {}

  ngOnInit() {
    this.toolkit = this.$jsplumb.getToolkit(this.toolkitId);
  }

  dataGenerator(el: Element) {
    const type = el.getAttribute('data-node-type');

    const baseItem = {
      id: Date.now().toString(),
      type,
    };

    // if (type === 'list-question') {
    //   return {
    //     ...baseItem,
    //     listItems: [
    //       { name: 'House', id: 'li1' },
    //       { name: 'Flat', id: 'li2' },
    //       { name: 'Bungalow', id: 'li3' },
    //       { name: 'Parkhome', id: 'li4' },
    //     ],
    //   };
    // }

    // if (type ==='option-question') {
    //   return {
    //     ...baseItem,
    //     Option1Text: 'Option 1',
    //     Option2Text: 'Option 2',
    //     Option3Text: 'Option 3',
    //     Option4Text: 'Option 4',
    //     Option5Text: '',
    //     OptionCount: 4
    //   }
    // }

    return baseItem;
  }

  relayout() {
    const data = this.toolkit?.exportData();
    console.log(data);
    // this.toolkit?.clear();
    // this.toolkit?.load({data: data});
    // console.log(this.toolkit?.exportData());
    // this.toolkit?.render();
    this.$jsplumb.getSurface('surfaceId', (surface) => {
      console.log(surface.id);
      surface.relayout();
      // surface.refresh();
      // surface.adHocLayout({
      //   type: 'Hierarchy',
      //   options: {
      //     padding: { x: 50, y: 50 },
      //   },
      // });
    });
    // this.$jsplumb.getSurface('vxFlowSurface', (surface: Surface) => {
    //   console.log('Surface');

    //   // surface.magnetize();
    //   surface.relayout();
    // });
  }
}
