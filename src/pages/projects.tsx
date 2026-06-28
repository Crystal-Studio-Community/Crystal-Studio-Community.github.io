import React from 'react';
import Layout from '@theme/Layout';

export default function Projects(): React.ReactNode {
  return (
    <Layout
      title="Our Projects 🛠️"
      description="Explore the open-source projects and repositories active under the Crystal-Studio-Community organization.">
      <main style={{ padding: '4rem 0', maxWidth: '900px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>🛠️ Community Projects</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)', marginTop: '1rem' }}>
            Discover and contribute to our open-source ecosystem. 💎
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          <div className="card-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>📦 Connect</h3>
              <p style={{ color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6' }}>
                Our automated onboarding gateway repository. This is where newcomers request an invite to join our 
                GitHub organization simply by opening a form-filled issue.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://github.com/Crystal-Studio-Community/Connect" target="_blank" rel="noopener noreferrer" className="button button--secondary button--sm">
                View Repository 🐙
              </a>
            </div>
          </div>

          <div className="card-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>🛠️ opensource-playground</h3>
              <p style={{ color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6' }}>
                A risk-free sandbox repository where beginners can practice Git commands, create forks, checkout branches, 
                commit files, and open Pull Requests.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://github.com/Crystal-Studio-Community/opensource-playground" target="_blank" rel="noopener noreferrer" className="button button--secondary button--sm">
                View Repository 🐙
              </a>
            </div>
          </div>

          <div className="card-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>🎨 crystal-showcase</h3>
              <p style={{ color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6' }}>
                A curated gallery repository for members to submit their portfolio links, resume designs, and custom 
                GitHub profile README layouts.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://github.com/Crystal-Studio-Community/crystal-showcase" target="_blank" rel="noopener noreferrer" className="button button--secondary button--sm">
                View Repository 🐙
              </a>
            </div>
          </div>

          <div className="card-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>🌐 Crystal-Studio-Community.github.io</h3>
              <p style={{ color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6' }}>
                The official documentation, guides, and landing portal of our community (the website you are currently browsing), 
                built using Docusaurus.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://github.com/Crystal-Studio-Community/Crystal-Studio-Community.github.io" target="_blank" rel="noopener noreferrer" className="button button--secondary button--sm">
                View Repository 🐙
              </a>
            </div>
          </div>

        </div>

        <section style={{ backgroundColor: 'var(--ifm-background-color-light)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--card-border-color)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'semibold', marginBottom: '1rem' }}>🚀 Have an Idea for a New Project?</h2>
          <p style={{ color: 'var(--ifm-color-emphasis-700)', maxWidth: '600px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
            Crystal Studio supports member-initiated projects! If you want to start a new website, mobile app, API utility, or bot under 
            our organization, share your proposal in our Discord or open an issue!
          </p>
          <a href="/join" className="button button--primary">
            Join Organization & Propose 💡
          </a>
        </section>
      </main>
    </Layout>
  );
}
