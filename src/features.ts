import supervisorIcon from './assets/images/icon-supervisor.svg';
import teamBuilderIcon from './assets/images/icon-team-builder.svg';
import karmaIcon from './assets/images/icon-karma.svg';
import calculatorIcon from './assets/images/icon-calculator.svg';

export const features = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    icon: supervisorIcon,
    color: 'cyan',
  },
  {
    title: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    icon: teamBuilderIcon,
    color: 'red',
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    icon: karmaIcon,
    color: 'orange',
  },
  {
    title: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    icon: calculatorIcon,
    color: 'blue',
  },
];
