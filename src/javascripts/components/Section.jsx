import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Section = ({ title, classname, children }) => {
  return (
    <section className={cn("section", classname)}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
