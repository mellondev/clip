module.exports = {
  name: 'agents',
  exposes: {
    './Module': 'apps/agents/src/app/remote-entry/entry.module.ts',
    './Dashboard/AgentStatus': 'apps/agents/src/app/dashboard/agent-status/agent-status.component.ts',
    './Dashboard/AgentList': 'apps/agents/src/app/dashboard/agent-list/agent-list.component.ts',
    './Dashboard/SLATrend': 'apps/agents/src/app/dashboard/sla-trend/sla-trend.component.ts',
    './Dashboard/LoginTrend': 'apps/agents/src/app/dashboard/logged-in-trend/logged-in-trend.component.ts',
  },
};
