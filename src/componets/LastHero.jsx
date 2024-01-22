import lasthero from "../assets/lasthero.svg"
import Button from "./Button"
function LastHero() {
  return (
    <section className="flex sm:flex-row gap-20 flex-col sm:px-28 px-10 sm:py-10">
        <img src={lasthero} className="w-[307px] h-[301px]" alt="" srcset="" />
        <div className="flex flex-col ">
            <h1 className="text-neutralgrey2 text-[28px] font-semibold font-montserrat `">How to design your site footer like <br/> we did</h1>
            <p className="text-neutralgrey text-[13px] leading-[20px]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <Button text="Learn more" width="w-[105px]" height="w-[105px]"/>

        </div>
    </section>
  )
}

export default LastHero
