"use client";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section
        style={{
          backgroundImage: "url(/images/hero/pnghead.png)",
         
        }}
        className="lg:object overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-32 "
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              {/* <h4 className="mb-4.5 font-bold text-black dark:text-white text-3xl">
              Welcome to Zebrank - Your Partner in Digital Transformation
              </h4> */}
              {/* <h1 className="mb-5 text-4xl font-bold leading-relaxed text-black dark:text-white ">
                Welcome to Zebrank - Your Partner in Digital Transformation
              </h1> */}
              
                <motion.h1
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible" // Animate when the div enters the viewport
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: false }}
                  className="lg:text-4xl font-bold leading-relaxed text-black"

                >

                Welcome to Zebrank - Your Partner in Digital Transformation
              </motion.h1>
              <p className="mb-5 pt-3 text-2xl font-bold leading-10  text-black">
                Let's Build Something Amazing Together!
              </p>
              <p className="text-lg leading-8 ">
                At Zebrank, we deliver innovative and scalable digital solutions
                tailored to your business needs. Whether you're looking to build
                a stunning website, a powerful mobile app, or a robust
                e-commerce platform, we’ve got you covered. With a
                result-oriented approach, an experienced and dedicated team, and
                a commitment to 100% client satisfaction, we ensure your digital
                journey is seamless and successful.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className="animate-upDown relative aspect-[700/444] w-full">
                  <Image
                    className=" animate-li h-[500px] w-[500px] dark:hidden"
                    src="/images/hero/output-onlinetools (1).webp"
                    alt="Hero"
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Marquee speed={70} gradient={false} pauseOnHover={true}>
            <ul className={"flex gap-10 p-1 text-xs lg:text-xl"}>
              <li className="pl-20">
                <div className="flex w-fit items-center rounded-full bg-white px-2 py-1 font-bold">
                  <Image
                    alt="Hero"
                    src={"/images/hero/app develmomlogo.png"}
                    width={1000}
                    height={1000}
                    className="h-14 w-14 rounded-full"
                  ></Image>{" "}
                  <span>Web Designing & UI/UX</span>
                </div>
              </li>
              <li className="flex w-fit items-center rounded-full bg-white px-2 py-1 font-bold">
                <Image
                  alt="Hero"
                  src={"/images/hero/app develmomlogo.png"}
                  width={1000}
                  height={1000}
                  className="h-14 w-14 rounded-full"
                ></Image>{" "}
                <span>Web Development</span>
              </li>
              <li className="flex w-fit items-center rounded-full bg-white px-2 py-1 font-bold">
                <Image
                  alt="Hero"
                  src={"/images/hero/app develmomlogo.png"}
                  width={1000}
                  height={1000}
                  className="h-14 w-14 rounded-full"
                ></Image>{" "}
                <span>Mobile Development</span>
              </li>
              <li className="flex w-fit items-center rounded-full bg-white px-2 py-1 font-bold">
                <Image
                  alt="Hero"
                  src={"/images/hero/app develmomlogo.png"}
                  width={1000}
                  height={1000}
                  className="h-14 w-14 rounded-full"
                ></Image>{" "}
                <span>Application Maintainance & Support</span>
              </li>
              <li className="flex w-fit items-center rounded-full bg-white px-2 py-1 font-bold">
                <Image
                  alt="Hero"
                  src={"/images/hero/app develmomlogo.png"}
                  width={1000}
                  height={1000}
                  className="h-14 w-14 rounded-full"
                ></Image>{" "}
                <span>Change & Release Management</span>
              </li>
              <li className="flex w-fit items-center rounded-full bg-white px-2 py-1 font-bold">
                <Image
                  alt="Hero"
                  src={"/images/hero/app develmomlogo.png"}
                  width={1000}
                  height={1000}
                  className="h-14 w-14 rounded-full"
                ></Image>{" "}
                <span>Digital Marketing & Content Creation</span>
              </li>
              <li className="flex w-fit items-center rounded-full bg-white px-2 py-1 font-bold">
                <Image
                  alt="Hero"
                  src={"/images/hero/app develmomlogo.png"}
                  width={1000}
                  height={1000}
                  className="h-14 w-14 rounded-full"
                ></Image>{" "}
                <span>Quality Assurance & Engineering</span>
              </li>
            </ul>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Hero;
