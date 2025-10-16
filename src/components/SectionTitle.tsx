interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <h3 className="text-md font-bold text-blue-600 dark:text-blue-400 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
    {title}
  </h3>
);