import { auth } from '@/auth';
import Link from 'next/link';

export default async function Header() {
  const session = await auth();
  return (
    <header>
      <h1>
        <Link href="/">{session?.user?.name}</Link>
      </h1>
      <div>
        <div>{session?.user?.email}</div> <div>{session?.user?.image}</div>
      </div>
    </header>
  );
}
