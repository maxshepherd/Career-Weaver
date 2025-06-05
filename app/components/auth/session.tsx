import { auth } from '@/auth';
import SignOut from './signout';
import SignIn from './signin';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user)
    return (
      <div>
        <h3>No user session found</h3>
        <SignIn />
      </div>
    );

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <SignOut />
    </div>
  );
}
