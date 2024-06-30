"use client";

import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BsGithub } from "react-icons/bs";
import { RxOpenInNewWindow } from 'react-icons/rx';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    liveDemoUrl, 
    repoUrl,
} : ProjectProps){
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className='group mb-4 sm:mb-8 last:mb-0'
        >
            <section
                className='bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
            >
                <div className='py-4 pb-12 px-5 sm:pl-10 sm:pr-2 sm:pt-[28px] sm:max-w-[54%] flex flex-col h-full sm:group-even:ml-[18rem] relative'>
                    <h3 className='text-2xl font-bold'>{title}</h3>
                    <p className='mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap mb-4 gap-2'>
                        {tags.map((tag, index) => (
                            <li 
                                key={index}
                                className='bg-gray-800 dark:bg-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-md dark:text-white/80'
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    {/* live demo and github repo button */}
                    <div className='flex items-center gap-2 absolute bottom-3'>
                        <a 
                            href={liveDemoUrl}
                            className='bg-gray-800 text-gray-100 rounded-full py-1 px-3 text-xs hover:scale-105 hover:bg-gray-900 transition flex items-center gap-1 dark:bg-gray-900 dark:hover:bg-gray-950'
                            target='_blank'
                        >
                            Ver Sitio
                            <RxOpenInNewWindow />
                        </a>
                        <a 
                            href={repoUrl}
                            className='bg-gray-800 text-gray-100 rounded-full py-1 px-3 text-xs hover:scale-105 hover:bg-gray-900 transition flex items-center gap-1 dark:bg-gray-900 dark:hover:bg-gray-950'
                            target='_blank'
                        >
                            Repositorio
                            <BsGithub />
                        </a>
                    </div>
                </div>  

                <Image 
                    src={imageUrl} alt={"Image of the project: " + title} quality={95} 
                    className='absolute hidden sm:block top-7 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-110'
                />
            </section>
        </motion.div>
    )
}