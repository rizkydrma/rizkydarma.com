'use client';
import Giscus, { Repo, Theme } from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comment() {
  const { theme } = useTheme();

  return (
    <Giscus
      key={theme}
      repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo) || ''}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
      category="General"
      categoryId="DIC_kwDOJ_cK984CYRYW"
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      theme={theme as Theme}
    />
  );
}
