import React from 'react';
import Layout from '@theme/Layout';

export default function About(): React.ReactNode {
  return (
    <Layout
      title="About Us 💎"
      description="Learn about the mission, values, and community philosophy of Crystal Studio Community.">
      <main style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>💎 About Crystal Studio</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)', marginTop: '1rem' }}>
            Building the next generation of open-source developers through collaboration. 🚀
          </p>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'semibold', borderBottom: '2px solid var(--card-border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            🌟 Our Mission
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.75' }}>
            At **Crystal Studio Community**, we believe that the best way to master programming is by building real-world projects 
            in a collaborative environment. Open source is not just about writing code; it's about learning how to work in teams, 
            give and receive constructive reviews, and deploy production-grade software.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.75', marginTop: '1rem' }}>
            We provide a risk-free workspace where beginners can take their first steps in Git, write documentation, 
            and submit their first Pull Requests, while advanced developers can build projects and mentor others.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'semibold', borderBottom: '2px solid var(--card-border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            🤝 Our Core Pillars
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem' }}>👥</span>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', margin: 0 }}>Collaboration First, Code Second</h3>
                <p style={{ color: 'var(--ifm-color-emphasis-700)', marginTop: '0.5rem' }}>
                  We prioritize communication, kindness, and team support. Empathy and constructive feedback are the foundations of our community.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem' }}>🎨</span>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', margin: 0 }}>Inclusivity & Accessibility</h3>
                <p style={{ color: 'var(--ifm-color-emphasis-700)', marginTop: '0.5rem' }}>
                  No matter your background, skill level, or location, there is a place for you. We design our onboarding paths to be easy and friction-free.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem' }}>💻</span>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', margin: 0 }}>Practical, Hands-on Learning</h3>
                <p style={{ color: 'var(--ifm-color-emphasis-700)', marginTop: '0.5rem' }}>
                  We skip theoretical lectures in favor of direct practice. Forking, cloning, committing, and opening Pull Requests are how our members learn.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'semibold', borderBottom: '2px solid var(--card-border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            💙 Join Us On the Journey
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '2.5rem' }}>
            Whether you want to build projects, learn new coding tech stacks, or simply connect with other passionate developers, 
            our community is the perfect home for you. Get started today by joining our organization!
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href="/join" className="button button--primary button--lg">
              Get Started Now! 🚀
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
