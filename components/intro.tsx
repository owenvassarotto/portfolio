"use client";

import Image from "next/image";
import owenimg from "@/public/owen_image.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 md:mb-0 scroll-mt-[100rem] md:flex md:justify-center md:gap-10 md:max-w-5xl"
    >
      <div className="md:order-2 md:w-1/3 flex justify-center items-center mb-4 sm:mb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={owenimg}
            alt="Owen portrait"
            width="300"
            height="300"
            quality="95"
            priority={true}
            className="h-44 w-44 md:h-80 md:w-80 object-cover rounded-full shadow-xl animate-profile_image_animation"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-center text-center md:text-left md:order-1 md:w-2/3 md:max-w-[32rem]">
        <motion.h1
          className="mb-4 mt-4 text-2xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Desarrollador Web Full-Stack
        </motion.h1>

        <motion.p
          className="mb-6 text-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hola, soy Owen Vassarotto. Un apasionado{" "}
          <span className="font-semibold">Desarrollador Web Full-Stack</span>{" "}
          con especialización en el stack{" "}
          <span className="font-semibold underline">MERN</span> y una sólida
          formación académica en{" "}
          <span className="font-semibold italic">programación de software</span>
          .
        </motion.p>

        <motion.div
          className="flex flex-col items-center md:flex-row gap-2 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition w-fit"
            onClick={() => {
              setActiveSection("Contacto");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contáctame
            <BsArrowRight className="group-hover:translate-x-1 transition" />
          </Link>

          <a
            href="/CV_Owen_Vassarotto.pdf"
            className="group bg-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition borderBlack dark:bg-white/10 w-fit"
            target="_blank"
          >
            Currículum Vitae
            <RxOpenInNewWindow className="opacity-75 group-hover:translate-y-1 transition" />
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start gap-2 mt-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            href="https://linkedin.com/in/owenvassarotto"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-xl focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white/85"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/owenvassarotto"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-xl focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/70 dark:hover:text-white/85"
            target="_blank"
          >
            <BsGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
