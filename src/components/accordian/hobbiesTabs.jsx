//! Imports
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

//! Items
import { items } from "./items";

export default function HobbiesTabs() {
  return (
    <Tabs id="custom-animation" value="gaming">
      <TabsHeader className="bg-theme-background">
        {items.map(({ title, Extend }) => (
          <Tab key={title} value={title}>
            {title}
            <Extend />
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {items.map(({ title, content, img }) => (
          <TabPanel key={title} value={title} className="flex flex-col items-center">
            <p>{content}</p>
            {img && <img src={img} />}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
