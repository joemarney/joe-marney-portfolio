//! Imports
import { useState } from "react";

//! Items
import { items } from "./items";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-2">
      {items.map((item, index) => {
        const { Extend, Collapse } = item;
        return (
          <div key={index}>
            <div className="flex justify-evenly items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
              <h2>{item.title}</h2>
              <span className="p-1">{openIndex === index ? <Extend size="50px" color="#586994" /> : <Collapse size="50px" color="#586994" />}</span>
            </div>
            <div
              className={`flex flex-col items-center overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-screen" : "max-h-0"}`}
              style={{
                maxHeight: openIndex === index ? "1500px" : "0",
              }}
            >
              <p>{item.content}</p>
              {item.img && <img src={item.img} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
