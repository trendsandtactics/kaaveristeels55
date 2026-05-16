import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Instagram,
    Linkedin,
    Youtube,
    MessageCircle,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0a] border-t-4 border-accent-red py-16 px-6 md:px-12 relative overflow-hidden scroll-section">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-yellow/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

                {/* Brand Section */}
                <div className="md:col-span-1">

                    <Link
                        href="/"
                        className="inline-block mb-6 relative hover:scale-105 transition-transform duration-300 bg-white/5 p-4 rounded-md border border-white/10 shadow-lg"
                    >
                        <Image
                            src="/image/kaveerilogo.png"
                            alt="KAAVERI Logo"
                            width={150}
                            height={50}
                            className="object-contain drop-shadow-md"
                        />
                    </Link>

                    <p className="font-body text-white/70 text-sm leading-relaxed mb-6 font-medium">
                        Leading the future of construction with premium TMT bars and structural steel products. Engineered for maximum strength and sustainability.
                    </p>

                    <div className="w-12 h-1 bg-accent-red mb-6" />
                </div>


                {/* Navigation */}
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-heading text-xl mb-6 text-white tracking-wider">
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
                                            className="font-body text-white/70 hover:text-accent-red text-sm uppercase tracking-widest transition-colors flex items-center gap-2 font-medium"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-accent-red" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-heading text-xl mb-6 text-white tracking-wider">
                                Support
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "Brochure", href: "/product-brochure" },
                                    { name: "Calculator", href: "/construction-steel-calculator" },
                                    { name: "Certificates", href: "/certifications" },
                                    { name: "Get Quote", href: "/product-enquiry" },
                                    { name: "Trust On Site", href: "/trust-on-site" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="font-body text-white/70 hover:text-accent-red text-sm uppercase tracking-widest transition-colors flex items-center gap-2 font-medium"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-accent-red" />
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
                    <h3 className="font-heading text-xl mb-6 text-white tracking-wider">
                        Contact Us
                    </h3>

                    <ul className="space-y-6 font-body text-white/70 text-sm font-medium">

                        {/* Unit 1 */}
                        <li className="flex items-start gap-3">
                            <span className="text-accent-red mt-1">📍</span>
                            <span>
                                <span className="text-white font-bold block mb-1">
                                    Unit 1
                                </span>

                                No.7/1 & 4/3, Komal Road,
                                <br />
                                Maruthur Village,
                                <br />
                                Therizhandur Post,
                                <br />
                                Kuttalam Taluk,
                                <br />
                                Mayiladuthurai District - 609 808
                            </span>
                        </li>


                        {/* Unit 2 */}
                        <li className="flex items-start gap-3">
                            <span className="text-accent-red mt-1">📍</span>
                            <span>
                                <span className="text-white font-bold block mb-1">
                                    Unit 2
                                </span>

                                S.F.No: 22/1A,
                                <br />
                                Musiri – Thuraiyur Main Road,
                                <br />
                                Jambunathapuram Post,
                                <br />
                                Musiri Taluk,
                                <br />
                                Trichy – 621 205
                            </span>
                        </li>


                        {/* Phone */}
                        <li className="flex items-center gap-3">
                            <span className="text-accent-red">📞</span>
                            <span>+91 88558 24555</span>
                        </li>


                        {/* Landline */}
                        <li className="flex items-center gap-3">
                            <span className="text-accent-red">☎️</span>
                            <span>04123 456789</span>
                        </li>


                        {/* Email */}
                        <li className="flex items-center gap-3 break-all">
                            <span className="text-accent-red">✉️</span>
                            <span>info@kaaveristeel.co.in</span>
                        </li>

                    </ul>
                </div>


                {/* Right Column */}
                <div className="flex flex-col gap-10">

                    {/* Certifications */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-white tracking-wider">
                            Certifications
                        </h3>

                        <div className="flex flex-col gap-4">

                            <div className="w-full h-16 bg-white/5 border border-white/10 flex items-center justify-center font-body text-xs text-white/60 uppercase tracking-widest font-bold">
                                ISO 9001:2015 Approved
                            </div>

                            <div className="w-full h-16 bg-white/5 border border-white/10 flex items-center justify-center font-body text-xs text-white/60 uppercase tracking-widest font-bold">
                                Green Steel Certified
                            </div>

                        </div>
                    </div>


                    {/* Social */}
                    <div>
                        <h3 className="font-heading text-xl mb-6 text-white tracking-wider">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-4 flex-wrap">

                            <Link
                                href="https://www.instagram.com/kaaveritmtbarsandstructural"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-red hover:border-accent-red transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/company/kaaveritmtbarsandstructural"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-red hover:border-accent-red transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </Link>

                            <Link
                                href="https://www.youtube.com/@KAAVERITMTBARSANDSTRUCTURAL"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-red hover:border-accent-red transition-all duration-300"
                            >
                                <Youtube size={18} />
                            </Link>

                            <Link
                                href="https://x.com/kaaveritmt"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-red hover:border-accent-red transition-all duration-300"
                            >
                                X
                            </Link>

                            <Link
                                href="https://wa.me/918855824555"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-red hover:border-accent-red transition-all duration-300"
                            >
                                <MessageCircle size={18} />
                            </Link>

                        </div>
                    </div>
                </div>

            </div>


            {/* Bottom */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">

                <p className="font-body text-white/50 text-xs tracking-widest uppercase font-bold">
                    © {new Date().getFullYear()} KAAVERI Steel. All Rights Reserved.
                </p>

                <div className="flex gap-6">

                    <Link
                        href="#"
                        className="font-body text-white/50 hover:text-accent-red text-xs tracking-widest uppercase transition-colors font-bold"
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        href="#"
                        className="font-body text-white/50 hover:text-accent-red text-xs tracking-widest uppercase transition-colors font-bold"
                    >
                        Terms of Service
                    </Link>

                </div>

            </div>

        </footer>
    );
}
