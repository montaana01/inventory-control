import type { Metadata } from 'next';
import type { ReactNode, ReactElement } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Inventory Control',
  description: 'Inventory management application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
