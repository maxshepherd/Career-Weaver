import { prisma } from '@/prisma';
import { Skill } from '@prisma/client';

export default async function SkillsPage() {
  const skills = (await prisma.skill.findMany()).reduce((acc, skill) => {
    const category = skill.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  return (
    <main className="narrow">
      {' '}
      <section className="flexy column">
        <h2>Skills</h2>
        {Object.entries(skills).map(([category, skills]) => (
          <article key={category} className="flexy row overline">
            <h4>{category}</h4>

            <div className="flexy column" style={{ gap: '0.45rem' }}>
              {skills.map((skill) => (
                <div key={skill.id}>{skill.name}</div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
