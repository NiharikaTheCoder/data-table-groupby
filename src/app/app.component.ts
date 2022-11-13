import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import dataJson from './datasource.json';

export interface UserData {
    machineNumber: string;
    serialNumber: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'clavax-data-table';

    displayedColumns: string[] = ['machineNumber', 'serialNumber'];
    dataSource: any = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor() {
        // Assign the data to the data source for the table to render
        let machineData: any = [];
        dataJson.forEach(ele => {
            machineData.push(ele['content']['machineInformation']);
        });

        this.dataSource.data = machineData;
    }
    isGroup(index:any, item:any): boolean {
        return item.level;
      }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}
