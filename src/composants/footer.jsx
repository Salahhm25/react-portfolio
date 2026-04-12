import React from 'react'
import logo from'../assets/lg1.png'
import './styles/footer.css'
import {LinkedinBoxFill, GithubFill} from "akar-icons";
export default function Footer() {
  return (
    <>
        <footer className="Footer">
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="" className='pic'/>
                </div>
                <div className="liens">
                    <a href="https://github.com/Salahhm25" className="lien">GitHub</a>
                    <a href="https://www.upwork.com/freelancers/~01c45ce16cf6792bab?qpn-profile-completeness=employment" className="lien">Upwork</a>
                    <a href="https://www.linkedin.com/in/salah-moade-935947316/" className="lien">linkedin</a>
                </div>
                <div className="icons">
                    <GithubFill strokeWidth={2} size={36} />
                    <LinkedinBoxFill strokeWidth={2} size={36} />
                    <svg  xmlns="http://www.w3.org/2000/svg" className='upwork'
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M17.47 6.07a4.54 4.54 0 0 0-4.38 3.69 20 20 0 0 1-2.28-4.9H8.55v6a2.14 2.14 0 1 1-4.28 0v-6L2 4.91v6a4.4 4.4 0 1 0 8.8-.05v-1a20.6 20.6 0 0 0 1.65 2.7l-1.38 6.61h2.32l1-4.81a5.6 5.6 0 0 0 3.11.89 4.57 4.57 0 0 0 0-9.14zm0 6.83a4.1 4.1 0 0 1-2.55-1l.23-.91v-.05c.16-1 .66-2.6 2.35-2.6a2.25 2.25 0 0 1 2.27 2.24 2.41 2.41 0 0 1-2.27 2.32z"/>
                    </svg>
                </div>
            </div>
            <div className="bottom">
                <p className="fttext">&copy; all copyrights return to sh.dev {new Date().getFullYear()}</p>
            </div>
        </footer>
    </>
  )
}
