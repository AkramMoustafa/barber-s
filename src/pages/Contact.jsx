import { useBooking } from '../context/BookingContext'

export default function Contact() {
  const { openBooking } = useBooking()

  return (
    <div className="pt-16 md:pt-20">

      <section className="py-20 px-4 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-3 font-sans">Find Us</p>
          <h1 className="text-4xl sm:text-5xl text-black tracking-tight mb-4">Contact</h1>
          <div className="w-10 h-px bg-black mx-auto mb-4" />
          <p className="text-stone-400 max-w-sm mx-auto text-sm leading-relaxed">
            Call us, stop in, or book online. We're here Tue–Sat, 10 AM to 6 PM.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-4">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase mb-6 font-sans">Get In Touch</p>

            <div className="border border-stone-200 p-6">
              <p className="text-stone-400 text-xs uppercase tracking-wider mb-2 font-sans">Phone</p>
              <a
                href="tel:+12315315120"
                className="text-black text-2xl hover:underline underline-offset-4 block mb-4 font-sans"
              >
                (231) 531-5120
              </a>
              <a
                href="tel:+12315315120"
                className="block w-full bg-black hover:bg-stone-800 text-white font-normal text-sm py-3 text-center tracking-wide uppercase transition-colors"
              >
                Tap to Call
              </a>
            </div>

            <div className="border border-stone-200 p-6">
              <p className="text-stone-400 text-xs uppercase tracking-wider mb-2 font-sans">Address</p>
              <p className="text-black text-lg mb-0.5 font-serif">3141 McCracken St</p>
              <p className="text-stone-400 text-sm mb-4 font-sans">Norton Shores, MI 49441</p>
              <a
                href="https://maps.google.com/?q=3141+McCracken+St,+Norton+Shores,+MI+49441"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-black hover:bg-black hover:text-white text-black font-normal text-sm py-3 text-center tracking-wide uppercase transition-colors"
              >
                Open in Maps
              </a>
            </div>

            <div className="border border-stone-200 p-6">
              <p className="text-stone-400 text-xs uppercase tracking-wider mb-4 font-sans">Hours</p>
              <div className="space-y-2 text-sm font-sans">
                {[
                  { day: 'Tuesday', hours: '10:00 AM – 6:00 PM', open: true },
                  { day: 'Wednesday', hours: '10:00 AM – 6:00 PM', open: true },
                  { day: 'Thursday', hours: '10:00 AM – 6:00 PM', open: true },
                  { day: 'Friday', hours: '10:00 AM – 6:00 PM', open: true },
                  { day: 'Saturday', hours: '10:00 AM – 6:00 PM', open: true },
                  { day: 'Sunday', hours: 'Closed', open: false },
                  { day: 'Monday', hours: 'Closed', open: false },
                ].map(({ day, hours, open }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className={open ? 'text-stone-600' : 'text-stone-300'}>{day}</span>
                    <span className={open ? 'text-black' : 'text-stone-300'}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-stone-400 text-xs tracking-[0.2em] uppercase font-sans">Location</p>
            <div className="border border-stone-200 overflow-hidden flex-1 min-h-[400px]">
              <iframe
                title="Barber's Den Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.0!2d-86.2683!3d43.1823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819a6e2e6e4f1ab%3A0x3c3e9e2e2e2e2e2e!2s3141+McCracken+St%2C+Norton+Shores%2C+MI+49441!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-white tracking-tight mb-4">Book Your Next Cut</h2>
          <p className="text-stone-400 mb-10 text-sm font-sans">
            Appointments available online. Walk-ins welcome during shop hours.
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
