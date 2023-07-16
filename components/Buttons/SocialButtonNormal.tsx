import React from "react";
import Link from "next/link";

//React Icons
import { SiLeetcode,SiGithub,SiLinkedin,SiTwitter,SiGmail,SiHackerrank} from "react-icons/si";

type props = {
  link: string;
  name: string;
};

const SocialButtonNormal: React.FC<props> = ({ link, name }) => {
  return (
    <Link href={link} target="_blank">
        <div className='flex flex-row items-center p-2 rounded-md bg-[#27272a] text-[#b0b0b9] shadow-md select-none hover:brightness-200 active:scale-90 ease-linear duration-100 cursor-pointer font-noto'>
          <div >
            { name === 'Hackerrank' && <SiHackerrank size={25} /> }
            { name === 'Leetcode' && <SiLeetcode size={25} /> }
            { name === 'Github' && <SiGithub size={25} /> }
            { name === 'LinkedIn' && <SiLinkedin size={25} /> }
            { name === 'Twitter' && <SiTwitter size={25} /> }
            { name === 'Mail' && <SiGmail size={25} /> }
          </div>
        </div>
    </Link>
  );
};

export default SocialButtonNormal;
