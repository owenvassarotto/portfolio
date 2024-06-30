"use client";

import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

    const { ref } = useSectionInView("Contacto", 0.5);

  return (
    <motion.section 
        id='contact'
        ref={ref}
        className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28'
        initial={{ 
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once: true,
        }}
    >
        <SectionHeading>Contáctame</SectionHeading>
        <p
            className='text-gray-700 -mt-6 dark:text-white/80 max-w-[500px]'
        >Puedes contactarme directamente a{" "}
            <a 
                href="mailto:vassarottowen@gmail.com"
                className='underline'
            >
                vassarottowen@gmail.com
            </a> 
            {" "}o a través de este formulario.
        </p>

        <form
            className='flex flex-col mt-10'
            action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if(error){
                    toast.error(error);
                    return;
                }

                toast.success("¡Email enviado correctamente!");
            }}
        >
            <input 
                type="email" 
                name='senderEmail'
                placeholder='Tu email'
                className='h-14 rounded-lg borderBlack p-4 dark:bg-white/5 dark:focus:bg-white/10 transition-all dark:outline-none'
                required
                maxLength={500}
            />
            <textarea 
                placeholder='Tu mensaje'
                name='message'
                className='h-52 my-3 rounded-lg borderBlack resize-none p-4 dark:bg-white/5 dark:focus:bg-white/10 transition-all dark:outline-none'
                required
                maxLength={5000}
            />

            <SubmitBtn />
        </form>
    </motion.section>
  )
}
