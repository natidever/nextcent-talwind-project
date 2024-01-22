// import heroimage2 from "../assets/heroimage2.png"
import heroimage from "../assets/heroimage2.svg"
import Button from "./Button"
function Hero() {
  return (
    <div className="bg-background w-full p-20 flex flex-col items-center md:flex-row md:px-[120px] md:py-[150px] md:justify-between" >
      <div className="flex flex-col">
         <p className="text-[20px] md:text-[44px] font-semibold font-montserrat mb-2">Lessons and insights <br/>
          <span  className="text-primary ">from 8 years</span>
         </p>
        <p className="max-w-[400px] md:max-w-[500px] text-neutralgrey font-[5px]">
         Where to grow your business as a photographer: site or social media?
         
        <Button width="w-[110px]" height="h-[50px]" text=" Register" />
        </p> 
      </div>
 
      <img src={heroimage} alt="sidebar image" className="mt-20 md:mt-0 md:mr-[32px] h-[300px] w-[250px]"/> 
          
    </div>
  )
}

export default Hero
