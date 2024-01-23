import tesla from "../assets/teslahd.avif"
import Button from "./Button"
import client1 from "../assets/client1.png"
import arrow from "../assets/rightarrow.svg"
 
function Tesla() {
  return (
    <section > 
         <div className='sm:px-28 sm:py-12  sm:flex-row flex flex-col px-5 py-3 bg-background' >

        <img src={tesla} className= "sm:w-[208px] sm:h-[208px] rounded-[15px] sm:mr-16" alt="" />

        <div className="flex flex-col flex-wrap">
        <p className="text-neutralgrey text-[14px] sm:px-6 mb-2 ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p> 
        <p className="text-primary font-palanquin sm:px-6 mb-2">Tim Smith</p>
        <p  className="text-[14px] sm:px-6 mb-6 text-lightgrey " >British Dragon Boat Racing Association</p>

        <div className="flex justify-between px-3 flex-wrap sm:px-6 ">
            <img src={client1} alt="" />
            <img src={client1} alt="" />
            <img src={client1} alt="" />
            <img src={client1} alt="" />
            <img src={client1} alt="" />
           
            <div className="flex flex-row ">
            <p className="text-primary font-bold text-[15px] whitespace-nowrap mr-3">Meet all customers</p>
            <img src={arrow} className="flex items-center" />
            </div>

        </div>
        </div>




        </div>  
    </section>
   
  )
}

export default Tesla
