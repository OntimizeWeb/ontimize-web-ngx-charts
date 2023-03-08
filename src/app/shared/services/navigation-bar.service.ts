import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
// import { ObservableWrapper } from 'ontimize-web-ngx';


@Injectable()
export class NavigationBarService {
  public currentTitle: string = null;
  public visible: boolean = true;

  private _titleEmitter: EventEmitter<any> = new EventEmitter();
  private _visibleEmitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  public setTitle(title: string): void {
    this.currentTitle = title;
    this._emitTitleChanged(this.currentTitle);
  }

  public setVisible(visible: boolean): void {
    this.visible = visible;
    this._emitVisibleChanged(this.visible);
  }


  /**
 * Subscribe to title updates
 */
  public onTitleChange(onNext: (value: any) => void)/*: Object*/ {
    // return ObservableWrapper.subscribe(this._titleEmitter, onNext);
  }

  public onVisibleChange(onNext: (value: boolean) => void)/*: Object*/ {
    // return ObservableWrapper.subscribe(this._visibleEmitter, onNext);
  }


  private _emitTitleChanged(title): void {
    // ObservableWrapper.callEmit(this._titleEmitter, title);
  }

  private _emitVisibleChanged(visible): void {
    // ObservableWrapper.callEmit(this._visibleEmitter, visible);
  }



}
