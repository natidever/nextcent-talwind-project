import fotterlogo from "../assets/finalogo.svg"
import {footerlinks} from "../constants"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import dribble from "../assets/dribble.svg"
import youtube from "../assets/youtube.svg"
function Footer() {
  return (
   <section className="bg-neutralblack flex gap-48 flex-col sm:flex-row p-2  ">
    <div id="log" className="flex flex-row  gap-5 justify-start items-center mb-4 ">
    <img src={fotterlogo}  className="w-[60px] h-[50px]" alt="" srcset="" />
    <h1 className="text-white font-Inter font-bold text-xl">Next Cent</h1>
    </div>
      
    <div className="flex flex-row  text-[12px]  flex-wrap space-x-20 ml-2 sm:mt-10 ">
     {footerlinks.map((item)=>(
         <div>
            <h1 className="text-white font-bold mb-4 ">{item.title}</h1>
                <ul className="whitespace-nowrap">
                  {item.links.map((link)=>(
                      <li className="text-white mb-5 ">  {link} </li> 
                  ))}
                </ul>
                
         </div>
         
     ))}  
      

    </div>
    
        {/* <div  id="socialmedia" className="flex gap-3 justify-center border-t-[1px]  border-t-neutralgrey pt-2">
            <img src={instagram}  width={30}  alt="" />
            <img src={dribble} alt=""  width={30}  />
            <img src={twitter} alt=""  width={30} />
            <img src={youtube} alt=""  width={30}  />
        </div>             */}



    
   </section>
  )
}

export default Footer
