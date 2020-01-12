import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Observable string source
  private subjectListener = new Subject<string>();

  // Obserbable string stream
  listener$ = this.subjectListener.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.subjectListener.next(message);
  }
}
