import { Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import React from "react";

const Tabs = () => {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Tabs;
