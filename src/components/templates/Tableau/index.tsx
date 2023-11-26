import { ReactNode } from 'react';
import styles from './styles.module.css';

type TableauProps = {
  children: ReactNode;
};

const Tableau = ({ children }: TableauProps) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Tableau;
