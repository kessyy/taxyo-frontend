import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-table',
  imports: [
    CommonModule, TableModule, ButtonModule
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input() columns: { field: string; header: string }[] = [];
  @Input() data: any[] = [];

  @Input() actionsTemplate?: TemplateRef<any>;

  ngOnInit(): void {}

}
