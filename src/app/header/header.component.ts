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

  constructor(private router: Router) { }

  query: string
  subject: Subject<string> = new Subject();

  routeNames = ["home", "favorites", "about"]

  sideNavParams = {
    closeOnClick: true
  }


  searchBarAction(query: string) {
    this.subject.next(query);
  }

  ngOnInit() {
    this.subject.pipe(debounceTime(500))
      .subscribe(query => {
        if(query != ''){
          this.router.navigate(['/home'], { queryParams: { search: query } })
        } else {
          this.router.navigate(['/home'], { queryParams: {} })
        }
      });
  }

}
