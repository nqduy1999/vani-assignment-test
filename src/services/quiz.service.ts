import { API_URL } from "@/constant";
import { IQuiz, IResponseList } from "@/domain";
import httpClient from "@/httpClients";
import { AxiosResponse } from "axios";

export const getDataQuiz = async () => {
  try {
    const resp = await httpClient.get<{}, AxiosResponse<IResponseList<IQuiz>>>(
      API_URL.QUIZ.GET_LIST,
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
