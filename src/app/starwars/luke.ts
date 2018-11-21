import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'luke',
    template: `
    <p>I'm Luke Skywalker...</p>`
    //styleUrls: ['./name.component.scss']
})

export class LukeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
    @Input() lukeInput;
    @Output() lukeOutput;

    click(){
        //lukeOuput
    }
}
