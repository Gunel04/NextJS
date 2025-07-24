'use client';

import { useRouter, usePathname } from 'next/navigation';

const Language = ({ currentLang }: { currentLang: 'az' | 'en' }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    const newPath = pathname.replace(`/${currentLang}`, `/${selectedLang}`);
    router.push(newPath);
  };

  return (
    <select defaultValue={currentLang} onChange={handleLanguageChange} className="border p-2 rounded text-sm mx-3">
      <option value="az">AZ</option>
      <option value="en">EN</option>
    </select>
  );
};

export default Language;
