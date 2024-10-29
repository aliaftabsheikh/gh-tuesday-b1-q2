// import Image from "next/image";
// import heroImage from "../../public/images/hero.png"

export default function Home() {
  return (
//     <div className="flex justify-between items-center h-screen">
//     <div className="w-1/2 mx-12">
//     <div className="flex flex-col gap-6">
//     <h1 className="font-bold text-5xl">Welcome To Our Website</h1>
//     <p className="text-[32px]">
//       Lorem Ipsum is simply dummy text of the printing and typesetting
//       industry. Lorem Ipsum has been the industrys standard
//     </p>
//     <button className="bg-black text-white w-[237px] h-[66px] ">
//       Contact Us
//     </button>
//   </div>
//     </div>

//     <div className="w-1/2 ">

// <div className="w-[502px] h-[465px]">
//     <Image src={heroImage} alt="hero-image"/>

// </div>


    
//     {/* <div className="w-[502px] h-[465px] bg-slate-600 ">

    

//     </div> */}
//     </div>
//   </div>

<div className="grid grid-cols-3 grid-row gap-4 m-4">
  <div className="bg-red-400 col-span-3 text-center content-center text-4xl font-bold text-white">Header</div>
  <div className="bg-blue-400 row-span-2 text-center content-center text-4xl font-bold text-white">Sidebar</div>
  <div className="bg-green-400 col-span-2 text-center content-center text-4xl font-bold text-white">Content-1</div>
  <div className="bg-yellow-500 text-center content-center text-4xl font-bold text-white">Content-2</div>
  <div className="bg-purple-400 text-center content-center text-4xl font-bold text-white">Content-3</div>
  <div className="bg-pink-400 col-span-3 text-center content-center text-4xl font-bold text-white">Footer</div>

</div>
  );
}
