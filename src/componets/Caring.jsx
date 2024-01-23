import blog1 from "../assets/blogimage1.jpg"
import blog2 from "../assets/blogimage2.webp"
import blog3 from "../assets/blogimage3.jpg"

function Caring () {
  return (
   <section className="sm:px-24 sm:py-5 px-5 py-4 flex  flex-col">
        <h1 className='text-neutralgrey flex justify-center font-bold text-[20px] font-Inter ml-10 mb-6 text-center sm:mb-3 ' >Caring is the new marketing</h1>
        <p   className='text-neutralgrey flex justify-center max-w-[450px] p-2 text-start  mb-5 sm:ml-64 font-bold text-[12px] font-Inter  sm:text-center  sm:mb-3'   >The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>






 <div className='flex sm:flex-row justify-center sm:gap-10 flex-wrap sm:h-[250px]'>

            <div className='relative'>
                
                <img src={blog1} alt="image" className="sm:w-[227px]  rounded-md  sm:h-[200px] w-[227px] h-[200px]" />

                <div className="flex flex-col relative bottom-[70px] left-[35px] bg-background shadow-xl px-2 sm:w-[160px] w-[160px] rounded-[12px] py-4 ">
                  
                            <p className="text-center text-[12px] mb-2 text-neutralgrey">Creating Streamlined Safeguarding Processes with OneRen</p>
                            <h1 className="text-primary flex justify-center text-[12px] font-bold">Read More</h1>
                   
                </div>


            </div>


            <div className='relative '>
       
                <img src={blog3} alt="image" className="sm:w-[227px] sm:h-[200px] rounded-md w-[227px] h-[200px] " />


                <div className="flex flex-col relative bottom-[70px] left-[35px] bg-background w-[160px] shadow-xl px-2 sm:w-[160px] rounded-[12px] py-4 ">
                  
                            <p className="text-center text-[12px] mb-2 text-neutralgrey">Creating Streamlined Safeguarding Processes with OneRen</p>
                            <h1 className="text-primary flex justify-center text-[12px] font-bold">Read More</h1>
                   
                </div>


            </div>





            <div className='relative'>
                
                <img src={blog2} alt="image" className="sm:w-[227px]  rounded-md  sm:h-[200px] w-[227px] h-[200px]" />

                <div className="flex flex-col  w-[160px] relative bottom-[70px] left-[35px] bg-background shadow-xl px-2 sm:w-[160px] rounded-[12px] py-4 ">
                  
                            <p className="text-center text-[12px] mb-2 text-neutralgrey">Creating Streamlined Safeguarding Processes with OneRen</p>
                            <h1 className="text-primary flex justify-center text-[12px] font-bold">Read More</h1>
                   
                </div>


            </div>



 </div>
        
   </section>
  )
}

export default Caring
