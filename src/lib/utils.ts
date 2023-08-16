import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import moment from 'moment';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
  banner?: string;
  isBlog?: boolean;
};
export function openGraph({
  siteName,
  templateTitle,
  description,
  banner,
  logo = 'https://res.cloudinary.com/de3n7a1r0/image/upload/v1690282671/logo_yf4tu4.png',
  isBlog = false,
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle ? encodeURIComponent(templateTitle.trim()) : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  if (isBlog) {
    const ogBanner = banner ? encodeURIComponent(banner.trim()) : undefined;

    return `https://og-rizkydrma.vercel.app/api/blog?templateTitle=${ogTemplateTitle}&banner=${ogBanner}`;
  }

  return `https://og-rizkydrma.vercel.app/api/gradient?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

export function formatDate(date: string, format?: string) {
  format = 'MMMM DD, YYYY';

  return moment(date).format(format);
}
