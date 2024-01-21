import icon from "../assets/icon.png"
import Button from "./Button"

function Nav() {
  return (
    <header>
        <nav className='flex flex-row p-5 w-full justify-between items-center '>
                <h2 className="font-bold font-montserrat pl-10">Next cent</h2>  
                <div className="max-lg:hidden flex flex-row text-primaryTextColor mr-10 items-center" >
                    <ul className="list-none flex flex-row gap-4 ">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>

                    <div>
                     <Button/>
                    </div>


                </div>
        </nav>
    </header>
  )
}

export default Nav
