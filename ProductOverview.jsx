import React, { useEffect, useRef, useState } from 'react';

const ProductOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Trigger fade-up animation when the section scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full flex flex-col lg:flex-row min-h-screen bg-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Left Column: Image Area (55%) */}
      <div className="w-full lg:w-[55%] bg-[#f8f9fa] flex items-center justify-center p-10 lg:p-20">
        <img
          src="/path-to-your-steel-product.jpg"
          alt="Premium Industrial Steel Product"
          className="w-full h-full max-h-[85vh] object-contain drop-shadow-2xl"
        />
      </div>

      {/* Right Column: Content Area (45%) */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 py-16 lg:px-20 xl:px-28">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-10 tracking-wide uppercase">
          Overview
        </h2>
        
        <div className="text-lg text-gray-600 font-light leading-relaxed space-y-8">
          <p>
            Experience the pinnacle of industrial engineering. Our premium steel products are manufactured with uncompromising precision, designed to meet the rigorous demands of modern infrastructure.
          </p>
          <p>
            Forged for maximum durability and finished with absolute clarity, every piece represents a commitment to structural integrity. No shortcuts. No compromises.
          </p>
        </div>

        <div className="mt-14">
          <button className="inline-flex items-center justify-center bg-black text-white px-12 py-5 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            View Specifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;