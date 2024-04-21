import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              At Virtunova, we pride ourselves on our expertise in delivering
              cutting-edge digital solutions that drive results. Our team is
              well-versed in a wide range of digital disciplines, ensuring that
              we can meet your every need.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="learn more" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
