import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { menus } from '../Nav/constants'
import { AbouIllustration } from '../Illustration'
import { IFButton } from '../Button'
import { Modal } from '../Modal'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { timeline } from './constants'

const Sections = {
  background: 'Background',
  interest: 'Interest',
  career: 'Career',
} as const
export const About = () => {
  const [selectedSection, setSelectedSection] = useState('')

  return (
    <section
      id={menus[0].target}
      className="w-full h-d-screen bg-black flex items-center flex-wrap"
    >
      <div className="w-1/2">
        <AbouIllustration />
      </div>
      <div className="w-1/2 pr-28 z-10">
        <TypeAnimation
          sequence={[
            'Hi there!\nHere you can find about my background.',
            'Hi there!\nHere you can find about my interest.',
            'Hi there!\nHere you can find about my career progression.',
          ]}
          speed={8}
          repeat={Infinity}
          className="text-3xl whitespace-pre-line"
        />
        <div className="flex gap-10 mt-10">
          <IFButton
            color="green"
            onClick={() => setSelectedSection(Sections.background)}
          >
            {Sections.background}
          </IFButton>
          <IFButton
            color="yellow"
            onClick={() => setSelectedSection(Sections.interest)}
          >
            {Sections.interest}
          </IFButton>
          <IFButton
            color="blue"
            onClick={() => setSelectedSection(Sections.career)}
          >
            {Sections.career}
          </IFButton>
        </div>
        <div className="flex mt-10 w-full text-base">
          {selectedSection === Sections.background && (
            <TypeAnimation
              sequence={[
                "Hi, nice to meet you! I'm from Indonesia, I like to travel and try to feel different kinds of atmosphere in different cities. I have Engineering degree (Bachelor of Applied Engineering from STTN-BATAN Yogyakarta). I specialized in Frontend Engineer, I've been involved in many different kinds of projects, I also have experience in mentoring.",
              ]}
              speed={70}
              className="text-justify"
            />
          )}
          {selectedSection === Sections.interest && (
            <TypeAnimation
              sequence={[
                "Wow! Thank you for being curious! Mostly my interest lies in tech! Either it was gadget, new frameworks, or news about frameworks updates. I also have interest in crypto and AI, I always had a wish to contribute to the technology (in my speciality), so that's currently my goal. I also love to listen to music, sometimes I play games, and sometimes I do small projects like this portofolio.",
              ]}
              speed={70}
              className="text-justify"
            />
          )}
        </div>
      </div>
      <Modal
        isOpen={selectedSection === Sections.career}
        onClose={() => setSelectedSection('')}
      >
        <div className="w-full text-center">
          <span className="text-xl font-bold">
            CAREER TIMELINE (PRESENT TO PAST)
          </span>
        </div>
        <VerticalTimeline className="mt-5">
          {timeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: index === 0 ? '#182930' : '#454545', color: '#fff' }}
              contentArrowStyle={{
                borderRight: `7px solid ${index === 0 ? '#182930' : '#454545'}`,
              }}
              date={item.date}
              iconStyle={{
                background: '#FFF',
                color: '#fff',
                overflow: 'hidden',
              }}
              icon={<img src={item.icon} />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Modal>
    </section>
  )
}
