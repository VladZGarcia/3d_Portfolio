import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        As an individual, I have been described as someone who is driven and energetic, my patience and positive outlook on life make me easy to get along with, and I have always prided myself on being able to remain calm even in the most stressful situations.

        When it comes to problem-solving, I am a firm believer in the importance of communication and efficiency. I prefer to work both independently and as part of a team, and I always strive to ensure that everyone involved in a project is on the same page. This approach helps to avoid misunderstandings and extra work, and ultimately leads to a more streamlined and effective workflow.

        I have a wealth of experience in working under pressure, and my colleagues have consistently praised me for my accuracy, flexibility, and proactive attitude. I am always eager to take on new challenges and to adapt to new situations, and I believe that these qualities make me a valuable asset to any team.


      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");