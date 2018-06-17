import { Component, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild('header') header;
  @ViewChild('content') content;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.content.nativeElement,
      "margin-top",
      `${this.header.nativeElement.offsetHeight}px`
    )
  }
}
