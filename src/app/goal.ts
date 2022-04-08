// export class Goal {
//     id: number;
//     name: string;
// }

import { convertUpdateArguments } from "@angular/compiler/src/compiler_util/expression_converter";

export class Goal {
    public showDescription: boolean;

    constructor( 
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date){
    this.showDescription=false;
}
}

// showDescription is a property assigned type boolean

// inside the constructor function, properties have been added from the previous arguments 
// and initialized the showDescription property as false.

// we have used public as an access modifier for determining where class properties are visible which in 
// this case is outside the class Goal 

// constructor fuction is used to define initialization logic for creating an object inside the class
