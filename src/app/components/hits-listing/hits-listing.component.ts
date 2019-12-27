import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

//componens 
import { DialogComponent } from '../dialog/dialog.component';

// models
import { Hit } from '../../models/hits'

//services
import { CommonService } from 'src/app/services/common.service';



@Component({
    selector: 'app-hits-listing',
    templateUrl: './hits-listing.component.html',
    styleUrls: ['./hits-listing.component.css']
})
export class HitsListingComponent implements OnInit {

    dataSource = new MatTableDataSource<Hit>();
    displayedColumns = ['title', 'url', 'created_at', 'author'];
    search: FormControl;


    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private commonService: CommonService, private matDialog: MatDialog) {

        // call api every 10 secs
        interval(10000).pipe( startWith(0),switchMap(() => this.commonService.getHitsListing())).subscribe(
            (hits) => {
                if (typeof hits.hits != typeof undefined) {
                    this.dataSource = new MatTableDataSource(hits.hits);
                    this.init();
                }
            }
        );
    }

    ngOnInit() {

    }

    /**
     * Initialize table on data loads
     *
     * @memberof HitsListingComponent
     */
    init() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = this.newFilterPredicate();
    }

    /**
     * Filters table data by title
     *
     * @param {string} filter
     * @memberof HitsListingComponent
     */
    applyFilter(filter: string) {
        this.dataSource.filter = JSON.stringify(filter.trim().toLowerCase());
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }


    /**
     * Override filter predicate
     *
     * @returns
     * @memberof HitsListingComponent
     */
    newFilterPredicate() {
        let filterFunction = (data: any, filter: string): boolean => {
            let searchData = JSON.parse(filter);
            return data.title.trim().toLowerCase().indexOf(searchData.trim().toLowerCase()) !== -1;
        }
        return filterFunction;
    }

    /**
     * Open dialog on table row click
     *
     * @param {Hit} row
     * @memberof HitsListingComponent
     */
    openDialog(row: Hit) {
        this.matDialog.open(DialogComponent, {
            data: { rowJson: row }
        });
    }

}
