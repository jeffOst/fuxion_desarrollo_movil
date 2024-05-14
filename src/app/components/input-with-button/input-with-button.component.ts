import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { Provider, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
const noop = () => {};
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputWithButtonComponent),
  multi: true
};

@Component({
  selector: 'app-input-with-button',
  templateUrl: './input-with-button.component.html',
  styleUrls: ['./input-with-button.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputWithButtonComponent implements OnInit {
  //@Output() NgNameInput: NgModule;
  @Output() ValueInput: number=0;
  //@Input() control: FormControl;
  @Output() call_click_padre = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}


  plus() {
    this.ValueInput++;
    this._value=this.ValueInput;
    this._onChangeCallback(this.ValueInput);
    this.call_click_padre.emit();
    
  }
  minus() {
    this.ValueInput--;
    this._value=this.ValueInput;
    this._onChangeCallback(this.ValueInput);
    this.call_click_padre.emit();
    
  }
  /////////////////////////
  //The internal data model
  private _value: any = '';

  //Placeholders for the callbacks
  private _onTouchedCallback: () => void = noop;

  private _onChangeCallback: (_:any) => void = noop;

  //get accessor
  get value(): any { return this._value; };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.ValueInput=v;
      console.log('this._value',this._value);
      
      this._onChangeCallback(v);
    }
  }

  //Set touched on blur
  onTouched(e){
    e.preventDefault();
    this.call_click_padre.emit();
    this._onTouchedCallback();
    
    console.log('ValueInput',this.ValueInput);
    
  }
////(blur)="onTouched()"
  //From ControlValueAccessor interface
  writeValue(value: any) {
    this._value = value;
    console.log('writeValue',this.writeValue);
    
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }


}
