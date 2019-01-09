import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello World!</h3>
    <p>I'm Sachidanand Vaishnav, a passionate <strong>Frontend Engineer</strong> with keen interest in UX and UI design.</p>
    <p>My work experience can be found here in <Link to="https://www.linkedin.com/in/scadyy/" style={{textDecoration: `none`}}>LinkedIn</Link>. 
    I'm an active contributor to open source community so    here's my <Link to="https://github.com/scadyy" style={{textDecoration: `none`}}>GitHub
    </Link> account.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
  </Layout>
)

export default IndexPage
