import React from 'react'
import Hero from '../components/Hero'
import ProjectListings from '../components/ProjectListings'
import ViewAllProjects from '../components/ViewAllProjects'

const HomePage = () => {
  return (
    <>
      <Hero title="Alex"
            subtitle="Fresh graduate of Computer Science. Interested in improving the perception of digital client to customer interactions."/>
        <ProjectListings isHome={true}/>
        <ViewAllProjects />
    </>
  )
}

export default HomePage
