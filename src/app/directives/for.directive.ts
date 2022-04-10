import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input("myForEm") number: number[] | undefined;

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }
    
  

  ngOnInit(): void {
    if(this.number){
      for (let number of this.number) {
        this.container.createEmbeddedView(this.template, {$implicit: number})
      }
    }
  }

}
