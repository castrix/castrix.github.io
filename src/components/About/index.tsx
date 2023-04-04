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
import { aboutGreetings, aboutMessages, aboutSections, timeline } from '../../constants'

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
      <div className="w-1/2 pr-28 z-10 pointer-events-none">
        <TypeAnimation
          sequence={aboutGreetings}
          speed={8}
          repeat={Infinity}
          className="text-3xl whitespace-pre-line"
        />
        <div className="flex gap-10 mt-10">
          <IFButton
            color="green"
            onClick={() => setSelectedSection(aboutSections.background)}
          >
            {aboutSections.background}
          </IFButton>
          <IFButton
            color="yellow"
            onClick={() => setSelectedSection(aboutSections.interest)}
          >
            {aboutSections.interest}
          </IFButton>
          <IFButton
            color="blue"
            onClick={() => setSelectedSection(aboutSections.career)}
          >
            {aboutSections.career}
          </IFButton>
        </div>
        <div className="flex mt-10 w-full text-base">
          {selectedSection === aboutSections.background && (
            <TypeAnimation
              sequence={aboutMessages[aboutSections.background]}
              speed={70}
              className="text-justify"
            />
          )}
          {selectedSection === aboutSections.interest && (
            <TypeAnimation
              sequence={aboutMessages[aboutSections.interest]}
              speed={70}
              className="text-justify"
            />
          )}
        </div>
      </div>
      <Modal
        isOpen={selectedSection === aboutSections.career}
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
