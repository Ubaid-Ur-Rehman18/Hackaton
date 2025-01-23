
import Hero from "@/components/Herro";
import FontShowcase from "@/components/Retangle";
import NewArivel from "../components/arrivals";
import BestSelling from "../components/Selling";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/Customer";
import Products from "./product/page";
import Top_sell from "./product/sell";
import Productcards from "./products/page";


export default function Home() {
  return (
   <div>
   
    <Hero/>
    <FontShowcase/>
    {/* <NewArivel/>
    <BestSelling/> */}
    <Products/>
    <Top_sell/>
    <Dress/>
    <Productcards/>
    <CustomerCarousel/>
    
   </div> 
  );
}
