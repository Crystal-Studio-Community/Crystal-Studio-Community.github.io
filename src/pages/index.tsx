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
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ borderBottom: '1px solid var(--card-border-color)', padding: '6rem 0', textAlign: 'center' }}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.025em' }}>
          💎 {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '1.4rem', color: 'var(--ifm-color-emphasis-700)', maxWidth: '600px', margin: '1.5rem auto' }}>
          {siteConfig.tagline}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
          <Link
            className="button button--primary button--lg"
            to="/join">
            Join the Organization 🚀
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ border: '1px solid var(--card-border-color)', backgroundColor: 'transparent', color: 'var(--ifm-font-color-base)' }}
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
      title={`Home | ${siteConfig.title}`}
      description="The official learning portal and landing website of Crystal Studio Community. Built with Docusaurus.">
      <HomepageHeader />
      <main style={{ padding: '5rem 0' }}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
