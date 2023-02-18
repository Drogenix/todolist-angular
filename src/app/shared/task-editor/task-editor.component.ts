import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit {

  @ViewChild('textArea') private readonly _textArea: ElementRef<HTMLTextAreaElement>;
  @Output() createTask = new EventEmitter<string>();
  @Output() cancelTaskCreate = new EventEmitter<void>();
  isAreaEmpty:boolean = true;
  inputText: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onTextAreaChanged() {
    const input = this._textArea.nativeElement.value;

    if(input.trim())
    {
      this.inputText = input;

      this.isAreaEmpty = false;
    }
    else
    {
      this.inputText = ""

      this.isAreaEmpty = true;
    }
  }

  onCreateButtonClick() {
    this.createTask.emit(this.inputText);
  }

  close(){
    this.cancelTaskCreate.emit();
  }

}
