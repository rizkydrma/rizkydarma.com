import { getAllViews } from '@/lib/supabase/views';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const data = await getAllViews();

  return res.status(200).json(data);
}
