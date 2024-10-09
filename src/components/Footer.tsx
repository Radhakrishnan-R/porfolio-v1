import { CiLocationArrow1 } from "react-icons/ci";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "../../data";
import Image from "next/image";



const Footer = () => {
  return (
    <footer id="contact" className="pt-20">
        <div className="flex flex-col items-center gap-4">
            <h2 className="xl:text-5xl text-3xl text-center text-white font-bold max-w-xl">Ready to take <span className="text-purple">your</span> digital presence to the next level?</h2>
            <p className="text-sm text-center text-slate-300 max-w-2xl">{`Reach out to me today and let's discuss how I can help your goals.`}</p>

            <div>
            <MagicButton href="mailto:radhakrishnanr@gmail.com" text="Let's get in touch" icon={<CiLocationArrow1 />} iconPosition="right" className="mt-10"/>
            </div>
        </div>
        <div className="my-10 flex justify-between items-center">
            <p className="text-lg text-white">Copyright `&#169;` {new Date().getFullYear()} Radhakrishnan R</p>
            <div className="flex justify-between gap-2 items-center">
                {socialMedia.map(({id, img}) => (
                    <div key={id} className="w-10 h-10 rounded-xl p-2 border-[1px] border-slate-500 ">
                        <Image 
                            src={img}
                            alt={img}
                            className="w-full h-full object-contain object-center"
                            width={40}
                            height={40}
                        />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer;