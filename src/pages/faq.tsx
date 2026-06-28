import React from 'react';
import Layout from '@theme/Layout';

export default function FAQ(): React.ReactNode {
  return (
    <Layout
      title="FAQs ❓"
      description="Frequently asked questions about joining and contributing to Crystal Studio Community.">
      <main style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>❓ Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)', marginTop: '1rem' }}>
            Find answers to common questions about joining, contributing, and coding. 💎
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
          
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem' }}>
              🙋‍♂️ Who is Crystal Studio for?
            </h3>
            <p style={{ lineHeight: '1.6', color: 'var(--ifm-color-emphasis-800)' }}>
              Crystal Studio is for anyone interested in programming and open-source software. We accommodate:
              - **Absolute Beginners:** Learn Git, HTML, CSS, Python, and make your first PR in a safe playground.
              - **Intermediate Developers:** Collaborate on community web apps, build portfolios, and work in teams.
              - **Advanced Engineers:** Mentor others, review code, and lead new open-source initiatives.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--card-border-color)', paddingTop: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem' }}>
              🤖 How do I get invited to the GitHub organization?
            </h3>
            <p style={{ lineHeight: '1.6', color: 'var(--ifm-color-emphasis-800)' }}>
              We use an automated invitation bot. Go to our **[Join Page](/join)**, click the badge to open an invitation request issue in the **Connect** repository, and submit the form. Within seconds, our bot will invite your GitHub account and close the issue automatically!
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--card-border-color)', paddingTop: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem' }}>
              💻 What technology stacks do you support?
            </h3>
            <p style={{ lineHeight: '1.6', color: 'var(--ifm-color-emphasis-800)' }}>
              We support a wide variety of tech stacks! We have created 10 basic guides covering:
              - **Languages:** Python, SQL, Java, C, C++, JavaScript, TypeScript.
              - **Web & Markup:** HTML & CSS, Markdown, Git & GitHub.
              We are open to projects built in Python (Flask/Django/Streamlit), JavaScript/TypeScript (React/Node.js/Next.js), Flutter, and systems programming!
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--card-border-color)', paddingTop: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem' }}>
              🚀 Can I start my own project under the organization?
            </h3>
            <p style={{ lineHeight: '1.6', color: 'var(--ifm-color-emphasis-800)' }}>
              Yes! If you have an idea for a project (web app, CLI tool, bot, library, etc.) and want to build it with a team under the Crystal Studio banner, you can share it in our Discord. Once approved, we will create a repository for you in the organization.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--card-border-color)', paddingTop: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem' }}>
              💬 Is there a Discord server?
            </h3>
            <p style={{ lineHeight: '1.6', color: 'var(--ifm-color-emphasis-800)' }}>
              Yes! We maintain an active Discord server for community communication, announcements, live support, and general chatting. You can find the link in the footer of this website!
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--card-border-color)', paddingTop: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem' }}>
              📝 How do I write or update guides on this website?
            </h3>
            <p style={{ lineHeight: '1.6', color: 'var(--ifm-color-emphasis-800)' }}>
              The website is open-source! You can clone the **`Crystal-Studio-Community.github.io`** repository, navigate to the `docs/` folder, make changes, and open a Pull Request. Once merged, the website will rebuild and deploy your changes.
            </p>
          </div>

        </div>
      </main>
    </Layout>
  );
}
