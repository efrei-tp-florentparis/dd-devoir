type ArrowDownProps = {
  color?: 'white' | 'darkGreen';
};

const ArrowDown = ({ color }: ArrowDownProps) => {
  const colorArray = {
    white: '#fefae0',
    darkGreen: '#283618',
  };

  return (
    <svg
      width="17"
      height="9"
      viewBox="0 0 19 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="10.4697"
        y1="10.5303"
        x2="1.46967"
        y2="1.53033"
        stroke={colorArray[color || 'darkGreen']}
        stroke-width="1.5"
      />
      <line
        x1="10.4697"
        y1="9.46967"
        x2="18.4697"
        y2="1.46967"
        stroke={colorArray[color || 'darkGreen']}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default ArrowDown;
