import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Basics',
    Svg: require('@site/static/img/teamwork.svg').default,
    description: (
      <>
        Learn the basics of JavaScript and React Native
      </>
    ),
  },
  {
    title: 'TypeScript',
    Svg: require('@site/static/img/success.svg').default,
    description: (
      <>
        Using TypeScript to add types to JavaScript
      </>
    ),
  },
  {
    title: 'Splash screens, App Icons, custom fonts',
    Svg: require('@site/static/img/prize.svg').default,
    description: (
      <>
        Make your app stand out with your own custom splash screens, app icons and custom fonts
      </>
    ),
  },
  {
    title: 'Images',
    Svg: require('@site/static/img/winner.svg').default,
    description: (
      <>
        Persist data across sessions using AsyncStorage
      </>
    ),
  },
  {
    title: 'Vector Icons',
    Svg: require('@site/static/img/clover.svg').default,
    description: (
      <>
        Spice up your app with vector icons
      </>
    ),
  },
  {
    title: 'Gestures and Animation',
    Svg: require('@site/static/img/idea.svg').default,
    description: (
      <>
        Learn to use gestures and animation
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
