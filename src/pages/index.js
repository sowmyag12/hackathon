import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Sowmya Ganesh Gupta</h1>
    <p>I started learning full stack web development from August 2018. 
      I am passionate about coding. I have done a couple of projects
      too. I believe this would be an awesome oppurtunity to learn more 
      in this field, develop something cool and also meet several people 
      with same interest.  </p>
    <ul>
      <li>
        <h2><a href="https://FinalQuizApp--sow12.repl.co">Quiz App</a></h2>
        <p>This app tests your basic knowledge of HTML, CSS and JS</p>
      </li>
      <li>
        <h2><a href="https://sowmyag12.github.io/DigitalTravelKit/">DigitalTravelKit</a></h2>
        <p>This app uses Google maps and Google translate API and helps
           users to have both of them in one place.</p>
      </li>
    </ul>
    <p></p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
