import { NextApiRequest, NextApiResponse } from 'next';
import mockData from '../public/mocks/cardsData.json'; 
type Data = {
  plans: IPlan[]
}
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log('[fetchData] - init');
  res.status(200).json(mockData);
};
