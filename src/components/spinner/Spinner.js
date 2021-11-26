const Spinner = () => {
  return (
    <svg style={{margin: '2rem auto', background: 'transparent', display: 'block', shapeRendering: 'auto'}} width="10rem" height="8rem" viewBox="0 0 100 100">
      <circle cx="50" cy="50" fill="none" stroke="#ffa280" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  );
};

export default Spinner;