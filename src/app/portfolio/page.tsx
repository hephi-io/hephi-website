import React from 'react'

import NavBar from "@/app/components/home/nav-bar"
import ModeToggle from "@/app/components/home/mode-toggle"
import CaseStudy from "@/app/components/portfolio/case-study"
import Objective from "@/app/components/portfolio/objective"
import Problem from "@/app/components/portfolio/problem"
import Scope from "@/app/components/portfolio/scope"
import Process from "@/app/components/home/process-section"
import Solution from "@/app/components/portfolio/solution"
import Result from "@/app/components/portfolio/result"
import RecentWork from "@/app/components/home/recent-work"
import FAQSection from "@/app/components/home/faq-section"
import Footer from "@/app/components/home/footer"


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
      <Result />
      <RecentWork page="portfolio" />
      <FAQSection page="portfolio" />
      <Footer page="portfolio" />
    </main>
  )
}

export default Portfolio