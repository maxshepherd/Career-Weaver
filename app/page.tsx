import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
import Education from './components/sections/education';
import Skills from './components/sections/skills';

export default async function Home() {
  return (
    <main className="flexy row" style={{ gap: '3rem' }}>
      <div>
        <Education />
        <Skills />
      </div>
      <Experience /> <Projects />
    </main>
  );
}
