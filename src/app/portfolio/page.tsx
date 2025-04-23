import React from 'react'

import NavBar from "@/app/components/portfolio/nav-bar"
import ModeToggle from "@/app/components/home/mode-toggle"
import CaseStudy from "@/app/components/portfolio/case-study"
import Objective from "@/app/components/portfolio/objective"
import Problem from "@/app/components/portfolio/problem"
import Scope from "@/app/components/portfolio/scope"
import Process from "@/app/components/portfolio/process-section"
import Solution from "@/app/components/portfolio/solution"
import Result from "@/app/components/portfolio/result"
import RecentWork from "@/app/components/home/recent-work"
import FAQSection from "@/app/components/home/faq-section"
import Footer from "@/app/components/home/footer"


const Portfolio = () => {
  return (
    <main className="dark dark:bg-[#1B1B1C]">
      <NavBar />
      <ModeToggle />
      <CaseStudy />
      <Objective />
      <Problem />
      <Scope />
      <Process />
      <Solution />
      <Result />
      <section className="mb-12 sm:mb-[120px]">
        <RecentWork />
      </section>
      <section className="mb-12 sm:mb-[120px]">
        <FAQSection />
      </section>
      <footer className="sm:pb-4">
        <Footer />
      </footer>
    </main>
  )
}

export default Portfolio