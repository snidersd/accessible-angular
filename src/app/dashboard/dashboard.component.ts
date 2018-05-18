import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stores: Store[] = [];
 
  constructor(private storeService: StoreService) { }
 
  ngOnInit() {
    this.getStores();
  }
 
  getStores(): void {
    this.storeService.getStores()
      .subscribe(stores => this.stores = stores.slice(1, 5));
  }
}
