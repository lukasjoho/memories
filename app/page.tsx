import VerticalSwiper from '@/components/VerticalSwiper';
import prisma from '@/lib/prisma';

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
