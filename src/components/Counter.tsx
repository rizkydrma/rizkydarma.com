'use client';
import { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import { Views } from '../lib/types';

interface Props {
  slug: string;
  shouldRegisterView?: boolean;
}

const ViewCounter = ({ slug, shouldRegisterView = false }: Props) => {
  const { data, error } = useSWR<Views>(`/api/views/${slug}`, fetcher);

  useEffect(() => {
    if (!shouldRegisterView) {
      return;
    }
    const registerView = () => {
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
    };

    registerView();
  }, [shouldRegisterView, slug]);
  return <p>{`${(data?.count ?? 0) > 0 ? data!.count.toLocaleString() : '–––'} views`}</p>;
};
export default ViewCounter;
