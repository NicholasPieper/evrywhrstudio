// EVRYWHR — Legal pages: Privacy Policy + Terms. Plain, honest, studio-voiced.
// NOTE FOR THE STUDIO: review the bracketed items before going live —
// [LEGAL NAME], [JURISDICTION], and whether the Shop charges real money.

const LEGAL = {
  privacy: {
    kicker: "The fine print",
    title: "Privacy",
    lead: "Short version: we only collect what you hand us, we don't sell it, and we use it to write you back. Here's the longer version.",
    updated: "Last updated June 2026",
    sections: [
      { h: "Who we are",
        b: ["EVRYWHR Studio (\u201cwe,\u201d \u201cus\u201d) operates this site. Questions about your data? Reach us through the contact form on our Work With Us page and a real person will answer."] },
      { h: "What we collect",
        b: ["When you use the contact form, we collect the name, email address, the type of work you're after, and whatever you write in the message field. That's it \u2014 we don't ask for anything we don't need.",
            "We don't run advertising trackers or sell data. Standard server logs (IP address, browser type) may be recorded by our host for security and uptime, as is normal for any website."] },
      { h: "How we use it",
        b: ["We use what you send to reply to your enquiry, scope a possible project, and keep a record of the conversation. We don't add you to a mailing list unless you ask."] },
      { h: "Affiliate links",
        b: ["Some pages — mostly Dispatches — contain affiliate links. If you click one and buy something, we may earn a small commission at no extra cost to you. Those purchases happen on the retailer's own site, under their privacy policy; we don't see your payment details. We disclose affiliate links wherever they appear."] },
      { h: "Who processes it",
        b: ["The contact form is delivered through Web3Forms, a third-party form service that passes your submission to our inbox. Email itself is handled by our email provider. Video and short-form embeds (YouTube, TikTok, Instagram) are served by those platforms and may set their own cookies when you press play \u2014 their privacy policies govern that.",
            "We don't share your information with anyone else except where required by law."] },
      { h: "Cookies",
        b: ["The site itself doesn't set marketing cookies. Embedded players from YouTube, TikTok and Instagram can set third-party cookies once you interact with them. You can block these in your browser settings without breaking the rest of the site."] },
      { h: "How long we keep it",
        b: ["We hold enquiry emails for as long as the conversation is useful, then delete them. Ask us to erase your data at any time and we will."] },
      { h: "Your rights",
        b: ["Depending on where you live (for example under GDPR in the EU/UK or the CCPA in California), you can ask to see, correct, or delete the personal data we hold about you, and object to how we use it. Reach us through the contact form on our Work With Us page and we'll sort it out."] },
      { h: "Children",
        b: ["This site isn't directed at children under 16 and we don't knowingly collect their data."] },
      { h: "Changes",
        b: ["If we change this policy we'll update the date at the top. Material changes will be noted clearly."] },
    ],
  },
  terms: {
    kicker: "The fine print",
    title: "Terms",
    lead: "The ground rules for using this site and working with us. Plain language, no traps.",
    updated: "Last updated June 2026",
    sections: [
      { h: "Using this site",
        b: ["You're welcome to browse, read, and share links to anything here. By using the site you agree to these terms. If you don't agree, please don't use it."] },
      { h: "Our work is ours",
        b: ["All films, photographs, writing, designs, and the EVRYWHR name and wordmark on this site are owned by EVRYWHR Studio or our collaborators, and are protected by copyright. You may not reuse, reproduce, or sell them without written permission. Want to license something? Get in touch through the contact form on our Work With Us page."] },
      { h: "Enquiries & quotes",
        b: ["Submitting the contact form starts a conversation \u2014 it isn't a contract and doesn't oblige either of us to anything. Any project we take on is governed by a separate written agreement covering scope, fees, timelines, and rights."] },
      { h: "Shop & purchases",
        b: ["Our Shop is hosted by Fourthwall — clicking through to buy takes you to their storefront, where their terms, payment, shipping, and return policies apply. We don't process payments or store card details ourselves. Products shown here are subject to availability and the prices listed on Fourthwall.",
            "Some Shop or Dispatches links may be affiliate links; see the Affiliate links note in our Privacy Policy."] },
      { h: "Third-party links & embeds",
        b: ["The site links to and embeds content from platforms like YouTube, TikTok, Instagram and Spotify. We don't control those services and aren't responsible for their content, policies, or availability."] },
      { h: "No warranty",
        b: ["The site is provided \u201cas is.\u201d We work hard to keep it accurate and online, but we don't guarantee it'll always be available or error-free, and we're not liable for losses arising from its use, to the fullest extent the law allows."] },
      { h: "Governing law",
        b: ["These terms are governed by the laws of the United States and the state in which EVRYWHR Studio operates. Any disputes will be handled by the courts there."] },
      { h: "Contact",
        b: ["Questions about these terms? Reach us through the contact form on our Work With Us page."] },
    ],
  },
  accessibility: {
    kicker: "The fine print",
    title: "Accessibility",
    lead: "We want everyone to be able to read, watch, and move through this site. Here's where we stand and how to reach us if something gets in your way.",
    updated: "Last updated June 2026",
    sections: [
      { h: "Our commitment",
        b: ["We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as a baseline, and we treat accessibility as ongoing work rather than a box to tick."] },
      { h: "What we've done",
        b: ["The site uses semantic headings and landmarks, text alternatives for images, labelled form fields, and colour combinations chosen to meet AA contrast for body text. Every interactive control \u2014 menus, buttons, filters, the contact form \u2014 can be operated by keyboard, with a visible focus indicator. Animations and motion respect your operating system's \u201creduce motion\u201d setting."] },
      { h: "Known limits",
        b: ["A few areas are still in progress: embedded video and short-form players (YouTube, TikTok, Instagram) follow those platforms' own accessibility, which we don't control, and some interactive flourishes like the Lore map are enhancements layered on top of the core content. We're working toward full screen-reader testing as more content goes live."] },
      { h: "Tell us what's broken",
        b: ["If any part of this site is hard to use with a keyboard, screen reader, magnifier, or otherwise, please tell us through the contact form on our Work With Us page. Describe the page and what happened, and we'll fix it as a priority and follow up with you."] },
    ],
  },
};

function LegalView({ theme, doc, go }) {
  const d = LEGAL[doc] || LEGAL.privacy;
  return (
    <div>
      <PageHead kicker={d.kicker} title={d.title} lead={d.lead} theme={theme} />
      <div style={{ padding: "clamp(28px,4vw,52px) var(--pad) clamp(60px,8vw,110px)", maxWidth: 760 }}>
        <p style={{ fontFamily: theme.fontMono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
          color: theme.muted, margin: "0 0 clamp(28px,4vw,44px)" }}>{d.updated}</p>
        {d.sections.map((s, i) => (
          <section key={i} style={{ marginBottom: "clamp(26px,3vw,40px)" }}>
            <h2 style={{ fontFamily: theme.fontDisplay, fontWeight: 400, fontSize: "clamp(22px,2.6vw,30px)",
              lineHeight: 1.1, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{s.h}</h2>
            {s.b.map((p, j) => (
              <p key={j} style={{ fontFamily: theme.fontBody, fontSize: "clamp(15px,1.25vw,17px)", lineHeight: 1.62,
                color: theme.ink, margin: j === 0 ? 0 : "12px 0 0", textWrap: "pretty" }}>{p}</p>
            ))}
          </section>
        ))}
        <div style={{ marginTop: "clamp(32px,4vw,52px)", paddingTop: 24, borderTop: `1px solid ${theme.line}`,
          display: "flex", gap: 22, flexWrap: "wrap" }}>
          <button onClick={() => go(doc === "privacy" ? "terms" : "privacy")} className="navlink"
            style={{ fontFamily: theme.fontMono, fontSize: 11.5, letterSpacing: "0.12em", textTransform: "uppercase",
              color: theme.accent2, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}>
            {doc === "privacy" ? "Read the Terms →" : "Read the Privacy Policy →"}</button>
          <button onClick={() => go("home")} className="navlink"
            style={{ fontFamily: theme.fontMono, fontSize: 11.5, letterSpacing: "0.12em", textTransform: "uppercase",
              color: theme.muted, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}>
            ← Back home</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LegalView, LEGAL });
