import { style, svg } from "framer-motion/client"

export default function Features() {
  return (
    <>
      
      <section className="bg-[#12121e] max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-4" style={{ paddingTop: 10}}>
        <div className="flex-1 flex justify-center">
          <svg width="480" height="380" viewBox="0 0 280 260" fill="none">
            <rect x="80" y="80" width="80" height="80" rx="4"
              fill="#1a1a1a" stroke="#e8541e" strokeWidth="1.5"
              transform="rotate(15 120 120)"/>
            <rect x="60" y="60" width="80" height="80" rx="4"
              fill="#141414" stroke="#e8541e" strokeWidth="1"
              transform="rotate(-10 100 100)"/>
            {[50,90,130,170].map((y,i) => (
              <circle key={i} cx={50 + i*55} cy={y} r={10}
                fill="#1a1a1a" stroke="#e8541e" strokeWidth="1.5"/>
            ))}
          </svg>
        </div>

        <div className="flex-1 justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '0.05em', padding: '16px '}}>
            Faster and Digital<br />Transformation
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: 14,padding: '16px' }}>
            Our technology is revolutionizing the financial services industry by <br /> empowering
            millions across the globe to authenticate and transact <br /> immediately and without
            costly intermediaries.
          </p>
        </div>
      </section>
    </>
  )
}