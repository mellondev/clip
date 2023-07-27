export interface Agent {
  name: string;
  state: string;
  accepted: number;
  rejected: number;
  avgHandling: string;
  team?: string;
}

export const AGENT_DATA: Agent[] = [
  { name: 'Craig Mellon', state: 'available', accepted: 10, rejected: 0, avgHandling: '01:00', team: 'CS Team' },
  { name: 'Matt Grove',state: 'logged-out', accepted: 4, rejected: 0, avgHandling: '6:30', team: 'CS Team'},
  { name: 'John Doe',state: 'logged-out', accepted: 2, rejected: 0, avgHandling: '13:20', team: 'CS Team' },
  { name: 'Billy Sharp', state: 'logged-out', accepted: 12, rejected: 1, avgHandling: '0:46', team: 'CS Team'  },
  { name: 'Andy Nicolson', state: 'available',accepted: 24, rejected: 6, avgHandling: '2:23' , team: 'CS Team' },
  { name: 'Craig Mellon', state: 'break',accepted: 10, rejected: 0, avgHandling: '01:00' , team: 'CS Team' },
  { name: 'Matt Grove',state: 'available', accepted: 4, rejected: 0, avgHandling: '6:30' , team: 'CS Team' },
  { name: 'John Doe',state: 'in-call', accepted: 2, rejected: 0, avgHandling: '13:20' , team: 'CS Team' },
  { name: 'Billy Sharp', state: 'in-call',accepted: 12, rejected: 1, avgHandling: '0:46' , team: 'CS Team' },
  { name: 'Andy Nicolson', state: 'in-call',accepted: 24, rejected: 6, avgHandling: '2:23' , team: 'Delivery' },
  { name: 'Craig Mellon',state: 'in-call', accepted: 10, rejected: 0, avgHandling: '01:00', team: 'Delivery'},
  { name: 'Matt Grove', state: 'available',accepted: 4, rejected: 0, avgHandling: '6:30' , team: 'Delivery'},
  { name: 'John Doe',state: 'wrapup', accepted: 2, rejected: 0, avgHandling: '13:20' , team: 'Delivery'},
  { name: 'Billy Sharp', state: 'logged-out',accepted: 12, rejected: 1, avgHandling: '0:46' },
  { name: 'Andy Nicolson',state: 'logged-out', accepted: 24, rejected: 6, avgHandling: '2:23' },
  { name: 'Craig Mellon',state: 'in-call', accepted: 10, rejected: 0, avgHandling: '01:00' },
  { name: 'Matt Grove', state: 'logged-out',accepted: 4, rejected: 0, avgHandling: '6:30' , team: 'Complaints'},
  { name: 'John Doe',state: 'logged-out', accepted: 2, rejected: 0, avgHandling: '13:20' , team: 'Complaints'},
  { name: 'Billy Sharp',state: 'logged-out', accepted: 12, rejected: 1, avgHandling: '0:46' , team: 'Complaints'},
  { name: 'Andy Nicolson',state: 'in-call', accepted: 24, rejected: 6, avgHandling: '2:23' , team: 'Complaints'},
];