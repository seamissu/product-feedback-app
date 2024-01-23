import { Jost } from 'next/font/google';
import './globals.scss';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Product Feedback App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
