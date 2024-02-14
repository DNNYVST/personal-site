import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Secret() {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="twoSecondFadeIn">
          <section className={utilStyles.headingMd}>
            <p>
              Hi there, my name is <strong>Danny</strong>! I'm a Software
              Engineer <i>(currently open for work!)</i> with a passion for
              frontend/web development technologies.
            </p>
            <p>
              I am experienced with React, Redux, Javascript/Typescript and
              frontend architecture design efforts.
            </p>
          </section>
        </section>
      </Layout>
    </>
  );
}
