import cardicon1 from "../assets/cardicon1.svg"
import cardicon2 from "../assets/cardicon2.svg"
import cardicon3 from "../assets/cardicon3.svg"

function Community() {
  return (
   <section>
        <div className="flex flex-col ">
            <h1 className="font-montserrat text-[20px] font-semibold text-start mb-2 ml-10 mr-10 mt-5">Manage your entire community in a single system</h1>
            <p className='flex justify-center text-neutralgrey'>Who is Nextcent suitable for?</p>
            <div className='flex flex-col gap-4 mt-1 md:flex-row mb-10'>
                <div className='flex flex-col px-3 py-1 shadow '>
                <img src={cardicon1} alt="" srcset=""className="w-[40px] h-[38px] ml-20 " />
                <p className="font-bold font-montserrat text-[12px] leading-[20px] flex ml-10 text-neutralgrey2 mb-2">Membership Organization</p>
                <p className="text-neutralgrey text-[11px] text-center"> Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className='flex flex-col px-3 py-1 shadow '>
                <img src={cardicon2} alt="" srcset=""className="w-[40px] h-[38px] ml-20 " />
                <p className="font-bold font-montserrat text-[12px] leading-[20px] flex ml-10 text-neutralgrey2 mb-2">National Associations </p>
                <p className="text-neutralgrey text-[11px] text-center"> Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className='flex flex-col px-3 py-1 shadow '>
                <img src={cardicon3} alt="" srcset=""className="w-[40px] h-[38px] ml-20 " />
                <p className="font-bold font-montserrat text-[12px] leading-[20px] flex ml-10 text-neutralgrey2 mb-2">Clubs And Groups</p>
                <p className="text-neutralgrey text-[11px] text-center"> Our membership management software provides full automation of membership renewals and payments</p>
                </div>



                  








            </div>
        </div>
   </section>
  )
}

export default Community
