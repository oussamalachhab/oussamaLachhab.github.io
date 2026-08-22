import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext'; // ✅ import du contexte langue

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDark } = useTheme();
  const { language } = useLanguage(); // ✅ récupère la langue active

  async function handleSubmit(e) {
    e.preventDefault();
    const currentForm = e.currentTarget;
    const form = new FormData(currentForm);

    // Honeypot anti-spam : ce champ est invisible pour un humain (caché en CSS),
    // seuls les bots le remplissent. S'il est rempli, on abandonne silencieusement.
    if (form.get("_gotcha")) {
      currentForm.reset();
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xanbzjva", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) currentForm.reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={`min-h-screen flex items-center justify-center p-8 transition-all duration-500 ${
      isDark
        ? 'bg-[var(--asphalt)] text-white'
        : 'bg-[var(--paddock)] text-gray-900'
      }`}>
      <div className={`max-w-5xl w-full rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-[var(--panel-dark)]'
          : 'bg-white border border-gray-200'
        }`}>

        {/* LEFT FORM */}
        <div className={`flex-1 p-8 transition-all duration-300 ${
          isDark ? 'border-r border-gray-600' : 'border-r border-gray-200'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot anti-spam (invisible pour un humain) */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
            />
            {/* Title */}
            <h2 className={`font-display text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {language === "fr" ? "Envoyez-moi un message" : "Send Me a Message"}
            </h2>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block mb-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {language === "fr" ? "Nom" : "Name"}
                </label>
                <input
                  name="name"
                  placeholder={language === "fr" ? "Votre nom" : "Your name"}
                  required
                  className={`w-full border px-3 py-2 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--race-red)] ${
                    isDark
                      ? 'border-gray-600 bg-transparent text-white placeholder-gray-400'
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-[var(--race-red)]'
                  }`}
                />
              </div>
              <div>
                <label className={`block mb-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={language === "fr" ? "Votre email" : "Your email"}
                  required
                  className={`w-full border px-3 py-2 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--race-red)] ${
                    isDark
                      ? 'border-gray-600 bg-transparent text-white placeholder-gray-400'
                      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-[var(--race-red)]'
                  }`}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={`block mb-1 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {language === "fr" ? "Message" : "Message"}
              </label>
              <textarea
                name="message"
                placeholder={language === "fr" ? "Votre message" : "Your message"}
                required
                className={`w-full border px-3 py-2 rounded h-32 resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--race-red)] ${
                  isDark
                    ? 'border-gray-600 bg-transparent text-white placeholder-gray-400'
                    : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-[var(--race-red)]'
                }`}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-full text-white font-semibold transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--race-red)] focus:ring-offset-2 ${
                isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105'
              } ${
                isDark
                  ? 'bg-[var(--race-red)] shadow-[0_4px_20px_-4px_rgba(225,6,0,0.6)]'
                  : 'bg-[var(--race-red)] shadow-[0_4px_20px_-4px_rgba(225,6,0,0.4)]'
              }`}
            >
              {isSubmitting
                ? (language === "fr" ? "Envoi en cours..." : "Sending...")
                : (language === "fr" ? "Envoyer le message" : "Send Message")}
            </button>

            {/* Status messages */}
            {status === "sent" && (
              <p className="text-green-500 font-medium animate-pulse">
                {language === "fr"
                  ? "✅ Merci ! Je vous répondrai bientôt."
                  : "✅ Thanks! I'll get back to you."}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-medium animate-pulse">
                {language === "fr"
                  ? "❌ Une erreur s'est produite. Réessayez."
                  : "❌ Something went wrong. Try again."}
              </p>
            )}
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className={`font-display text-3xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-800'
          }`}>
            {language === "fr" ? "Restons Connectés" : "Let's Connect"}
          </h2>

          <p className={`mb-4 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <FaEnvelope className="inline text-[var(--race-red)] mr-2" />
            <b className={isDark ? 'text-gray-200' : 'text-gray-800'}>
              {language === "fr" ? "Email :" : "Email:"}
            </b> lachhab.oussama264@gmail.com
          </p>

          <p className={`mb-4 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <FaPhone className="inline text-[var(--race-red)] mr-2" />
            <b className={isDark ? 'text-gray-200' : 'text-gray-800'}>
              {language === "fr" ? "Téléphone :" : "Phone:"}
            </b> +212 6 84 00 12 92
          </p>

          <p className={`mb-6 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <FaMapMarkerAlt className="inline text-[var(--race-red)] mr-2" />
            <b className={isDark ? 'text-gray-200' : 'text-gray-800'}>
              {language === "fr" ? "Localisation :" : "Location:"}
            </b> Salé, Morocco
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/oussamalachhab"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--race-red)] ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-[var(--race-red)]'
                  : 'bg-[var(--graphite)] text-white hover:bg-[var(--race-red)]'
              }`}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/oussama-lachhab-966903266"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--race-red)] ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-[var(--race-red)]'
                  : 'bg-[var(--graphite)] text-white hover:bg-[var(--race-red)]'
              }`}
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:lachhab.oussama264@gmail.com"
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--race-red)] ${
                isDark
                  ? 'bg-white/10 text-white hover:bg-[var(--race-red)]'
                  : 'bg-[var(--graphite)] text-white hover:bg-[var(--race-red)]'
              }`}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
