import React from 'react'
import { useState, useEffect, useRef } from 'react'
import "./styles/About.css"

const stats = [
  { id: 1, value: "5+", label: "Years Experience" },
  { id: 2, value: "48", label: "Projects Shipped" },
  { id: 3, value: "12", label: "Happy Clients" },
  { id: 4, value: "3",  label: "Open Source Libs" },
];

const skills = [
  { id: 1, name: "React",      level: 92 },
  { id: 2, name: "Node.js",    level: 85 },
  { id: 3, name: "TypeScript", level: 88 },
  { id: 4, name: "UI/UX",      level: 78 },
  { id: 5, name: "PostgreSQL", level: 74 },
];
function useInView(){
    const boxRef= useRef(null);
    const [isVisible, setIsVisble]=useState(false)
    useEffect(()=>{
      const observer= new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          console.log("Is visible?", entry.isIntersecting);
          if (entry.isIntersecting) {
            setIsVisble(true)
          }
        });
      },{
         threshold: 0.3
         })
      observer.observe(boxRef.current)

      return(()=>{
        observer.disconnect()
      })
    },[])
    
    return [boxRef, isVisible];
  } 

   
export default function About() {
  const [sectionRef,inView]=useInView();
  const [hoveredid, setHoveredid]=useState(null);
  return (
    <>
       <section className='mysection' ref={sectionRef}>
        <div className="about-grid">
          <div className={`fade-up ${inView ? "visible": ""}`}>
          <div className="section-eyebrow">About me</div>
            <h2 className="heading">Craftng digital <br /><em>experience</em> that<br />actually matter</h2>
            <p className="bio-text">
               I'm a full-stack developer with a designer's eye and an engineer's mind. Great software isn't just functional — it's felt. Every interaction, every transition is an opportunity to create something worth remembering. <br />
            </p>
            <p className="bio-text">
              Based in Sétif, Algeria — working with clients worldwide. I specialize in building fast, accessible, and beautiful web products.
            </p>
          </div>
          <div className='wrapper'>
            <div className="stats-grid">
              {stats.map((row)=>(
                <div className="stat-cell" key={row.id} style={{background: hoveredid=== row.id ? "#1c2431": ""}} onMouseEnter={()=>setHoveredid(row.id)}onMouseLeave={()=>setHoveredid(null)} >
                  <div className="stat-value" >{row.value}</div>
                  <div className="stat-label" >{row.label}</div>
                </div>
                ))}
            </div>
            <div className="skills-block">
                {skills.map((skill)=>(
                  <div className="skill-row" key={skill.id}>
                    
                    <div  className="skill-meta">
                      <span>{skill.name}</span>
                      <span >{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                       <div className="skill-bar-fill" style={{ width: inView ? `${skill.level}%` : "0%" }} />
                    </div>
                  </div>
                ))
                }
            </div>
            <div className="badge">
              <div className="dot"></div>
              <span>Available for freelance work</span>
            </div>
          </div>
          </div>
          

        
       </section>
    </>
  )
}
