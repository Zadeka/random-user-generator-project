import type { User } from '../types/randomUser.type';
import { AccountDetails } from './AccountDetails';
import { LocationDetails } from './LocationDetails';
import { PersonalDetails } from './PersonalDetails';

export const UserDetails = ({ user }: { user: User }) => (
  <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 space-y-6">
    <PersonalDetails user={user} />
    <LocationDetails user={user} />
    <AccountDetails user={user} />
  </div>
);