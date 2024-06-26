import {
  Tabs,
  Tab,
  // TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Spinner } from "@chakra-ui/react";
const TabsCom = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const bg = colors[tabIndex];

  setTimeout(() => {
    setSpinner(true);
  }, 3000);
  return (
    <>
      <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
        <TabList>
          <Tab>Red</Tab>
          <Tab>Teal</Tab>
          <Tab>Blue</Tab>
        </TabList>
        {!spinner ? (
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="lightBlue"
            color="blue.500"
            size="xl"
          />
        ) : (
          <TabPanels p="2rem">
            <TabPanel>The Primary Colors</TabPanel>
            <TabPanel>Are 1, 2, 3</TabPanel>
            <TabPanel>Red, yellow and blue.</TabPanel>
          </TabPanels>
        )}
      </Tabs>
    </>
  );
};

export default TabsCom;
