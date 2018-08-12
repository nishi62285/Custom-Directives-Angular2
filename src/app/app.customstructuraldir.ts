import {Directive,TemplateRef,ViewContainerRef, OnInit, Input,HostListener} from '@angular/core'

@Directive({
    selector : '[changedom]'
})
export class CustomStructuralDirective implements OnInit{

    @Input() changedom:any
    
    constructor(private ref : TemplateRef<any>,private vcr : ViewContainerRef){

    }

    ngOnInit(){
        
               debugger
        if(this.changedom){
            this.vcr.createEmbeddedView(this.ref)
        }
        else{
            this.vcr.clear();
        }

            }
        }