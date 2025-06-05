import { prisma } from '@/prisma';
import { Skill } from '@prisma/client';
import Link from 'next/link';

export default async function Skills() {
  const skills = (await prisma.skill.findMany()).reduce((acc, skill) => {
    const category = skill.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  return (
    <section className="flexy column">
      <h2>
        <Link href="/skills">Skills</Link>
      </h2>
      {Object.entries(skills).map(([category, skills]) => (
        <article key={category}>
          <h4>{category}</h4>
          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
