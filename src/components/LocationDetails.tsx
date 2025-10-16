import type { User } from '../types/randomUser.type';
import { DetailItem } from './DetailItem';
import { SectionTitle } from './SectionTitle';
import { MapPin, Clock } from 'lucide-react';

export const LocationDetails = ({ user }: { user: User }) => {
  const fullAddress = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
  const coordinates = `Lat: ${user.location.coordinates.latitude}, Lon: ${user.location.coordinates.longitude}`;

  return (
    <section>
      <SectionTitle title="Location Details" />
      <div className="space-y-3">
        <DetailItem icon={<MapPin size={18} />} label="Address" value={fullAddress} />
        <DetailItem icon={<MapPin size={18} />} label="Postcode" value={user.location.postcode} />
        <DetailItem icon={<MapPin size={18} />} label="Coordinates" value={coordinates} />
        <DetailItem icon={<Clock size={18} />} label="Timezone" value={`${user.location.timezone.description} (${user.location.timezone.offset})`} />
      </div>
    </section>
  );
};