import { Component } from '@angular/core';
import { PollService } from './poll-service/poll.service';
import { Poll, PollForm, PollVote } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //title = 'blockchain-poll';
  showForm = false;
  activePoll: Poll | any = null;

  polls = this.ps.getPolls();

constructor(private ps: PollService){}


setActivePoll(poll: any) {
  this.activePoll = null;

  setTimeout(() => {
    this.activePoll = poll;
  }, 100);
}

handlePollCreate(poll: PollForm) {
  this.ps.createPoll(poll);
}

handlePollVote(pollVoted: PollVote) {
  this.ps.vote(pollVoted.id, pollVoted.vote);
}
}
