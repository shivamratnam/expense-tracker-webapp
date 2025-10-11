import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';


export interface TableElement {
  date: Date;
  position: Number;
  category: String;
  description: String;
  amount: Number;
}

const ELEMENT_DATA: TableElement[] = [
  { position: 1, category: "Food", date: new Date(), description:"Desc", amount: 10 },
  { position: 2, category: "Petrol", date: new Date(), description:"Desc", amount: 20 },
  { position: 3, category: "Loan", date: new Date(), description:"Desc", amount: 16 },
  { position: 4, category: "Shopping", date: new Date(), description:"Desc", amount: 85 },
  { position: 5, category: "Vehicle", date: new Date(), description:"Desc", amount: 127 },
  { position: 6, category: "Travel", date: new Date(), description:"Desc", amount: 1000 },
  { position: 7, category: "Credit Card", date: new Date(), description:"Desc", amount: 821 },
  { position: 8, category: "Savings", date: new Date(), description:"Desc", amount: 9290 },
  { position: 9, category: "Grocery", date: new Date(), description:"Desc", amount: 70 },
  { position: 10, category: "Internet", date: new Date(), description:"Desc", amount: 221 },
]

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatTableModule, MatPaginatorModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {

  tableColumns: string[] = ['position', 'category', 'date', 'description', 'amount'];
  tableData = new MatTableDataSource<TableElement>(ELEMENT_DATA);

  date = new Date;

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.tableData.paginator = this.paginator;
  }

}
