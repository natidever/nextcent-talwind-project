
import helping1 from "../assets/helping1.svg"
import helping2 from "../assets/helping2.svg"
import helping3 from "../assets/helping3.svg"
import helping4 from "../assets/helping4.svg"
const Helping = () => (
     
    <section className='px-28 py-12 bg-background'>

        <div className='flex flex-col sm:flex-row justify-between sm:mr-32'>

        <div className='flex flex-col gap-2'>
            <h1 className="font-semibold text-neutralgrey2 text-[27px]">Helping a local <br/>
               <span className="text-primary">Business reinvent itself</span> </h1>
               <p className="text-neutralgrey2 text-[12px]">We reached here with our hard work and dedication</p>
        </div>


                <div className="grid grid-cols-2 gap-10">

                    <div className="flex flex-row items-center gap-3">
                        <img src={helping3} alt="" srcset="" />

                         <div className="flex flex-col gap-1">
                         <h1 className="font-bold text-[19px] text-neutralgrey2">2,245,341</h1>
                         <p className="text-neutralgrey text-[10px]">Members</p>
                         </div>

                    </div>





                    <div className="flex flex-row items-center gap-3">
                        <img src={helping2} alt="" srcset="" />

                         <div className="flex flex-col gap-1">
                         <h1 className="font-bold text-[19px] text-neutralgrey2">6,661</h1>
                         <p className="text-neutralgrey text-[10px]">Event </p>
                         </div>

                    </div>






                    <div className="flex flex-row items-center gap-3">
                        <img src={helping4} alt="" srcset="" />

                         <div className="flex flex-col gap-1">
                         <h1 className="font-bold text-[19px] text-neutralgrey2">5,755,341</h1>
                         <p className="text-neutralgrey text-[10px]">Booking</p>
                         </div>

                    </div>







                    <div className="flex flex-row items-center gap-3">
                        <img src={helping1} alt="" srcset="" />

                         <div className="flex flex-col gap-1">
                         <h1 className="font-bold text-[19px] text-neutralgrey2">2,245,341</h1>
                         <p className="text-neutralgrey text-[10px]">Club</p>
                         </div>

                    </div>







                </div>

        </div>


    </section>
  )


export default Helping
