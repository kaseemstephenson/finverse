import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DelorService } from '../delor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
      constructor(private delorService: DelorService,private breakpointObserver: BreakpointObserver) { }

  news:any = []

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 4 }
        ];
      }

      return [
        
        { title: 'STOCKS', cols: 1, rows: 1 },
        { title: 'NEWS', cols: 1, rows: 6 },
        { title: 'Bill Reminder', cols: 1, rows: 5 },

        
      ];
    })
  );

  ngOnInit(){
    this.delorService.getNews().subscribe(payload =>{
      this.news =  payload
      this.news = this.news.data
      console.log(this.news)
      


    })

  }


}
