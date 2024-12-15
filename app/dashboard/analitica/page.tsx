'use client';

import { AnalyticsSummary } from '@/components/dashboard/analytics/analytics-summary';
import { AnalyticsChart } from '@/components/dashboard/analytics/analytics-chart';
import { AnalyticsTable } from '@/components/dashboard/analytics/analytics-table';

export default function AnalyticaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Analítica</h1>

      <AnalyticsSummary />
      <AnalyticsChart />
      <AnalyticsTable />
    </div>
  );
}