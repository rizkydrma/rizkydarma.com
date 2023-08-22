import supabase from '@/lib/supabase/privat';

export const getTopSlugsByCount = async (): Promise<{ slug: string }[]> => {
  const { data, error } = await supabase
    .from('views')
    .select('slug,count')
    .order('count', { ascending: false })
    .limit(5);

  return data as { slug: string }[];
};

const getViews = async (slug: string): Promise<number> => {
  const { data: views, error } = await supabase.from('views').select(`count`).match({ slug: slug }).single();
  if (error && error.details.includes(`0 rows`)) {
    const { data, error } = await supabase
      .from(`views`)
      .insert({ slug: slug, count: 1 }, { count: `planned` })
      .returns()
      .single();
    return (data as unknown as { count: number })?.count ?? 0;
  }
  return views?.count ?? 0;
};

const registerView = async (slug: string): Promise<void> => {
  await supabase.rpc('increment', {
    slug_text: slug,
  });
};

const getAllViews = async (): Promise<any> => {
  const { data, error } = await supabase.from('views').select();

  return data;
};

export { getViews, registerView, getAllViews };
