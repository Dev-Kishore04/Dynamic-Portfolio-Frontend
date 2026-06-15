import React, { useLayoutEffect, useRef, useState } from "react";
import ExpandableCard from "./ExpandableCard";
import gsap from "gsap";
import { MdArrowOutward, MdDownloading } from "react-icons/md";
import { FaPhoneVolume, FaPhone, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import InfiniteCarousel from "./InfiniteCarousel";
import { RxCode } from "react-icons/rx";
import Button from "./Button";
import { FaLinkedinIn } from "react-icons/fa";



const Landing = () => {
  const [active, setActive] = useState(null);
  const [active2, setActive2] = useState(null);
  const gridref = useRef(null);

 
  useLayoutEffect(() => {
    gsap.set(gridref.current, {
      willChange: "grid-template-columns, grid-template-rows",
    });

   
    gridref.current.getBoundingClientRect();

    
    gsap.defaults({
      ease: "power2.out",
      duration: 0.65,
    });
  }, []);

  useLayoutEffect(() => {
   
    gsap.killTweensOf(gridref.current);

    if (active === null) {
      gsap.to(gridref.current, {
        gridTemplateColumns: "1.2fr 0.8fr",
        gridTemplateRows: "1.2fr 0.8fr",
      });

      return;
    }

    gsap.to(gridref.current, {
      gridTemplateColumns: active % 2 === 0 ? "4fr 1fr" : "1fr 4fr",

      gridTemplateRows: active < 2 ? "4fr 1fr" : "1fr 4fr",
    });
  }, [active]);

  const items1 = ["About", "image", "Skill Stack", "Contact Me"];

  const items2 = ["Things I've Built", " "];
  const navlinks = [
    "About",
    "Project",
    "Skills stack",
    "Contact",
    
  ];

  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden bg-rose-50">
        <div className="px-4  pt-4 ">
          <div className=" text-black flex shadow-xl items-center justify-between flex-row h-16 rounded-xl bg-rose-200">
            <p className="pl-5  inter-bold">Kishore</p>
            <div className="flex items-center inter text-sm justify-between pr-5 gap-3">
              {navlinks.map((item, index) => (
                <a key={index} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex min-h-0 h-full justify-between">
          {/* LEFT GRID */}
          <div
            ref={gridref}
            className="flex-1 grid h-full gap-4 p-4"
            style={{
              gridTemplateColumns: "1.2fr 0.8fr",
              gridTemplateRows: "1.2fr 0.8fr",
            }}
          >
            {items1.map((title, index) => (
              <ExpandableCard
                key={index}
                active={active === index}
                
                onClick={() => setActive(active === index ? null : index)}
                title={
                  <>

                  {index == 0 && (<>
                  <div className={`font-clash font-semibold leading-tight absolute transition-all ${ active === null
                            ? "text-4xl left-8 top-35 opacity-100"
                            : active === index ? "text-5xl left-8 top-30 opacity-100"
                            : "text-2xl opacity-0"}`}>
                    <p className="text-xl font-semibold">Hey!</p>
                    <h1>I'm<span className="pacifico-regular tracking-widest opacity-80"> Kishore</span></h1>
                    <h1>Your <span className="">go-to</span> engineer for <br />modern Web projects</h1>
                  </div>
                  <RxCode className={` absolute transition-all ${active === index 
                            ? "scale-2000 right-35 top-14 opacity-60"
                            : active === null
                            ? "scale-2000 right-35 top-14 opacity-60"
                            : "scale-500"}`} />
                  
                  </>)
                  }
                  {index === 2 && (<>
                      <h1
                        className={`font-clash leading-10 transition-all duration-300 font-semibold absolute ${
                          active === index || active === null
                            ? "text-[33px] top-8 left-8  "
                            : "text-2xl  left-8 "
                        }`}
                      >
                        Skill {active !== index ? <br /> :null} Stacks
                      </h1>
                      <p
                        className={`inter text-right leading-relaxed absolute transition-transform duration-300
                           ${
                             active === index
                               ? " opacity-0 "
                               : active === null
                                 ? "text-[13px] translate-y-12 w-110"
                                 : "opacity-0 translate-y-10 w-110"
                           }`}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Debitis et obcaecati nihil iusto! Beatae ducimus
                        similique, fugit provident magni, maxime praesentium,
                        possimus !
                      </p>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <h1
                        className={`font-clash transition-all duration-300 pr-2 font-semibold absolute ${
                          active === index || active === null
                            ? "text-3xl bottom-8 left-8"
                            : "text-2xl  bottom-4 left-5"
                        }`}
                      >
                        {title}
                      </h1>
                      <span
                        className={`absolute transition-all duration-300 scale-150 ${
                          active === index || active === null
                            ? "right-8 top-8"
                            : "right-5 top-6"
                        }`}
                      >
                        <MdArrowOutward />
                      </span>
                    </>
                  )}
                  {title === "image" ? (
                    <img
                      className="w-full h-full absolute object-cover"
                      src="/img/kishore.jpeg"
                      alt="image"
                    />
                  ) : null}
                  </>
                }
              >
                {index == 0 && (<>
                <div className="translate-x-1 translate-y-40 flex flex-row">
                  <p className="inter text-sm ">Building your ideas to life with clean, efficient, and scalable code. <br />
                Wheather it's building web apps, optimizing performance, or solving <br />
                complex technical challenges.</p>
                <Button onClick={() => setActive( 3 )} containerClass={" !px-5 ml-3"} title={"Contact me"}></Button>
                </div>
                
                </>)

                }
                {index == 3 && (
                  <>
                    <h3 className="text-xl tracking-wide font-clash font-semibold pb-8 pl-1 mt-0">
                      Let’s connect and build something great.
                    </h3>
                    <div
                      className="h-50 w-140 items-center flex-start
                            gap-2 p-10 mb-10 flex flex-row border-2 rounded-2xl "
                    >
                      <div className="items-center flex-start gap-2 flex flex-row">
                        <div className="flex justify-center gap-7.5 items-center flex-col ">
                          <span>
                            <FaPhone />{" "}
                          </span>
                          <span>
                            <FaPhone />{" "}
                          </span>
                          <span>
                            <IoMail />
                          </span>
                        </div>
                        <div className="flex text-l inter overflow-hidden whitespace-nowrap justify-center gap-4.5 flex-col ">
                          <span>: +91 9344327434</span>
                          <span>: +91 9344327434</span>
                          <span>: Kishore062922@gmail.com</span>
                        </div>
                      </div>

                      <div>
                        <img
                          className="scale-150  overflow-hidden"
                          src="/img/download.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </>
                )}

                {index === 2 && (
                  <>
                    <div className="mt-25 flex flex-col gap-5">
                      <div
                        className=" w-150 items-center flex-start
                            gap-2 flex flex-row rounded-2xl "
                      >
                        <div className="flex shadow-xl flex-col w-50 items-center gap-2 rounded-2xl justify-around bg-rose-100">
                          <img
                            className="m-0 p-0 h-25 scale-100"
                            src="/img/web-design.png"
                            alt="web-design"
                          />
                          <p className="text-[15px] inter-bold ">Web Designing</p>
                          <p className="text-[12px] inter pb-3 w-45 text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nulla similique officiis sed!{" "}
                          </p>
                        </div>
                        <div className=" shadow-xl flex flex-col w-50 items-center gap-2 rounded-2xl justify-around bg-rose-100">
                          <img
                            className="m-0 p-0 h-25 scale-120"
                            src="/img/web-dev.png"
                            alt="web-dev"
                          />
                          <p className="text-[15px] inter-bold ">Web Development</p>
                          <p className="text-[12px] inter pb-3 w-45 text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nulla similique officiis sed!{" "}
                          </p>
                        </div>
                        <div className="flex shadow-xl flex-col w-50 items-center gap-2 rounded-2xl justify-around bg-rose-100">
                          <img
                            className="m-0 p-0 h-25 scale-100"
                            src="/img/social-media.png"
                            alt="social-media"
                          />
                          <p className="text-[15px] inter-bold ">Social Media</p>
                          <p className="text-[12px] inter pb-3 w-45 text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nulla similique officiis sed!{" "}
                          </p>
                        </div>
                      </div>
                      <div
                        className="mt-5 w-150 items-center flex-start
                            gap-2  flex flex-row justify-around transition-all duration-300 ease-in-out hover:scale-105 rounded-2xl "
                      >
                        <div className="flex flex-col justify-center items-center gap-1">
                          <img
                            className="h-10"
                            src="/img/React-Logo-PNG.png"
                            alt="react"
                          />
                          <p className="text-sm inter-bold font-bold">React JS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                          <img
                            className="h-10 scale-130"
                            src="/img/javascript-logo-javascript-icon-transparent-free-png.webp"
                            alt="react"
                          />
                          <p className="text-sm inter-bold font-bold">Java Script</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                          <img
                            className="h-10 scale-105"
                            src="/img/Figma-Logo.png"
                            alt="react"
                          />
                          <p className="text-sm inter-bold font-bold">Figma</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                          <img
                            className="h-10 scale-85"
                            src="/img/tailwindcss.png"
                            alt="react"
                          />
                          <p className="text-sm inter-bold font-bold">Tailwind CSS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                          <img
                            className="h-10 scale-125"
                            src="/img/github.png"
                            alt="react"
                          />
                          <p className="text-sm inter-bold font-bold">GitHub</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </ExpandableCard>
            ))}
          </div>

          {/* RIGHT STATIC GRID */}
          <div
            className="grid w-125 gap-4 p-4"
            style={{
              gridTemplateColumns: "minmax(0,1fr)",
              gridTemplateRows: "minmax(0,1.7fr) minmax(0,0.3fr)",
            }}
          >
            {items2.map((title, index) => (
              <ExpandableCard
                key={index}
                active={active2 === index}
                alwaysOpen={true}
                onClick={() => setActive2(active2 === index ? null : index)}
                title={
                  <h1 className="font-clash text-3xl font-semibold absolute top-10 left-8">
                    {title}
                  </h1>
                }
              >
                {index === 0 && 
                  <InfiniteCarousel />
                }
                {index === 1 && 
                  <>
                  <div className="flex flex-row items-center justify-between w-100">
                  <div>
                  <Button href={"/resume/Kishore_Resume.pdf"} varient={"download"} title={"Download CV"} 
                  containerClass={'inter-bold flex shadow-xl'}
                  rightIcon={< MdDownloading className="scale-150"></MdDownloading>}></Button>
                  </div>
                  <div className="flex gap-5">
                    <a href="https://www.instagram.com" rel="noopener noreferrer" target="blank"><FaInstagram></FaInstagram></a>
                    <a href="https://www.x.com" rel="noopener noreferrer" target="blank"><FaXTwitter></FaXTwitter></a>
                    <a href="https://www.linkedin.com" rel="noopener noreferrer" target="blank"><FaLinkedinIn></FaLinkedinIn></a>
                  </div>
                  </div>
                  </>
                }
              </ExpandableCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
