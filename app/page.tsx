import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import './style.css';

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <h1>Hello, Next.js with Light and Dark Mode!</h1>
      <p className="test">Test text</p>
    </div>
  );
}
