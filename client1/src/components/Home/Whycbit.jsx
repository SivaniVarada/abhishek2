// import Container from "../Container"
// const stats = [
//     { id: 1, name: 'Accredited by NAAC', value: ' A++' },
//     { id: 2, name: 'ALUMNI Across the Globe', value: '25000+' },
//     { id: 3, name: 'Experienced Faculty and Staff', value: '333+' },
//   ]
  
//   export default function Example() {
//     return (
//         <Container>
//         <div className="mt-12">
//             <h1 className="text-4xl font-bold text-center mb-8">WHY CBIT?</h1>
//         </div>
//         <div>
//             <div className=" py-16 sm:py-24">
//                 <p className="text-center mb-12 text-lg">
//                 A course can change the course of your life. And when it comes to CBIT, our top-of-the-line Engineering courses and Management Sciences ensure nothing less than a promising tomorrow. We strive to make our students the crème de la crème through our innovative industry-based teaching methodologies. We believe in giving our students practical knowledge and real-world exposure, making them better equipped to pursue their dream careers.
//                 </p>
//              <div className="mx-auto max-w-7xl px-4 lg:px-8">
//                 <dl className="grid grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-3">
//                     {stats.map((stat) => (
//                     <div key={stat.id} className="text-center bg-[#410F11] px-12 py-12 rounded-md ">
//                         <dt className="text-lg leading-6 font-medium text-white">{stat.name}</dt>
//                         <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
//                     </div>
//                     ))}
//                 </dl>
//             </div>
//          </div>
//       </div>
//     </Container>
      
//     )
//   }
import Container from "../Container";

const stats = [
  { id: 1, name: 'Accredited by NAAC', value: ' A++' },
  { id: 2, name: 'ALUMNI Across the Globe', value: '25000+' },
  { id: 3, name: 'Experienced Faculty and Staff', value: '333+' },
];

export default function Example() {
  return (
    <section id="whycbit">
        <Container>
      <div className="mt-8 sm:mt-12">
        <h1 className="text-4xl font-bold text-center mb-8">WHY CBIT?</h1>
        <p className="text-center mb-12 text-lg">
            A course can change the course of your life. And when it comes to CBIT, our top-of-the-line Engineering courses and Management Sciences ensure nothing less than a promising tomorrow. We strive to make our students the crème de la crème through our innovative industry-based teaching methodologies. We believe in giving our students practical knowledge and real-world exposure, making them better equipped to pursue their dream careers.
        </p>
        <div>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <dl className="grid grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center bg-[#410F11] px-12 py-12 rounded-md">
                  <dt className="text-lg leading-6 font-medium text-white">{stat.name}</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div>
      </div>
    </Container>
    </section>
    
  );
}
