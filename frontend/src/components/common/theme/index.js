import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "16px",
      },
      h2: {
        fontSize: "16px",
      },
      h1: {
        fontSize: "24px",
        fontWeight: "bold",
      },
      ".error": {
        color: "#B72618",
        fontSize: "12px",
      },
    },
  },
  components: {
    Table: {
      variants: {
        spiritTable: {
          tr: {
            borderColor: "#EEEEEE",
            borderBottomWidth: "1px",
            _odd: {
              background: "#F8F7F7",
            },
          },
          th: {
            fontSize: "16px",
            background: "brand.lightpink",
            textTransform: "capitalize",
            whiteSpace: "nowrap",
          },
          td: {
            fontSize: "14px",
          },
        },
      },
    },

    Button: {
      // style object for base or default style
      baseStyle: {
        px: 4,
        py: 2,
      },
      // styles for different sizes ("sm", "md", "lg")
      sizes: {},
      // styles for different visual variants ("outline", "solid")
      variants: {
        base: {
          _hover: {
            bg: "#B72618 !important",
          },
          bg: "#B72618",
          color: "#FFF",
          fontWeight: "normal",
          fontSize: "14px",
          border: "1px solid #B72618",
          minWidth: "130px",
        },
        "dottedBorder-button": {
          border: "1px dashed #717476",
          borderRadius: "10px",
          background: "#FFFFFF",
          fontSize: "16px",
          color: "#666",
          fontWeight: "normal",
        },

        "cancel-button": {
          bg: "transparent",
          pl: "5px",
          pr: "5px",
          fontWeight: "bold",
          height: "31px",
          minWidth: "130px",
          border: "1px solid #767676",
        },
      },
      // default values for `size` and `variant`
      defaultProps: {
        size: "",
        variant: "base",
      },
    },
  },
  colors: {
    customRed: {
      500: "#B72618",
    },
    brand: {
      black: "#000000", // black
      white: "#FFFFFF", // white
      red: "#B72618", // red
      green: "#3F6701", // green
      lightpink: "#FFF0EF", // lightpink
      grey: "#767676", // grey
      darkgrey: "#666666",
      lightgrey: "#C4C4C4",
    },
  },
  fonts: {
    heading: "Ibm Plex Sans",
    body: "IBM Plex Sans",
  },
});
export default theme;
