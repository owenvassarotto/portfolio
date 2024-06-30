import React from 'react'

export default function Footer() {

  const actualYear = new Date().getFullYear();

  return (
    <footer className='mb-5 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs font-medium'>
        &copy; {actualYear} Owen Vassarotto. 
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>Sobre este sitio:</span> desarrollado utilizando React y Next.js (App Router & Server Actions), TypeScript, TailwindCSS, Framer Motion, React Email & Resend, alojado en Vercel.
      </p>
    </footer>
  )
}
