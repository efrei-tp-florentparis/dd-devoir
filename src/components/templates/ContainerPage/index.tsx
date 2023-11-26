import { ReactNode } from 'react';
import styles from './styles.module.css';

type ContainerPageProps = {
  children: ReactNode;
};

const ContainerPage = ({ children }: ContainerPageProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerPage;
