import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🛠️ Git & Open Source Playground',
    emoji: '💻',
    description: (
      <>
        Learn Git hands-on! Fork our sandbox repositories, make your first Pull Requests, 
        and practice contributing to open source in a safe and supportive environment.
      </>
    ),
  },
  {
    title: '🎨 Portfolio & Profile Showcase',
    emoji: '💎',
    description: (
      <>
        Showcase your work to the world! Submit your custom GitHub README profiles, 
        web applications, and portfolio designs to get featured in our community collection.
      </>
    ),
  },
  {
    title: '🤖 Automated Onboarding',
    emoji: '⚡',
    description: (
      <>
        No manual waiting! Use our issue-based auto-invite system to join our GitHub organization
        and start collaborating with other developers instantly.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span style={{ fontSize: '4.5rem', display: 'inline-block', padding: '1rem' }}>{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
