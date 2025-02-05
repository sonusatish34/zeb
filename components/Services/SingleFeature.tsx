import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-1.5"
      >
        <div className=" flex flex-col lg:flex-row rounded-[4px]">
          <Image className="w-65 h-65" src={icon} width={1000} height={1000} alt="title" />
          <div>
            <h3 className="mb-2 mt-2 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
             {title}
            </h3>
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
