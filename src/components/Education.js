// src/components/Education.js
import React from 'react';


const Education = () => {
  console.log("Education component rendered");
  return (
    <section>
      <h2>Education</h2>
      <div>
        <h3>Kalyani Government Engineering College, Kalyani, West Bengal, India</h3>
        <p>B.Tech in Computer Science and Engineering | CGPA: 8.5</p>
        <p>2019 - 2022</p>
      </div>
      <div>
        <h3>Kanyapur Polytechnic, Asansol, India</h3>
        <p>Diploma in Computer Science and Technology | Aggregate: 7.5</p>
        <p>2016 - 2019</p>
      </div>
      <div>
        <h3>Joharmull Jalan Institution, Asansol, India</h3>
        <p>H.S (Class XII)</p>
        <p>2014 - 2016</p>
      </div>
    </section>
  );
};

export default Education;
