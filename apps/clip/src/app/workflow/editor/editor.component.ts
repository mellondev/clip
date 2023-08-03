import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  jsPlumbService,
  BrowserUIAngular,
  jsPlumbSurfaceComponent,
  AngularViewOptions,
  AngularRenderOptions,
} from '@jsplumbtoolkit/browser-ui-angular';
import {
  BlankEndpoint,
  DotEndpoint,
  AnchorLocations,
  ArrowOverlay,
  LabelOverlay,
  OrthogonalConnector,
  EdgePathEditor,
  EVENT_NODE_ADDED,
  EVENT_EDGE_ADDED,
  EVENT_CANVAS_CLICK,
} from '@jsplumbtoolkit/browser-ui';
import { SimpleNodeComponent } from '../nodes/simple-node/simple-node.component';
import { SwitchNodeComponent } from '../nodes/switch-node/switch-node.component';
import { InboundCallNodeComponent } from '../nodes/inbound-call-node/inbound-call-node.component';

const COMMON = 'common';
const COMMON_ITEM = 'common_item';

@Component({
  selector: 'clip-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild(jsPlumbSurfaceComponent) flowchart?: jsPlumbSurfaceComponent;

  surfaceId = 'surfaceId';
  toolkitId = 'toolkitId';

  toolkit?: BrowserUIAngular;
  pathEditor?: EdgePathEditor;

  view: AngularViewOptions = {
    nodes: {
      default: {
        component: SimpleNodeComponent,
      },
      'yes-no-question': {
        component: SwitchNodeComponent,
      },
      'text-question': {
        component: InboundCallNodeComponent,
      },
    },
    edges: {
      [COMMON]: {
        connector: {
          type: OrthogonalConnector.type,
          options: {
            stub: 40,
            gap: 10,
            cornerRadius: 5,
            alwaysRespectStubs: true,
          },
        },
        paintStyle: {
          strokeWidth: 2,
          stroke: '#90A4AE',
          outlineWidth: 3,
          outlineStroke: 'transparent',
        }, //  paint style for this edge type.
        events: {},
        overlays: [
          {
            type: ArrowOverlay.type,
            options: { location: 1, width: 10, length: 10 },
          },
          // {
          //   type: LabelOverlay.type,
          //   options: {
          //     label: '+',
          //     location: 0.5,
          //   },
          // },
        ],
      },
      [COMMON_ITEM]: {
        parent: COMMON,
        // anchors: [
        //   AnchorLocations.ContinuousBottom,
        //   { type: 'Continuous', options: { faces: ['top', 'left', 'right'] } },
        // ],
      },
    },
    ports: {
      source: {
        anchor: {
          type: 'Continuous',
          options: { faces: ['bottom', 'left', 'right'] },
        },
        endpoint: BlankEndpoint.type,
        maxConnections: 1,
        edgeType: COMMON,
        isSource: true,
      },
      target: {
        anchor: {
          type: 'Continuous',
          options: { faces: ['top', 'left', 'right'] },
        },
        maxConnections: -1,
        endpoint: DotEndpoint.type,
        paintStyle: { fill: '#90A4AE' },
        isTarget: true,
        edgeType: COMMON,
      },
    },
  };

  renderParams: AngularRenderOptions = {
    layout: {
      type: 'ForceDirected',
    },
    // layout: {
    //   type:"Hierarchical",
    //   options:{
    //     padding: { x:50, y:50 }
    //   }
    // },
    refreshLayoutOnEdgeConnect: true,
    wheel: { reverse: true },
    events: {
      [EVENT_NODE_ADDED]: (params) => {
        console.log('node added');
        console.log(params);
      },
      [EVENT_EDGE_ADDED]: (params) => {
        console.log('edge added');
      },
      [EVENT_CANVAS_CLICK]: (e: MouseEvent) => {
        (
          document.getElementsByClassName(
            'question-text-editing'
          )[0] as HTMLInputElement
        )?.blur();
      },
    },

    zoomToFit: false,
    consumeRightClick: false,
  };

  constructor(private $jsplumb: jsPlumbService) {}

  ngOnInit() {
    this.toolkit = this.$jsplumb.getToolkit('toolkitId', {});
  }

  ngAfterViewInit() {
    // this.$jsplumb.getSurface('surfaceId', (s) => {
    //   s.load({
    //   nodes:[ {id:"1", name:"one"}, {id:"2", name:"two"}],
    //   edges:[ {source:"1", target:"2" } ]
    // })});

    this.toolkit?.load({
      type: 'json',
      data: {
        nodes: [
          { id: '1', name: 'Identify' },
          { id: '2', name: 'Play Welcome Message' },
        ],
      },
    });

    this.flowchart?.surface?.centerContent();

    if (this.flowchart?.surface) {
      this.pathEditor = new EdgePathEditor(this.flowchart?.surface);
    }
  }
}
