import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit{
  @Input() question: any;
  @Input() votes: any; //
  @Input() voted: any;
  @Input() pollImage: any;

  numberOfVotes: number | any;

  constructor() {}

  ngOnInit(): void {
    if(this.votes.length){
      this.numberOfVotes = this.votes.reduce((acc: any,curr: any) =>{
        return acc += curr
      })
    }
  }

}
