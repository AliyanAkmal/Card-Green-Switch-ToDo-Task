const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        padding: "15px 10px",
        width: "100vw",
        // height: "100vh",
        backgroundColor: "#070F2B",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
