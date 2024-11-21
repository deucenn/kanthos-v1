import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center px-6 font-mono">
      <p>&copy; {currentYear} Kanthos.</p>
      <Link href="https://www.instagram.com/kanthos.official/" target="_blank">
        <InstagramIcon className="text-3xl hover:text-blue-500 transition-colors duration-200" />
      </Link>
    </footer>
  );
}
