import { prisma } from '@/prisma';
import Link from 'next/link';

export default async function Education() {
  const education = await prisma.education.findMany({
    orderBy: {
      startDate: 'desc',
    },
  });
  return (
    <main className="narrow">
      <section className="flexy column">
        <h2>
          <Link href="/education">Education</Link>
        </h2>
        <article>
          {education.map((edu) => (
            <div key={edu.id}>
              <h4>
                {edu.institutionName} {edu.startDate ? new Date(edu.startDate).getFullYear() : 'No date'} -
                {edu.graduationDate ? new Date(edu.graduationDate).getFullYear() : 'No date'}
              </h4>
              <h5>{edu.degree}</h5>
              <p>{edu.fieldOfStudy}</p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
