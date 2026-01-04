export interface TaxRule {
  id: number;
  name: string;
  percentage: number;
  appliesTo: 'IMPORT_DUTY' | 'VAT' | 'WITHHOLDING' | 'INFRASTRUCTURE' | 'ENVIRONMENT';
}
