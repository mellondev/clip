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
  installed?: boolean;
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