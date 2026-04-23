"use client";

import { text } from "framer-motion/m";

export default function BlogSection() {
  const posts = [
    {
      date: "APR 12, 2026",
      title: "The Future of Decentralized Finance",
      text: "We accept access as a startup to venture capital is hard it tales and cost money that a startup",
      category: "CRYPTO",
      image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67a1bc64704782001d711270.jpg",
    },
    {
      date: "APR 08, 2026",
      title: "Understanding Smart Contract Security",
      text: "We accept access as a startup to venture capital is hard it tales and cost money that a startup",
      category: "SECURITY",
      image: "https://www.antiersolutions.com/blogs/wp-content/uploads/2025/11/Top-10-Largest-Blockchain-Development-Companies-in-2026.jpg",
    },
    {
      date: "MAR 28, 2026",
      title: "Top 5 Blockchain Trends for 2026",
      text: "We accept access as a startup to venture capital is hard it tales and cost money that a startup",
      category: "TRENDS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPO8N3Z9qEufY5dVaZE6InCAUwWC2_7Y39pA&s",
    },
  ];

  return (
    <section id="blog" className="relative w-full px-6 py-24 bg-[#12121e]">

      {/* Faded gradient background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 20%, rgba(232, 84, 30, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(232, 84, 30, 0.05) 0%, transparent 60%)',
      }} />

      <div className="max-w-6xl mx-auto px-6 mt-4" style={{ paddingTop: 40, paddingBottom: 50}}>
        <div style={{ textAlign: 'center', paddingBottom: 30}} >
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase" style={{fontSize: '1.2rem'}}>what media says</h3>
        </div>
          

        {/* MOBILE: Horizontal Scroll (flex-nowrap + overflow-x-auto)
          DESKTOP: 3-Column Grid (md:grid-cols-3)
        */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory" style={{ padding: 20,}}>
          {posts.map((post, idx) => (
            <div 
              key={idx}
              className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-[#1a1a26]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-[#e8541e] text-white text-[10px] font-bold px-2 py-1 rounded" style={{padding: 4}}>
                  {post.category}
                </div>
              </div>
              
              <div className="text-[#e8541e]/60 text-[10px] font-bold tracking-widest mb-2" style={{ paddingTop: 5, paddingBottom: 5}}>
                {post.date}
              </div>

              <h4 className="text-xl font-bold text-white group-hover:text-[#e8541e] transition-colors leading-snug">
                {post.title}
              </h4>

              <p style={{ color: 'var(--text-muted)', fontSize: 13, paddingTop: 10, paddingBottom: 10 }} className=" mb-16">
                {post.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}