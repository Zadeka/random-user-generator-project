import type { User } from '../types/randomUser.type';
import { DetailItem } from './DetailItem';
import { SectionTitle } from './SectionTitle';
import { User as UserIcon, Cake, Phone, Smartphone, Globe } from 'lucide-react';

export const PersonalDetails = ({ user }: { user: User }) => (
  <section>
    <SectionTitle title="Personal Information" />
    <div className="space-y-3">
      <DetailItem icon={<UserIcon size={18} />} label="Gender" value={user.gender.charAt(0).toUpperCase() + user.gender.slice(1)} />
      <DetailItem icon={<Cake size={18} />} label="Date of Birth" value={`${new Date(user.dob.date).toLocaleDateString()} (Age ${user.dob.age})`} />
      <DetailItem icon={<Phone size={18} />} label="Phone" value={user.phone} />
      <DetailItem icon={<Smartphone size={18} />} label="Cell" value={user.cell} />
      <DetailItem icon={<Globe size={18} />} label="Nationality" value={user.nat} />
    </div>
  </section>
);