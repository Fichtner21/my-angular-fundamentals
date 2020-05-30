import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorHighlight]'
})
export class ColorHighlightDirective implements OnInit {
  @Input() public highlightColor = 'yellow';
  @Input() public highlightAlways: boolean;

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    if(!this.highlightAlways){
      this.highlight(null);
    }    
  }

  constructor(private elementRef: ElementRef) {
    
   }

   public highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  public ngOnInit(): void {
    if(this.highlightAlways){
      this.highlight(this.highlightColor);
    }
  }

}
