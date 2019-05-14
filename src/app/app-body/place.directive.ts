import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPlace]'
})
export class PlaceDirective {

  constructor(private element: ElementRef) { }

}
