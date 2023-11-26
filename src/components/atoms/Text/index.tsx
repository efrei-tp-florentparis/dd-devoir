import React from 'react';
import styles from './styles.module.css'; // Assurez-vous d'importer votre fichier de styles

type TextProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'regular' | 'semibold' | 'bold';
  color?: 'green' | 'dark-green' | 'brown' | 'dark-brown' | 'white';
  style?: React.CSSProperties;
  className?: string;
};

const Text = ({
  children,
  size,
  weight,
  color,
  style,
  className,
}: TextProps) => {
  const textSizeClass = size ? styles[`text-${size}`] : styles['text-md'];

  const textWeightClass = weight
    ? styles[`font-${weight}`]
    : styles['font-regular'];

  const textColorClass = color
    ? styles[`color-${color}`]
    : styles['color-dark-green'];

  const combinedClasses = `${styles.text} ${textSizeClass} ${textWeightClass} ${textColorClass} ${className}`;

  return (
    <span className={combinedClasses} style={style}>
      {children}
    </span>
  );
};

export default Text;
