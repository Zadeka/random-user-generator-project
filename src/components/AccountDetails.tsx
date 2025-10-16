import type { User } from '../types/randomUser.type';
import { DetailItem } from './DetailItem';
import { SectionTitle } from './SectionTitle';
import { AtSign, Key, IdCard, CalendarPlus } from 'lucide-react';

export const AccountDetails = ({ user }: { user: User }) => (
  <section>
    <SectionTitle title="Account Information" />
    <div className="space-y-3">
      <DetailItem icon={<AtSign size={18} />} label="Username" value={user.login.username} />
      <DetailItem icon={<Key size={18} />} label="UUID" value={user.login.uuid} />
      <DetailItem icon={<IdCard size={18} />} label="ID" value={user.id.value ? `${user.id.name}: ${user.id.value}`: 'Not available'} />
      <DetailItem icon={<CalendarPlus size={18} />} label="Registered" value={`${new Date(user.registered.date).toLocaleDateString()} (${user.registered.age} years ago)`} />
    </div>
  </section>
);