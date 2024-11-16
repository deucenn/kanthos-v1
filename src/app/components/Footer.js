import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-4 text-white mt-auto font-mono grid grid-cols-2 gap-11">
            <p>&copy; {currentYear} Kanthos.</p>
            <Link href="https://www.instagram.com/kanthos.official/">
                <InstagramIcon />
            </Link>
        </footer>
    );
} 