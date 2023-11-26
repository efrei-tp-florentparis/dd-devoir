/* styles */
import styles from './styles.module.css';

/* interface */
type ButtonProps = {
  children: React.ReactElement;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  const buttonClassName = className
    ? `${styles.button} ${className}`
    : styles.button;

  return (
    <div className={buttonClassName}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
