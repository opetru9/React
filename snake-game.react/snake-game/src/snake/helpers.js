// common Components
const Component = ({ name, children}) => {
  return (
    <div className={name}>
        {children}
    </div>)
};

// Decorators:
const withCoordinates = (Component) => {
  return ({ top, left, ...props }) => {
    return (
      <div style={{ top: `${top}px`, left: `${left}px`, position: "absolute" }}>
        <Component {...props} />
      </div>
    );
  };
};

const withDirection = (Component) => {
  return ({ dir, ...props }) => {
    return (
      <div className={`dir-${dir}`}>
        <Component {...props} />
      </div>
    );
  };
};

export {Component, withCoordinates, withDirection}