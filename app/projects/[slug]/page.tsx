import { prisma } from '@/prisma';

import Link from 'next/link';
import RoundButton from '@/app/components/ui/RoundButton';

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
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
      <RoundButton variant="back" />
      <section className="flexy column">
        <h2>{project.projectName}</h2>
        <h4>{project.createdAt ? new Date(project.createdAt).getFullYear() : 'No date'}</h4>
        <p>{project.description}</p>
        <p>{project.role}</p>
        <p>{project.technologiesUsed.join(', ')}</p>
        <p>{project.outcomeImpact}</p>
        <p>{project.link}</p>
        <Link href={`/projects/${project.id}/edit`}>
          <RoundButton variant="edit"></RoundButton>
        </Link>
      </section>
    </main>
  );
}
