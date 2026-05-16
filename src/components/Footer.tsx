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

    // Auto scroll address
    useEffect(() => {

        const interval = setInterval(() => {

            setActiveAddress((prev) =>
                prev === addresses.length - 1 ? 0 : prev + 1
            );

        }, 4000);

        return () => clearInterval(interval);

    }, [addresses.length]);


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

        <footer className="w-full bg-[#050505] border-t-4 border-accent-red py-16 px-6 md:px-10 lg:px-12 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />


            <div className="max-w-7xl mx-auto relative z-10">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* Brand */}
                    <div>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center mb-6 bg-white rounded-2xl p-5 shadow-2xl hover:scale-105 transition-transform duration-300"
                        >

                            <Image
                                src="/image/kaveerilogo.png"
                                alt="KAAVERI Logo"
                                width={180}
                                height={65}
                                className="object-contain"
                            />

                        </Link>


                        <p className="text-white/65 text-sm leading-7 mb-6">

                            Leading the future of construction with premium
                            TMT bars and structural steel products engineered
                            for strength, durability, and sustainability.

                        </p>

                        <div className="w-14 h-1 bg-accent-red rounded-full" />

                    </div>


                    {/* Company */}
                    <div>

                        <h3 className="text-xl mb-6 text-white tracking-wide font-semibold">
                            Company
                        </h3>

                        <ul className="space-y-4">

                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about-us" },
                                { name: "Products", href: "/products" },
                                { name: "Dealers", href: "/dealers" },
                                { name: "Careers", href: "/careers" },
                                { name: "Contact Us", href: "/contact-us" },
                            ].map((item) => (

                                <li key={item.name}>

                                    <Link
                                        href={item.href}
                                        className="text-white/65 hover:text-red-500 text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group"
                                    >

                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />

                                        {item.name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* Contact Slider */}
                    <div>

                        <div className="flex items-center justify-between mb-6">

                            <h3 className="text-xl text-white tracking-wide font-semibold">
                                Contact Us
                            </h3>


                            {/* Controls */}
                            <div className="flex items-center gap-2">

                                <button
                                    onClick={prevAddress}
                                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-red-500 hover:border-red-500 text-white flex items-center justify-center transition-all duration-300"
                                >

                                    <ChevronLeft size={16} />

                                </button>

                                <button
                                    onClick={nextAddress}
                                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-red-500 hover:border-red-500 text-white flex items-center justify-center transition-all duration-300"
                                >

                                    <ChevronRight size={16} />

                                </button>

                            </div>

                        </div>


                        {/* Address Card */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[250px] backdrop-blur-sm hover:border-red-500 transition-all duration-500">

                            <div className="flex items-start gap-4">

                                <MapPin
                                    size={20}
                                    className="text-red-500 mt-1 shrink-0"
                                />

                                <div key={activeAddress}>

                                    <h4 className="text-white font-semibold text-lg mb-3">
                                        {addresses[activeAddress].title}
                                    </h4>

                                    <div className="text-white/65 text-sm leading-7">

                                        {addresses[activeAddress].content}

                                    </div>

                                </div>

                            </div>


                            {/* Dots */}
                            <div className="flex items-center gap-2 mt-6">

                                {addresses.map((_, index) => (

                                    <button
                                        key={index}
                                        onClick={() => setActiveAddress(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            activeAddress === index
                                                ? "w-8 bg-red-500"
                                                : "w-2 bg-white/30"
                                        }`}
                                    />

                                ))}

                            </div>

                        </div>


                        {/* Phone & Email */}
                        <div className="mt-6 space-y-4 text-sm">

                            <div className="flex items-center gap-4 text-white/65">

                                <Phone
                                    size={18}
                                    className="text-red-500"
                                />

                                <span>+91 88558 24555</span>

                            </div>


                            <div className="flex items-center gap-4 text-white/65 break-all">

                                <Mail
                                    size={18}
                                    className="text-red-500"
                                />

                                <span>info@kaaveristeel.co.in</span>

                            </div>

                        </div>

                    </div>


                    {/* Certifications & Social */}
                    <div className="flex flex-col gap-12">

                        {/* Certifications */}
                        <div>

                            <h3 className="text-xl mb-6 text-white tracking-wide font-semibold">
                                Certifications
                            </h3>

                            <div className="grid grid-cols-2 gap-4">

                                {/* ISO */}
                                <div className="group bg-white rounded-2xl p-5 flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-xl min-h-[120px]">

                                    <Image
                                        src="/image/iso.png"
                                        alt="ISO Certification"
                                        width={130}
                                        height={70}
                                        className="object-contain"
                                    />

                                </div>


                                {/* NISST */}
                                <div className="group bg-white rounded-2xl p-5 flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-xl min-h-[120px]">

                                    <Image
                                        src="/image/nisst.png"
                                        alt="NISST Certification"
                                        width={130}
                                        height={70}
                                        className="object-contain"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* Social */}
                        <div>

                            <h3 className="text-xl mb-6 text-white tracking-wide font-semibold">
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
                                        className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 hover:scale-110"
                                    >

                                        {social.icon}

                                    </Link>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                    <p className="text-white/45 text-xs tracking-[0.2em] uppercase font-semibold">

                        © {new Date().getFullYear()} KAAVERI Steel. All Rights Reserved.

                    </p>

                    <div className="flex items-center gap-6 flex-wrap justify-center">

                        <Link
                            href="#"
                            className="text-white/45 hover:text-red-500 text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-semibold"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="text-white/45 hover:text-red-500 text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-semibold"
                        >
                            Terms Of Service
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}
