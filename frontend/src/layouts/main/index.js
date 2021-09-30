import {
  Flex,
  Box,
  Image,
  Stack,
  Text,
  Spacer,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import { navigate } from "@reach/router";
import bgImage from "../../assets/auth_bg.png";
const MainPage = (props) => {
  return (
    <Box>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        backgroundImage={bgImage}
        backgroundSize="100%"
        // bg={useColorModeValue('gray.50', 'gray.800')} // Need to Add Background Image
      >
        <Flex display={{ base: "block", md: "flex" }} align="center" w="80%">
          <Box>
            <Image src={require("../../assets/logo/Full-Logo.svg").default} />
          </Box>
          <Stack
            spacing={8}
            mx="auto"
            maxW="3xl"
            w={{ base: "100%", md: "60%" }}
            bg="brand.white"
            boxShadow="xl"
            rounded="lg"
          >
            <Flex>
              <Box p="4" />
              <Spacer />
              <Box
                px="4"
                bg="brand.red"
                color="brand.white"
                roundedBottomLeft="lg"
                lineHeight="30px"
                fontSize="18px"
                letterSpacing="0.25em"
                height="31px"
              >
                Grow with us
              </Box>
            </Flex>

            <Stack p="10">
              <Text
                as="h1"
                color="brand.red"
                fontSize="1.2em"
                textTransform="uppercase"
              >
                WELCOME TO 1800SPIRITS
              </Text>

              <Box>
                <Text as="p">
                  Thank you for your interest in our platform. Let us know about
                  yourself, our channel management or merchant relationship
                  management team will reach out to you.
                </Text>
              </Box>
              <Box>
                <Text as="p" mt="5">
                  How would you like to associate with us?{" "}
                </Text>
                <RadioGroup
                  defaultValue="1"
                  mt="3"
                  onChange={(event) => {
                    if (event === "merchant") navigate("/merchant");
                    if (event === "producer") navigate("/producer");
                    if (event === "marketing") navigate("/marketing");
                  }}
                >
                  <Stack>
                    <Radio value="merchant">Merchant</Radio>
                    <Radio value="producer">Producer / Agent</Radio>
                    <Radio value="marketing">Marketing Agency</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </Stack>
            <Box w="35%" h="1" bg="brand.red" roundedTopRight="md" />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainPage;
