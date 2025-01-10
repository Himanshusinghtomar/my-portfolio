import Image from "next/image";

const Hero = () => (
  <section className="text-center py-12">
    <Image
      src="/profile.png"
      alt="Himanshu"
      width={128}
      height={128}
      className="rounded-full mx-auto"
    />
    <h1 className="text-4xl font-bold mt-4">Hi, I am Himanshu, Full Stack Developer</h1>
    <p className="mt-2 text-gray-600">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </p>
    <a
      href="/resume.pdf"
      download
      className="mt-6 inline-block bg-red-500 text-white px-6 py-2 rounded"
    >
      Download Resume
    </a>
  </section>
);

export default Hero;
