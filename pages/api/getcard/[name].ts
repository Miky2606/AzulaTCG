// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { TCG, Troll } from '../../../apiFunctions/constGet';
import { ListResponse, pupeter, ResponsePuppeter } from '../../../apiFunctions/pupeter.config';
import { ResponseStatus } from '../../../apiFunctions/response'

export interface Query {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  const methods: keyof ResponseStatus = req.method as keyof ResponseStatus;
  const Case: ResponseStatus = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {

      try {
        const { name } = req.query;

        let resAll: ListResponse[] = [];

        const resTCG: ResponsePuppeter<ListResponse[]> = await pupeter(TCG(name as string)) as ResponsePuppeter<ListResponse[]>;
        const resTroll: ResponsePuppeter<ListResponse[]> = await pupeter(Troll(name as string)) as ResponsePuppeter<ListResponse[]>;


        if (resTCG.error !== "" || resTroll.error !== "") return res.status(404).json({
          status: false,
          data: [],
          error: resTCG.error || resTroll.error
        })

        resTCG.data.map((e) => {

          return resTroll.data.filter((item) => {


            if (e.rarity?.split(/[</>#]+/)[8]! === item.rarity?.split(" ")[2]) {

              resAll.push({
                name: e.name,
                condition: e.condition.concat(item.condition),

              })
            }
          });
        })





      } catch (error) {



        res.status(404).json({
          status: false,
          data: [],
          error: res,
        })

      }

    }
  }

  const response = Case[methods]

  if (response) return response(req, res)
  return res.status(404).json({ error: true, msg: "Methods Not Found" });

}


