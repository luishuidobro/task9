import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective {
  @Input('appChangeBorder')creationDate: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
