import { createFileRoute } from "@tanstack/react-router";
import { InletLogo } from "@/components/InletLogo";
import heroAsset from "@/assets/hero-sail.jpg.asset.json";
const heroImg = heroAsset.url;
import waterfallImg from "@/assets/exp-waterfall.jpg";
import sunsetImg from "@/assets/exp-sunset.jpg";
import celebrateImg from "@/assets/exp-celebrate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inlet Sail Co. — BC Coast sailing trips aboard Serenity" },
      {
        name: "description",
        content:
          "Captain-led half-day, sunset and full-day sails on Indian Arm and the BC coast. Up to 6 guests aboard Serenity, a Hunter 33. Your coast. Your trip. No script.",
      },
      { property: "og:title", content: "Inlet Sail Co. — Your coast. Your trip. No script." },
      {
        property: "og:description",
        content: "Real sailing on the BC coast. Captain-led trips for curious, everyday adventurers.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-navy">
      <Nav />
      <Hero />
      <About />
      <Experiences />
      <Boat />
      <Testimonial />
      <Booking />
      <Footer />
    </div>
  );
}

/* ─────────── NAV ─────────── */
function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-offwhite">
          <InletLogo size={34} />
          <span className="font-serif italic text-2xl leading-none">Inlet Sail Co.</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-offwhite/85 text-[13px] tracking-wide">
          <a href="#about" className="hover:text-seafoam transition-colors">About</a>
          <a href="#experiences" className="hover:text-seafoam transition-colors">Trips</a>
          <a href="#boat" className="hover:text-seafoam transition-colors">The Boat</a>
          <a href="#booking" className="hover:text-seafoam transition-colors">Book</a>
        </nav>
        <a
          href="#booking"
          className="hidden md:inline-flex label-mono text-seafoam border border-seafoam/40 rounded-full px-4 py-2 hover:bg-seafoam/10 transition-colors"
        >
          Reserve
        </a>
      </div>
    </header>
  );
}

/* ─────────── HERO ─────────── */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
      <img
        src={heroImg}
        alt="A Hunter 33 sailboat on the calm BC coast at golden hour"
        width={1600}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/30 to-navy/95" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(42,104,120,0.32) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-10 pt-44 md:pt-52 pb-24 md:pb-32">
        <p className="label-mono text-seafoam mb-5">Est. 2025 · Reed Point Marina</p>
        <h1 className="font-serif text-offwhite text-[56px] sm:text-[78px] md:text-[104px] leading-[0.95] tracking-tight max-w-4xl">
          <em className="text-seafoam not-italic font-light italic">Inlet</em> Sail Co.
        </h1>
        <div className="mt-7 h-px w-16 bg-teal" />
        <p className="mt-7 max-w-xl text-mist text-[16px] md:text-[17px] font-light leading-relaxed">
          Captain-led sailing trips on Indian Arm and the BC coast. Aboard Serenity — a Hunter 33,
          up to six guests, fifteen years of these waters.
        </p>
        <p className="mt-8 font-serif italic text-aqua text-2xl md:text-3xl max-w-xl">
          Skip the resort. Feel something real.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-seafoam px-7 py-3.5 text-navy text-sm font-medium tracking-wide hover:bg-aqua transition-colors"
          >
            Plan your sail
          </a>
          <a
            href="#experiences"
            className="inline-flex items-center gap-3 text-offwhite/80 text-sm hover:text-seafoam transition-colors"
          >
            <span className="label-mono">See the trips</span>
            <span aria-hidden>↓</span>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10 max-w-3xl">
          {[
            ["Hunter 33", "Sailing yacht"],
            ["Up to 6", "Guests aboard"],
            ["15 years", "On these waters"],
            ["Reed Point", "Marina · BC"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-serif text-offwhite text-2xl">{v}</div>
              <div className="label-mono text-seafoam/70 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── ABOUT ─────────── */
function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-[1140px] px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="label-mono text-teal mb-3">01 — Foundation</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">
            Real sailing, <em className="text-teal">honestly priced.</em>
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-[15.5px] leading-[1.85] text-[color:var(--text-light)]">
          <p>
            Most people take the same vacation, year after year — a resort they've seen on someone's
            feed, a patio they've sat on before, a hotel that could be in any city. They spend money
            to feel comfortable and come home feeling vaguely underwhelmed.
          </p>
          <p>
            Inlet Sail Co. exists for the person who wants to feel something real. Who wants a story
            to tell. Who's never been on a sailboat — or maybe has, and wants to do it again without
            the white-glove formality of a luxury charter. Just water, wind, a captain with fifteen
            years on these waters, and the BC coast doing what it does best.
          </p>
          <div className="border-l-[3px] border-teal pl-5 mt-8 bg-offwhite rounded-r-md py-5 pr-6">
            <p className="label-mono text-rust mb-2">The promise</p>
            <p className="font-serif italic text-navy text-xl leading-snug">
              You'll leave with the feeling that you did something real today. Not performative.
              Not curated for a feed. You felt the wind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── EXPERIENCES ─────────── */
const trips = [
  {
    img: waterfallImg,
    eyebrow: "Standard · 2 or 4 hours",
    name: "Indian Arm Voyage",
    price: "$300 flat",
    desc: "A fixed-price sail on Indian Arm. The 2-hour voyage runs to Cozy Cove; the 4-hour pushes to the head of the Arm, where — depending on the season — the waterfall comes into view. Up to 6 guests.",
  },
  {
    img: sunsetImg,
    eyebrow: "Multi-day · Custom",
    name: "Multi-Day Charter",
    price: "by quote",
    desc: "Longer voyages tailored to your group — overnight anchorages, route, provisioning, and pace shaped around what you're after. Pricing is discussed, since every trip is different. Up to 6 guests.",
  },
  {
    img: celebrateImg,
    eyebrow: "Occasions · On board",
    name: "Occasions Aboard",
    price: "by request",
    desc: "Mark the moment on the water — birthdays, proposals, business meetings, solo journeys, and anything in between. The yacht becomes the venue; we'll shape the day around your occasion.",
  },
];

function Experiences() {
  return (
    <section id="experiences" className="bg-background">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="label-mono text-teal mb-3">02 — Experiences</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy max-w-xl">
              A handful of trips, <em className="text-teal">done properly.</em>
            </h2>
          </div>
          <p className="text-[color:var(--text-light)] max-w-sm text-[15px]">
            Every sail is captain-led aboard Serenity, our Hunter 33. Up to six guests. Departures
            from Reed Point Marina in Port Moody.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trips.map((t) => (
            <article
              key={t.name}
              className="group bg-offwhite rounded-[14px] overflow-hidden border border-teal/10 shadow-[0_20px_60px_rgba(13,27,38,0.08)] hover:shadow-[0_28px_80px_rgba(13,27,38,0.16)] transition-shadow"
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-transparent to-navy/70" />
                <span className="absolute top-4 left-4 label-mono text-offwhite/80">{t.eyebrow}</span>
                <span className="absolute bottom-4 left-4 inline-block bg-teal text-offwhite label-mono px-3 py-1.5 rounded-full text-[9px]">
                  {t.price}
                </span>
              </div>
              <div className="p-7 relative">
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal via-seafoam to-transparent" />
                <h3 className="font-serif text-[28px] text-navy">{t.name}</h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[color:var(--text-light)]">{t.desc}</p>
                <a
                  href="#booking"
                  className="mt-6 inline-flex items-center gap-2 label-mono text-teal hover:text-rust transition-colors"
                >
                  Reserve <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── BOAT ─────────── */
function Boat() {
  const specs = [
    ["Vessel", "Hunter 33"],
    ["Length", "33 ft"],
    ["Beam", "11 ft 4 in"],
    ["Guests", "Up to 6"],
    ["Galley", "Yes — full"],
    ["Berth", "Reed Point"],
  ];
  return (
    <section id="boat" className="bg-navy text-offwhite relative overflow-hidden">
      <div
        className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(42,104,120,0.35) 0%, transparent 65%)" }}
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(94,173,176,0.12) 0%, transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1140px] px-6 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-14 items-start">
        <div className="md:col-span-5">
          <p className="label-mono text-seafoam mb-4">03 — The Boat</p>
          <h2 className="font-serif text-4xl md:text-5xl text-offwhite">
            <em className="text-seafoam">Serenity</em>
            <br />a Hunter 33.
          </h2>
          <p className="mt-6 text-mist text-[15.5px] leading-[1.85] max-w-md">
            Beautiful, functional, and real. Not a superyacht — and we don't pretend otherwise.
            What you get is something rarer: an actual sailboat, an actual captain, and the water
            doing the rest.
          </p>
          <div className="mt-10 h-px w-16 bg-teal" />
          <p className="mt-8 font-serif italic text-aqua text-2xl">
            {"\n"}
          </p>
        </div>

        <dl className="md:col-span-7 grid grid-cols-2 gap-x-10 gap-y-8 md:pl-6">
          {specs.map(([k, v]) => (
            <div key={k} className="border-t border-seafoam/15 pt-5">
              <dt className="label-mono text-seafoam/70">{k}</dt>
              <dd className="font-serif text-offwhite text-3xl mt-2">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ─────────── TESTIMONIAL ─────────── */
function Testimonial() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[900px] px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="label-mono text-teal mb-6">From the logbook</p>
        <blockquote className="font-serif italic text-navy text-3xl md:text-[40px] leading-[1.25]">
          “We thought we were booking a boat ride. We came home with the best afternoon of the
          summer — a waterfall, a seal, and a captain who actually let us steer.”
        </blockquote>
        <p className="mt-8 label-mono text-[color:var(--text-light)]">
          Jamie &amp; Pat · Half-day · July
        </p>
      </div>
    </section>
  );
}

/* ─────────── BOOKING ─────────── */
function Booking() {
  return (
    <section id="booking" className="bg-background">
      <div className="mx-auto max-w-[1140px] px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="label-mono text-teal mb-3">04 — Reserve</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">
            Pick a date. <em className="text-teal">We'll handle the wind.</em>
          </h2>
          <p className="mt-6 text-[color:var(--text-light)] text-[15px] leading-[1.85] max-w-sm">
            Tell us what you're hoping for — a sunset, a celebration, a quiet half-day on the inlet —
            and we'll come back within a day with a recommendation.
          </p>
          <div className="mt-10 space-y-4">
            <ContactRow label="Phone" value="236 866 3109" note="After 3 pm Mon–Fri · All day Sat & Sun" />
            <ContactRow label="Email" value="lunguanastasia1909@yahoo.com" />
            <ContactRow label="Berth" value="Reed Point Marina, Port Moody BC" />
          </div>
        </div>

        <form
          className="md:col-span-7 bg-offwhite rounded-[14px] p-8 md:p-10 border border-teal/10 shadow-[0_20px_60px_rgba(13,27,38,0.06)] space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Sailing inquiry — ${data.get("trip") || "Open"}`);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nDate: ${data.get("date")}\nGuests: ${data.get("guests")}\nTrip: ${data.get("trip")}\n\n${data.get("message")}`,
            );
            window.location.href = `mailto:lunguanastasia1909@yahoo.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your name" name="name" required />
            <Field label="Preferred date" name="date" type="date" required />
            <Field label="Guests (max 6)" name="guests" type="number" min={1} max={6} defaultValue={2} required />
            <Field label="Trip" name="trip" as="select">
              <option>Indian Arm Voyage · 2 hours ($300)</option>
              <option>Indian Arm Voyage · 4 hours ($300)</option>
              <option>Multi-Day Charter</option>
              <option>Occasion Aboard</option>
              <option>Not sure yet</option>
            </Field>
          </div>
          <Field label="What are you hoping for?" name="message" as="textarea" rows={4} />
          <button
            type="submit"
            className="w-full md:w-auto inline-flex justify-center items-center rounded-full bg-navy text-offwhite px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-teal transition-colors"
          >
            Send inquiry
          </button>
          <p className="label-mono text-[color:var(--text-light)] opacity-70">
            No deposit required to ask. Real reply within 24 hrs.
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-teal/10 pb-3">
      <span className="label-mono text-teal w-14 shrink-0">{label}</span>
      <span className="text-navy text-[15px]">
        {value}
        {note && (
          <span className="block font-serif italic text-[color:var(--text-light)] text-[13px] mt-0.5">
            {note}
          </span>
        )}
      </span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  children,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  children?: React.ReactNode;
  [k: string]: unknown;
}) {
  const cls =
    "mt-2 w-full bg-cream/60 border border-teal/15 rounded-md px-4 py-3 text-[14px] text-navy focus:outline-none focus:border-teal focus:bg-offwhite transition-colors";
  return (
    <label className="block">
      <span className="label-mono text-teal/80">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} className={cls} {...(rest as object)} />
      ) : as === "select" ? (
        <select name={name} className={cls} {...(rest as object)}>
          {children}
        </select>
      ) : (
        <input name={name} type={type} className={cls} {...(rest as object)} />
      )}
    </label>
  );
}

/* ─────────── FOOTER ─────────── */
function Footer() {
  return (
    <footer className="bg-slate text-mist">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 py-14 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 text-offwhite">
            <InletLogo size={36} />
            <span className="font-serif italic text-2xl">Inlet Sail Co.</span>
          </div>
          <p className="mt-4 text-[13px] max-w-sm leading-relaxed">
            BC Coast sailing experiences aboard Serenity, a Hunter 33. Reed Point Marina,
            Port Moody, British Columbia.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="label-mono text-seafoam mb-4">Explore</p>
          <ul className="space-y-2 text-[13px]">
            <li><a href="#about" className="hover:text-seafoam">About</a></li>
            <li><a href="#experiences" className="hover:text-seafoam">Trips</a></li>
            <li><a href="#boat" className="hover:text-seafoam">The Boat</a></li>
            <li><a href="#booking" className="hover:text-seafoam">Reserve</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="label-mono text-seafoam mb-4">Contact</p>
          <ul className="space-y-2 text-[13px]">
            <li>236 866 3109</li>
            <li>lunguanastasia1909@yahoo.com</li>
            <li>Reed Point Marina, Port Moody BC</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-offwhite/10">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10 py-6 flex flex-wrap items-center justify-between gap-3">
          <p className="label-mono opacity-50">© 2025 Inlet Sail Co.</p>
          <p className="label-mono opacity-50">BC Coast · Hunter 33 · Captain-Led</p>
        </div>
      </div>
    </footer>
  );
}
