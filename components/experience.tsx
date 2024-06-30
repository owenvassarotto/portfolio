"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useThemeContext } from '@/context/theme-context';
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Experience() {

    const { ref, inView } = useSectionInView("Experiencia", 0.3);

    const { theme } = useThemeContext();

  return (
    <section
        id='experience'
        ref={ref}
        className='scroll-mt-28 mb-28 sm:mb-40'
    >
        <SectionHeading>Mi experiencia</SectionHeading>

        <VerticalTimeline 
            lineColor=''
        >
            {experiencesData.map((item, index) => (
                <VerticalTimelineElement
                    key={index}
                    visible={inView}
                    contentStyle={{
                        background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem"
                    }}
                    contentArrowStyle={{
                        borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)"
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        background: theme === "light" ? "white" : "#111827",
                        fontSize:"1.5rem",
                    }}
                >
                    <h3 className='font-bold'>{item.title}</h3>
                    <p className='font-normal !mt-0 mb-2'>{item.location}</p>
                    {item.url && (
                        <a 
                            target='_blank' 
                            href={item.url}
                            className='text-gray-500 dark:text-gray-400 text-sm mb-2'
                        >
                            {item.url}
                        </a>
                    )}
                    <p className='!mt-1 !font-normal text-gray-700 !text-sm dark:text-white/75'>{item.description}</p>
                    {item.credential && (
                        <a 
                            href={item.credential}
                            className='bg-gray-800 text-gray-100 rounded-full py-1 px-3 text-xs hover:scale-105 hover:bg-gray-900 transition flex items-center gap-1 dark:bg-gray-900 dark:hover:bg-gray-950 mt-4 w-fit'
                            target='_blank'
                            >
                            Ver Credencial
                            <RxOpenInNewWindow />
                        </a>
                    )}
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </section>
  )
}
