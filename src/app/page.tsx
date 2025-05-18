import Image from "next/image";
import React from "react";
import nextImg from "../lib/img.png";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl">Hello From Home</h1>
      <Image src={nextImg} height={500} width={500} alt="next image"></Image>
      <Image
        src="https://nextjs.org/api/docs-og?title=Components%20%3CImage%3E"
        height={500}
        width={500}
        alt="next image"
      ></Image>
    </div>
  );
};

export default HomePage;
