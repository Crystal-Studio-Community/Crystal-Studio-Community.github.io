import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
          💎 {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '1.5rem', margin: '1.5rem 0' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link
            className="button button--secondary button--lg"
            style={{ border: '2px solid var(--ifm-color-primary)', background: 'transparent', color: 'white' }}
            to="/join">
            Join the Organization 🚀
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read Guides 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="The official landing page and educational portal of Crystal Studio Community. Built with Docusaurus.">
      <HomepageHeader />
      <main style={{ padding: '3rem 0' }}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
