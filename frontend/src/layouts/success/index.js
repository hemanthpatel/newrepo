import { Flex, Box, Image, Stack, Spacer } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../assets/auth_bg.png";
const SuccessPage = (props) => {
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

            <Stack p="10" color="#38A169" fontSize="1.2em">
              <Box> Your details have been successfully updated.</Box>
              <Box>
                We-Team 1800Spirits, look forward to growing together. Expect us
                to contect you soon.
              </Box>
            </Stack>
            <Box w="35%" h="1" bg="brand.red" roundedTopRight="md" />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SuccessPage;
