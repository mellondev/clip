export interface Feature {
  name: string;
  title: string;
  description: string;
  remoteUrl: string;
  dashboardWidgets: DashboardWidget[];
}

export interface DashboardWidget {
  name: string,
  title: string,
  description: string,
  module: string,
  componentName: string;
}