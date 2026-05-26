import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Coins, Shield, Clock, TrendingUp, Star, Gamepad2, CheckCircle2, Globe, Award, Maximize2, X } from "lucide-react";

const stats = [
  { value: "$2.4M+", label: "Total Paid Out" },
  { value: "85K+", label: "Active Users" },
  { value: "5+", label: "Offerwall Partners" },
  { value: "<24h", label: "Avg Withdrawal" },
];

const features = [
  { icon: Gamepad2, title: "5+ Premium Offerwalls", desc: "OfferToro, CPX Research, Lootably, Adgate Media, BitLabs — all in one platform." },
  { icon: Coins, title: "Instant USDT Payouts", desc: "Withdraw to BEP20 or TRC20 wallets with zero hidden fees." },
  { icon: Zap, title: "Real-Time Balance", desc: "Earnings appear the moment an offer is credited to your account." },
  { icon: Shield, title: "Verified & Secure", desc: "Every withdrawal is reviewed before processing to keep you safe." },
  { icon: Clock, title: "Fast Processing", desc: "Most withdrawals are processed within 24 hours of approval." },
  { icon: TrendingUp, title: "No Earning Cap", desc: "Complete unlimited offers and grow your balance as high as you want." },
];

const testimonials = [
  { name: "ProGamer_99", amount: "$320 withdrawn", text: "Cashed out three times already. Always fast and accurate. Best GPT site I've used." },
  { name: "CryptoKing88", amount: "$150 withdrawn", text: "The UI is clean, USDT payouts are real. No shady business, just straight earnings." },
  { name: "OfferHunter", amount: "$500+ withdrawn", text: "Been here since day one. The offerwalls pay and support is responsive." },
];

const steps = [
  { num: "01", icon: Gamepad2, title: "Choose an Offer", desc: "Browse our premium offerwalls and select the games and tasks that pay the most." },
  { num: "02", icon: Zap, title: "Complete & Earn", desc: "Finish tasks or reach game levels. Your balance updates instantly upon completion." },
  { num: "03", icon: Coins, title: "Withdraw Crypto", desc: "Request USDT via BEP20 or TRC20. Processed within 24 hours to your wallet." },
];

const partners = ["OfferToro", "CPX Research", "Lootably", "Adgate Media", "BitLabs"];

const gameCategories = [
  {
    title: "Action & Battle",
    desc: "Intense PvP battles and combat missions",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
    tag: "High Rewards",
    color: "from-red-900/80 to-red-700/40",
  },
  {
    title: "RPG & Adventure",
    desc: "Level up heroes and conquer dungeons",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
    tag: "Popular",
    color: "from-purple-900/80 to-purple-700/40",
  },
  {
    title: "Strategy & Build",
    desc: "Build empires and dominate leaderboards",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80",
    tag: "Fast Payout",
    color: "from-blue-900/80 to-blue-700/40",
  },
  {
    title: "Sports & Racing",
    desc: "Compete in leagues and win big",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80",
    tag: "New Games",
    color: "from-green-900/80 to-green-700/40",
  },
];

function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(34,197,94,0.35)]">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-xl font-black tracking-tight text-foreground">
        humam <span className="text-primary">khador</span>
      </span>
    </div>
  );
}

function FeaturedPlatformSection() {
  const [featured, setFeatured] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch("/api/platforms/featured")
      .then(r => r.json())
      .then(d => { setFeatured(d.platform); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !featured || !featured.apiEndpoint) return null;

  return (
    <section className="py-16 px-4 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-bold mb-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Live Now — Start Earning Instantly
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-2">
            {featured.name}
          </h2>
          {featured.description && (
            <p className="text-muted-foreground max-w-xl mx-auto">{featured.description}</p>
          )}
        </div>

        <div className={`relative rounded-2xl border-2 border-primary/20 overflow-hidden shadow-[0_8px_40px_rgba(34,197,94,0.12)] transition-all duration-300 ${expanded ? "h-[85vh]" : "h-[520px]"}`}>
          <div className="flex items-center justify-between px-4 py-2.5 bg-primary text-white">
            <div className="flex items-center gap-2">
              {featured.logoUrl && (
                <img src={featured.logoUrl} alt={featured.name} className="w-6 h-6 rounded object-cover" />
              )}
              <span className="font-bold text-sm">{featured.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs opacity-80 hidden sm:block">Sign up and start earning — it's free</span>
              <button
                onClick={() => setExpanded(e => !e)}
                className="p-1.5 rounded-md hover:bg-white/20 transition-colors"
                title={expanded ? "Collapse" : "Expand"}
              >
                {expanded ? <X className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <iframe
            src={featured.apiEndpoint}
            className="w-full border-0"
            style={{ height: "calc(100% - 44px)" }}
            allow="fullscreen"
            title={featured.name}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 bg-green-50 border border-primary/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">Instant Credit</p>
              <p className="text-muted-foreground text-xs">Complete an offer above and your humam khador balance updates automatically.</p>
            </div>
          </div>
          <Link href="/register">
            <Button className="bg-primary text-white font-bold shrink-0 shadow-[0_2px_12px_rgba(34,197,94,0.3)]">
              Create Free Account <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function GamingShowcaseSection() {
  return (
    <section className="py-24 px-4 bg-gray-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34,197,94,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.15) 0%, transparent 40%)'}} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-sm text-primary font-bold mb-4">
            <Gamepad2 className="w-4 h-4" />
            Real Games · Real Rewards
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
            Play Games,<br />
            <span className="text-primary">Earn Crypto</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Choose from hundreds of mobile and browser games across all genres. Complete missions and get paid directly to your wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {gameCategories.map((cat) => (
            <div
              key={cat.title}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(34,197,94,0.2)]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-black/20 to-transparent`} />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-primary/80 text-white px-2 py-0.5 rounded-full">
                    {cat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-black text-white drop-shadow-sm">{cat.title}</h3>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">500+</div>
              <div className="text-sm text-gray-400">Available Games</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">$2.4M+</div>
              <div className="text-sm text-gray-400">Paid to Gamers</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">&lt;24h</div>
              <div className="text-sm text-gray-400">Average Payout Time</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/register">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black text-lg px-12 h-14 shadow-[0_4px_24px_rgba(34,197,94,0.4)]">
              Start Playing & Earning
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-gray-500 text-sm mt-3">Free to join · No deposit required · Instant USDT payouts</p>
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-white/95 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
          <SiteLogo />
          <div className="hidden md:flex gap-7 text-sm text-muted-foreground items-center">
            <a href="#games" className="hover:text-primary transition-colors font-medium">Games</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors font-medium">How It Works</a>
            <a href="#features" className="hover:text-primary transition-colors font-medium">Features</a>
            <a href="#reviews" className="hover:text-primary transition-colors font-medium">Reviews</a>
          </div>
          <div className="flex gap-2 items-center">
            <Link href="/login">
              <Button variant="ghost" className="font-semibold text-sm text-foreground hover:text-primary">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary text-white font-bold shadow-[0_2px_10px_rgba(34,197,94,0.3)] text-sm">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-green-500 via-green-400 to-emerald-400 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-600/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-bold">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            $2.4M+ Paid Out to Real Users
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none drop-shadow-sm">
            Earn Real <span className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1">USDT</span><br />
            From Your Phone
          </h1>

          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            Complete premium offers, play games, and withdraw crypto directly to your wallet — no investment, no limits, no tricks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-green-50 font-black text-lg px-10 h-14 shadow-xl w-full sm:w-auto group border-0">
                Start Earning Free
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" className="bg-white/15 backdrop-blur-sm border border-white/40 text-white hover:bg-white/25 font-bold h-14 px-8 w-full sm:w-auto">
                I Have an Account
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-green-100 pt-1">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white" /> Free to join</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white" /> No credit card</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white" /> Instant withdrawals</span>
          </div>
        </div>
      </section>

      {/* Partners marquee banner */}
      <section className="bg-green-50 border-b border-green-100 py-3 overflow-hidden">
        <div className="flex items-center gap-10 whitespace-nowrap px-4" style={{animation: 'marquee 18s linear infinite'}}>
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="text-xs font-black text-green-500 uppercase tracking-[0.15em] flex-shrink-0">{p}</span>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-border py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-black text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-widest font-bold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gaming Showcase */}
      <section id="games">
        <GamingShowcaseSection />
      </section>

      {/* Featured Platform (from admin settings) */}
      <FeaturedPlatformSection />

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Simple Process</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-3">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Three simple steps to get crypto in your wallet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-primary/40 hover:shadow-[0_4px_24px_rgba(34,197,94,0.08)] transition-all duration-300">
                <div className="absolute top-4 right-6 text-7xl font-black text-primary/6 select-none group-hover:text-primary/10 transition-colors">{step.num}</div>
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-green-50/60 border-y border-green-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Why humam khador</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-3">Everything You Need</h2>
            <p className="text-muted-foreground text-lg">Built to maximize your earnings, secured and verified.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(34,197,94,0.07)] transition-all duration-200 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{f.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Banner */}
      <section className="py-14 px-4 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-primary/8 via-primary/5 to-primary/8 border border-primary/15 rounded-2xl p-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground">Available Worldwide</h3>
              <p className="text-muted-foreground text-sm">Withdraw to any BEP20 or TRC20 wallet, anywhere.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground">Trusted Platform</h3>
              <p className="text-muted-foreground text-sm">Transparent system, no hidden fees, verified payouts.</p>
            </div>
          </div>
          <Link href="/register">
            <Button className="bg-primary text-white font-bold px-8 h-11 shadow-[0_2px_12px_rgba(34,197,94,0.3)] shrink-0">
              Join Now <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Community</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-3">Users Trust humam khador</h2>
            <p className="text-muted-foreground text-lg">Real users, real withdrawals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(34,197,94,0.06)] transition-all duration-200">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-primary font-bold mt-0.5">{t.amount}</div>
                  </div>
                  <div className="w-9 h-9 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                    <Coins className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-500 via-green-400 to-emerald-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Start Earning<br />Today — It's Free
          </h2>
          <p className="text-xl text-green-100 max-w-xl mx-auto">Join 85,000+ users already earning USDT. No investment required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-green-50 font-black text-lg px-12 h-14 shadow-xl w-full sm:w-auto border-0">
                Create Free Account
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" className="bg-white/15 border border-white/40 text-white hover:bg-white/25 font-bold h-14 px-10 w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
          <p className="text-sm text-green-100">Minimum withdrawal: $5 USDT · BEP20 & TRC20 supported</p>
        </div>
      </section>

      <footer className="border-t border-border bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <SiteLogo />
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} humam khador. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/register"><span className="hover:text-primary cursor-pointer transition-colors">Sign Up</span></Link>
            <Link href="/login"><span className="hover:text-primary cursor-pointer transition-colors">Login</span></Link>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
