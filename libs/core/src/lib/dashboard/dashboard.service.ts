import { Injectable } from '@angular/core';
import { DashboardItem } from './dashboard-item.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardUrl = 'assets/dashboard-config.json';

  loadDashboard(): DashboardItem[] {
    const savedDashboard = localStorage.getItem('dashboardConfig');
    console.log('loadedDashboard', savedDashboard);
    if (savedDashboard) {
      return JSON.parse(savedDashboard);
    }

    return [];
  }
}
