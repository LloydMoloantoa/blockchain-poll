import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts'
import { PollVote } from '../types';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements AfterViewInit{

  @Input() id: number | any;
  @Input() voted: boolean | any;
  @Input() options: string[] | any;
  @Input() results: number[] | any;
  @Input() question: string | any;

  @Output() pollVoted: EventEmitter<PollVote> = new EventEmitter();

  voteForm: FormGroup | any;


  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit() {
    if (this.voted) {
      this.generateChart();
    }
  }

  submitForm() {
    const pollVoted: PollVote = {
      id: this.id,
      vote: this.voteForm.get('selected').value,
    };

    this.pollVoted.emit(pollVoted);
  }

  generateChart() {
    const options: ApexCharts.ApexOptions = {
      series: [
        {
          data: this.results,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: this.options,
      },
    };

    const chart = new ApexCharts(
      document.getElementById('poll-results'),
      options
    );
    chart.render();
  }
}
