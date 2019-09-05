import { Component, OnInit } from '@angular/core';

const questions = [
  {
    questions: 'q1',
    answers: 'a1.'
  },
  {
    questions: 'q2',
    answers: 'a2'
  },
  {
    questions: 'q3',
    answers: 'a3'
  },
  {
    questions: 'q4',
    answers: 'a4'
  },
  {
    questions: 'q5',
    answers: 'a5'
  },
  {
    questions: 'q6',
    answers: 'a6'
  },
  {
    questions: 'q7',
    answers: 'a7'
  },
  {
    questions: 'q8',
    answers: 'a8'
  },
  {
    questions: 'q9',
    answers: 'a9'
  },
  {
    questions: 'q10',
    answers: 'a10'
  },
  {
    questions: 'q11',
    answers: 'a11'
  },
  {
    questions: 'q12',
    answers: 'a12'
  },
  {
    questions: 'q13',
    answers: 'a13'
  }
];
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions = questions;
  constructor() {
  }

  ngOnInit() {
  }

}
