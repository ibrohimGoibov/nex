import Image from "next/image";
import Header from "./layout1/Header";
import Rent from './rent/page'
import Homepage2 from './homepage2/page'
export default function Home() {
  return (
    <div>
      <Rent />
      <Homepage2 />
    </div>
  );
}
