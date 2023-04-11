import React, { useRef } from 'react'
import { menus } from '../Nav/constants'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { projects } from '../../constants'
import { Card } from '../Card'
import '@splidejs/react-splide/css'
import './index.css'
import { useIntersectionObserver } from '@/utils/hooks'

export const Projects = () => {
  const pageRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(pageRef, {})
  const isVisible = !!entry?.isIntersecting
  return (
    <section
      id={menus[1].target}
      ref={pageRef}
      className="projects w-full h-d-screen bg-black flex items-center justify-center"
    >
      {isVisible && (
        <>
          <div className="w-2/3 border-x border-white">
            <Splide
              options={{
                autoplay: true,
                type: 'loop',
                padding: '200px',
                autoHeight: true,
                updateOnMove: true,
              }}
              className="w-full"
            >
              {projects.map((project) => (
                <SplideSlide className="mr-12" key={project.title}>
                  <Card
                    image={project.screenshot}
                    title={project.title}
                    subTitle={project.subTitle}
                    description={project.description}
                    hyperlinks={project.hyperlinks}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="w-1/3 text-3xl flex items-center justify-center">
            <span>PROJECTS</span>
          </div>
        </>
      )}
    </section>
  )
}
