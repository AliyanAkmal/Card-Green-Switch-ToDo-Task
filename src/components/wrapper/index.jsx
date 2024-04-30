const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        padding: "15px 10px",
        width: "100vw",
        backgroundColor: "#FFF8E1",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
