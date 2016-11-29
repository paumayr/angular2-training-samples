import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "name-editor",
    templateUrl: "./name-editor.component.html",
})
export class NameEditorComponent {

    @Input() first: string = '';
    @Input() last: string = '';

    @Output() public onSave = new EventEmitter<{first: string, last: string}>();

    public save() {
        this.onSave.emit({ first: this.first, last: this.last});
    }
}
