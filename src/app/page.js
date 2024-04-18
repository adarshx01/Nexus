import Image from "next/image";
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <>
    <div className=" bg-gradient-to-b  from-gray-900 via-gray-900 to-black h-screen w-screen text-white">
      <Navbar/>
      {/* <div className="h-60 w-96 rounded-e-full p-4 ml-24 mt-16 bg-blue-300">
        akdbj
      </div> */}
      <p className="text-3xl font-serif font-bold w-16 ml-16 mt-16 mb-4">The First Responders Community.</p>
      <p className="text-3xl font-serif font-bold  ml-16 text-green-400">Prepare. Respond. Reunite.</p>
      <iframe src='https://my.spline.design/tvatimedoor-ff0791bda22ca9b15dc0e17c2982339e/' frameborder='0' width='40%' height='60%' className="rounded-full absolute right-12 top-24"></iframe>
    </div>
    </>
  );
}
  