import React from "react";
import "./Bio.css";

export default function Bio() {
  return (
    <div className="tt-wrapper">
      <div className="tt-content">
        <div className="tt-content-card card">
          {/* <div className="card-header"> */}
          <h2>
            <code>{`<`}</code> <b>A</b>bout Me <code>{`/>`}</code>
          </h2>
          {/* </div> */}
          <p>
            <b>Hello! I'm Tenzin Thinley</b>.{" "}
          </p>
          <p>Frontend developer from India.</p>
          <p>
            A self-taught developer who happens to have a masters in physics.
          </p>
          <p>
            My expertise lies in <b>ReactJS</b>, <b>JavaScript</b>, <b>HTML</b>,
            and <b>CSS</b>, but I'm always eager to learn new things and expand
            my skillset.
          </p>
          I take pride in my professional attitude and strong work ethic, and
          I'm constantly striving to utilize all of the academic and
          non-academic experiences I've gained along the way.
          <p>
            I believe that being an asset to a company means more than just
            having technical skills, it means being a team player, a problem
            solver, and someone who's always looking for ways to improve.{" "}
          </p>
          <p>
            So if you're looking for a frontend developer who's both quirky and
            competent, look no further!
          </p>
          {/* <p>
            So if you're looking for a frontend developer who's both quirky and
            competent, look no further!
          </p>
          <p>
            So if you're looking for a frontend developer who's both quirky and
            competent, look no further!
          </p> */}
        </div>
      </div>
    </div>
  );
}
