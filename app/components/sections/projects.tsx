import { prisma } from '@/prisma';
import Link from 'next/link';

export default async function Projects() {
  const projects = await prisma.project.findMany({});
  if (!projects) {
    return <p>No projects found.</p>;
  }
  return (
    <section className="flexy column">
      <h2>
        <Link href="/projects">Projects</Link>
      </h2>

      <article>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>
              {project.projectName} {project.createdAt ? new Date(project.createdAt).getFullYear() : 'No date'} -{' '}
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
//   <article>
