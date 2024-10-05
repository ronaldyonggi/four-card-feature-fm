import { features } from '../../features';
import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './FeatureList.module.css';

export default function FeatureList() {
  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} className={styles[`card${index + 1}`]} />
      ))}
    </div>
  );
}
