import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../assets/auth_bg.png";
// import Sidebar from '../common/sidebar';
// import Topbar from '../common/topbar';

export function Layout({ children }) {
  return (
    <Box>
      <Flex>
        {/* <Sidebar /> */}
        <Box w="100%">
          {/* <Topbar /> */}
          <Box
            bg="#F5F4F5"
            minH="100vh"
            backgroundImage={bgImage}
            backgroundSize="100%"
          >
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export const noop = "value";
