import { Injectable } from '@angular/core';
import { History } from './modules/history';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: History[] = []
  constructor() { }

  getHistory(): void {
    this.history = JSON.parse(localStorage.getItem('history'));
  }

  addHistory(history: History) {
    this.history.push(history);
    localStorage.setItem('history', JSON.stringify(this.history));
  }

}
