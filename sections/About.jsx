'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="- About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Your title</span> am a UI/UX
        Designer Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem molestiae uasi quo aspernatur labore facilis porro tenetur.
        Autem fug\ it quidem, excepturi fuga officiis totam atque nostrum omnis
        laborum tenetur ! Necessitatibus.{' '}
        <span className="font-extrabold text-white">
          worked witn international clients
        </span>{' '}
        using mostly{' '}
        <span className="font-extrabold text-white">Figma</span>  amet consectetur adipisicing elit.
        Voluptatem molestiae uasi quo asper
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> some of my works below.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
