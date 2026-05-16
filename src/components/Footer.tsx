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

        <footer className="w-full bg-black border-t border-red-500/20 py-16 px-6 md:px-10 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px]" />

            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[120px]" />


            <div className="max-w-7xl mx-auto relative z-10">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* LOGO */}
                    <div>

                        <Link
                            href="/"
                            className="inline-block mb-8 hover:scale-105 transition-transform duration-300"
                        >

                            <Image
                                src="/image/kaveerilogo.png"
                                alt="KAAVERI Logo"
                                width={240}
                                height={80}
                                className="object-contain"
                            />

                        </Link>


                        <p className="text-white/70 text-[17px] leading-9 max-w-[320px]">

                            Leading the future of construction with premium
                            TMT bars and structural steel products engineered
                            for strength, durability, and sustainability.

                        </p>


                        <div className="w-16 h-1 bg-red-500 rounded-full mt-8" />

                    </div>


                    {/* COMPANY */}
                    <div>

                        <h3 className="text-4xl font-semibold text-white mb-8">
                            Company
                        </h3>

                        <ul className="space-y-6">

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
                                        className="flex items-center gap-4 text-white/70 hover:text-red-500 transition-all duration-300 tracking-[0.2em] text-sm"
                                    >

                                        <span className="w-2 h-2 rounded-full bg-red-500" />

                                        {item.name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* CONTACT */}
                    <div>

                        <div className="flex items-center justify-between mb-8">

                            <h3 className="text-4xl font-semibold text-white">
                                Contact Us
                            </h3>


                            {/* Buttons */}
                            <div className="flex items-center gap-3">

                                <button
                                    onClick={prevAddress}
                                    className="w-11 h-11 rounded-full border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center"
                                >

                                    <ChevronLeft size={18} />

                                </button>

                                <button
                                    onClick={nextAddress}
                                    className="w-11 h-11 rounded-full border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center"
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

                            <div className="flex items-start gap-4 mb-10">

                                <MapPin
                                    size={22}
                                    className="text-red-500 mt-1 shrink-0"
                                />

                                <div>

                                    <h4 className="text-white text-2xl font-semibold mb-5">

                                        {addresses[activeAddress].title}

                                    </h4>

                                    <div className="text-white/70 text-lg leading-10">

                                        {addresses[activeAddress].content}

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* DOTS */}
                        <div className="flex items-center gap-3 mb-10">

                            {addresses.map((_, index) => (

                                <button
                                    key={index}
                                    onClick={() => setActiveAddress(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        activeAddress === index
                                            ? "w-10 h-2 bg-red-500"
                                            : "w-2 h-2 bg-white/30"
                                    }`}
                                />

                            ))}

                        </div>


                        {/* PHONE */}
                        <div className="space-y-6">

                            <div className="flex items-center gap-4 text-white/70 text-lg">

                                <Phone
                                    size={20}
                                    className="text-red-500"
                                />

                                <span>+91 88558 24555</span>

                            </div>


                            <div className="flex items-center gap-4 text-white/70 text-lg break-all">

                                <Mail
                                    size={20}
                                    className="text-red-500"
                                />

                                <span>info@kaaveristeel.co.in</span>

                            </div>

                        </div>

                    </div>


                    {/* RIGHT */}
                    <div>

                        {/* CERTIFICATIONS */}
                        <div className="mb-14">

                            <h3 className="text-4xl font-semibold text-white mb-10">
                                Certifications
                            </h3>

                            <div className="flex items-center gap-10">

                                <Image
                                    src="/image/iso.png"
                                    alt="ISO"
                                    width={150}
                                    height={100}
                                    className="object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                                />

                                <div className="w-px h-28 bg-white/10" />

                                <Image
                                    src="/image/nisst.png"
                                    alt="NISST"
                                    width={150}
                                    height={100}
                                    className="object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                                />

                            </div>

                        </div>


                        {/* SOCIAL */}
                        <div>

                            <h3 className="text-4xl font-semibold text-white mb-8">
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
                                        className="w-14 h-14 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                                    >

                                        {social.icon}

                                    </Link>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


                {/* BOTTOM */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="text-white/40 text-sm tracking-[0.25em] uppercase">

                        © {new Date().getFullYear()} KAAVERI STEEL. ALL RIGHTS RESERVED.

                    </p>


                    <div className="flex items-center gap-6 flex-wrap justify-center">

                        <Link
                            href="#"
                            className="text-white/40 hover:text-red-500 transition-colors duration-300 text-sm tracking-[0.2em] uppercase"
                        >
                            Privacy Policy
                        </Link>

                        <div className="w-px h-4 bg-white/20" />

                        <Link
                            href="#"
                            className="text-white/40 hover:text-red-500 transition-colors duration-300 text-sm tracking-[0.2em] uppercase"
                        >
                            Terms Of Service
                        </Link>

                    </div>

                </div>

            </div>

        </footer>

    );
}
