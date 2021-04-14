import { Component, OnInit, Input, Renderer2, ViewChild, } from '@angular/core';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
show=false;

  accordionExapanded = false;
  @ViewChild("cc2") cartContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer2) {

  }

  ngOnInit() {
    console.log(this.cartContent);
    // this.renderer.setStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {
    console.log("list clicj");
    this.show=!this.show;
    // if (this.accordionExapanded) {
    //   this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "0px");
    //   this.renderer.setStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    // } else {
    //   this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "500px");
    //   this.renderer.setStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    // }

    // this.accordionExapanded = !this.accordionExapanded;
    // this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

}