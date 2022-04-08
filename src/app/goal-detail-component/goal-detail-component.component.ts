
//imports are implicitly for importing decorators, components and classes

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

// we import the output and event emitter to enable a child emmit an event to
// its parent. These are decorators in angular

@Component({
  selector: 'app-goal-detail-component',  //this is a selector that is used to
  // link the child to the parent in the parent's html

  templateUrl: './goal-detail-component.component.html',
  styleUrls: ['./goal-detail-component.component.css']
})
export class GoalDetailComponentComponent implements OnInit {

  @Input() goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  //input and output are input and output binders for certain properties declared in the ts files

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
    // Here, we removed the :void statement in order to display the descriptions
  }

}
