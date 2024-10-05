import { IFeature } from '../../types';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  feature: IFeature;
  className: string;
}

export default function FeatureCard({ feature, className }: FeatureCardProps) {
  const cardBorderTopColor = {
    borderTop: `3.5px solid var(--color-primary-${feature.color})`,
  };
  return (
    <div className={`${styles.container} ${className}`} style={cardBorderTopColor}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{feature.title}</h3>
        <p className={styles.description}>{feature.description}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={feature.icon} alt='Icon feature' />
      </div>
    </div>
  );
}
