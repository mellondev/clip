export interface SideNavRoute {
  id: string;
  text: string;
  route?: string;
  icon?: string;
  isExpanded?: boolean;
  // showBadge?: boolean;
  subItems?: SideNavRoute[];
  // rolesCanAccess?: string[];
  // showOnFeatures?: string[];
  // hideOnFeatures?: string[];
}

export const appNavRoutes: SideNavRoute[] = [
  {
    id: 'clipDashboardLink',
    text: 'Dashboard',
    icon: 'dashboard',
    isExpanded: false,
    route: '/dashboard',
    // rolesCanAccess: ['RcsAdmin', 'RcsUser'],
  },
  {
    id: 'agentManagementLink',
    text: 'Agent Management',
    icon: 'group',
    isExpanded: false,
    // rolesCanAccess: ['CompanyAdmin'],
    subItems: [
      {
        id: 'agentsLink',
        text: 'Agents',
        route: '/agents',
      },
      {
        id: 'teamsLink',
        text: 'Teams',
        route: '/agents/teams',
        // rolesCanAccess: ['CompanyAdmin'],
      }
    ],
  },
  {
    id: 'customerLink',
    text: 'Customer',
    route: '/login',
    icon: 'business',
    isExpanded: false,
    // rolesCanAccess: ['Development', 'ClUkAdmin'],
  },
  {
    id: 'settings',
    text: 'Settings',
    icon: 'settings',
    isExpanded: false,
    // rolesCanAccess: ['Development', 'ClUkAdmin', 'CompanyAdmin'],
    subItems: [
      {
        id: 'dispositionCodesLink',
        text: 'Disposition Codes',
        route: '/settings/disposition',
        // rolesCanAccess: ['Development', 'ClUkAdmin'],
      },
      {
        id: 'breakCodes',
        text: 'Break Codes',
        route: '/settings/break-codes',
        // rolesCanAccess: ['Development', 'ClUkAdmin'],
      },
    ],
  },
  {
    id: 'support-portal',
    text: 'Support Portal',
    route: '/support-portal',
    icon: 'help',
    isExpanded: false,
    // rolesCanAccess: ['Development', 'ClUkAdmin'],
  },
];
