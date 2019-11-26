import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective implements AfterViewInit {
  @Input('appChangeBorder') creationDate;

  constructor(private el: ElementRef, private renderer: Renderer2) {
   }

   ngAfterViewInit () {
    const currentDate = new Date();
    const auxDate = new Date();
    auxDate.setDate(auxDate.getDate() - 14);
    if (this.creationDate < currentDate && (this.creationDate >= auxDate)) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '3px solid green');
    }

    if (this.creationDate > currentDate) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '3px solid blue');
    }
    
   }

}
