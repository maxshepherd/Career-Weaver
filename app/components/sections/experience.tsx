import { prisma } from '@/prisma';
import Link from 'next/link';

export default async function Experience() {
  const experience = await prisma.experience.findMany({
    orderBy: {
      startDate: 'desc',
    },
  });
  if (!experience) {
    return <p>No experiences found.</p>;
  }
  return (
    <section className="flexy column">
      <h2>
        <Link href="/experience">Experience</Link>
      </h2>

      {experience.length > 0 ? (
        <article>
          {experience.map((exp) => (
            <div key={exp.id}>
              <h3>
                {exp.companyName} {exp.startDate ? new Date(exp.startDate).getFullYear() : 'No date'} -{' '}
                {exp.endDate ? new Date(exp.endDate).getFullYear() : 'present'}
              </h3>
              <h4>{exp.jobTitle}</h4>
              <p></p>
              <p>{exp.description}</p>
            </div>
          ))}
        </article>
      ) : (
        <p>No experiences found.</p>
      )}
    </section>
  );
}
