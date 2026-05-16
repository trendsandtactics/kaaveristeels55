import React from "react";
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
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t-4 border-accent-red py-16 px-6 md:px-10 lg:px-12 relative overflow-hidden scroll-section">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-yellow/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* Brand Section */}
                    <div>

                        <Link
                            href="/"
                            className="inline-block mb-6 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-xl">
                                <Image
                                    src="/image/kaveerilogo.png"
                                    alt="KAAVERI Logo"
                                    width={170}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </Link>

                        <p className="font-body text-white/65 text-sm leading-7 mb-6">
                            Leading the future of construction with premium
                            TMT bars and structural steel products engineered
                            for strength, safety, and sustainability.
                        </p>

                        <div className="w-14 h-1 bg-accent-red rounded-full" />

                    </div>


                    {/* Navigation */}
                    <div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                            {/* Company */}
                            <div>

                                <h3 className="font-heading text-xl mb-6 text-white tracking-wide">
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
                                                className="text-white/65 hover:text-accent-red text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-red group-hover:scale-125 transition-transform" />

                                                {item.name}
                                            </Link>

                                        </li>
                                    ))}

                                </ul>

                            </div>


                            {/* Support */}
                            <div>

                                <h3 className="font-heading text-xl mb-6 text-white tracking-wide">
                                    Support
                                </h3>

                                <ul className="space-y-4">

                                    {[
                                        {
                                            name: "Brochure",
                                            href: "/product-brochure",
                                        },
                                        {
                                            name: "Calculator",
                                            href: "/construction-steel-calculator",
                                        },
                                        {
                                            name: "Certificates",
                                            href: "/certifications",
                                        },
                                        {
                                            name: "Get Quote",
                                            href: "/product-enquiry",
                                        },
                                        {
                                            name: "Trust On Site",
                                            href: "/trust-on-site",
                                        },
                                    ].map((item) => (
                                        <li key={item.name}>

                                            <Link
                                                href={item.href}
                                                className="text-white/65 hover:text-accent-red text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-red group-hover:scale-125 transition-transform" />

                                                {item.name}
                                            </Link>

                                        </li>
                                    ))}

                                </ul>

                            </div>

                        </div>

                    </div>


                    {/* Contact */}
                    <div>

                        <h3 className="font-heading text-xl mb-6 text-white tracking-wide">
                            Contact Us
                        </h3>

                        <div className="space-y-8 text-white/65 text-sm leading-7">

                            {/* Unit 1 */}
                            <div className="flex items-start gap-4">

                                <MapPin
                                    size={18}
                                    className="text-accent-red mt-1 shrink-0"
                                />

                                <div>

                                    <h4 className="text-white font-semibold mb-2">
                                        Unit 1
                                    </h4>

                                    <p>
                                        No.7/1 & 4/3, Komal Road,
                                        <br />
                                        Maruthur Village,
                                        <br />
                                        Therizhandur Post,
                                        <br />
                                        Kuttalam Taluk,
                                        <br />
                                        Mayiladuthurai District - 609 808
                                    </p>

                                </div>

                            </div>


                            {/* Unit 2 */}
                            <div className="flex items-start gap-4">

                                <MapPin
                                    size={18}
                                    className="text-accent-red mt-1 shrink-0"
                                />

                                <div>

                                    <h4 className="text-white font-semibold mb-2">
                                        Unit 2
                                    </h4>

                                    <p>
                                        S.F.No: 22/1A,
                                        <br />
                                        Musiri – Thuraiyur Main Road,
                                        <br />
                                        Jambunathapuram Post,
                                        <br />
                                        Musiri Taluk,
                                        <br />
                                        Trichy – 621 205
                                    </p>

                                </div>

                            </div>


                            {/* Phone */}
                            <div className="flex items-center gap-4">

                                <Phone
                                    size={18}
                                    className="text-accent-red"
                                />

                                <span>+91 88558 24555</span>

                            </div>


                            {/* Email */}
                            <div className="flex items-center gap-4 break-all">

                                <Mail
                                    size={18}
                                    className="text-accent-red"
                                />

                                <span>info@kaaveristeel.co.in</span>

                            </div>

                        </div>

                    </div>


                    {/* Right Column */}
                    <div className="flex flex-col gap-12">

                        {/* Certifications */}
                        <div>

                            <h3 className="font-heading text-xl mb-6 text-white tracking-wide">
                                Certifications
                            </h3>

                            <div className="grid grid-cols-2 gap-4">

                                {/* ISO */}
                                <div className="group bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-center hover:border-accent-red hover:bg-white/10 transition-all duration-300 min-h-[120px] shadow-lg">

                                    <Image
                                        src="/iso.png"
                                        alt="ISO Certification"
                                        width={140}
                                        height={70}
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    />

                                </div>


                                {/* NISST */}
                                <div className="group bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-center hover:border-accent-red hover:bg-white/10 transition-all duration-300 min-h-[120px] shadow-lg">

                                    <Image
                                        src="/nisst.png"
                                        alt="NISST Certification"
                                        width={140}
                                        height={70}
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* Social */}
                        <div>

                            <h3 className="font-heading text-xl mb-6 text-white tracking-wide">
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
                                        className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent-red hover:border-accent-red transition-all duration-300 hover:scale-110"
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
                            className="text-white/45 hover:text-accent-red text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-semibold"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="text-white/45 hover:text-accent-red text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-semibold"
                        >
                            Terms Of Service
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}
