import { Directive, ElementRef, HostListener,  } from '@angular/core';

//the ElementRef is imported and used as a constructor to inject a reference to the DOM element that uses this directive

// we have imported a hostlistener and used it to define user initiated events.
// user initiated events are click that creates a line through while double click removes the line through text decoration

//@Directive is an onnotation with a selector property passed in as an attribute to the host element
// the [] brackets make the selector property an attributive directive 

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  // ElementRef is used as a constructor after it is imported.

  constructor(private elem:ElementRef) {}

  //Hostlistener actions feed on the textDeco function that we have already created below.
  @HostListener('click') onClicks(){
    this.textDeco('line-through')
  }

  @HostListener ("dblclick") onDoubleClicks(){
    this.textDeco('None')
  }

  private textDeco(action:string){
  // textDeco is a function that takes in an action and then performs a text decoration using the initiated action

    this.elem.nativeElement.style.textDecoration=action;
    
    
    // this.elem.nativeElement.style.textDecoration='line-through'; //here we are targeting the host element style attribute and changed text-decoration to a line through

    //nativeElement is a property in ElementRef(--> this is a class)

   }

}
