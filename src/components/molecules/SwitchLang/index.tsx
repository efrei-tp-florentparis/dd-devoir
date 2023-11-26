/* styles */
import styles from './styles.module.css';

/* components */
import Text from '@/components/atoms/Text';
import ArrowDown from '@/assets/icons/ArrowDown';

/* interface */
type SwitchLangProps = {
  color: 'white' | 'darkGreen';
  className?: string;
};

const SwitchLang = ({ color, className }: SwitchLangProps) => {
  const switchLangClassName = className
    ? `${styles.switch} ${className} ${
        color == 'white' ? styles.white : styles.black
      }`
    : `${styles.switch} ${color == 'white' ? styles.white : styles.black}`;

  return (
    <div className={switchLangClassName}>
      <Text
        size="sm"
        weight="semibold"
        color={color == 'white' ? 'white' : 'dark-green'}
      >
        FR
      </Text>
      <ArrowDown color={color} />
    </div>
  );
};

export default SwitchLang;
