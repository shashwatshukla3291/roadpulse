import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'RoadPulse — Routes that fit your journey',
  description: 'Compare routes by smoothness, accessibility, crossings, and time. Community hazard reports are estimates, not guarantees.'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
