import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

const values = [
  {
    icon: '✂',
    title: 'Traditional Craft',
    desc: 'Precise cuts, clean fades, and expert beard work done right every time.',
  },
  {
    icon: '◆',
    title: 'Community Roots',
    desc: "This address has been a barbershop for over 45 years. We're proud to carry that legacy forward.",
  },
  {
    icon: '◇',
    title: 'Personal Service',
    desc: 'Every client gets our full attention. No rush, no shortcuts — just great work.',
  },
]

export default function About() {
  const { openBooking } = useBooking()

  return (
    <div className="pt-16 md:pt-20">

      <section className="py-20 px-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-3 font-sans">Our Story</p>
          <h1 className="text-4xl sm:text-5xl text-black tracking-tight mb-4">
            About Barber's Den
          </h1>
          <div className="w-10 h-px bg-black mx-auto mb-4" />
          <p className="text-stone-400 max-w-sm mx-auto text-sm leading-relaxed">
            A neighborhood institution carrying on 45+ years of barbershop history in Norton Shores.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl text-black tracking-tight mb-6 leading-tight">
              45+ Years of History<br />at This Address
            </h2>
            <div className="w-10 h-px bg-black mb-8" />
            <div className="space-y-4 text-stone-500 leading-relaxed text-sm">
              <p>
                The barbershop at 3141 McCracken St has been serving the men of Norton Shores and the surrounding Muskegon area for over 45 years. Barber's Den, LLC continues that proud tradition — keeping the spirit of the classic American barbershop alive in the heart of the community.
              </p>
              <p>
                We offer the full range of men's grooming services: precision haircuts, skin and blended fades, beard trims, and combination services — all delivered in a relaxed, no-fuss atmosphere where you can kick back and feel at home.
              </p>
              <p>
                Whether you've been coming to this address for decades or you're stopping in for the first time, you'll get the same honest, skilled service that has kept this chair busy since the beginning.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-stone-200">
            {[
              { num: '45+', label: 'Years of history at this location' },
              { num: 'Tue–Sat', label: 'Open 5 days a week' },
              { num: '100%', label: 'Traditional barbershop experience' },
              { num: 'MI', label: 'Proudly serving Norton Shores' },
            ].map(({ num, label }) => (
              <div key={num} className="bg-white p-8 text-center">
                <div className="font-serif text-black text-3xl mb-2">{num}</div>
                <div className="text-stone-400 text-xs leading-relaxed font-sans">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-3 font-sans">What We Stand For</p>
            <h2 className="text-3xl text-black tracking-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <div className="text-2xl mb-4 text-black">{v.icon}</div>
                <h3 className="text-black text-base mb-3">{v.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-white tracking-tight mb-4">Come See Us</h2>
          <p className="text-stone-400 mb-10 text-sm font-sans">
            3141 McCracken St, Norton Shores, MI — Tuesday through Saturday, 10 AM to 6 PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="bg-white hover:bg-stone-100 text-black font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              Book Now
            </button>
            <Link
              to="/contact"
              className="border border-stone-700 hover:border-white text-white font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
