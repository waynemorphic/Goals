import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2022, 4, 1)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2022, 4, 2)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2022, 4, 3)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2022, 4, 4)),
    new Goal(5,'Solve math homework','Damn Math', new Date(2022, 4, 5)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord', new Date(2022, 4, 6)),
  ];

// we have added Date instance that takes YY,MM,DD

addNewGoal(goal){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal)
}

  toggleDetails(index:any){
    //here we have added the type 'any' in order to
    // solve the problem of the index having an implict type any that was not initially defined

    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal (isComplete: any, index: number){
    if (isComplete){
      let toDelete = confirm('Are you sure you want to delete ${this.goals[index].name?')
      
      if (toDelete){
      this.goals.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}


//npm i angular-cli-ghpages --save-dev
//ng build --prod --base-href <'github username' + repo link"

//at dist/angular host, you will find the the project name