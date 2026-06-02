import { Link } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'

const services = [
  { name: 'Haircut', price: '$22', desc: 'Classic precision cut, styled to perfection.' },
  { name: 'Fade', price: '$28', desc: 'Skin or blended — clean lines every time.' },
  { name: 'Beard Trim', price: '$15', desc: 'Shape, define, and detail your beard.' },
  { name: 'Haircut + Beard', price: '$35', desc: 'The full treatment — cut and beard combo.' },
  { name: "Kids' Haircut", price: '$16', desc: 'For the little ones, 12 and under.' },
]

export default function Home() {
  const { openBooking } = useBooking()

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row pt-16 md:pt-20">
        <div className="flex-1 flex items-center justify-center bg-white px-8 py-16 md:py-0">
          <div className="max-w-md w-full">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-6 font-sans">
              Norton Shores, Michigan
            </p>
            <h1 className="text-6xl sm:text-7xl text-black leading-none tracking-tight mb-6">
              Barber's<br />Den
            </h1>
            <div className="w-12 h-px bg-black mb-6" />
            <p className="text-base text-stone-500 mb-10 leading-relaxed">
              Sharp cuts. Clean lines.<br />Old-school craft.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openBooking}
                className="bg-black hover:bg-stone-800 text-white font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-200"
              >
                Book an Appointment
              </button>
              <a
                href="tel:+12315315120"
                className="border border-black hover:bg-black hover:text-white text-black font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-200 text-center"
              >
                (231) 531-5120
              </a>
            </div>
          </div>
        </div>

<div className="flex-1 min-h-[50vh] md:min-h-0 overflow-hidden">
  <img
    src="/barber.png"
    alt="Barber's Den"
    className="w-full h-full object-cover"
  />
</div>
      </section>

      {/* Hours Banner */}
      <section className="bg-black text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 text-sm text-center font-sans">
          <span>Tue – Sat &nbsp;·&nbsp; 10:00 AM – 6:00 PM</span>
          <span className="hidden sm:block text-stone-600">|</span>
          <span className="text-stone-400">Sun – Mon: Closed</span>
          <span className="hidden sm:block text-stone-600">|</span>
          <a href="tel:+12315315120" className="underline underline-offset-2 hover:no-underline text-white">
            (231) 531-5120
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-3 font-sans">Menu</p>
            <h2 className="text-3xl sm:text-4xl text-black tracking-tight">Services & Pricing</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {services.map((s) => (
              <div key={s.name} className="bg-white p-8 hover:bg-stone-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-black text-lg">{s.name}</h3>
                  <span className="text-black text-lg font-sans">{s.price}</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
            <div className="bg-black p-8 flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-span-1">
              <p className="text-white mb-4 text-sm tracking-wide font-sans">Ready for a fresh cut?</p>
              <button
                onClick={openBooking}
                className="border border-white hover:bg-white hover:text-black text-white font-normal px-6 py-3 text-sm tracking-wide uppercase transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-black text-sm tracking-wide uppercase font-normal underline underline-offset-4 hover:no-underline">
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-4 font-sans">Our Story</p>
            <h2 className="text-3xl sm:text-4xl text-black tracking-tight mb-6 leading-tight">
              45 Years of Craft<br />at This Address
            </h2>
            <div className="w-10 h-px bg-black mb-6" />
            <p className="text-stone-500 leading-relaxed mb-4 text-sm">
              Barber's Den carries on a proud tradition — this address has been home to great barbering for over 45 years. We combine time-honored technique with a welcoming atmosphere where every man leaves looking his best.
            </p>
            <p className="text-stone-500 leading-relaxed mb-8 text-sm">
              Located on McCracken St in Norton Shores, we're your neighborhood spot for precision cuts, clean fades, and expert beard work.
            </p>
            <Link
              to="/about"
              className="inline-block border border-black text-black hover:bg-black hover:text-white font-normal px-6 py-3 text-sm tracking-wide uppercase transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '45+', label: 'Years of history at this location' },
              { num: 'Tue–Sat', label: '10 AM – 6 PM' },
              { num: '100%', label: 'Traditional craft' },
              { num: 'MI', label: 'Norton Shores' },
            ].map(({ num, label }) => (
              <div key={num} className="border border-stone-200 p-6 text-center">
                <div className="font-serif text-black text-2xl mb-1">{num}</div>
                <div className="text-stone-400 text-xs leading-relaxed font-sans">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-500 text-xs tracking-[0.2em] uppercase mb-4 font-sans">Get Started</p>
          <h2 className="text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Ready for Your Best Cut?
          </h2>
          <div className="w-10 h-px bg-stone-700 mx-auto mb-6" />
          <p className="text-stone-400 mb-10 max-w-md mx-auto text-sm">
            Book online or give us a call — we'd love to see you in the chair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="bg-white hover:bg-stone-100 text-black font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              Book Online
            </button>
            <a
              href="tel:+12315315120"
              className="border border-stone-700 hover:border-white text-white font-normal px-8 py-4 text-sm tracking-wide uppercase transition-colors"
            >
              (231) 531-5120
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
