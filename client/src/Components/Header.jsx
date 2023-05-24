import { Box, Center, IconButton, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex bg="#BEE3F8" p={4} color="black" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>

      <Text
        fontFamily="body"
        fontSize={{
          base: "1rem",
          sm: "1rem",
          md: "1.2rem",
          lg: "1.2rem",
          xl: "1.6rem",
        }}
      >
        Students Management System
      </Text>

      <Box flex="1" />
    </Flex>
  );
};

export default Header;
