import middlehero from "../assets/middlehero.svg"
import Button from "./Button"


function MiddleHero() {
  return (
   <section>

    <div className='flex flex-col sm:flex-row sm:px-20 p-5 justify-between'>
        <img src={middlehero} alt="" srcset="" className="" />

        <div className="flex flex-col gap-2 sm:mr-[50x]  ">
            <p className="font-semibold sm:text-[25px] text-neutralgrey2 mb-4">The unseen of spending three<br className="sm:block hidden"/> years at Pixelgrade</p>
            <p className="text-neutralgrey text-[12px] sm:max-w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>

            <Button text="Learn more" width="w-[115px]" height=""/>
        </div>

    </div>

   </section>
  )
}

export default MiddleHero
