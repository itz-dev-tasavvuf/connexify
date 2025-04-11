export const INDUSTRIES = [
  'SaaS',
  'FinTech',
  'HealthTech',
  'EdTech',
  'E-commerce',
  'AI/ML',
  'IoT',
  'Other'
] as const;

export const FUNDING_STAGES = [
  'Pre-seed',
  'Seed',
  'Series A',
  'Series B',
  'Series C',
  'Growth'
] as const;

export type Industry = typeof INDUSTRIES[number];
export type FundingStage = typeof FUNDING_STAGES[number];