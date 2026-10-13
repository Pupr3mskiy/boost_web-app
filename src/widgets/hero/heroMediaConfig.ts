import slide1 from '@/shared/assets/hero/slide-1.jpg';
import slide2 from '@/shared/assets/hero/slide-2.jpg';
import slide3 from '@/shared/assets/hero/slide-3.jpg';

export interface HeroMediaItem {
  src: string;
  altKey: string;
  filterClassName?: string;
  cropClassName?: string;
  overlayClassName?: string;
}

export const heroMedia: HeroMediaItem[] = [
  {
    src: slide1,
    altKey: 'hero.mediaAlt.0',
    filterClassName: 'brightness-[.84] contrast-110 saturate-[.9]',
    cropClassName: 'scale-[1.3] origin-[center_75%]',
    overlayClassName: 'bg-brand-900/35 mix-blend-multiply',
  },
  {
    src: slide2,
    altKey: 'hero.mediaAlt.1',
    filterClassName: 'contrast-105 saturate-[.95] brightness-95',
    cropClassName: 'scale-[1.05]',
    overlayClassName: 'bg-brand-900/20 mix-blend-multiply',
  },
  {
    src: slide3,
    altKey: 'hero.mediaAlt.2',
    filterClassName: 'contrast-110 saturate-[.8] brightness-90',
    overlayClassName: 'bg-brand-900/25 mix-blend-multiply',
  },
];