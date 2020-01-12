import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {cutToDecimal, getFloat} from '../utils/utils';

@Component({
  selector: 'input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputFloatComponent)
    }
  ]
})
export class InputFloatComponent implements OnInit, ControlValueAccessor {

  @Input() numberOfDigits: number;
  @Input() round: boolean;
  @Input() placeholder: string;
  @Input() name: string;

  input = '';

  _value: any;
  _onChangeCallback: (value: any) => void;
  _onTouchedCallback: () => void;

  ngOnInit() {
    // init default value
    this.numberOfDigits = this.numberOfDigits || 2;
    this.round = this.round || true;
  }

  parseToFloat(value: string) {
    this.value = getFloat(value);
  }

  writeValue(value: any) {
    let viewValue = value;

    if (!isNaN(viewValue) && viewValue !== null) {
      if (this.round) {
        viewValue = parseFloat(viewValue).toFixed(this.numberOfDigits);
      } else {
        viewValue = cutToDecimal(viewValue, this.numberOfDigits);
      }

      viewValue = viewValue.replace('.', ',');
    }

    this.input = viewValue || '';
  }

  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

   set value(v: any) {
    if (v !== this._value) {
      this._value = v;

      if (this._onChangeCallback) {
        this._onChangeCallback(this._value);
      }
    }
   }

   get value() {
    return this._value;
   }

}
