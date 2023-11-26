/* styles */
import styles from './styles.module.css';

/* components */
import Text from '../Text';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Text size="sm" color="brown">
        Fait par Florent PARIS avec le ❤️
      </Text>
    </div>
  );
};

export default Footer;
