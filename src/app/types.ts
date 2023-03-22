export interface Poll extends PollForm{
  id: number; //12
  results: number[]; // [0 ,0 ,0 ,0 , 4, 3, 1]
  voted: boolean;
}

export interface PollForm {
  question: string; //which day can we hold the meeting
  options: string[]; // ["Moday", "Tuesday", "Wednesday"......]
  thumbnail: string; // https://image.png
}

export interface PollVote {
  id: number;
  vote: number;
}

export interface Voter {
  id: string; //id will be a Hash eg 0xVDGFYEGUEEUUIE
  voted: number[]; //[12]
}

