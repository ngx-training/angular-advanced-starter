import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent implements OnInit {

  private _messageValue: string;

  @Output() messageChange = new EventEmitter();

  @Input()
  get message() {
    return this._messageValue;
  }

  set message(value) {
    this._messageValue = value;
    this.messageChange.emit(this._messageValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
