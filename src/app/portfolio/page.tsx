import React from 'react'

import NavBar from "@/app/components/home/nav-bar"
import ModeToggle from "@/app/components/home/mode-toggle"
import CaseStudy from "@/app/components/portfolio/case-study"
import Objective from "@/app/components/portfolio/objective"
import Problem from "@/app/components/portfolio/problem"
import Scope from "@/app/components/portfolio/scope"
import Process from "@/app/components/home/process-section"
import Solution from "@/app/components/portfolio/solution"


const Portfolio = () => {
  return (
    <main>
      <NavBar />
      <ModeToggle />
      <CaseStudy />
      <Objective />
      <Problem />
      <Scope />
      <Process page="portfolio" />
      <Solution />
    </main>
  )
}

export default Portfolio