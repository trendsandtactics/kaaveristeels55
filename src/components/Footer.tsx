"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Instagram,
    Linkedin,
    Youtube,
    MessageCircle,
    MapPin,
    Phone,
    Mail,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function Footer() {

    const addresses = [
        {
            title: "Unit 1",
            content: (
                <>
                    No.7/1 & 4/3, Komal Road,
                    <br />
                    Maruthur Village,
                    <br />
                    Therizhandur Post,
                    <br />
                    Kuttalam Taluk,
                    <br />
                    Mayiladuthurai District - 609 808
                </>
            ),
        },
        {
            title: "Unit 2",
            content: (
                <>
                    S.F.No: 22/1A,
                    <br />
                    Musiri – Thuraiyur Main Road,
                    <br />
                    Jambunathapuram Post,
                    <br />
                    Musiri Taluk,
                    <br />
                    Trichy – 621 205
                </>
            ),
        },
    ];

    const [activeAddress, setActiveAddress] = useState(0);

    // AUTO ADDRESS SLIDER
    useEffect(() => {

        const interval = setInterval(() => {

            setActiveAddress((prev) =>
                prev === addresses.length - 1 ? 0 : prev + 1
            );

        }, 4500);

        return () => clearInterval(interval);

    }, []);


    const nextAddress = () => {

        setActiveAddress((prev) =>
            prev === addresses.length - 1 ? 0 : prev + 1
        );

    };


    const prevAddress = () => {

        setActiveAddress((prev) =>
            prev === 0 ? addresses.length - 1 : prev - 1
        );

    };


    return (

        <footer className="relative overflow-hidden bg-black pt-20 pb-10 px-6 md:px-10 lg:px-16 border-t border-red-500/10">

            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[160px] rounded-full pointer-events-none" />


            <div className="max-w-7xl mx-auto relative z-10">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">

                    {/* LOGO + ABOUT */}
                    <div>

                        <Link
                            href="/"
                            className="inline-block mb-8 hover:scale-105 transition-all duration-300"
                        >

                            <Image
                                src="/image/kaveerilogo.png"
                                alt="KAAVERI"
                                width={260}
                                height={90}
                                className="object-contain drop-shadow-2xl"
                            />

                        </Link>


                        <p className="text-white/75 leading-10 text-[17px] max-w-[340px]">

                            Leading the future of construction with premium
                            TMT bars and structural steel products engineered
                            for strength, durability, and sustainability.

                        </p>


                        <div className="w-16 h-[3px] bg-red-500 rounded-full mt-10" />

                    </div>


                    {/* COMPANY */}
                    <div>

                        <h3 className="text-white text-[42px] font-bold mb-10">
                            Company
                        </h3>

                        <ul className="space-y-7">

                            {[
                                { name: "HOME", href: "/" },
                                { name: "ABOUT US", href: "/about-us" },
                                { name: "PRODUCTS", href: "/products" },
                                { name: "DEALERS", href: "/dealers" },
                                { name: "CAREERS", href: "/careers" },
                                { name: "CONTACT US", href: "/contact-us" },
                            ].map((item) => (

                                <li key={item.name}>

                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-4 text-white/70 hover:text-red-500 transition-all duration-300 tracking-[0.25em] text-[15px]"
                                    >

                                        <span className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-125 transition-transform duration-300" />

                                        {item.name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* CONTACT */}
                    <div>

                        <div className="flex items-center justify-between mb-10">

                            <h3 className="text-white text-[42px] font-bold leading-none">
                                Contact
                                <br />
                                Us
                            </h3>


                            {/* ARROWS */}
                            <div className="flex items-center gap-3">

                                <button
                                    onClick={prevAddress}
                                    className="w-12 h-12 rounded-full border border-white/20 bg-white/5 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center"
                                >

                                    <ChevronLeft size={18} />

                                </button>

                                <button
                                    onClick={nextAddress}
                                    className="w-12 h-12 rounded-full border border-white/20 bg-white/5 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center"
                                >

                                    <ChevronRight size={18} />

                                </button>

                            </div>

                        </div>


                        {/* ADDRESS */}
                        <div
                            key={activeAddress}
                            className="transition-all duration-500"
                        >

                            <div className="flex items-start gap-5">

                                <MapPin
                                    size={22}
                                    className="text-red-500 mt-2 shrink-0"
                                />

                                <div>

                                    <h4 className="text-white text-[28px] font-bold mb-5">

                                        {addresses[activeAddress].title}

                                    </h4>

                                    <div className="text-white/70 text-[17px] leading-[55px]">

                                        {addresses[activeAddress].content}

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* DOTS */}
                        <div className="flex items-center gap-3 mt-8 mb-10">

                            {addresses.map((_, index) => (

                                <button
                                    key={index}
                                    onClick={() => setActiveAddress(index)}
                                    className={`rounded-full transition-all duration-300 ${
                                        activeAddress === index
                                            ? "w-12 h-[6px] bg-red-500"
                                            : "w-[6px] h-[6px] bg-white/30"
                                    }`}
                                />

                            ))}

                        </div>


                        {/* CONTACT INFO */}
                        <div className="space-y-6">

                            <div className="flex items-center gap-4 text-white/80 text-[18px]">

                                <Phone
                                    size={20}
                                    className="text-red-500"
                                />

                                <span>+91 88558 24555</span>

                            </div>


                            <div className="flex items-center gap-4 text-white/80 text-[18px] break-all">

                                <Mail
                                    size={20}
                                    className="text-red-500"
                                />

                                <span>info@kaaveristeel.co.in</span>

                            </div>

                        </div>

                    </div>


                    {/* CERTIFICATION + SOCIAL */}
                    <div>

                        {/* CERTIFICATIONS */}
                        <div className="mb-16">

                            <h3 className="text-white text-[42px] font-bold mb-12">
                                Certifications
                            </h3>


                            <div className="flex items-center gap-10">

                                {/* ISO */}
                                <div className="group">

                                    <Image
                                        src="/image/iso.png"
                                        alt="ISO"
                                        width={150}
                                        height={100}
                                        className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    />

                                </div>


                                <div className="w-px h-32 bg-white/10" />


                                {/* NISST */}
                                <div className="group">

                                    <Image
                                        src="/image/nisst.png"
                                        alt="NISST"
                                        width={150}
                                        height={100}
                                        className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* SOCIAL */}
                        <div>

                            <h3 className="text-white text-[42px] font-bold mb-10">
                                Follow Us
                            </h3>


                            <div className="flex items-center gap-5 flex-wrap">

                                {[
                                    {
                                        icon: <Instagram size={20} />,
                                        href: "https://www.instagram.com/kaaveritmtbarsandstructural",
                                    },
                                    {
                                        icon: <Linkedin size={20} />,
                                        href: "https://www.linkedin.com/company/kaaveritmtbarsandstructural",
                                    },
                                    {
                                        icon: <Youtube size={20} />,
                                        href: "https://www.youtube.com/@KAAVERITMTBARSANDSTRUCTURAL",
                                    },
                                    {
                                        icon: "X",
                                        href: "https://x.com/kaaveritmt",
                                    },
                                    {
                                        icon: <MessageCircle size={20} />,
                                        href: "https://wa.me/918855824555",
                                    },
                                ].map((social, index) => (

                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 hover:scale-110"
                                    >

                                        {social.icon}

                                    </Link>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


                {/* BOTTOM */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">

                    <p className="text-white/35 uppercase tracking-[0.3em] text-sm text-center lg:text-left">

                        © {new Date().getFullYear()} KAAVERI STEEL. ALL RIGHTS RESERVED.

                    </p>


                    <div className="flex items-center gap-6 flex-wrap justify-center">

                        <Link
                            href="#"
                            className="text-white/35 hover:text-red-500 transition-all duration-300 uppercase tracking-[0.25em] text-sm"
                        >
                            Privacy Policy
                        </Link>

                        <div className="w-px h-4 bg-white/20" />

                        <Link
                            href="#"
                            className="text-white/35 hover:text-red-500 transition-all duration-300 uppercase tracking-[0.25em] text-sm"
                        >
                            Terms Of Service
                        </Link>

                    </div>

                </div>

            </div>

        </footer>

    );
}
