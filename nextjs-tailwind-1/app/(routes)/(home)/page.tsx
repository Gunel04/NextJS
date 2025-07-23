import MetaData from "@/app/components/MetaData";
import { Metadata } from "next";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaCircleCheck, FaXTwitter } from "react-icons/fa6";
import HomeItem from "./HomeItem";

export const metadata: Metadata = {
    title: "BuyHost - Home page",
    description: "Reliable and secure web hosting with 99.9% uptime, fast servers, and expert support. Launch your website today with our powerful hosting plans.",
    // keywords:[
    //     "Reliable hosting",
    //     "Web hosting"
    // ]
}
// MetaData('BuyHost - Home page', 'Reliable and secure web hosting with 99.9% uptime, fast servers, and expert support. Launch your website today with our powerful hosting plans.')

export default function Home() {
    return (
        <>
            <HomeItem/>
        </>

    );
}
