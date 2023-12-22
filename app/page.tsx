import VerticalSwiper from '@/components/VerticalSwiper';
import prisma from '@/lib/prisma';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kobkhunkrub',
  description: 'Replaying a thai-german friendship.',
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
