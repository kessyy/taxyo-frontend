export type TaxRuleType = 'PERCENTAGE' | 'FLAT';

export interface TaxRule {
  id: number;
  name: string;
  type: TaxRuleType;
  rate?: number;
  amount?: number;
  appliesIfCarAgeGreaterThan?: number;
}
