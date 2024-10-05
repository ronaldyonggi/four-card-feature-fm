import { features } from '../../features';
import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './FeatureList.module.css';

export default function FeatureList() {
  return (
    <div className={styles.container}>
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );
}
