"use client";

import { IQuiz, IResponseList } from "@/domain";
import { getDataQuiz } from "@/services/quiz.service";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";

export const QUIZ_CONTENT_QUERY_KEY = "QUIZ_CONTENT_QUERY_KEY";

export const useQuizContentQuery = () => {
  const { data } = useQuery({
    queryKey: [QUIZ_CONTENT_QUERY_KEY],
    queryFn: () => getDataQuiz(),
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
  return data as IResponseList<IQuiz>;
};

export const prefetchQuizContentQuery = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([QUIZ_CONTENT_QUERY_KEY], () =>
    getDataQuiz(),
  );
  return dehydrate(queryClient);
};
