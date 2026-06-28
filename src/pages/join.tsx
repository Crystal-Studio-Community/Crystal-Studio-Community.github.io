import React from 'react';
import Layout from '@theme/Layout';

export default function Join(): React.ReactNode {
  return (
    <Layout
      title="Join the Community 🚀"
      description="Learn how to join the Crystal Studio Community and make your membership public.">
      <main style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>💎 Join Crystal Studio Community</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)', marginTop: '1rem' }}>
            We're excited to have you! Follow these quick steps to get automatically onboarded. 🎉
          </p>
        </div>

        <section style={{ backgroundColor: 'var(--ifm-background-color-light)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--ifm-color-emphasis-200)', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'semibold', marginBottom: '1.5rem' }}>⚡ Fast Onboarding</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3>1️⃣ Step 1: Open an Invitation Request</h3>
            <p>Click the button below to go to our onboarding repository and open an issue form.</p>
            <div style={{ marginTop: '1rem' }}>
              <a 
                href="https://github.com/Crystal-Studio-Community/Connect/issues/new?template=invitation.yml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button button--primary button--lg"
                style={{ textDecoration: 'none' }}>
                Create Invitation Issue 💌
              </a>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>2️⃣ Step 2: Submit the Form</h3>
            <p>Fill out your details (such as your name and Discord username) and click **Submit new issue**.</p>
          </div>

          <div>
            <h3>3️⃣ Step 3: Accept the Invite</h3>
            <p>
              Within seconds, our automated bot will process your request, send you an invitation, and close the issue. 
              Check your email or visit the <strong><a href="https://github.com/Crystal-Studio-Community" target="_blank" rel="noopener noreferrer">Crystal-Studio-Community Organization page</a></strong> to accept!
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'semibold', marginBottom: '1.5rem', textAlign: 'center' }}>
            🔓 How to make your membership public?
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Once you join, your membership is set to <strong>Private</strong> by default. Follow these steps to show it on your personal GitHub profile!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>1. Go to the Organization People Directory</h4>
              <p style={{ color: 'var(--ifm-color-emphasis-700)' }}>
                Go to the organization homepage and click the <strong>People</strong> tab.
              </p>
              <img src="/assets/github1.jpg" alt="Click People Tab" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '0.5rem' }} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>2. Search for your username</h4>
              <p style={{ color: 'var(--ifm-color-emphasis-700)' }}>
                Type your GitHub username in the search box to locate your row.
              </p>
              <img src="/assets/github2.jpg" alt="Search Username" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '0.5rem' }} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>3. Change Private to Public</h4>
              <p style={{ color: 'var(--ifm-color-emphasis-700)' }}>
                Click the dropdown menu next to your name and switch it from <strong>Private</strong> to <strong>Public</strong>.
              </p>
              <img src="/assets/github3.jpg" alt="Change visibility dropdown" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)', marginTop: '0.5rem' }} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
