function GridContainer({ children, className, id }) {
  return (
    <section className={`grid-container ${className}`} id={id}>{children}</section>
  );
}

export default GridContainer;
