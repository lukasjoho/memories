import { cn } from '@/lib/utils';
import { Prisma } from '@prisma/client';
import OptimizedImage from './OptimizedImage';

interface PeopleProps extends React.HTMLProps<HTMLDivElement> {
  people: Prisma.UserGetPayload<{}>[];
  backgroundColor: string;
}

const People = ({ people, backgroundColor, ...props }: PeopleProps) => {
  const { className } = props;
  return (
    <div className={cn('flex', className)}>
      {people.map((person, index) => (
        <div
          className="w-12 h-12 rounded-full overflow-hidden"
          style={{
            border: `2px solid ${backgroundColor}`,
            marginLeft: index === 0 ? 0 : -10,
          }}
          key={person.id}
        >
          <OptimizedImage src={person.image} />
        </div>
      ))}
    </div>
  );
};

export default People;
