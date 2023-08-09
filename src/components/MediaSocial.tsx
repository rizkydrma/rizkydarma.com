import { FC, ReactNode } from 'react';
import Icons from './Icons';
import Magnetic from '@/common/magnetic';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MediaSocialProps {
  align?: 'horizontal' | 'vertical';
}
type TSocial = {
  href: string;
  icon: ReactNode;
  description?: string;
};

export const socials: TSocial[] = [
  {
    href: 'https://github.com/rizkydrma',
    icon: <Icons.GithubIcon size={18} fontWeight={800} />,
    description: 'Github',
  },
  {
    href: 'https://twitter.com/rizkydrmar',
    icon: <Icons.TwitterIcon size={18} fontWeight={800} />,
    description: 'Twitter',
  },
  {
    href: 'https://youtube.com/@rizkydrma',
    icon: <Icons.YoutubeIcon size={18} fontWeight={800} />,
    description: 'Youtube',
  },
  {
    href: 'https://instagram.com/rizkydrma',
    icon: <Icons.InstagramIcon size={18} fontWeight={800} />,
    description: 'Instagram',
  },
  {
    href: 'https://linkedin.com/in/rizky-darma-28b05b208',
    icon: <Icons.LinkedinIcon size={18} fontWeight={800} />,
    description: 'Linkedin',
  },
];

const MediaSocial: FC<MediaSocialProps> = ({ align }) => {
  return (
    <div className={cn(`fixed bottom-20 left-6 lg:flex lg:flex-col z-[9999] gap-y-1 hidden`)}>
      {socials?.map((social) => (
        <Magnetic key={social?.href}>
          <Link href={social?.href} className="p-2 transition-colors rounded-full">
            {social?.icon}
          </Link>
        </Magnetic>
      ))}
    </div>
  );
};

export default MediaSocial;
