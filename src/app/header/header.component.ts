import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Response} from "@angular/http";
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
