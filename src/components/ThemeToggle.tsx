import { useTheme } from './ThemeContext';

const themes = ['spring', 'summer', 'autumn', 'winter'] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-1 rounded ${
            theme === t ? 'bg-primary text-white' : 'bg-gray-200'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
