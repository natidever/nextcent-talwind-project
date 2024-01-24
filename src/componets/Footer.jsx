import fotterlogo from "../assets/finalogo.svg"
import {footerlinks} from "../constants"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import dribble from "../assets/dribble.svg"
import youtube from "../assets/youtube.svg"
function Footer() {
  return (
  <div>
     <section className="bg-neutralblack flex  flex-col sm:flex-row p-1 ">
    <div id="log" className="flex flex-row  gap-5 justify-start sm:ml-20 items-center mb-4 sm:mr-[250px] ">
    <img src={fotterlogo}  className="w-[60px] h-[50px]" alt="" srcset="" />
    <h1 className="text-white font-Inter font-bold text-xl">Next Cent</h1>
    </div>
      
    <div className="flex flex-row  text-[12px]  flex-wrap space-x-20 sm:ml-14 ml-2 sm:mt-10 ">
     {footerlinks.map((item)=>(
         <div>
            <h1 className="text-white font-bold mb-4  ml-4">{item.title}</h1>
                <ul className="whitespace-nowrap  ml-4 ">
                  {item.links.map((link)=>(
                      <li className="text-white mb-4 ">  {link} </li> 
                  ))}
                </ul>
                
         </div>

     ))}  


                    <div className="hidden sm:block">
                    <h1 className="text-white font-bold mb-4 ml-28 ">Get in touch</h1>
                      <input type="email" name="your email" placeholder="Your Email" className="bg-neutralgrey px-2 focus:outline-none ml-24  text-white rounded-md h-[30px] w-[150px]" id="" />
       
                    </div>
             

    </div>
    
             



    
   </section>
   <div  id="socialmedia" className="flex gap-3 justify-center border-t-[1px] border-w border-t-neutralgrey pt-2 bg-neutralblack">
            <img src={instagram}  width={30}  alt="" />
            <img src={dribble} alt=""  width={30}  />
            <img src={twitter} alt=""  width={30} />
            <img src={youtube} alt=""  width={30}  />
        </div>    
  </div>
    

  )
}

export default Footer
