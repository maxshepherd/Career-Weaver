import { prisma } from '@/prisma';

export default async function ExperiencePage() {
  const experience = await prisma.experience.findMany({
    orderBy: {
      startDate: 'desc',
    },
  });
  if (!experience || experience.length === 0) {
    return <p>No experiences found.</p>;
  }
  // Render the experience details
  return (
    <main className="narrow">
      <section className="flexy column">
        <h2>Experience</h2>

        {experience.map((exp) => (
          <article key={exp.id} className="flexy row overline">
            <div className="flexy column">
              <div>
                <h3>{exp.jobTitle}</h3>
                <h4>{exp.companyName}</h4>
              </div>
              <h5>
                {' '}
                {exp.startDate ? new Date(exp.startDate).getFullYear() : 'No date'} -{' '}
                {exp.endDate ? new Date(exp.endDate).getFullYear() : 'present'}
              </h5>
            </div>
            <p>{exp.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
