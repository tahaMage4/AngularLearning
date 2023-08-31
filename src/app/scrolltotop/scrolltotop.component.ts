import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrolltotop',
  templateUrl: './scrolltotop.component.html',
  styleUrls: ['./scrolltotop.component.scss'],
})
export class ScrolltotopComponent implements OnInit {
  // first way
  // windowScrolled!: boolean;
  // second way
  windowScrolled: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document // private windowsss: windowScrolled
  ) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
  ngOnInit() {}
}
