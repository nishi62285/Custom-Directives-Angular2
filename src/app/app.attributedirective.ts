import {Directive,ElementRef,OnInit, Input,HostListener} from '@angular/core'

@Directive({
    selector : '[changecolor]'
})
export class CustomAttribureDirective implements OnInit{

    @Input() changecolor:any
    
    constructor(private ref : ElementRef){

    }

    ngOnInit(){
this.ref.nativeElement.style.color = this.changecolor
    }

    @HostListener('mouseover') mouseover(){

        this.ref.nativeElement.style.color ='red'
    }

    
    @HostListener('mouseout') mouseout(){

        this.ref.nativeElement.style.color ='pink'
    }
}