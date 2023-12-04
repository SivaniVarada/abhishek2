import React from 'react';
import Container from '../Container';

const CourseInformation = () => {
  const ugCourses = [
    { course: 'B.E- CIVIL ENGINEERING', intake: 120 },
    { course: 'B.E- MECHANICAL ENGINEERING', intake: 120 },
    { course: 'B.E- ELECTRONICS & COMMUNICATIONS ENGINEERING', intake: 180 },
    { course: 'B.E- COMPUTER SCIENCE AND ENGINEERING', intake: 180 },
    { course: 'B.E- ELECTRICAL & ELECTRONICS ENGINEERING', intake: 120 },
    { course: 'B.E- INFORMATION TECHNOLOGY', intake: 180 },
    { course: 'B.TECH- CHEMICAL ENGINEERING', intake: 60 },
    { course: 'B.TECH- BIOTECHNOLOGY', intake: 60 },
    { course: 'B.E- ARTIFICIAL INTELLIGENCE AND DATA SCIENCE', intake: 120 },
    { course: 'B.E - COMPUTER SCIENCE AND ENGINEERING (ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING)', intake: 60 },
    { course: 'B.E- COMPUTER SCIENCE AND ENGINEERING (INTERNET OF THINGS AND CYBER SECURITY INCLUDING BLOCK CHAIN TECHNOLOGY)', intake: 60 },
    { course: 'B.E- ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING', intake: 60 },
  ];

  const pgCourses = [
    { course: 'MBA (MASTER OF BUSINESS ADMINISTRATION)', intake: 120 },
    { course: 'MCA (MASTER OF COMPUTER APPLICATIONS)', intake: 60 },
    { course: 'ME – STRUCTURAL ENGINEERING (CIVIL)', intake: 25 },
    { course: 'ME – CAD / CAM (MECH)', intake: 25 },
    { course: 'M.TECH –CSE', intake: 24 },
    { course: 'ME – COMMUNICATION ENGINEERING (ECE)', intake: 18 },
    { course: 'ME- POWER SYSTEMS & POWER ELECTRONICS (EEE)', intake: 18 },
    { course: 'ME-EMBEDDED SYSTEMS AND VLSI DESIGN (ECE)', intake: 18 },
    { course: 'ME-THERMAL ENGINEERING (MECH)', intake: 18 },
    { course: 'M.TECH-ARTIFICIAL INTELLIGENCE AND DATA SCIENCE', intake: 18 },
  ];

  return (
    <section id='courseinfo' className="my-20 py-10 bg-red-50">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-8">COURSES</h1>
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#410F11]">UG COURSES & INTAKE APPROVED BY AICTE - 2023-24</h2>
          <table className="w-full border-collapse border border-[#410F11]  bg-[#C7BAB1]">
            <thead>
              <tr>
                <th className="border border-[#410F11] p-2 border-2 text-center">S.No.</th>
                <th className="border border-[#410F11] p-2 border-2 text-center">Course(s)</th>
                <th className="border border-[#410F11] p-2  border-2 text-center">Approved Intake</th>
              </tr>
            </thead>
            <tbody>
              {ugCourses.map((course, index) => (
                <tr key={index}>
                  <td className="border border-[#410F11] p-2 border-2 text-center">{index + 1}</td>
                  <td className="border border-[#410F11] border-2 p-2">{course.course}</td>
                  <td className="border border-[#410F11]  border-2 p-2 text-center">{course.intake}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-3xl font-semibold my-4 text-center text-[#410F11]">PG COURSES & INTAKE APPROVED BY AICTE - 2023-24</h2>
          <table className="w-full border-collapse border  bg-[#C7BAB1]  border-2 border-[#410F11]">
            <thead>
              <tr>
                <th className="border border-[#410F11] p-2  border-2 text-center">S.No.</th>
                <th className="border border-[#410F11] p-2  border-2 text-center">Course(s)</th>
                <th className="border border-[#410F11] p-2  border-2 text-center">Approved Intake</th>
              </tr>
            </thead>
            <tbody>
              {pgCourses.map((course, index) => (
                <tr key={index}>
                  <td className="border border-[#410F11] border-2 p-2 text-center">{index + 1}</td>
                  <td className="border border-[#410F11] border-2 p-2">{course.course}</td>
                  <td className="border border-[#410F11] border-2 p-2 text-center">{course.intake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default CourseInformation;
