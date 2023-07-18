import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <span className="twoSecondFadeIn">
          <section className={utilStyles.headingMd}>
            <p>
              Hi there, my name is <strong>Danny</strong>! I'm a Software
              Engineer <i>(currently open for work!)</i> with a passion for
              frontend/web development technologies. I care about code
              maintenance, user experience and accessibility.
            </p>
            <p>
              I am experienced with React, Redux, Javascript/Typescript and
              frontend architecture design efforts.
            </p>
          </section>
          <section className="leftcolumn">
            <section
              className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
              <h2 className={utilStyles.headingLg}>info</h2>
              <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                  <a href="/resume.pdf" target="_blank">
                    resume
                  </a>
                </li>
                <li className={utilStyles.listItem}>
                  <a
                    href="https://www.linkedin.com/in/daniel-vasta/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className={utilStyles.listItem}>
                  <a href="https://github.com/DNNYVST" target="_blank">
                    Github
                  </a>
                </li>
              </ul>
            </section>
          </section>
          <section className="rightcolumn">
            <section
              className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
              <h2 className={utilStyles.headingLg}>contact</h2>
              <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                  <a href="mailto:djv711@gmail.com" target="_blank">
                    e-mail
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </span>
      </Layout>
    </>
  );
}
