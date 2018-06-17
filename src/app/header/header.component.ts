import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  query: string
  subject: Subject<string> = new Subject();

  routeNames = ["Home", "Favorites", "About"]

  sideNavParams = {
    closeOnClick: true
  }

  constructor(private router: Router) { }

  searchBarAction(query: string) {
    this.subject.next(query);
  }

  ngOnInit() {
    this.subject.pipe(debounceTime(500))
      .subscribe(query => {
        if(query != ''){
          this.router.navigate(['/Home'], { queryParams: { search: query } })
        } else {
          this.router.navigate(['/Home'], { queryParams: {} })
        }
      });
  }


}
