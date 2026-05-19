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
    ChevronRight as ArrowIcon,
} from "lucide-react";

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

export default function Footer() {
    const [activeAddress, setActiveAddress] = useState(0);

    // AUTO ADDRESS SCROLL
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
        <footer className="relative overflow-hidden bg-black border-t border-red-500/10">
            {/* RED GLOW */}
            <div className="absolute left-[-150px] bottom-[-150px] w-[450px] h-[450px] bg-red-600/10 blur-[130px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8 relative z-10">
                {/* TOP SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                    {/* LOGO */}
                    <div>
                        <Link href="/#top">
                            <Image
                                src="/image/kaveerilogo.png"
                                alt="KAAVERI"
                                width={230}
                                height={80}
                                className="object-contain mb-8"
                            />
                        </Link>

                        <p className="text-white/70 text-[15px] leading-[2.3] max-w-[290px]">
                            Premium TMT bars and structural steel products
                            engineered for durability, strength, and
                            sustainability.
                        </p>

                        <div className="w-14 h-[3px] bg-red-500 rounded-full mt-8" />
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-white uppercase tracking-[0.12em] text-[18px] font-bold mb-3">
                            Quick Links
                        </h3>

                        <div className="w-6 h-[3px] bg-red-500 rounded-full mb-8" />

                        <ul className="space-y-5">
                            {[
                                { name: "HOME", href: "/" },
                                { name: "ABOUT US", href: "/about-us" },
                                { name: "PRODUCTS", href: "/products" },
                                { name: "DEALERS", href: "/dealers" },
                                { name: "CAREERS", href: "/careers" },
                                { name: "CONTACT US", href: "/contact-us" },
                            ].map((item) => (
                                <li
                                    key={item.name}
                                    className="border-b border-white/5 pb-4"
                                >
                                    <Link
                                        href={`${item.href}#top`}
                                        className="group flex items-center gap-3 text-white/70 hover:text-red-500 transition-all duration-300 text-[14px] tracking-[0.22em]"
                                    >
                                        <ArrowIcon
                                            size={13}
                                            className="text-red-500"
                                        />

                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-white uppercase tracking-[0.12em] text-[18px] font-bold mb-3">
                                    Contact
                                </h3>

                                <div className="w-6 h-[3px] bg-red-500 rounded-full mb-8" />
                            </div>

                            {/* ADDRESS SLIDER BUTTONS */}
                            <div className="hidden md:flex items-center gap-2">
                                <button
                                    onClick={prevAddress}
                                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center"
                                >
                                    <ChevronLeft size={15} />
                                </button>

                                <button
                                    onClick={nextAddress}
                                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center"
                                >
                                    <ChevronRight size={15} />
                                </button>
                            </div>
                        </div>

                        {/* ADDRESS */}
                        <div
                            key={activeAddress}
                            className="transition-all duration-500"
                        >
                            <div className="flex items-start gap-4">
                                <MapPin
                                    size={18}
                                    className="text-red-500 mt-1 shrink-0"
                                />

                                <div>
                                    <h4 className="text-white text-[18px] font-semibold mb-4">
                                        {addresses[activeAddress].title}
                                    </h4>

                                    <div className="text-white/70 text-[15px] leading-[2.2]">
                                        {addresses[activeAddress].content}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DOTS */}
                        <div className="flex items-center gap-2 mt-7 mb-8">
                            {addresses.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setActiveAddress(index)
                                    }
                                    className={`transition-all duration-300 rounded-full ${
                                        activeAddress === index
                                            ? "w-8 h-[4px] bg-red-500"
                                            : "w-[5px] h-[5px] bg-white/30"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* CONTACT INFO */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-4 text-white/70 text-[15px]">
                                <Phone
                                    size={17}
                                    className="text-red-500"
                                />

                                <span>+91 88558 24555</span>
                            </div>

                            <div className="flex items-center gap-4 text-white/70 text-[15px] break-all">
                                <Mail
                                    size={17}
                                    className="text-red-500"
                                />

                                <span>info@kaaveristeel.co.in</span>
                            </div>
                        </div>
                    </div>

                    {/* CERTIFICATIONS + SOCIAL */}
                    <div>
                        {/* CERTIFICATIONS */}
                        <div>
                            <h3 className="text-white uppercase tracking-[0.12em] text-[18px] font-bold mb-3">
                                Certifications
                            </h3>

                            <div className="w-6 h-[3px] bg-red-500 rounded-full mb-8" />

                            {/* CERTIFICATE LOGOS */}
                            <div className="flex items-center justify-between gap-3">
                                <Image
                                    src="/iso.png"
                                    alt="ISO"
                                    width={55}
                                    height={55}
                                    className="object-contain"
                                />

                                <Image
                                    src="/nisst.png"
                                    alt="NISST"
                                    width={55}
                                    height={55}
                                    className="object-contain"
                                />

                                <Image
                                    src="/bis.png"
                                    alt="BIS"
                                    width={55}
                                    height={55}
                                    className="object-contain"
                                />

                                <Image
                                    src="/cert1.png"
                                    alt="CERT1"
                                    width={55}
                                    height={55}
                                    className="object-contain"
                                />

                                <Image
                                    src="/cert2.png"
                                    alt="CERT2"
                                    width={55}
                                    height={55}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* DIVIDER */}
                        <div className="w-full h-px bg-white/10 my-10" />

                        {/* FOLLOW US */}
                        <div>
                            <h3 className="text-white uppercase tracking-[0.12em] text-[18px] font-bold mb-3">
                                Follow Us
                            </h3>

                            <div className="w-6 h-[3px] bg-red-500 rounded-full mb-8" />

                            {/* SOCIAL ICONS */}
                            <div className="flex items-center gap-4">
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
                                        className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.15)]"
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-16 pt-6 border-t border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-5">
                    <p className="text-white/35 uppercase tracking-[0.25em] text-[11px] text-center">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-red-500">
                            KAAVERI STEEL
                        </span>
                        . ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex items-center gap-5 flex-wrap justify-center">
                        <Link
                            href="#"
                            className="text-white/35 hover:text-red-500 transition-all duration-300 uppercase tracking-[0.2em] text-[11px]"
                        >
                            Privacy Policy
                        </Link>

                        <div className="w-px h-3 bg-red-500/40" />

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
