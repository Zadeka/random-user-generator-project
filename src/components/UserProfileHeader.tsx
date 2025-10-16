import { Mail } from 'lucide-react';

interface UserProfileHeaderProps {
  pictureUrl: string;
  fullName: string;
  email: string;
}

export const UserProfileHeader = ({ pictureUrl, fullName, email }: UserProfileHeaderProps) => (
  <div className="flex flex-col items-center text-center">
    <img
      className="w-24 h-24 rounded-full ring-4 ring-blue-300 dark:ring-blue-500"
      src={pictureUrl}
      alt={`Profile of ${fullName}`}
    />
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">{fullName}</h1>
    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
      <Mail size={16} className="mr-2" />
      <p>{email}</p>
    </div>
  </div>
);