//! Imports
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

//! Hobbies
import { hobbies } from "./hobbies";

export default function HobbiesTabs() {
  return (
    <Tabs id="custom-animation" value="gaming" className="flex flex-col">
      <TabsHeader
        className="bg-theme-background"
        indicatorProps={{
          className: "bg-theme-words",
        }}
      >
        {hobbies.map(({ title, Icon }) => (
          <Tab key={title} value={title} className="text-theme-words2">
            <Icon size="40" />
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
          <TabPanel key={title} value={title} className="flex flex-col justify-center items-center text-start text-theme-words2 font-medium leading-normal min-h-[600px]">
            <h2>{title}</h2>
            <p>{content}</p>
            {img && <img src={img} />}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
