import VerticalSwiper from '@/components/VerticalSwiper';
import prisma from '@/lib/prisma';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kobkhunkrub',
  description: 'A thai-german friendship.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/du3mz9iny/image/upload/v1703256737/ogimage_ldnk3g.jpg',
        width: 1200,
        height: 630,
        alt: 'Kobkhunkrub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://res.cloudinary.com/du3mz9iny/image/upload/v1703256737/ogimage_ldnk3g.jpg',
        width: 1200,
        height: 630,
        alt: 'Kobkhunkrub',
      },
    ],
  },
};

export default async function Home() {
  const memories = await prisma.memory.findMany({
    orderBy: {
      date: 'desc',
    },
    include: {
      people: true,
    },
  });
  return <VerticalSwiper memories={memories} />;
}
