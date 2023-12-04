import React from 'react';
import Container from '../Container';

const Fees = () => {
  return (
    <section id='fees' class="bg-[#C7BAB1] p-8">
    <Container>
    <div className="my-8 ">
    <h1 className="text-4xl font-bold text-center mb-16">Fee Structure - Academic Year 2023-2024</h1>
      <table className="w-full border-collapse border border-[#410F11] bg-red-50">
        <thead>
          <tr>
            <th className="border border-[#410F11] border-2 p-2">Course</th>
            <th className="border border-[#410F11] border-2 p-2">Convener</th>
            <th className="border border-[#410F11] border-2 p-2">B-Category</th>
            <th className="border border-[#410F11] border-2 p-2">NRI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#410F11] border-2 p-2">BE/BTech</td>
            <td className="border border-[#410F11] border-2 p-2">Rs. 1,40,000*</td>
            <td className="border border-[#410F11] border-2 p-2">Rs. 1,40,000*</td>
            <td className="border border-[#410F11] border-2 p-2">USD $ 5,000</td>
          </tr>
          <tr>
            <td className="border border-[#410F11] border-2 p-2">ME/MTech</td>
            <td className="border border-[#410F11] border-2 p-2">Rs. 1,51,600</td>
            <td className="border border-[#410F11] border-2 p-2">Rs. 1,51,600</td>
            <td className="border border-[#410F11] border-2 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-[#410F11] border-2 p-2">MCA</td>
            <td className="border border-[#410F11] border-2 p-2">Rs. 95,000</td>
            <td className="border border-[#410F11] border-2 p-2">Rs. 95,000</td>
            <td className="border border-[#410F11] border-2 p-2">-</td>
          </tr>
          <tr>
            <td className="border border-[#410F11] border-2 p-2">MBA</td>
            <td className="border border-[#410F11] border-2 p-2">Rs. 90,000</td>
            <td className="border border-[#410F11] border-2 p-2">Rs. 90,000</td>
            <td className="border border-[#410F11] border-2 p-2">-</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-2">(* This fee is subject to the final fixation of annual fee for the block period 2022-2025 by the authorities of the State, Courts of Law and TAFRC 
for B.E./ B.Tech courses)</p>
    </div>
    </Container>
    </section>
  );
};

export default Fees;
