import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {MessageService} from '../message.service';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit, OnChanges, OnDestroy {

  private _name: string;
  private subscription: Subscription;

  messageStream$;

  @Input() message: string;

  @Input()
  set name(value: string) {
    this._name = value.toLowerCase();
  }

  get name(): string {
    return this._name;
  }

  @Output() replyToParent = new EventEmitter<string>();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.listener$.subscribe(msg => this.message = msg);
    this.messageStream$ = this.messageService.listener$;
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.message) {
      console.log('changes.message', changes.message.currentValue);
    }

    if (changes.name) {
      console.log('changes.name', changes.name.currentValue);
    }

    if (changes.message && changes.name) {
      console.log('message and name was triggered');
    }
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  reply(message: string) {
    this.replyToParent.emit(message);
  }

}
