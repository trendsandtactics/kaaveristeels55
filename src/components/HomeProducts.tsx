"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "TMT Bars",
    image: "/tmtbar1.png",
    description:
      "High-strength ribbed TMT bars built for maximum durability, flexibility, and earthquake resistance.",
    href: "/products?category=TMT", // ✅ updated
  },
  {
    name: "Structural Steels",
    image: "/structuralbar 1.png",
    description:
      "Premium structural steel beams crafted for heavy-duty load bearing.",
    href: "/products?category=Structural", // ✅ updated
  },
];

export default function HomeProducts() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Link href={product.href} key={product.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group relative bg-white border shadow-xl overflow-hidden rounded-sm"
              >
                <div className="relative w-full h-[320px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold">{product.name}</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
