export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate GDPR-Compliant Forms &amp; Privacy Policies{' '}
          <span className="text-[#58a6ff]">Instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Answer a few questions about your business and get ready-to-use contact forms, cookie banners, and privacy policies — fully compliant with EU law.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No legal expertise required.</p>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: '📋', title: 'Contact Forms', desc: 'GDPR-ready forms with consent checkboxes and data retention notices.' },
            { icon: '🍪', title: 'Cookie Banners', desc: 'Compliant cookie consent banners with granular opt-in controls.' },
            { icon: '📄', title: 'Privacy Policies', desc: 'Auto-generated policies tailored to your data processing activities.' }
          ].map((f) => (
            <div key={f.title}>
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#6e7681] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited form & policy generation',
              'Contact forms with GDPR consent',
              'Cookie banner code snippets',
              'Customizable privacy policy templates',
              'HTML, React & plain-text export',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Is the generated content legally binding?',
              a: 'Our templates are crafted to meet GDPR requirements, but we recommend having a lawyer review documents for your specific situation. We are a tool, not a law firm.'
            },
            {
              q: 'What formats can I export to?',
              a: 'You can export as plain HTML, React/JSX components, or plain text — ready to paste directly into your website or CMS.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period.'
            }
          ].map((item) => (
            <div key={item.q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GDPR Form Generator. Not legal advice.
      </footer>
    </main>
  )
}
