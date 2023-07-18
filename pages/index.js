import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is <strong>Danny Vasta</strong>! I'm a Software Engineer <i>(currently open for work)</i> with a passion for frontend/web development technologies. I care about code maintenance, user experience and accessibility.</p>
        <p>Experienced with React, Redux, Javascript/Typescript and Frontend Architecture design efforts.</p>
      </section>
      <section class="leftcolumn">
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Info</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <a href="/resume.pdf" target="_blank">Resume</a>
            </li>
            <li className={utilStyles.listItem}>
              <a href="https://www.linkedin.com/in/daniel-vasta/" target="_blank">LinkedIn</a>
            </li>
            <li className={utilStyles.listItem}>
              <a href="https://github.com/DNNYVST" target="_blank">Github</a>
            </li>
          </ul>
        </section>
      </section>
      <section class="rightcolumn">
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Contact</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <a href="mailto:djv711@gmail.com" target="_blank">E-mail</a>
            </li>
          </ul>
        </section>
      </section>
    </Layout>
  )
}