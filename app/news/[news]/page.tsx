"use client"
import Image from "next/image";
import { architectureNews } from "@/data/data";
import { motion } from "framer-motion";

export default function Page({ params }: { params: { news: string } }) {
  let news = architectureNews.filter((a) => a.slug === `/news/${params.news}`);
  console.log(news);
  return (
    <main className="container my-[150px]">
      <div className="overflow-hidden pb-2 container">
        <motion.div
          className="h1 text-left text-mulish text-main font-bold"
          initial={{ opacity: 0, translateY: "100%" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          Strategy-led <br />
          <span className="text-primary">design</span> in every detail
        </motion.div>
      </div>
      <motion.img
        className="w-[1800px] h-[900px] mt-[100px] mx-[60px] object-cover"
        src={"/aboutTeam1.jpg"}
        alt="team"
        width={1800}
        height={769}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.08, 0.89, 0.92, 1.02], duration: 1 }}
      />

      <div className="overflow-hidden pb-2 container">
        <motion.div
          className="h2 text-left font-bold text-mulish text-main"
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
        >
          A few words <span className="text-primary">About us</span>
        </motion.div>
      </div>
      <section>
        <p>{news[0].fullArticle1}</p>
      </section>
    </main>
  );
}
