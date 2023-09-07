export enum TypeQuiz {
  single = 1,
  multi = 2,
}

export interface IAnswer {
  id: string;
  content: string;
  isCorrect: boolean;
}

export interface IQuiz {
  id: string;
  title: string;
  type: TypeQuiz;
  answers: Array<IAnswer>;
  hint: string;
}
