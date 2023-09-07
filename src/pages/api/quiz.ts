// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MOCK_RESPONSE_API } from "@/_mock/responseApi";
import { IQuiz } from "@/domain";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: Array<IQuiz>;
  total: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res
    .status(200)
    .json({ data: MOCK_RESPONSE_API, total: MOCK_RESPONSE_API.length });
}
