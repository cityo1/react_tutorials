import React from 'react';

const Section = ({ number, style }) => {
  return (
    <section className="section" style={style}>
      Section {number}
    </section>
  );
};

export default Section;
