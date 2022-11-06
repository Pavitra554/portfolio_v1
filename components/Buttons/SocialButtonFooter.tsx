import React from "react";
import Link from "next/link";

//React Icons
import { SiLeetcode,SiGithub,SiLinkedin,SiTwitter,SiInstagram} from "react-icons/si";

type props = {
  link: string;
  name: string;
};

const SocialButtonNormal: React.FC<props> = ({ link, name }) => {
  return (
    <Link href={link}>
        <div className='flex flex-row items-center rounded-md text-neutral-400 select-none hover:brightness-200 active:scale-90 ease-linear duration-100 cursor-pointer font-noto'>
          <div >
            { name === 'Leetcode' && <SiLeetcode size={20} /> }
            { name === 'Github' && <SiGithub size={20} /> }
            { name === 'LinkedIn' && <SiLinkedin size={20} /> }
            { name === 'Twitter' && <SiTwitter size={20} /> }
            { name === 'Instagram' && <SiInstagram size={20} /> }
          </div>
        </div>
    </Link>
  );
};

export default SocialButtonNormal;