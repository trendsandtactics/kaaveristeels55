return (
  <div 
    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-[2px] flex items-center justify-center p-2 sm:p-6 overflow-hidden"
    onClick={(e) => {
      if (e.target === e.currentTarget) setOpen(false);
    }}
  >
    <div className="relative w-full h-full max-w-5xl flex items-center justify-center">

      {/* Close Button ON IMAGE */}
      <button
        onClick={() => setOpen(false)}
        aria-label="Close popup"
        className="
          absolute
          top-2
          right-2
          sm:top-3
          sm:right-3
          z-[120]
          h-9
          w-9
          rounded-full
          bg-black/60
          hover:bg-black/80
          text-white
          flex
          items-center
          justify-center
          text-lg
          shadow-lg
          transition-all
        "
      >
        ✕
      </button>

      {isPdf ? (
        <iframe
          src={imageSrc}
          title="Certificate"
          className="w-full h-full max-h-[90vh] rounded-xl bg-white shadow-2xl"
        />
      ) : (
        <img
          src={imageSrc}
          alt={popup.title || "Popup"}
          className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      )}
    </div>
  </div>
);
