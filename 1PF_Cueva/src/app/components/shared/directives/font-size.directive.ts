import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    console.log('here', elementRef);

    this.renderer.setStyle(this.elementRef.nativeElement,'font-size','20px')
  }
  
  
}
