import RoundButton from '@/app/components/ui/RoundButton';
import { prisma } from '@/prisma';

export default async function EditProjectPage({ params }: { params: { slug: string } }) {
  const project = await prisma.project.findUnique({
    where: {
      id: params.slug,
    },
  });

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <main className="narrow">
      <section className="flexy column">
        <RoundButton variant="back" />
        <h2>Edit Project</h2>
        <form action={`/projects/${project.id}/edit`} method="POST" className="flexy column">
          <input type="hidden" name="id" value={project.id} />
          <div>
            <label>Project Name:</label>
            <input type="text" name="projectName" defaultValue={project.projectName} required />
          </div>
          <div>
            <label>Description:</label>
            <textarea name="description" defaultValue={project.description} required />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </section>
    </main>
  );
}
