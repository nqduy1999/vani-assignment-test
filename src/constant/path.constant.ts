const HOME = "/";
const QUIZ = "/quiz";
const RESULT = "/result";
const RESULT_FAIL = "/result-fail";

export const NAME_BY_PATHNAME: Record<string, string> = {
  [HOME]: "Home Page",
  [QUIZ]: "Answer Quiz",
  [RESULT]: "Result",
  [RESULT_FAIL]: "Result Fail",
};

export const PATHNAME = {
  HOME,
  QUIZ,
  RESULT,
  RESULT_FAIL,
};
