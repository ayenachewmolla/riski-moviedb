import { Component, OnInit } from '@angular/core';
import { HistoryService } from "../history.service"
import { from } from 'rxjs';
import { History } from '../modules/history'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  
  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    
  }

}
