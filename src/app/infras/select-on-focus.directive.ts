import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[SelectOnFocus]'
})
export class SelectOnFocusDirective {
  constructor(private elementRef: ElementRef) {
  }

  @HostListener('focus') onFocus() {
    this.elementRef.nativeElement.select();
  }
}
