import { FC, ReactNode } from 'react';
import Icons from './Icons';
import Magnetic from '@/common/magnetic';
import Link from 'next/link';

interface MediaSocialProps {}
type TSocial = {
  href: string;
  icon: ReactNode;
};

const socials: TSocial[] = [
  {
    href: 'https://github.com/rizkydrma',
    icon: <Icons.GithubIcon size={18} fontWeight={800} />,
  },
  {
    href: 'https://twitter.com/rizkydrmar',
    icon: <Icons.TwitterIcon size={18} fontWeight={800} />,
  },
  {
    href: 'https://youtube.com/@rizkydrma',
    icon: <Icons.YoutubeIcon size={18} fontWeight={800} />,
  },
  {
    href: 'https://instagram.com/rizkydrma',
    icon: <Icons.InstagramIcon size={18} fontWeight={800} />,
  },
  {
    href: 'https://linkedin.com/in/rizky-darma-28b05b208',
    icon: <Icons.LinkedinIcon size={18} fontWeight={800} />,
  },
];

const MediaSocial: FC<MediaSocialProps> = ({}) => {
  return (
    <div className="fixed bottom-10 left-6 flex flex-col z-[9999] gap-y-1">
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
