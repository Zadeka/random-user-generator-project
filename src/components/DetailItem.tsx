import type { ReactNode } from 'react';

interface DetailItemProps {
  icon: ReactNode;
  label: string;
  value: string | number | null;
}

export const DetailItem = ({ icon, label, value }: DetailItemProps) => (
  <div className="flex items-start text-sm text-gray-600 dark:text-gray-400">
    <span className="text-gray-400 dark:text-gray-500 mr-3 mt-1">{icon}</span>
    <div className="flex flex-col">
      <span className="font-semibold text-gray-700 dark:text-gray-300">{label}</span>
      <span className="break-words">{value}</span>
    </div>
  </div>
);