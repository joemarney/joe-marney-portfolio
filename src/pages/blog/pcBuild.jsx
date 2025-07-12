//! Imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Cpu, HardDrive, Power, MemoryStick, PcCase, Microchip, Gpu } from "lucide-react";
import { FaArrowUp } from "react-icons/fa";

//! Images
import boxes from "../../assets/images/pcBuild/boxes.webp";
import step1 from "../../assets/images/pcBuild/step1.webp";
import step1point5 from "../../assets/images/pcBuild/step1.5.webp";
import step2 from "../../assets/images/pcBuild/step2.webp";
import step2point5 from "../../assets/images/pcBuild/step2.5.webp";
import step3 from "../../assets/images/pcBuild/step3.webp";
import step3point5 from "../../assets/images/pcBuild/step3.5.webp";
import step4 from "../../assets/images/pcBuild/step4.webp";
import step4point5 from "../../assets/images/pcBuild/step4.5.webp";
import step4point6 from "../../assets/images/pcBuild/step4.6.webp";
import step4point7 from "../../assets/images/pcBuild/step4.7.webp";
import step5 from "../../assets/images/pcBuild/step5.webp";
import step6 from "../../assets/images/pcBuild/step6.webp";
import step6point5 from "../../assets/images/pcBuild/step6.5.webp";
import wiring from "../../assets/images/pcBuild/wiring.webp";
import gpu from "../../assets/images/pcBuild/gpu.webp";
import newCooler from "../../assets/images/pcBuild/newCooler.webp";
import newCoolerFitted from "../../assets/images/pcBuild/newCoolerFitted.webp";
import PCOverview from "../../assets/images/pcBuild/PCOverview.webp";
import otbBenchmark from "../../assets/images/pcBuild/otbBenchmark.webp";
import ocBenchmark from "../../assets/images/pcBuild/ocBenchmark.webp";

export default function PCBuild() {
  useEffect(() => {
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";

    return () => {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <main className="lg:pl-64 px-4 py-12 m-16 bg-theme-background2 text-theme-words leading-relaxed">
      <Link to="/" className="absolute top-2 right-2 text-theme-words hover:text-theme-hover" type="button">
        <IoClose size="40" />
      </Link>

      {isVisible && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="animate-bounce fixed bottom-6 right-6 p-3 bg-theme-background text-theme-words hover:text-theme-background2 rounded-full shadow-lg z-50 transition-colors duration-300" aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}

      <nav className="hidden lg:block fixed top-24 left-6 p-4 rounded-xl shadow-md text-sm">
        <ul className="space-y-5 text-theme-words">
          <li>
            <a href="#why" className="hover:text-theme-hover">
              Why I Built It
            </a>
          </li>
          <li>
            <a href="#budget" className="hover:text-theme-hover">
              Research & Budget
            </a>
          </li>
          <li>
            <a href="#parts" className="hover:text-theme-hover">
              Parts
            </a>
          </li>
          <li>
            <a href="#build" className="hover:text-theme-hover">
              Building the PC
            </a>
          </li>
          <li>
            <a href="#boot" className="hover:text-theme-hover">
              First Boot
            </a>
          </li>
          <li>
            <a href="#setup" className="hover:text-theme-hover">
              Post-Build Setup
            </a>
          </li>
          <li>
            <a href="#reflections" className="hover:text-theme-hover">
              Reflections
            </a>
          </li>
          <li>
            <a href="#updates" className="hover:text-theme-hover">
              Updates
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="text-theme-background text-4xl font-bold mb-2">PC Build: May 2025</h1>
      <PhotoProvider>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          <PhotoView src={PCOverview}>
            <img src={PCOverview} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="gaming PC with RGB on" />
          </PhotoView>
        </motion.div>
      </PhotoProvider>
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 id="why" className="text-theme-background text-2xl font-semibold my-6">
          Why I Built It
        </h2>
        <p>I've always wanted to build a PC, but I assumed it would be far too expensive to get something capable of running games.</p>
        <p>I watch a lot of YouTube, and some creators I follow focus on PC builds. One of my favourite series is the AMD $5000 Ultimate Tech Upgrade from Linus Tech Tips where a PC build is nearly always involved.</p>
        <p>With a background in Electrical Engineering, I felt quietly confident about the practical element.</p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 id="budget" className="text-theme-background text-2xl font-semibold my-6">
          Research & Budget
        </h2>
        <p>My initial research snowballed quickly into compiling a list of parts. I learned that a capable system doesn't have to cost a fortune — especially if you manage expectations (e.g. no ultra settings at 4K).</p>
        <p>
          My target budget was around <strong>£500</strong>.
        </p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 id="parts" className="text-theme-background text-2xl font-semibold my-6">
          Parts
        </h2>
        <div className="mt-10 overflow-x-auto rounded-2xl shadow-md border border-theme-words">
          <table className="min-w-full text-left text-sm bg-theme-background2 text-theme-words">
            <thead>
              <tr>
                <th className="px-4 py-3 font-semibold">Part</th>
                <th className="px-4 py-3 font-semibold">Model</th>
                <th className="px-4 py-3 font-semibold">Buy Link</th>
                <th className="px-4 py-3 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-theme-background">
                <td className="px-4 py-3 flex items-center gap-2">
                  <Cpu size={18} /> CPU
                </td>
                <td className="px-4 py-3">AMD Ryzen 5 5500</td>
                <td className="px-4 py-3">
                  <a href="https://www.amazon.co.uk/dp/B09VCJ171S" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Amazon
                  </a>
                </td>
                <td className="px-4 py-3">£70.00</td>
              </tr>
              <tr className="border-t border-theme-background">
                <td className="px-4 py-3 flex items-center gap-2">
                  <Microchip size={18} /> Motherboard
                </td>
                <td className="px-4 py-3">Gigabyte B550M K</td>
                <td className="px-4 py-3">
                  <a href="https://www.amazon.co.uk/dp/B0BW66YHB5" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Amazon
                  </a>
                </td>
                <td className="px-4 py-3">£72.56</td>
              </tr>
              <tr className="border-t border-theme-background">
                <td className="px-4 py-3 flex items-center gap-2">
                  <HardDrive size={18} /> SSD
                </td>
                <td className="px-4 py-3">Lexar EQ790</td>
                <td className="px-4 py-3">
                  <a href="https://www.amazon.co.uk/dp/B0DNMCJHJP" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Amazon
                  </a>
                </td>
                <td className="px-4 py-3">£50.99</td>
              </tr>
              <tr className="border-t border-theme-background">
                <td className="px-4 py-3 flex items-center gap-2">
                  <Power size={18} /> Power Supply
                </td>
                <td className="px-4 py-3">MSI MAG A650BN</td>
                <td className="px-4 py-3">
                  <a href="https://www.amazon.co.uk/dp/B09GW3QZLJ" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Amazon
                  </a>
                </td>
                <td className="px-4 py-3">£49.97</td>
              </tr>
              <tr className="border-t border-theme-background">
                <td className="px-4 py-3 flex items-center gap-2">
                  <MemoryStick size={18} /> RAM
                </td>
                <td className="px-4 py-3">Corsair VENGEANCE RGB PRO</td>
                <td className="px-4 py-3">
                  <a href="https://www.amazon.co.uk/dp/B07D1XCKWW" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Amazon
                  </a>
                </td>
                <td className="px-4 py-3">£39.69</td>
              </tr>
              <tr className="border-t border-theme-background">
                <td className="px-4 py-3 flex items-center gap-2">
                  <PcCase size={18} /> Case
                </td>
                <td className="px-4 py-3">MSI MAG FORGE M100R</td>
                <td className="px-4 py-3">
                  <a href="https://www.amazon.co.uk/dp/B09QLFHT1H" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    Amazon
                  </a>
                </td>
                <td className="px-4 py-3">£49.99</td>
              </tr>
              <tr className="border-t border-theme-background">
                <td className="px-4 py-3 flex items-center gap-2">
                  <Gpu size={18} /> GPU
                </td>
                <td className="px-4 py-3">NVIDIA GeForce RTX 2080 Ti</td>
                <td className="px-4 py-3">
                  <a href="https://www.ebay.co.uk/itm/388322135355" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    eBay
                  </a>
                </td>
                <td className="px-4 py-3">£185.00</td>
              </tr>
              <tr className="border-t border-theme-background font-semibold">
                <td colSpan={3} className="px-4 py-3 text-right">
                  Total
                </td>
                <td className="px-4 py-3">£518.20</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm float-right mt-2">
          <em>*prices are at the time of building</em>
        </p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 id="build" className="text-theme-background text-2xl font-semibold my-6">
          Building the PC
        </h2>
        <div className="relative border-l-4 border-theme-hover pl-6 space-y-12">
          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 1: Unboxing</h3>
            <p className="mt-2">I started by unboxing the MB, RAM, SSD and PSU. I used the PSU plugged in but switched off to ground myself so I could safely handle the components.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={boxes}>
                  <img src={boxes} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="boxes of various parts for the build" />
                </PhotoView>
                <PhotoView src={step1}>
                  <img src={step1} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="the Motherboard, PSU, RAM and SSD unboxed" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 2: Installing RAM</h3>
            <p className="mt-2">Slots 2 & 4 as marked — slotted in with a satisfying clunk.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={step1point5}>
                  <img src={step1point5} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="markings on Motherboard stating which slots to be used for the RAM" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 3: Installing SSD</h3>
            <p className="mt-2">I was pleasantly surprised by this cheap MB. It has a toolless process to fit the SSD into the M.2 slot.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={step2}>
                  <img src={step2} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="M.2 slot on Motherboard before SSD is fitted" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 4: Installing CPU</h3>
            <p className="mt-2">I gave the socket a quick inspection before fitting the CPU, ensuring the pin 1 marker matches on both parts.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={step2point5}>
                  <img src={step2point5} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="Motherboard with RAM and SSD fitted, before CPU installation" />
                </PhotoView>
                <PhotoView src={step3}>
                  <img src={step3} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="close up of CPU socket on Motherboard" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 5: Installing CPU Cooler</h3>
            <p className="mt-2">I removed a pre-installed bracket and fit the cooler in its place. The thermal paste was pre-applied and I tightened the corners equally to ensure proper coverage and pressure.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={step3point5}>
                  <img src={step3point5} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="close up of CPU after installation" />
                </PhotoView>
                <PhotoView src={step4}>
                  <img src={step4} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="Stock AMD cooler fitted to CPU" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 6: Installing I/O Shield</h3>
            <p className="mt-2">I fitted the IO shield in the rear of the case. The metal prongs are pretty annoying and also sharp! I just bent them flat with the shield for ease.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={step4point5}>
                  <img src={step4point5} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="I/O shield fitted in the rear of the computer tower case" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 7: Preparing Case</h3>
            <p className="mt-2">I offered up the MB to the case but realised that I needed to fit 2 extra standoffs.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={step4point6}>
                  <img src={step4point6} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="the computer case before Motherboard is installed" />
                </PhotoView>
                <PhotoView src={step4point7}>
                  <img src={step4point7} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="close up of extra standoffs being fitted to the case" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 8: Fitting Motherboard</h3>
            <p className="mt-2">I then slid the MB so it was touching the IO shield and then lowered the right side onto the standoffs. This reduced the risk of damaging the underside. I then tightened it down with the supplied fixings.</p>
            <p>I also plugged in the front I/O. Everything was labelled pretty clearly!</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={step5}>
                  <img src={step5} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="Front I/O connections plugged into the Motherboard" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 9: Wiring</h3>
            <p className="mt-2">There were already many wires even before the PSU went in. These are mainly because the case came with 4 ARGB fans. These fans all need to be plugged into a controller in the back of the case to control the lights. They also all need to be plugged into a single fan header on the MB by the way of daisy chaining.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={wiring}>
                  <img src={wiring} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="backside of the case with the side panel off showing the routing of the wires" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 10: Installing GPU</h3>
            <p className="mt-2">As it was a modified GPU it was a bit less obvious than if it was a normal card. The person I bought the card from was a massive help as they labeled all wires coming from it and where they should be going. Shoutout!!</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={gpu}>
                  <img src={gpu} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="Water-cooled RTX 2080 Ti GPU" />
                </PhotoView>
                <PhotoView src={step6}>
                  <img src={step6} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="120mm AIO radiator fitted to the rear exhaust port of the case" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>

          <div className="relative">
            <div className="w-4 h-4 bg-theme-accent rounded-full absolute -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold">Step 11: Finishing up</h3>
            <p className="mt-2">I plugged in all remaining cables.</p>
            <PhotoProvider>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                <PhotoView src={step6point5}>
                  <img src={step6point5} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="complete PC build before initial boot" />
                </PhotoView>
              </motion.div>
            </PhotoProvider>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 id="boot" className="text-theme-background text-2xl font-semibold my-6">
          First Boot & Troubleshooting
        </h2>
        <p className="my-5">
          Everything powered on, but BIOS said: <em className="text-red-600">"no bootable device found"</em>.
        </p>
        <p className="my-5">I asked ChatGPT... The USB lacked a valid bootloader.</p>
        <p className="my-5">
          On my Mac, I formatted it to <strong>FAT32 (MS-DOS)</strong>, but Windows' <code className="bg-black text-white px-1 rounded">install.wim</code> was too big.
        </p>
        <div className="bg-black text-white rounded-xl overflow-hidden">
          <div className="bg-gray-800 text-sm px-4 py-2 font-mono text-gray-300 border-b border-gray-700">Install wimlib</div>
          <pre className="px-4 py-3 text-sm whitespace-pre-wrap">{`brew install wimlib`}</pre>
        </div>

        <p className="italic text-sm mt-2 mb-5">wimlib is an open source, cross-platform library for creating, extracting, and modifying Windows Imaging (WIM) archives.</p>

        <div className="bg-black text-white rounded-xl overflow-hidden">
          <div className="bg-gray-800 text-sm px-4 py-2 font-mono text-gray-300 border-b border-gray-700">Split install.wim</div>
          <pre className="px-4 py-3 text-sm whitespace-pre-wrap">{`wimlib-imagex split /Volumes/CCCOMA_X64FRE_EN-GB_DV9/sources/install.wim ~/Desktop/install.swm 3800`}</pre>
        </div>
        <p className="italic text-sm mt-2 mb-5">this command splits the large file into 2 parts.</p>

        <p>I replaced the original file on the USB with the new split files, keeping the folder structure identical. Plugged it into the PC and...</p>
        <p className="mt-5">
          it booted up into Windows straight away. <strong className="text-green-600">Nice!</strong>
        </p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 id="setup" className="text-theme-background text-2xl font-semibold my-6">
          Post-Build Setup
        </h2>
        <p>I installed Revo Uninstaller, MSI Afterburner, HWiNFO and RivaTuner.</p>
        <p>I tested Minecraft and Counter-Strike 2 — buttery smooth.</p>
        <p>I wanted to see what the GPU could really do so I used the OC scanner on MSI Afterburner. It detects the hardware in your system and overclocks it for you. The benefits are small but its untapped power otherwise!</p>
        <PhotoProvider>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            <div className="text-center">
              <PhotoView src={otbBenchmark}>
                <img src={otbBenchmark} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="benchmark results before overclocking with a score of: 3907" />
              </PhotoView>
              <p className="text-sm -mt-3">
                <em>Before overclocking</em>
              </p>
            </div>

            <div className="text-center">
              <PhotoView src={ocBenchmark}>
                <img src={ocBenchmark} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="benchmark results after overclocking with a score of: 4268" />
              </PhotoView>
              <p className="text-sm -mt-3">
                <em>After overclocking</em>
              </p>
            </div>
          </motion.div>
        </PhotoProvider>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 id="reflections" className="text-theme-background text-2xl font-semibold my-6">
          Reflections
        </h2>
        <p>I'd improve 3 things:</p>
        <p>- Better CPU cooler as I have read that even a cheap one outperforms the stock AMD cooler</p>
        <p>- Modular PSU for easier cable management</p>
        <p>- Access to a Windows PC to make the USB bootable more easily</p>
        <p className="pt-5">This build was so fun. Anyone can do it with the internet and a bit of patience.</p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h1 id="updates" className="text-theme-background text-4xl font-bold mt-20">
          Updates
        </h1>
        <div>
          <h2 className="text-theme-background text-2xl font-semibold my-6">July 2025</h2>
          <p>
            I fitted a new CPU cooler! I went for a budget option (of course): Thermalright Assassin X 120R SE PLUS. It was <strong>£18.80</strong> on Amazon.
          </p>
          <p>It was super easy to install I just had to change the bracket around the CPU</p>
          <PhotoProvider>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
              <PhotoView src={newCooler}>
                <img src={newCooler} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="old CPU cooler dettached and new thermal paste applied with new mounting bracket around socket" />
              </PhotoView>
            </motion.div>
          </PhotoProvider>
          <p>Then lower the heatsink onto the bracket and tighten evenly on each side.</p>
          <PhotoProvider>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
              <PhotoView src={newCoolerFitted}>
                <img src={newCoolerFitted} className="max-h-[24rem] m-5 rounded-2xl shadow-xl border border-theme-border cursor-zoom-in" alt="heatsink installed before fans are attached" />
              </PhotoView>
            </motion.div>
          </PhotoProvider>
        </div>
      </motion.section>
    </main>
  );
}
