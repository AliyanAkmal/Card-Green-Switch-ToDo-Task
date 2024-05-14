import {
  Tabs,
  Tab,
  // TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";

const TabsCom = () => {
  return (
    <>
      <Tabs size="md" variant="">
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
    </>
  );
};

export default TabsCom;
