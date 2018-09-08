import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';


@Directive({
  selector: '[appMultiColor]'
})
export class MultiColorDirective implements AfterViewInit {

  constructor(private elRef: ElementRef,
              private render: Renderer2) {

  }

  ngAfterViewInit() {
    const textOfElement: string = this.elRef.nativeElement.innerText;

    this.setColorOfName(textOfElement);
    this.setClassName(textOfElement);
  }

  private setColorOfName(name: string): any {
    const firstLetter = name[0],
      elementColor = this.elRef.nativeElement.style;

    switch (firstLetter) {
      case 'D':
        elementColor.color = 'red';
        break;
      case 'O':
        elementColor.color = 'pink';
        break;
      case 'S':
        elementColor.color = 'blue';
        break;
      default:
        elementColor.color = 'yellow';
    }
  }

  private setClassName(name: string): void {
    if (name.length % 2 === 0) {
      this.render.addClass(this.elRef.nativeElement, 'name-with-border');
    }
  }
}
