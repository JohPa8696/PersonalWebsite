import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
@Directive({
  selector: '[appFiledrop]'
})

export class FiledropDirective {
  @Output() filesDropped =  new EventEmitter<FileList>();
  @Output() filesHovered =  new EventEmitter<boolean>();
  constructor() { }
  @HostListener('drop', ['$event'])
    onDrop($event) {
      $event.preventDefault();
      let transfer = $event.dataTransfer;
      this.filesDropped.emit(transfer.files);
      this.filesHovered.emit(false);
      // var dropzone = document.getElementById('dropzone');
      // dropzone.style.border = "2px solid green";
      // var icon =document.getElementById('uploadicon');
      // icon.style.color = "green";
    }
    @HostListener('dragover', ['$event'])
     onDragOver($event) {
       event.preventDefault();
       this.filesHovered.emit(true);
       var dropzone = document.getElementById('dropzone');
       dropzone.style.border = "2px solid yellow";
       var icon =document.getElementById('uploadicon');
       icon.style.color = "yellow";
     }
   @HostListener('dragleave', ['$event'])
    onDragLeave($event) {
      this.filesHovered.emit(false);
      var dropzone = document.getElementById('dropzone');
      dropzone.style.border = "2px solid black";
      var icon =document.getElementById('uploadicon');
      icon.style.color = "gray";
    }
}
