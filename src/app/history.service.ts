import { Injectable } from '@angular/core';
import { History } from './modules/history';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HistoryService {
  searchhistory: History[] = []

  constructor() { }

  getHistory(): void {
    let searchedHistory = JSON.parse(localStorage.getItem('searchhistory'));

    if (searchedHistory) {
      this.searchhistory = searchedHistory;
    }
  }

  addHistory(history: History) {
    this.searchhistory.push(history);
    localStorage.setItem('searchhistory', JSON.stringify(this.searchhistory));
  }

}
