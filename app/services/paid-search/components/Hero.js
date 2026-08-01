import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-display font-extrabold leading-[1.05]">
            <span className="text-white">76% OF AD SPEND</span>
            <br />
            <span className="text-sun">GOES TO WASTE</span>
          </h1>

          <p className="text-white/70 text-lg mt-8 leading-relaxed max-w-xl">
            The <span className="text-sun font-semibold">PPC Agency</span> that puts
            more dollars in your pocket. After auditing hundreds of ad accounts, we
            know how to help you outsmart, not outspend, your competition. And whether
            you work with us or not,{" "}
            <span className="text-sun font-semibold">we'll help you fix it</span>.
          </p>

          <Link href="/contact" className="btn-orange inline-flex mt-10">
            Get Your Free Audit
          </Link>
        </div>

        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/services/hero.png"
              alt="JASONEX team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
