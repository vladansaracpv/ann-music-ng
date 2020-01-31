import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @Input() background = '#096dd9';
  @Input() color = '#fff';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.background, this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(background: string, color: string) {
    this.el.nativeElement.style.backgroundColor = background;
    this.el.nativeElement.style.color = color;
  }

}
