import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Delor } from '../delor.model';
import { ActivatedRoute } from '@angular/router';
import { DelorService } from '../delor.service';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-rec-reoom',
  templateUrl: './rec-room.component.html',
  styleUrls: ['./rec-room.component.css'],
  animations: [
      trigger('enlarge', [
         state('start', style({
            opacity: 0
         })),
         state('end', style({
            opacity:1
         })),
         transition('start => end', [
            animate('1s')
         ]),
         transition('end => start', [
            animate('1s')
         ])
      ])
   ]
})
export class RecRoomComponent {
  delorResponseOg:Delor = {}
  ticker:string =""
  startDate:string = ""
  endDate:string=""
  investmentAmount = ""
  isEnlarge: boolean = false;

    constructor(private delorService: DelorService,private breakpointObserver: BreakpointObserver) { }
  onDelorInvestFormSubmit(){
    if(this.isEnlarge == false){
        this.isEnlarge = true
      }
    this.delorService.getResults(this.ticker,this.startDate,this.endDate,this.investmentAmount).subscribe(payload =>{
      this.delorResponseOg =  payload
      if(this.delorResponseOg.endInvestmentValue == "NaN"){
        this.delorResponseOg.endInvestmentValue = "Invalid Dates, Holiday or Weekend Selected"
      }
      


    })
  }
  
  
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
        { title: 'NEWS', cols: 1, rows: 5 },
        { title: 'Bill Reminder', cols: 1, rows: 3 },
        
      ];
    })
  );


}
