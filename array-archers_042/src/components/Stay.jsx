import { Button } from "@chakra-ui/react";
import aboutImage4 from "../assets/stayBike1.png";
export const Stay = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#414141",
        width: "80vw",
        margin: "auto",
        marginBottom: "4vmin",
        padding: "4vmin",
        maxWidth: "1360px",
        flexWrap: "wrap", // Enable wrapping for responsiveness
      }}
    >
      {/* Image Container */}
      <div
        style={{
          width: "100%",
          flexBasis: "40%",
          flexGrow: 1,
          marginBottom: "2vw",
        }}
      >
        <img
          src={aboutImage4}
          alt="Bike image"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Content Container */}
      <div
        style={{
          width: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "2vw",
          flexBasis: "50%", // Allow content to take more space when needed
          flexGrow: 1,
          marginBottom: "2vw",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2.5rem", // Adjusted font size for better responsiveness
          }}
        >
          STAY IN THE KNOW
        </h1>

        {/* Paragraph */}
        <div>
          <p
            style={{
              textAlign: "left",
              fontSize: "0.9rem", // Adjusted font size for better readability
            }}
          >
            Subscribe to receive notifications about the latest news, events,
            presentations and more.
          </p>
        </div>

        {/* Input Field */}
        <div>
          <input
            style={{
              textAlign: "left",
              width: "100%",
              border: "1px solid grey",
              backgroundColor: "#414141",
              padding: "0.5rem",
              fontSize: "0.8rem", // Adjusted font size for better readability
            }}
            type="text"
            placeholder="Email"
          />
        </div>

        {/* Checkbox and Label */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            style={{
              border: "1px solid grey",
              backgroundColor: "#414141",
              marginRight: "0.5rem",
            }}
            type="checkbox"
            id="checkbox1"
          />
          <label
            htmlFor="checkbox1"
            style={{
              fontSize: "0.8rem", // Adjusted font size for better readability
            }}
          >
            I have read the privacy policy and I agree to the processing of the
            personal data.
          </label>
        </div>

        {/* Button */}
        <div>
          <Button
            w="100%"
            bg={"#f38037"}
            rounded={"full"}
            color={"white"}
            flex={"1 0 auto"}
            _hover={{ bg: "white", color: "black" }}
            _focus={{ bg: "white", color: "black" }}
            padding="1rem"
            fontSize="1rem"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};
