import { prisma } from '@/prisma';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  if (!projects || projects.length === 0) {
    return <p>No projects found.</p>;
  }
  // Render the projects details
  return (
    <main className="narrow">
      <section className="flexy column">
        <h2>Projects</h2>

        {projects.map((project) => (
          <article className="flexy row overline" key={project.id}>
            <div className="flexy column">
              <h3>{project.projectName}</h3>
              <h4>{project.createdAt ? new Date(project.createdAt).getFullYear() : 'No date'}</h4>
            </div>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
