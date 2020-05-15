import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Lorem ipsum</>,
    imageUrl: "img/undraw_online_test.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor
        rutrum nibh, non convallis maurisLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent tempor rutrum nibh, non convallis mauris
      </>
    ),
  },
  {
    title: <>Lorem ipsum</>,
    imageUrl: "img/undraw_books.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor
        rutrum nibh, non convallis maurisLorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent tempor rutrum nibh, non convallis mauris
      </>
    ),
  },
  {
    title: <>Lorem ipsum</>,
    imageUrl: "img/undraw_learning.svg",
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor
        rutrum nibh, non convallis mauris.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent tempor rutrum nibh, non convallis
        mauris
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="ged-school <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/basic-algebra-1")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
