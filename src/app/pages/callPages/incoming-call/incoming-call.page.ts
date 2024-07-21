import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-incoming-call',
  templateUrl: './incoming-call.page.html',
  styleUrls: ['./incoming-call.page.scss'],
})
export class IncomingCallPage implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {}
  ngAfterViewInit() {
    const button = this.el.nativeElement.querySelector('#draggableButton');

    let isDragging = false;
    let offsetX = 0;

    this.renderer.listen(button, 'mousedown', (event) => {
      isDragging = true;
      offsetX = event.clientX - button.getBoundingClientRect().left;
      button.style.cursor = 'grabbing';
    });

    this.renderer.listen(document, 'mousemove', (event) => {
      if (isDragging) {
        const left = event.clientX - offsetX;
        button.style.left = `${left}px`;
      }
    });

    this.renderer.listen(document, 'mouseup', () => {
      isDragging = false;
      button.style.cursor = 'grab';
    });

    this.renderer.listen(button, 'touchstart', (event) => {
      isDragging = true;
      offsetX = event.touches[0].clientX - button.getBoundingClientRect().left;
      button.style.cursor = 'grabbing';
    });

    this.renderer.listen(document, 'touchmove', (event) => {
      if (isDragging) {
        const left = event.touches[0].clientX - offsetX;
        button.style.left = `${left}px`;
      }
    });

    this.renderer.listen(document, 'touchend', () => {
      isDragging = false;
      button.style.cursor = 'grab';
    });
  }
}
