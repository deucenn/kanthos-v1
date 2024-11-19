import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 text-white mt-auto font-mono flex justify-between items-center">
      <p className="ml-4 mr-2">&copy; {currentYear} Kanthos.</p> {/* Left aligned with small right margin */}
      <Link href="https://www.instagram.com/kanthos.official/" target="_blank">
        <InstagramIcon className="text-3xl hover:text-focusringBlue transition-colors duration-200" />
      </Link> {/* Right aligned */}
    </footer>
  );
}
