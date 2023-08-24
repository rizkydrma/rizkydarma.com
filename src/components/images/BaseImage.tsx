'use client';
import { buildUrl } from 'cloudinary-build-url';
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';
import 'react-18-image-lightbox/style.css';

type TBaseImage = {
  publicId: string;
  height: string | number;
  width: string | number;
  alt: string;
  className?: string;
  aspect?: {
    width: number;
    height: number;
  };
} & React.ComponentPropsWithoutRef<'figure'>;

export default function BaseCloudinaryImg({
  publicId,
  height,
  width,
  alt,
  title,
  className,
  style,
  aspect,
  ...rest
}: TBaseImage) {
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'de3n7a1r0',
    },
    transformations: {
      rawTransformation: aspect ? `c_fill,ar_${aspect?.width}:${aspect?.height},w_${width}` : undefined,
    },
  });

  return (
    <figure
      className={clsx(className, 'overflow-hidden rounded shadow')}
      style={{
        ...style,
      }}
      {...rest}
    >
      <Image width={+width} height={+height} src={url} alt={alt} title={title || alt} />
    </figure>
  );
}
