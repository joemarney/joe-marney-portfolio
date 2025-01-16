//! Imports
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

//! Hobbies
import { hobbies } from "./hobbies";

export default function HobbiesTabs() {
  return (
    <Tabs id="custom-animation" value="gaming">
      <TabsHeader className="bg-theme-background">
        {hobbies.map(({ title, Extend }) => (
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
        {hobbies.map(({ title, content, img }) => (
          <TabPanel key={title} value={title} className="flex flex-col items-center text-theme-words">
            <p>{content}</p>
            {img && <img src={img} />}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
