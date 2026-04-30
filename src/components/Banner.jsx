import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="hero w-full h-[70vh] lg:h-[92vh] bg-cover bg-center "
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/LDJYCfMB/Chat-GPT-Image-Apr-30-2026-11-54-49-AM.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-[hsl(0,0%,98%)] animate__animated animate__fadeInDown">
            Your Trusted <br />
          </h1>
          <h1 className="mb-5 text-5xl font-bold text-[#00521b] animate__animated animate__fadeInDown">
            Qurbani Partner
          </h1>
          <p className="mb-5 text-[#fff9f9] animate__animated animate__fadeInUp">
            Explore a wide range of healthy and premium livestock for your
            Qurbani. Book with trust, sacrifice with peace.
          </p>
          <Link href="/animals">
            <button className="btn btn-primary animate__animated animate__pulse animate__infinite ">
              Browse Animals
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
