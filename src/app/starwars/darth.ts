import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'darth',
    template: `  <p>dfgfdgdfgdffd</p>
    <luke #luke [lukeInput]="darthData" (lukeOutput)="darthMethod(luke.lukeInput)"> </luke>
    `
    //styleUrls: ['./name.component.scss']
})

export class DarthComponent implements OnInit {
    darthData: String = "I'm your father.";
    darthMethod() {
        console.log();
    }
    constructor() { }

    ngOnInit(): void { }
}
