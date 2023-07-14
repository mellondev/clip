module.exports = {
  name: 'agents',
  exposes: {
    './Module': 'apps/agents/src/app/remote-entry/entry.module.ts',
    './Dashboard/AgentStatus': 'apps/agents/src/app/dashboard/agent-status/agent-status.component.ts',
    './AgentList': 'apps/agents/src/app/agent-list/agent-list.component.ts',
  },
};
