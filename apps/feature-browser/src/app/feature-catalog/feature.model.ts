export interface Feature {
  id: string;
  name: string;
  description: string;
  remoteUrl: string;
  image: string;
  icon: string;
  tags: string[];
  documentation: string;
  publishedDate: Date;
  changelog: string;
  featured: boolean;
  version: string;
  versions: FeatureVersion[];
  components: FeatureComponent[];
  routing?: FeatureRoute;
}

export interface FeatureRoute {
  id: string;
  text: string;
  icon?: string;
  route?: string;
  module?: string;
  subRoutes?: FeatureRoute[];
}

export interface FeatureVersion {
  version: string;
  publishedDate: Date;
  changelog: string;
}

export interface FeatureComponent {
  id: string;
  name: string;
  description: string;
  type: string;
  module: string;
  componentName: string;
}


// {
//   "id": "cxp-agents",
//   "name": "Agent Management",
//   "description": "Manage your Agents details and provide dashboard metrics based on your agents",
//   "image": "http://localhost:4023/assets/chart-news.png",
//   "tags": ["agent", "management", "dashboard", "metrics"],
//   "documentation": "http://localhost:4023/docs/cxp-agents",
//   "publishedDate": "2023-07-20T00:00:00.000Z",
//   "changelog": "First release",
//   "versions": [
//     {
//       "version": "1.0.0",
//       "publishedDate": "2023-07-20T00:00:00.000Z",
//       "changelog": "First release"
//     },
//     {
//       "version": "1.0.1",
//       "publishedDate": "2023-07-20T00:00:00.000Z",
//       "changelog": "Bug fixes"
//     }
//   ],
//   "components": [
//     {
//       "id": "cxp-agents-status",
//       "name": "Agent Status",
//       "description": "Chart showing your agents status",
//       "type": "Dashboard Widget"
//     },
//     {
//       "id": "cxp-agents-list",
//       "name": "Agent List",
//       "description": "Table showing your agents",
//       "type": "Dashboard Widget"
//     }
//   ]
// },