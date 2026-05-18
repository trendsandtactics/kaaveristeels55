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

    // AUTO SCROLL
    useEffect(() => {

        const interval = setInterval(() => {

            setActiveAddress((prev) =>
                prev === addresses.length - 1 ? 0 : prev + 1
            );

        }, 4000);

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

        <footer id="footer" className="relative bg-black overflow-hidden border-t border-red-500/10 pt-16 pb-8 px-6 md:px-10">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/10 blur-[120px] rounded-full" />

            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-yellow-500/10 blur-[120px] rounded-full" />


            <div className="max-w-7xl mx-auto relative z-10">

                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* LOGO */}
                    <div>

                        <Link
                            href="/"
                            className="inline-block mb-6 hover:scale-105 transition-all duration-300"
                        >

                            <Image
                                src="/image/kaveerilogo.png"
                                alt="KAAVERI"
                                width={210}
                                height={70}
                                className="object-contain"
                            />

                        </Link>


                        <p className="text-white/70 text-[15px] leading-8 max-w-[280px]">

                            Premium TMT bars and structural steel products
                            engineered for durability, strength, and sustainability.

                        </p>


                        <div className="w-14 h-[3px] bg-red-500 rounded-full mt-6" />

                    </div>


                    {/* COMPANY */}
                    <div>

                        <h3 className="text-white text-3xl font-bold mb-7">
                            Company
                        </h3>

                        <ul className="space-y-5">

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
                                        className="group flex items-center gap-3 text-white/65 hover:text-red-500 transition-all duration-300 tracking-[0.2em] text-[13px]"
                                    >

                                        <span className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />

                                        {item.name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* CONTACT */}
                    <div>

                        <div className="flex items-center justify-between mb-7">

                            <h3 className="text-white text-3xl font-bold">
                                Contact
                            </h3>


                            {/* BUTTONS */}
                            <div className="flex items-center gap-2">

                                <button
                                    onClick={prevAddress}
                                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center"
                                >

                                    <ChevronLeft size={16} />

                                </button>


                                <button
                                    onClick={nextAddress}
                                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center"
                                >

                                    <ChevronRight size={16} />

                                </button>

                            </div>

                        </div>


                        {/* ADDRESS */}
                        <div key={activeAddress}>

                            <div className="flex items-start gap-4">

                                <MapPin
                                    size={18}
                                    className="text-red-500 mt-1 shrink-0"
                                />

                                <div>

                                    <h4 className="text-white text-xl font-semibold mb-4">

                                        {addresses[activeAddress].title}

                                    </h4>

                                    <div className="text-white/70 text-[15px] leading-9">

                                        {addresses[activeAddress].content}

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* DOTS */}
                        <div className="flex items-center gap-2 mt-6 mb-8">

                            {addresses.map((_, index) => (

                                <button
                                    key={index}
                                    onClick={() => setActiveAddress(index)}
                                    className={`rounded-full transition-all duration-300 ${
                                        activeAddress === index
                                            ? "w-8 h-[5px] bg-red-500"
                                            : "w-[5px] h-[5px] bg-white/30"
                                    }`}
                                />

                            ))}

                        </div>


                        {/* CONTACT INFO */}
                        <div className="space-y-4">

                            <div className="flex items-center gap-3 text-white/70 text-[15px]">

                                <Phone
                                    size={17}
                                    className="text-red-500"
                                />

                                <span>+91 88558 24555</span>

                            </div>


                            <div className="flex items-center gap-3 text-white/70 text-[15px] break-all">

                                <Mail
                                    size={17}
                                    className="text-red-500"
                                />

                                <span>info@kaaveristeel.co.in</span>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT */}
                    <div>

                        {/* CERTIFICATIONS */}
                        <div className="mb-12">

                            <h3 className="text-white text-3xl font-bold mb-8">
                                Certifications
                            </h3>


                            <div className="flex items-center gap-6">

                                <Image
                                    src="/iso.png"
                                    alt="ISO"
                                    width={110}
                                    height={70}
                                    className="object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                                />

                                <div className="w-px h-20 bg-white/10" />

                                <Image
                                    src="/nisst.png"
                                    alt="NISST"
                                    width={110}
                                    height={70}
                                    className="object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                                />

                            </div>

                        </div>


                        {/* SOCIAL */}
                        <div>

                            <h3 className="text-white text-3xl font-bold mb-8">
                                Follow Us
                            </h3>


                            <div className="flex items-center gap-4 flex-wrap">

                                {[
                                    {
                                        icon: <Instagram size={18} />,
                                        href: "https://www.instagram.com/kaaveritmtbarsandstructural",
                                    },
                                    {
                                        icon: <Linkedin size={18} />,
                                        href: "https://www.linkedin.com/company/kaaveritmtbarsandstructural",
                                    },
                                    {
                                        icon: <Youtube size={18} />,
                                        href: "https://www.youtube.com/@KAAVERITMTBARSANDSTRUCTURAL",
                                    },
                                    {
                                        icon: "X",
                                        href: "https://x.com/kaaveritmt",
                                    },
                                    {
                                        icon: <MessageCircle size={18} />,
                                        href: "https://wa.me/918855824555",
                                    },
                                ].map((social, index) => (

                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300"
                                    >

                                        {social.icon}

                                    </Link>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


                {/* BOTTOM */}
                <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

                    <p className="text-white/35 uppercase tracking-[0.25em] text-[11px] text-center">

                        © {new Date().getFullYear()} KAAVERI STEEL. ALL RIGHTS RESERVED.

                    </p>


                    <div className="flex items-center gap-5 flex-wrap justify-center">

                        <Link
                            href="#"
                            className="text-white/35 hover:text-red-500 transition-all duration-300 uppercase tracking-[0.2em] text-[11px]"
                        >
                            Privacy Policy
                        </Link>

                        <div className="w-px h-3 bg-white/20" />

                        <Link
                            href="#"
                            className="text-white/35 hover:text-red-500 transition-all duration-300 uppercase tracking-[0.2em] text-[11px]"
                        >
                            Terms Of Service
                        </Link>

                    </div>

                </div>

            </div>

        </footer>

    );
}
