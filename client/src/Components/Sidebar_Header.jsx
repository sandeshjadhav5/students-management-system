import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import Header from "./Header";
import Sidebar from "./Sidebar";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function SidebarHeader() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton && 200}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
      </Box>
    </>
  );
}
