import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  onEvent(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([{
      id: 1,
      question : 'Do you like school or clubs',
      thumbnail:'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
      results: [0, 5, 7],
      options: ["Cats", "Dogs", "No"],
      voted: true,
    },{
      id: 2,
      question : 'do you like dogs or cats',
      thumbnail:'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
      results: [1, 6, 4],
      options: ["A", "B", "C"],
      voted: false,
    }]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId,voteNumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
