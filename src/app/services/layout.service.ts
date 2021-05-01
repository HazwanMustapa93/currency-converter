import { EventEmitter, Injectable, Output } from '@angular/core';

import { LayoutMode } from './../infras/layout-mode';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  @Output() layoutModeEventEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  setLayoutMode(mode: LayoutMode) {
    this.layoutModeEventEmitter.emit(mode)
  }

}
