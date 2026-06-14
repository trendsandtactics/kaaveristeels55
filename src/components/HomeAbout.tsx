<section className="relative overflow-hidden bg-[#f7f7f7]">
  {/* Background Texture */}
  <div className="absolute inset-0">
    <Image
      src="/image/aboutbackground.png"
      alt=""
      fill
      className="object-cover opacity-10"
    />
  </div>

  <div className="relative z-10">
    <div className="grid lg:grid-cols-[48vw_52vw] min-h-screen">
      
      {/* LEFT PANEL */}
      <div
        className="relative h-screen overflow-hidden"
        style={{
          clipPath:
            "polygon(0 0, 82% 0, 100% 50%, 82% 100%, 0 100%)",
        }}
      >
        {!playVideo ? (
          <>
            <Image
              src={thumbnailUrl}
              alt="Kaaveri"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            {/* Tagline */}
            <div className="absolute top-16 left-12 z-20">
              <div className="w-14 h-[3px] bg-red-600 mb-5" />

              <h4 className="text-white uppercase tracking-[4px] text-sm font-semibold leading-7">
                MAKING INDIA
                <br />
                STRONGER
              </h4>
            </div>

            {/* Play Button */}
            <button
              onClick={() => setPlayVideo(true)}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="w-32 h-32 border-4 border-white rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                  <Play
                    fill="white"
                    size={30}
                    className="text-white ml-1"
                  />
                </div>
              </div>
            </button>

            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white uppercase tracking-[4px] text-sm font-semibold">
              WATCH OUR STORY
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className="relative bg-white flex items-center">
        <div className="absolute inset-0 opacity-[0.03]">
          <Image
            src="/image/aboutbackground.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 px-12 lg:px-24 max-w-[850px]">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-[2px] bg-red-600" />

            <span className="uppercase tracking-[4px] text-red-600 font-bold text-sm">
              ABOUT KAAVERI
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[72px] leading-[0.95] font-black text-slate-900">
            Strength That
            <span className="block text-red-600">
              Shapes The Future
            </span>
          </h2>

          <div className="w-28 h-[3px] bg-gray-200 mt-8 mb-10 relative">
            <div className="absolute left-0 top-0 w-10 h-[3px] bg-red-600" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              At KAAVERI, we are passionate about steel and dedicated
              to excellence. As a leading manufacturer of TMT bars and
              structural steel products, we are committed to providing
              the construction industry with the highest quality
              materials.
            </p>

            <p>
              Our state-of-the-art manufacturing processes and
              rigorous quality control ensure every product meets the
              highest global standards, empowering builders to create
              structures that stand the test of time.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <Factory className="text-red-600 mb-3" />

              <h4 className="font-bold text-lg">
                Premium TMT Bars
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                High strength & durability
              </p>
            </div>

            <div>
              <ShieldCheck className="text-red-600 mb-3" />

              <h4 className="font-bold text-lg">
                ISI Certified
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                Tested & Trusted
              </p>
            </div>

            <div>
              <HardHat className="text-red-600 mb-3" />

              <h4 className="font-bold text-lg">
                Trusted Builders
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                Nationwide partnerships
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-5 mt-14">
            <Link href="/about-us">
              <button className="h-16 px-10 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl font-bold flex items-center gap-3 shadow-lg">
                <Play size={18} />
                Watch Our Journey
                <ArrowRight size={18} />
              </button>
            </Link>

            <button className="h-16 px-10 border border-gray-300 rounded-xl font-semibold flex items-center gap-3">
              <Download size={18} />
              Download Brochure
            </button>
          </div>
        </div>

        {/* FLOATING STATS CARD */}
        <div className="hidden xl:block absolute left-[-380px] bottom-16 z-30">
          <div className="bg-white rounded-[32px] shadow-2xl p-10 w-[780px]">
            <div className="grid grid-cols-3">
              <div className="text-center">
                <Award
                  size={34}
                  className="mx-auto text-red-600 mb-4"
                />

                <h3 className="text-5xl font-black text-red-600">
                  25+
                </h3>

                <p className="font-semibold mt-3">
                  Years Experience
                </p>
              </div>

              <div className="text-center border-x">
                <Building2
                  size={34}
                  className="mx-auto text-red-600 mb-4"
                />

                <h3 className="text-5xl font-black text-red-600">
                  5000+
                </h3>

                <p className="font-semibold mt-3">
                  Projects Served
                </p>
              </div>

              <div className="text-center">
                <BadgeCheck
                  size={34}
                  className="mx-auto text-red-600 mb-4"
                />

                <h3 className="text-5xl font-black text-red-600">
                  100%
                </h3>

                <p className="font-semibold mt-3">
                  Quality Tested
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
