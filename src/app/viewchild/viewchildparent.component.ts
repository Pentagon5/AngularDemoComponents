import {Component,ViewChild} from '@angular/core';
import {ViewChildComponent} from './viewchild.component';
@Component({
    selector:'app-viewchild',
    template:`
    <div>
        <h1>Parent Component</h1>
        <button (click)="showHideText()">
        Show/Hide Child Component text</button>
        <div class ="container" style="background:yellow">
        <child-component></child-component>
        </div>
    </div>
    `
})

export class ViewChildParentComponent{
    //can access only one child
    @ViewChild(ViewChildComponent) private cc:ViewChildComponent;
    showHideText() {
        this.cc.toggleVisibility("Parent Component");
    }
}
