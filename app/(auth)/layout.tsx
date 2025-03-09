import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className='flex h-full w-full flex-col items-center justify-center'>
      {children}
    </section>
  );
}
