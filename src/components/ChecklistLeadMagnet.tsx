export default function ChecklistWarmPremiumFinal() {
  // YAHAN APNA NUMBER DAALO - 91 ke saath, bina + ke
  // Example: "919643903008"
  const WHATSAPP_NUMBER = "919643903008";

  const message = `Hi 👋 I want the FREE ₹29,999 Revenue Lock Audit Sheet

My Salon Name: 
My City: `;

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative overflow-hidden bg-[#FFFBF7] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-1 bg-gradient-to-br from-[#D4AF37] via-white to-[#FF2E93]/40 shadow-[0_25px_60px_rgba(212,175,55,0.12),0_10px_25px_rgba(0,0,0,0.02)]">
          <div className="bg-white relative" style={{ borderRadius: '20px' }}>
            {/* Image */}
            <img
              src="/assets/images/lead-magnet.jpg"
              alt="Private Audit Sheet - 12 Revenue Leaks"
              className="w-full h-auto object-cover"
              style={{ borderRadius: '20px' }}
            />

            {/* Invisible Clickable Button Overlay - bilkul button ke upar */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Me The Audit Sheet on WhatsApp"
              className="absolute bottom-[12%] left-[6%] w-[52%] h-[14%] sm:w-[46%] sm:h-[12%] cursor-pointer"
              title="Send on WhatsApp"
            >
              <span className="sr-only">Send Me The Audit Sheet</span>
            </a>

            {/* Mobile ke liye poori image clickable bhi kar di hai backup ke liye */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}