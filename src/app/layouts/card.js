"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "./card.css";

export function CardList(itemArray) {
  if (!Array.isArray(itemArray.data)) {
    return (<div><p1>O modelo da base de dados está incorreto!</p1></div>)
  }

  const classname = "tag";

  const [openIndex, setOpenIndex] = useState(-1);

  return itemArray.data.map((item, index) => {
    return (
      <div className="catlist" key={index + item}>
        <motion.div
          layout
          id={classname + index}
          className={classname}
          style={{ borderRadius: "25px" }}
          transition={{
            layout: {
              duration: 0.5,
              type: "tween",
            },
          }}
          onClick={() => {
            if (index !== openIndex) {
              setOpenIndex(index);
            } else {
              setOpenIndex(-1);
            }
          }}
        >
          <motion.h2 layout="position"> {item.tag} </motion.h2>

          {openIndex == index && (
            <motion.ul>
              <br />
              {item.idList.map((id) => (
                <motion.li
                  className="singleid"
                  layout="position"
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {id}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>
    );
  });
}
