import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  searchIcon = 'search';

  searchForm: FormGroup;

  @ViewChild('searchInput', { read: ElementRef })
  private searchInput: ElementRef;

  interactedWithSearch = false;

  // @Output()
  // searchEvent = new EventEmitter<{ query?: string, action: 'SEARCH' | 'CLEAR' }>();



  constructor(private _formBuilder: FormBuilder,) { }



  ngOnInit(): void {

    this.searchForm = this._formBuilder.group({
      search: ['', [Validators.required]],
  });

  this.searchForm.valueChanges.subscribe(val => {
     this.search()
  });
    
  }

  toggleSearch() {
    const searchContainer = document.getElementById('search-container');
    this.toggleClass(searchContainer, 'open');
    this.searchIcon = this.hasClass(searchContainer, 'open') ? 'clear' : 'search';
    if (!this.hasClass(searchContainer, 'open') && this.interactedWithSearch) {
      // this.searchEvent.emit({ action: 'CLEAR' });
      this.interactedWithSearch = false;
      this.searchInput.nativeElement.value = '';
    }
  }

  private toggleClass(elem, className) {
    this.hasClass(elem, className) ? elem.classList.remove(className) : elem.classList.add(className);
  }

  private hasClass(elem, className): boolean {
    return elem.classList.contains(className);
  }

  search() {
    const searchTerm = this.searchInput.nativeElement.value;
    // this.searchEvent.emit({ query: searchTerm, action: 'SEARCH' });
    this.interactedWithSearch = true;
  }

}
