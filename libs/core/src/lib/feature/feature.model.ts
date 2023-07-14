export interface FeatureRoute {
  id: string;
  text: string;
  icon?: string;
  route?: string;
  module?: string;
  subRoutes?: FeatureRoute[];
}


export interface Feature {
  name: string;
  title: string;
  description: string;
  remoteUrl: string;
  dashboardWidgets: DashboardWidget[];
  route?: FeatureRoute;
}

export interface DashboardWidget {
  name: string,
  title: string,
  description: string,
  module: string,
  componentName: string;
}