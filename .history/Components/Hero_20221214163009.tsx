import React from 'react'
import {Cursor,useTypewriter} from "react-simple-typewriter";
import BackgroundCircle from './BackgroundCircle';
import Image from "next/image"
import profileimage from "../images/profile.jpg"
import Link from 'next/link';
import { PageInfo } from '../typings';
import { sanityClient, urlFor } from '../sanity';

type Props = {
  pageInfo:PageInfo
};

export default function Hero({pageInfo}: Props) {
    const [text , count] = useTypewriter({
        words: [
            "Hi There, Welcome to Open Free Community",
            `${pageInfo?.name} Here , This is Devlopment Platform `,
            "Join the Discord Community DevWithCvr, Learn and Grow!!!",
            "Happy To Have You there...",

        ],
        loop:true,
        delaySpeed:3000,
        
    });
   
  return (
    <div className="h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle/>
       <Image      //width={32}
      // height={32}
       className="relative rounded-full h-32 w-32  mx-auto object-cover"
       src={urlFor(pageInfo.heroImage).url()} alt=""/>
    <div className="z-20">
        <h2 className="text-sm uppercase text-[#F7AB0A]-500 pb-2 tracking-[10px]">{pageInfo?.role}</h2>
      <h1 className="text-5sl lg:text-2xl font-semibold px-10">
       <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
       </h1>

       <div className="pt-5 flex flex-row justify-between">
        <Link href="#About">
        <button className="heroButton">About</button>
        </Link >
        <Link href="#experience">
        <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
        <button className="heroButton">Skills</button>
        </Link>
        <Link href="https://discord.gg/DPJXyP3Q">
        <button className="heroButton">Discord</button>
        </Link>
       </div>
    </div>
   
    </div>
  );
}