import { Industry, FundingStage } from './constants';

export interface StartupFormData {
  name: string;
  description: string;
  industry: Industry | '';
  location: string;
  funding_stage: FundingStage | '';
  website: string;
}

export interface StartupFormProps {
  onSubmit: (data: StartupFormData) => Promise<void>;
  loading?: boolean;
}