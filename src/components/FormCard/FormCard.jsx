import { Box } from "@chakra-ui/react";

const FormCard = ({ name, email, password }) => {
  return (
    <Box
      style={{
        padding: "12px 15px",
        boxShadow: "0.1px 0.1px 2px black",
        width: "300px",
        textAlign: "center",
        backgroundColor: "whitesmoke",
        margin: "5px",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ fontFamily: "24px", fontWeight: "bold" }}>YOUR NAME :</h1>
      <p
        style={{
          fontWeight: "bold",
          color: "mediumSeaGreen",
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>
      <p style={{ fontFamily: "24px", fontWeight: "bold" }}>YOUR EMAIL :</p>
      <p style={{ fontWeight: "bold", color: "mediumSeaGreen" }}>{email}</p>
      <h1 style={{ fontFamily: "24px", fontWeight: "bold" }}>
        YOUR PASSWORD :
      </h1>
      <p style={{ fontWeight: "bold", color: "mediumSeaGreen" }}>{password}</p>
    </Box>
  );
};

export default FormCard;
