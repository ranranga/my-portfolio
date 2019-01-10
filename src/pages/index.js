import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello World!</h3>
    <p>
      I'm Sachidanand Vaishnav, a passionate <strong>Frontend Engineer</strong>{' '}
      with keen interest in <strong>UX and UI design</strong>.
    </p>
    <p>
      My work experience can be found here in{' '}
      <a
        href="https://www.linkedin.com/in/scadyy/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: `none` }}
      >
        LinkedIn
      </a>
      . I'm an active contributor to open source community so here's my{' '}
      <a
        href="https://github.com/scadyy"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: `none` }}
      >
        GitHub
      </a>{' '}
      account.
    </p>
    <div style={{ float: `left`, width: `100%` }}>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <p>I love to kill UI and UX problems in a fun way 😎 </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
