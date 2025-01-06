import { supabase } from '../../lib/supabase';

export default async function UsersPage() {
  const { data: users } = await supabase.from('users').select('*');
  console.log(users);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
