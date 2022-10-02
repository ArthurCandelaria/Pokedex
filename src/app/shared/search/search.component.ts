import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  
  @Output() public emmitSearch = new EventEmitter<{keyEvent: KeyboardEvent, value: string}>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public search(keyEvent: KeyboardEvent, value: string) {
    this.emmitSearch.emit({keyEvent, value});
  }

}
