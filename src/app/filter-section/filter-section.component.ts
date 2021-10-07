import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  tagActive = 'weekly';
  @Output() filterEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onActive(tag: string): void{
    this.tagActive = tag;
    this.filterEvent.emit(tag);
  }



}
