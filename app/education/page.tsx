import { prisma } from '@/prisma';

export default async function educationPage() {
  const education = await prisma.education.findMany({
    orderBy: {
      startDate: 'desc',
    },
  });
  return (
    <main className="narrow">
      <section className="flexy column">
        <h2>Education</h2>

        {education.map((edu) => (
          <article key={edu.id} className="flexy row">
            <div>
              <h3>{edu.degree}</h3>

              <p>
                {edu.startDate ? new Date(edu.startDate).getFullYear() : 'No date'} -
                {edu.graduationDate ? new Date(edu.graduationDate).getFullYear() : 'No date'}
              </p>
            </div>
            <div>
              <h4>{edu.institutionName}</h4>
              <p>{edu.fieldOfStudy}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
