// app/layout.js
import './globals.css';
import Navbar from '../components/Navbar'; // Import the Navbar
import Footer from '../components/Footer';

export const metadata = {
  title: 'King Sukh Guest House',
  description: 'A serene and royal guest house experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-body">
        <Navbar /> {/* Place Navbar here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}