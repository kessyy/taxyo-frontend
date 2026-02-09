import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent, TableComponent } from '../../../components';
import { CommonModule } from '@angular/common';
import { TaxRule } from '../../../models';

@Component({
  selector: 'app-tax-rules-list',
  imports: [
    CommonModule,
    ButtonComponent,
    TableComponent
  ],
  templateUrl: './tax-rules-list.component.html',
  styleUrl: './tax-rules-list.component.scss',
})
export class TaxRulesListComponent implements OnInit {
  titles: any[] = [];
  taxRules = [
    { id: 1, name: 'Import Duty', type: 'PERCENTAGE', value: '25%' },
    { id: 2, name: 'VAT', type: 'PERCENTAGE', value: '18%' },
    { id: 3, name: 'Environmental Levy', type: 'PERCENTAGE', value: '50%' },
    { id: 4, name: 'Registration Fees', type: 'FLAT', value: '1,500,000' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.titles = [
      { field: 'name', header: 'Tax' },
      { field: 'rate', header: 'Rate (%)' },
      { field: 'type', header: 'Type' }
    ];
  }

  editRule(id: number) {
    this.router.navigate(['/admin/tax-rules', id, 'edit']);
  }

  deleteRule(rule: TaxRule) {
    // TODO: Implement delete functionality
    console.log('Delete rule with id:', rule.id);
  }

  addRule() {
    this.router.navigate(['/admin/tax-rules/add']);
  }
}
