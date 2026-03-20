import { useEffect, useRef, useState } from "react";
import { Users, Trophy, Lightbulb } from "lucide-react";

/*
  ╔══════════════════════════════════════════════════════════════╗
  ║  SUPERTEAM NIGERIA — Web3 Builder Community                  ║
  ║  Aesthetic: Afrofuturism × Web3 Terminal × Mission Control   ║
  ║  Palette: Pure Black · Electric Green · Deep Slate           ║
  ║  Fonts: Bebas Neue (display) · IBM Plex Mono (body)          ║
  ╚══════════════════════════════════════════════════════════════╝
*/

const FONTS = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Syne:wght@400;600;700;800&display=swap";

// ── Brand tokens ───────────────────────────────────────────────
const BK   = "#080808";
const BK2  = "#0F0F0F";
const BK3  = "#161616";
const BK4  = "#1E1E1E";
const GRN  = "#02834e";
const GRN2 = "#016e41";
const GRN3 = "#02834e20";
const NGR  = "#02834e";
const WHT  = "#F0F0F0";
const MUT  = "rgba(240,240,240,0.42)";
const BDR  = "rgba(240,240,240,0.07)";
const BDR_G = "rgba(2,131,78,0.25)";

// ── Data ──────────────────────────────────────────────────────
const STATS = [
  { val: "160+", label: "Projects Built" },
  { val: "$1M+", label: "Community GDP" },
  { val: "27K+", label: "Community" },
];

const GUILDS = [
  {
    id: "01", name: "Developers",
    desc: "Smart contract engineers, frontend builders, and protocol hackers pushing Solana's limits in Nigeria.",
    icon: "⌨", color: GRN,
    img: "https://images.unsplash.com/photo-1722080826167-4ea87368cbc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyJTIwcnVzdHxlbnwwfHwwfHx8MA%3D%3D",
    skills: ["Rust", "TypeScript", "Anchor", "React", "Web3.js"],
  },
  {
    id: "02", name: "Designers",
    desc: "Visual architects crafting the interfaces and identities that define Nigerian web3 culture globally.",
    icon: "✦", color: "#A78BFA",
    img: "/dei.png",
    skills: ["Figma", "Motion", "Brand", "UX/UI", "3D"],
  },
  {
    id: "03", name: "Writers",
    desc: "Technical writers, content strategists and storytellers amplifying the Nigerian builder narrative worldwide.",
    icon: "◈", color: "#FB923C",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700&q=85",
    skills: ["Technical", "Content", "Research", "Proposals", "Docs"],
  },
  {
    id: "05", name: "Content Creation",
    desc: "Video creators, educators, and community builders amplifying the SuperteamNG story across every platform.",
    icon: "▶", color: "#F472B6",
    img: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=700&q=85",
    skills: ["Video", "Social", "Education", "Community", "Brand"],
  },
];

const PROJECTS = [
  { img: '/ribh.png', name: "Ribh Finance", stat: "$23.7M in TVL", desc: "$23.7M in TVP", color: GRN, tags: ["DeFi", "Yield Savings"]  },
  { img: '/nec.png', name: "NectarFi", stat: "$200k Saved · $2M in TVL", desc: "$200k Saved · $2M in TVL", color: "#60A5FA", tags: ["P2P", "Payments", "AI Infrastructure"] },
  { img: '/azza.png', name: "Azza", stat: "$2.3M Onchain Volume · $596k Local Payout", desc: "$2.3M Onchain Volume · $596k Local Payout", color: "#F472B6", tags: ["Off-ramp", "Payments", "Liquidity Protocol"] },
  { img: 'https://www.superteamng.fun/assets/project-1-4PMXFMM_.png', name: "Paj Cash", stat: "$500k in TVL", desc: "$500k in TVL", color: "#FB923C", tags: ["Off-ramp", "Payments", "Fiat"] },
  { img: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/58/ae/fa/58aefadb-64db-18a4-8924-65fa6512185d/Placeholder.mill/200x200bb-75.webp', name: "Cryptonia", stat: "$800k Onchain Volume · $328k in TVL", desc: "$800k Onchain Volume · $328k in TVL", color: "#A78BFA", tags: ["Payments", "Stablecoin Exchange", "Off-ramp"] },
];


const EVENTS = [
  { name: "Developers Guild Call",        freq: "Every Friday",   time: "07:00 PM" },
  { name: "Designers Guild Call",         freq: "Every Tuesday",  time: "07:00 PM" },
  { name: "Writers Guild Call",           freq: "Every Tuesday",  time: "09:00 PM" },
  { name: "Content Creators Guild Call",  freq: "Every Friday",   time: "07:00 PM" },
  { name: "Community Call",               freq: "Every Thursday", time: "06:00 PM" },
];

// Co-founders + 6 country leads = 8 total
const COFOUNDERS = [
  {
    name: "Nzube Ezudo",
    role: "Co-Founder & Lead",
    bio: "Visionary builder and ecosystem strategist. Nzube co-founded SuperteamNG to make Nigeria the epicentre of Solana web3 innovation, growing the community from zero to 27K+ members.",
    img: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765871446/zubby_1_ucvokm.jpg",
    handles: { twitter: "@NzubeEzudo", discord: "nzube#0001" },
    tags: ["Ecosystem", "Strategy", "Web3"],
  },
  {
    name: "Harrison Obiefule",
    role: "Co-Founder",
    bio: "Full-stack Solana developer and community architect. Harrison drives the technical direction of SuperteamNG and mentors the next generation of Nigerian blockchain engineers.",
    img: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1739104249/HARRI_cz2ljb.jpg",
    handles: { twitter: "@Harri_obi", discord: "harrison#0002" },
    tags: ["Engineering", "Mentorship", "DeFi"],
  },
];

const COUNTRY_LEADS = [
  {
    name: "Alex Favour",
    position:"top",
    role: "Lead, superteamNG Devs",
    bio: "Award-winning product designer and visual storyteller. Chiamaka leads the Designers Guild, shaping the visual identity of Nigerian web3 products shipped to a global audience.",
    img: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1739104244/alexsss_p9aw9k.jpg",
    handles: { twitter: "@Alexspoof", discord: "chiamaka#0003" },
    tags: ["Design", "Brand", "UX/UI"],
    location: "Lagos",
  },
  {
    name: "Flo",
    position:"center",
    role: "Operations, superteamNG",
    bio: "Technical writer, researcher, and documentation expert. Emeka leads the Writers Guild producing everything from protocol docs to editorial content amplifying the Nigerian builder story.",
    img: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1739104248/Flo_vd7ord.jpg",
    handles: { twitter: "@MalikAdeyemo_", discord: "emeka#0004" },
    tags: ["Writing", "Research", "Documentation"],
    location: "Abuja",
  },
  {
    name: "Tope Oguniran",
    position:"top",
    role: "Lead, superteamNG Designers",
    bio: "Rust and TypeScript engineer building DeFi primitives on Solana. Adaeze champions women in Web3 and runs bi-weekly code mentorship sessions for new Nigerian blockchain developers.",
    img: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1739104265/TOC_przvfl.jpg",
    handles: { twitter: "@callme_TOC", discord: "adaeze#0005" },
    tags: ["Rust", "DeFi", "Mentorship"],
    location: "Port Harcourt",
  },
  {
    name: "Mujahid",
    position:"top",
    role: "Lead, superteamNG Writers Guild",
    bio: "Game designer and Unity developer pioneering on-chain gaming in West Africa. Tunde leads GameFi projects within the community and coordinates with global Solana gaming grants.",
    img: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1739104252/Mujahid_aalw67.jpg",
    handles: { twitter: "@angry__pacifist", discord: "tunde#0006" },
    tags: ["GameFi", "Unity", "NFTs"],
    location: "Ibadan",
  },
  {
    name: "Ashely",
     position:"top",
    role: "Lead, superteamNG Product Guild",
    bio: "Content strategist and community educator producing the videos, threads, and campaigns that put Nigerian web3 builders on the global map. Ngozi manages creator partnerships and brand.",
    img: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1739104245/Ashley_dwrwqa.jpg",
    handles: { twitter: "@wysrenee", discord: "ngozi#0007" },
    tags: ["Content", "Education", "Community"],
    location: "Enugu",
  },
  {
    name: "Wisdom Jospeh (Monarch)",
    role: "Events Lead",
     position:"top",
    bio: "BD strategist and ecosystem connector. Chidi builds the bridges between SuperteamNG, global protocols, and Nigerian enterprises — turning community GDP into real economic opportunity.",
    img: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1739104261/monarch_oahhoh.jpg",
    handles: { twitter: "@thisis_monarch", discord: "chidi#0008" },
    tags: ["BD", "Growth", "Ecosystem"],
    location: "Lagos",
  },
];

const PARTNERS = [
  {
    name: "Solana Foundation",
    category: "Core Protocol",
    desc: "The Solana Foundation provides infrastructure support, grants, and ecosystem resources that power SuperteamNG's builder programs across Nigeria.",
    color: "#9945FF",
    logo: "◎",
  },
  {
    name: "Superteam",
    category: "Global Network",
    desc: "The global Superteam network connects Nigerian builders to a worldwide community of Solana contributors, enabling cross-border collaboration and opportunities.",
    color: "#14F195",
    logo: "⬡",
  },
  {
    name: "Helius",
    category: "Infrastructure",
    desc: "Helius powers the developer infrastructure behind many SuperteamNG projects — providing blazing-fast RPC nodes, webhooks, and DAS API access to Nigerian builders.",
    color: "#F97316",
    logo: "⌁",
  },
  {
    name: "Dialect",
    category: "Communications",
    desc: "Dialect's on-chain messaging and notifications layer helps Nigerian web3 apps built by the community deliver seamless user communication experiences.",
    color: "#60A5FA",
    logo: "◈",
  },
  {
    name: "Tensor",
    category: "NFT Ecosystem",
    desc: "Tensor supports Nigerian NFT creators and traders in the community by providing advanced marketplace tools and analytics for Solana-native digital assets.",
    color: "#F472B6",
    logo: "⬟",
  },
  {
    name: "Access Bank",
    category: "Banking Partner",
    desc: "Access Bank bridges the gap between Nigeria's traditional finance sector and web3, enabling fiat on/off-ramp solutions for SuperteamNG community members.",
    color: "#34D399",
    logo: "⬢",
  },
];

const NEWS = [
  {
    title: "SuperteamNG Celebrates 160+ Projects Built on Solana",
    date: "Mar 2025",
    tag: "Milestone",
    tagColor: GRN,
    excerpt: "From DeFi protocols to healthcare dApps, the Nigerian Solana builder community hit a landmark 160 projects — with multiple hackathon winners emerging this cycle.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    readTime: "3 min read",
  },
  {
    title: "cHack 2025: Two Nigerian Teams Win Top Honours",
    date: "Feb 2025",
    tag: "Hackathon",
    tagColor: "#60A5FA",
    excerpt: "ChainDoc and SolFlow emerged as top winners from cHack 2025, putting SuperteamNG on the global map as a powerhouse of Solana innovation from Africa.",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    readTime: "5 min read",
  },
  {
    title: "SuperteamNG Launches New Instagrants Program",
    date: "Jan 2025",
    tag: "Grants",
    tagColor: "#A78BFA",
    excerpt: "Builders can now access $1–$10,000 in Solana Foundation grants directly through SuperteamNG. Over 12 projects already approved in the first cohort.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
    readTime: "4 min read",
  },
  {
    title: "Gaming Guild Ships First On-Chain Game on Solana",
    date: "Dec 2024",
    tag: "Gaming",
    tagColor: "#34D399",
    excerpt: "The SuperteamNG Gaming Guild launched its first fully on-chain mobile game at the Lagos Web3 Summit, drawing 500+ players in its first week.",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
    readTime: "4 min read",
  },
  {
    title: "Community Call Recap: 2025 Roadmap Revealed",
    date: "Nov 2024",
    tag: "Community",
    tagColor: "#FB923C",
    excerpt: "At our November community call, the co-founders unveiled SuperteamNG's 2025 roadmap — including new guild tracks, IRL events in 6 cities, and expanded grant access.",
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80",
    readTime: "6 min read",
  },
  {
    title: "Designers Guild Partners with Figma Africa",
    date: "Oct 2024",
    tag: "Partnership",
    tagColor: "#F472B6",
    excerpt: "The SuperteamNG Designers Guild formalized a partnership with Figma Africa, bringing exclusive resources and mentorship to Nigerian web3 product designers.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    readTime: "3 min read",
  },
];

const EARN_CARDS = [
  {
    id: "01", title: "Bounties",
    icon: "🎯",
    logo: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765877597/bounty_ug91jh.jpg",
    desc: "Showcase your skills to earn and attract potential recruiters. 60+ projects built and submitted to local and global hackathons with winners emerging from Hyperdrive and cHack.",
    cta: "View Bounties",
    href: "https://earn.superteam.fun",
    color: GRN,
  },
  {
    id: "02", title: "Hackathons",
    icon: "⚡",
    logo: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765877138/colloseum_trr2pu.png",
    desc: "Solana Hackathons highlight the incredible potential of decentralised technologies across DeFi, DePIN, RWAs, gaming, consumer apps, and DAOs.",
    cta: "View Hackathons",
    href: "https://solana.com/hackathon",
    color: "#60A5FA",
  },
  {
    id: "03", title: "Instagrants",
    icon: "💰",
    logo: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765877056/grants_xzutid.png",
    desc: "Superteam Nigeria supports Solana Foundation Grants — $1–$10,000 for projects promoting decentralisation. Anyone with an idea or proof of work is welcome to apply.",
    cta: "Go to Instagrants",
    href: "https://superteam.fun/instagrants",
    color: "#A78BFA",
  },
  {
    id: "04", title: "Superteam Earn",
    icon: "◈",
    logo: "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765877383/square-logo-dark_fd0n2r.png",
    desc: "Dive into exciting global opportunities from bounties to awesome projects. Create your account, complete your profile, and start participating to win today.",
    cta: "Go to Superteam Earn",
    href: "https://earn.superteam.fun",
    color: "#FB923C",
  },
  {
    id: "05", title: "Superteam Build",
    icon: "🔨",
    logo: "https://build.superteam.fun/favicon.ico",
    desc: "Your go-to source for web3 project inspiration with 200+ innovative ideas curated for hackathon projects. Whether a beginner or experienced builder — find your next big idea.",
    cta: "Go to Superteam Build",
    href: "https://build.superteam.fun",
    color: "#F472B6",
  },
];

const IRL_IMAGES = [
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875086/Pitch_Day-159_n3qlo5.jpg",
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875275/IMG_4350_ruklvj.jpg",
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875081/Pitch_Day-133_ib2axg.jpg",
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875275/IMG_4350_ruklvj.jpg",
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875070/Pitch_Day-197_fhwlxh.jpg",
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875070/Pitch_Day-197_fhwlxh.jpg",
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875559/IMG_4685_omzncz.jpg",
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875559/IMG_4629_u19cuv.jpg",


  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875073/Pitch_Day-173_xyr0ng.jpg",
  "https://res.cloudinary.com/dsduzw6z2/image/upload/v1765875070/Pitch_Day-197_fhwlxh.jpg",
  
];

function absTop(el: HTMLElement) {
  let t = 0, e: HTMLElement | null = el;
  while (e) { t += e.offsetTop; e = e.offsetParent as HTMLElement | null; }
  return t;
}

// ── Mobile parallax project carousel ─────────────────────────
function MobileProjCarousel({ projects, bk, bk2, bk3, bdr, bdr_g, grn, mut, wht }:
  { projects:ProjItem[]; bk:string; bk2:string; bk3:string; bdr:string; bdr_g:string; grn:string; mut:string; wht:string }) {
  const [active, setActive] = useState(0);
  const trackRef  = useRef<HTMLDivElement>(null);
  const dragRef   = useRef<{active:boolean;startX:number;startY:number;dx:number}>({active:false,startX:0,startY:0,dx:0});
  const animRef   = useRef<number>(0);
  const offsetRef = useRef(0);
  const targetRef = useRef(0);
  const CARD_W    = typeof window !== "undefined" ? Math.min(window.innerWidth - 48, 340) : 320;
  const GAP       = 16;
  const SNAP      = CARD_W + GAP;

  const clamp = (v:number) => Math.max(0, Math.min(v, (projects.length-1)*SNAP));

  useEffect(()=>{
    const tick=()=>{
      offsetRef.current += (targetRef.current - offsetRef.current) * 0.12;
      if(Math.abs(targetRef.current - offsetRef.current) < 0.3) offsetRef.current = targetRef.current;
      if(trackRef.current) {
        trackRef.current.querySelectorAll<HTMLElement>(".mpc-img").forEach((img, i) => {
          const cardPos = i * SNAP - offsetRef.current;
          img.style.transform = `translateX(${cardPos * 0.25}px) scale(1.15)`;
        });
        trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(animRef.current);
  },[]);

  const startDrag=(x:number,y:number)=>{ dragRef.current={active:true,startX:x,startY:y,dx:0}; };
  const moveDrag=(x:number,y:number)=>{
    if(!dragRef.current.active) return;
    dragRef.current.dx = dragRef.current.startX - x;
    targetRef.current = clamp(active*SNAP + dragRef.current.dx);
  };
  const endDrag=()=>{
    if(!dragRef.current.active) return;
    dragRef.current.active=false;
    const dx = dragRef.current.dx;
    let next = active;
    if(dx > SNAP*0.2) next = Math.min(active+1, projects.length-1);
    else if(dx < -SNAP*0.2) next = Math.max(active-1, 0);
    setActive(next);
    targetRef.current = next * SNAP;
  };

  return (
    <div className="show-mob" style={{ display:"none",flexDirection:"column",gap:"1.25rem" }}>
      <div style={{ overflow:"hidden",position:"relative",touchAction:"pan-y",cursor:"grab",userSelect:"none" }}
        onMouseDown={e=>startDrag(e.clientX,e.clientY)}
        onMouseMove={e=>moveDrag(e.clientX,e.clientY)}
        onMouseUp={endDrag} onMouseLeave={endDrag}
        onTouchStart={e=>startDrag(e.touches[0].clientX,e.touches[0].clientY)}
        onTouchMove={e=>{ e.stopPropagation(); moveDrag(e.touches[0].clientX,e.touches[0].clientY); }}
        onTouchEnd={endDrag}>
        <div ref={trackRef} style={{ display:"flex",gap:GAP,paddingLeft:10,paddingRight:10,paddingTop:10,willChange:"transform" }}>
          {projects.map((p,i)=>{
            const isActive = i === active;
            return (
              <div key={i} style={{ flexShrink:0,width:CARD_W,overflow:"hidden",background:bk2,transition:"box-shadow .4s",boxShadow:isActive?`0 20px 60px rgba(0,0,0,.7), 0 0 0 1px ${p.color}22`:"none",transform:isActive?"translateY(-4px)":"translateY(0)",transitionProperty:"transform, box-shadow" }}>
                <div style={{ height:200,overflow:"hidden",position:"relative" }}>
                  <img src={p.img} alt={p.name} className="mpc-img"
                    style={{ width:"115%",height:"115%",objectFit:"contain",filter:`grayscale(.5) brightness(${isActive?.65:.45})`,display:"block",willChange:"transform",transition:"filter .4s",marginLeft:"-7.5%" }} />
                </div>
                <div style={{ padding:"1.25rem 1.5rem 1.75rem" }}>
                  <div style={{ display:"flex",gap:".35rem",flexWrap:"wrap",marginBottom:".75rem" }}>
                    {p.tags.map(tag=>(
                      <span key={tag} style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".42rem",color:p.color,background:`${p.color}14`,border:`1px solid ${p.color}33`,padding:".15rem .5rem",letterSpacing:".12em",textTransform:"uppercase" }}>{tag}</span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.8rem",color:wht,letterSpacing:".06em",marginBottom:".5rem",lineHeight:1 }}>{p.name}</h3>
                  <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".62rem",color:mut,lineHeight:1.7,marginBottom:"1rem" }}>{p.desc}</p>
                  <a href="#" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".52rem",color:p.color,textDecoration:"none",letterSpacing:".1em",borderBottom:`1px solid ${p.color}44`,paddingBottom:"2px" }}>Read More →</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ display:"flex",justifyContent:"center",gap:".5rem" }}>
        {projects.map((_,i)=>(
          <div key={i} onClick={()=>{ setActive(i); targetRef.current=i*SNAP; }}
            style={{ width:i===active?20:6,height:6,background:i===active?grn:`${wht}22`,transition:"width .3s, background .3s",cursor:"pointer" }} />
        ))}
      </div>
    </div>
  );
}

// ── Leads carousel ────────────────────────────────────────────
type LeadItem = { name:string; role:string; img:string; handles:{twitter:string;discord:string}; tags:string[]; location:string; bio:string };
function LeadsCarousel({ leads, bk, bk3, bk4, bdr, bdr_g, grn, mut, wht }:
  { leads:LeadItem[]; bk:string; bk3:string; bk4:string; bdr:string; bdr_g:string; grn:string; mut:string; wht:string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef   = useRef(0);
  const dragRef  = useRef<{active:boolean;startX:number;startPos:number}>({active:false,startX:0,startPos:0});
  const pauseRef = useRef(false);
  const rafRef   = useRef<number>(0);
  const CARD_W = 300; const GAP = 20; const SPEED = 0.5;
  const items = [...leads,...leads,...leads,...leads];
  const loopLen = leads.length * (CARD_W + GAP);
  useEffect(()=>{
    const tick=()=>{ if(!pauseRef.current) posRef.current+=SPEED; if(posRef.current>=loopLen*2) posRef.current-=loopLen; if(posRef.current<0) posRef.current+=loopLen; if(trackRef.current) trackRef.current.style.transform=`translateX(${-posRef.current}px)`; rafRef.current=requestAnimationFrame(tick); };
    rafRef.current=requestAnimationFrame(tick); return ()=>cancelAnimationFrame(rafRef.current);
  },[loopLen]);
  const startDrag=(x:number)=>{ pauseRef.current=true; dragRef.current={active:true,startX:x,startPos:posRef.current}; };
  const moveDrag=(x:number)=>{ if(!dragRef.current.active)return; posRef.current=dragRef.current.startPos+(dragRef.current.startX-x); };
  const endDrag=()=>{ dragRef.current.active=false; pauseRef.current=false; };
  return (
    <div style={{overflow:"hidden",position:"relative",cursor:"grab",userSelect:"none",paddingBottom:".5rem"}}
      onMouseDown={e=>startDrag(e.clientX)} onMouseMove={e=>moveDrag(e.clientX)} onMouseUp={endDrag} onMouseLeave={endDrag}
      onTouchStart={e=>startDrag(e.touches[0].clientX)} onTouchMove={e=>moveDrag(e.touches[0].clientX)} onTouchEnd={endDrag}>
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:80,background:`linear-gradient(to right,${bk},transparent)`,zIndex:2,pointerEvents:"none"}}/>
      <div style={{position:"absolute",right:0,top:0,bottom:0,width:80,background:`linear-gradient(to left,${bk},transparent)`,zIndex:2,pointerEvents:"none"}}/>
      <div ref={trackRef} style={{display:"flex",gap:GAP,willChange:"transform",width:"max-content",paddingLeft:20}}>
        {items.map((l:any,i)=>(
          <div key={i} style={{flexShrink:0,width:CARD_W,background:bk3,border:`1px solid ${bdr}`,overflow:"hidden",transition:"border-color .3s,transform .35s cubic-bezier(.16,1,.3,1),box-shadow .3s"}}
            onMouseEnter={e=>{const t=e.currentTarget;t.style.borderColor=`${grn}33`;t.style.transform="translateY(-6px)";t.style.boxShadow=`0 20px 50px rgba(0,0,0,.45)`;}}
            onMouseLeave={e=>{const t=e.currentTarget;t.style.borderColor=bdr;t.style.transform="translateY(0)";t.style.boxShadow="none";}}>
            {/* Image top */}
            <div style={{position:"relative",height:200,overflow:"hidden"}}>
              <img src={l.img} alt={l.name} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:l.position,filter:"grayscale(.25)",display:"block",transition:"filter .4s,transform .4s"}}
                onMouseEnter={e=>{e.currentTarget.style.filter="grayscale(0)";e.currentTarget.style.transform="scale(1.04)";}}
                onMouseLeave={e=>{e.currentTarget.style.filter="grayscale(.25)";e.currentTarget.style.transform="scale(1)";}}/>
              <div style={{position:"absolute",bottom:0,left:0,right:0,height:"45%",background:`linear-gradient(to top,${bk3},transparent)`}}/>
              <div style={{position:"absolute",top:0,left:0,width:12,height:1.5,background:grn}}/>
              <div style={{position:"absolute",top:0,left:0,width:1.5,height:12,background:grn}}/>
              <div style={{position:"absolute",bottom:0,left:0,right:0,height:2,background:`linear-gradient(to right,${grn},transparent)`,opacity:.5}}/>
            </div>
            {/* Text below */}
            <div style={{padding:"1rem 1.25rem 1.25rem"}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.25rem",color:wht,letterSpacing:".06em",lineHeight:1,marginBottom:".2rem"}}>{l.name}</div>
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:".42rem",color:grn,letterSpacing:".18em",textTransform:"uppercase",marginBottom:".85rem"}}>{l.role}</div>
              <a href={`https://twitter.com/${l.handles.twitter.replace("@","")}`} target="_blank" rel="noreferrer"
                style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".52rem",color:wht,background:bk4,border:`1px solid ${bdr}`,padding:".35rem .75rem",textDecoration:"none",letterSpacing:".08em",cursor:"none",transition:"border-color .2s,color .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=grn;e.currentTarget.style.color=grn;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=bdr;e.currentTarget.style.color=wht;}}>
                <span style={{fontSize:".65rem"}}>𝕏</span><span>{l.handles.twitter}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Partner logos marquee ──────────────────────────────────────
const PARTNER_LOGOS = [
  { name:"Solflare",  logo:"https://www.solflare.com/wp-content/uploads/2024/11/App-Icon.svg"},
  { name:"Zabira",    logo:"https://www.zabira.com/media/images/svg/logos/logo.svg"},
  { name:"Quidax",    logo:"https://nynm-quidax-strapi.s3.amazonaws.com/quidax_logo_0b49871396.svg"},
  { name:"DeBridge",  logo:"https://debridge.com/assets/img/logo/full-logo.svg"},
  { name:"Birdeye",   logo:"https://birdeye.so/be/light-logo-v2.png"},
  { name:"Jupiter",   logo:"https://jup.ag/_next/image?url=%2Fsvg%2Fjupiter-logo.png&w=32&q=75"},
  { name:"Meteora",   logo:"https://app.meteora.ag/icons/logo.svg"},
  { name:"Ikonshop",  logo:"https://www.ikonshop.io/IkonShopDarkMode.svg"},
  { name:"FlipChat",  logo:"https://flipchat.xyz/logo.png"},
];

function PartnerLogos({ bk, bk2, bk3, bdr, bdr_g, grn, mut, wht }:
  { bk:string; bk2:string; bk3:string; bdr:string; bdr_g:string; grn:string; mut:string; wht:string }) {
  const items = [...PARTNER_LOGOS,...PARTNER_LOGOS,...PARTNER_LOGOS];
  return (
    <div style={{overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:120,background:`linear-gradient(to right,${bk2},transparent)`,zIndex:2,pointerEvents:"none"}}/>
      <div style={{position:"absolute",right:0,top:0,bottom:0,width:120,background:`linear-gradient(to left,${bk2},transparent)`,zIndex:2,pointerEvents:"none"}}/>
      <div style={{display:"flex",gap:"2px",animation:"marqueeL 28s linear infinite",willChange:"transform",width:"max-content"}}>
        {items.map((p,i)=>(
          <div key={i} style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:".75rem",padding:"2rem 2.5rem",border:`1px solid ${bdr}`,background:bk3,transition:"background .25s,border-color .25s",cursor:"none",minWidth:160}}
            onMouseEnter={e=>{e.currentTarget.style.background=`${grn}08`;e.currentTarget.style.borderColor=`${grn}33`;}}
            onMouseLeave={e=>{e.currentTarget.style.background=bk3;e.currentTarget.style.borderColor=bdr;}}>
            <img src={p.logo} alt={p.name} style={{height:32,width:"auto",maxWidth:120,objectFit:"contain",opacity:.6,transition:"opacity .3s"}}
              onError={e=>{ e.currentTarget.style.display="none"; }}
              onMouseEnter={e=>{e.currentTarget.style.opacity="1";}}
              onMouseLeave={e=>{e.currentTarget.style.opacity=".6";}}/>
            <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:".42rem",color:`${wht}44`,letterSpacing:".2em",textTransform:"uppercase"}}>{p.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Infinite RAF carousel ──────────────────────────────────────
type ProjItem = { img:string; name:string; stat:string; desc:string; color:string; tags:string[] };
function ProjCarousel({ projects, bk, bk3, bdr, bdr_g, grn, grn3, mut, wht }:
  { projects:ProjItem[]; bk:string; bk3:string; bdr:string; bdr_g:string; grn:string; grn3:string; mut:string; wht:string }) {

  const trackRef  = useRef<HTMLDivElement>(null);
  const posRef    = useRef(0);
  const dragRef   = useRef<{ active:boolean; startX:number; startPos:number }>({ active:false, startX:0, startPos:0 });
  const pauseRef  = useRef(false);
  const rafRef    = useRef<number>(0);
  const CARD_W    = 600;
  const GAP       = 24;
  const SPEED     = 0.55;

  const items = [...projects, ...projects, ...projects, ...projects];
  const loopLen = projects.length * (CARD_W + GAP);

  useEffect(() => {
    const tick = () => {
      if (!pauseRef.current) posRef.current += SPEED;
      if (posRef.current >= loopLen * 2) posRef.current -= loopLen;
      if (posRef.current < 0) posRef.current += loopLen;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [loopLen]);

  const startDrag = (clientX: number) => { pauseRef.current = true; dragRef.current = { active:true, startX:clientX, startPos:posRef.current }; };
  const moveDrag  = (clientX: number) => { if (!dragRef.current.active) return; posRef.current = dragRef.current.startPos + (dragRef.current.startX - clientX); };
  const endDrag   = () => { dragRef.current.active = false; pauseRef.current = false; };

  return (
    <div style={{ overflow:"hidden",position:"relative",cursor:"grab",userSelect:"none",paddingBottom:"1.5rem" }}
      onMouseDown={e=>startDrag(e.clientX)} onMouseMove={e=>moveDrag(e.clientX)} onMouseUp={endDrag} onMouseLeave={endDrag}
      onTouchStart={e=>startDrag(e.touches[0].clientX)} onTouchMove={e=>moveDrag(e.touches[0].clientX)} onTouchEnd={endDrag}>

      {/* Fade edges */}
      <div style={{ position:"absolute",left:0,top:0,bottom:0,width:120,background:`linear-gradient(to right,${bk},transparent)`,zIndex:2,pointerEvents:"none" }} />
      <div style={{ position:"absolute",right:0,top:0,bottom:0,width:120,background:`linear-gradient(to left,${bk},transparent)`,zIndex:2,pointerEvents:"none" }} />

      <div ref={trackRef} style={{ display:"flex",gap:GAP,willChange:"transform",width:"max-content",paddingLeft:40 }}>
        {items.map((p,i)=>(
          <div key={i} style={{ flexShrink:0,width:CARD_W,height:320,display:"flex",overflow:"hidden",border:`1px solid ${bdr}`,background:bk3,cursor:"none",transition:"border-color .3s, box-shadow .3s, transform .35s cubic-bezier(.16,1,.3,1)" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor=`${p.color}55`; e.currentTarget.style.transform="translateY(-8px)"; e.currentTarget.style.boxShadow=`0 24px 64px rgba(0,0,0,.6), 0 0 0 1px ${p.color}22`; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor=bdr; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>

            {/* LEFT — image, ~55% width */}
            <div style={{ width:"55%",flexShrink:0,position:"relative",overflow:"hidden" }}>
              <img src={p.img} alt={p.name}
                style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(.2) brightness(.8)",display:"block",transition:"filter .5s, transform .6s" }}
                onMouseEnter={e=>{ e.currentTarget.style.filter="grayscale(0) brightness(.95)"; e.currentTarget.style.transform="scale(1.06)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.filter="grayscale(.2) brightness(.8)"; e.currentTarget.style.transform="scale(1)"; }}
              />
              {/* Right-side fade into content */}
              <div style={{ position:"absolute",inset:0,background:`linear-gradient(to right,transparent 40%,${bk3} 100%)` }} />
              {/* Bottom fade */}
              <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top,${bk3} 0%,transparent 50%)` }} />
              {/* Top-left corner bracket */}
              <div style={{ position:"absolute",top:"1rem",left:"1rem",width:16,height:16,pointerEvents:"none" }}>
                <div style={{ position:"absolute",top:0,left:0,width:"100%",height:2,background:p.color,opacity:.8 }} />
                <div style={{ position:"absolute",top:0,left:0,width:2,height:"100%",background:p.color,opacity:.8 }} />
              </div>
            </div>

            {/* RIGHT — content, ~45% width */}
            <div style={{ flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"1.75rem 1.5rem 1.5rem 1rem",position:"relative",overflow:"hidden" }}>
              {/* Top accent line */}
              <div style={{ position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(to right,${p.color},transparent)`,opacity:.7 }} />

              <div>
                {/* Tags row */}
                <div style={{ display:"flex",gap:".4rem",flexWrap:"wrap",marginBottom:".85rem" }}>
                  {p.tags.map(tag=>(
                    <span key={tag} style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".4rem",color:p.color,background:`${p.color}12`,border:`1px solid ${p.color}44`,padding:".18rem .55rem",letterSpacing:".12em",textTransform:"uppercase" }}>{tag}</span>
                  ))}
                </div>

                {/* Project name */}
                <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.9rem",color:wht,letterSpacing:".05em",lineHeight:.95,marginBottom:"1rem" }}>{p.name}</h3>

                {/* Stat — prominent */}
                <div style={{ display:"flex",alignItems:"center",gap:".5rem",padding:".5rem .75rem",background:`${p.color}10`,border:`1px solid ${p.color}33`,marginBottom:"1rem" }}>
                  <div style={{ width:6,height:6,borderRadius:"50%",background:p.color,flexShrink:0,boxShadow:`0 0 8px ${p.color}` }} />
                  <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".52rem",color:p.color,letterSpacing:".08em",fontWeight:600 }}>{p.stat}</span>
                </div>

                {/* Description */}
                <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".58rem",color:mut,lineHeight:1.7 }}>{p.desc}</p>
              </div>

              {/* Bottom — read more */}
              <div style={{ display:"flex",alignItems:"center",gap:".5rem",marginTop:".75rem" }}>
                <div style={{ flex:1,height:1,background:`linear-gradient(to right,${p.color}33,transparent)` }} />
                <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".46rem",color:`${p.color}99`,letterSpacing:".15em" }}>READ MORE →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Scroll reveal hook ─────────────────────────────────────────
function useScrollReveal() {
  useEffect(()=>{
    const els = document.querySelectorAll<HTMLElement>(".rv");
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        // Map base class to triggered class
        if(el.classList.contains("rv-up"))    { el.classList.add("vis-up");    }
        else if(el.classList.contains("rv-left"))  { el.classList.add("vis-left");  }
        else if(el.classList.contains("rv-right")) { el.classList.add("vis-right"); }
        else if(el.classList.contains("rv-fade"))  { el.classList.add("vis-fade");  }
        else if(el.classList.contains("rv-scale")) { el.classList.add("vis-scale"); }
        else if(el.classList.contains("rv-char"))  { el.classList.add("vis-char");  }
        else { el.classList.add("vis-up"); }
        obs.unobserve(el);
      });
    },{ threshold:0.12, rootMargin:"0px 0px -40px 0px" });
    els.forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);
}

// ══════════════════════════════════════════════════════════════
export default function SuperteamNG() {

  const contentRef = useRef<HTMLDivElement>(null);
  const tY = useRef(0), cY = useRef(0), lastY = useRef(-1);

  const curRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0), my = useRef(0), rx = useRef(0), ry = useRef(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const heroRef       = useRef<HTMLElement>(null);
  const aboutRef      = useRef<HTMLElement>(null);
  const guildsRef     = useRef<HTMLElement>(null);
  const projectsRef   = useRef<HTMLElement>(null);
  const eventsRef     = useRef<HTMLElement>(null);
  const earnRef       = useRef<HTMLElement>(null);
  const leadsRef      = useRef<HTMLElement>(null);
  const partnersRef   = useRef<HTMLElement>(null);
  const newsRef       = useRef<HTMLElement>(null);
  const ctaRef        = useRef<HTMLElement>(null);

  const [navScrolled,    setNavScrolled]    = useState(false);
  const [showFloat,      setShowFloat]      = useState(false);
  const [navOpen,        setNavOpen]        = useState(false);
  const [visStats,       setVisStats]       = useState(false);
  const [visGuilds,      setVisGuilds]      = useState<boolean[]>(new Array(GUILDS.length).fill(false));
  const [visProjects,    setVisProjects]    = useState<boolean[]>(new Array(PROJECTS.length).fill(false));
  const [visEvents,      setVisEvents]      = useState<boolean[]>(new Array(EVENTS.length).fill(false));
  const [visEarn,        setVisEarn]        = useState<boolean[]>(new Array(EARN_CARDS.length).fill(false));
  const [visLeads,       setVisLeads]       = useState<boolean[]>(new Array(COUNTRY_LEADS.length).fill(false));
  const [visPartners,    setVisPartners]    = useState<boolean[]>(new Array(PARTNERS.length).fill(false));
  const [visNews,        setVisNews]        = useState<boolean[]>(new Array(NEWS.length).fill(false));
  const [visCta,         setVisCta]         = useState(false);
  const [activeGuild,    setActiveGuild]    = useState(0);
  const [email,          setEmail]          = useState("");

  useScrollReveal();

  const statsRef    = useRef<HTMLDivElement>(null);
  const guildRefs   = useRef<(HTMLDivElement|null)[]>([]);
  const projectRefs = useRef<(HTMLDivElement|null)[]>([]);
  const eventRefs   = useRef<(HTMLDivElement|null)[]>([]);
  const earnRefs    = useRef<(HTMLDivElement|null)[]>([]);
  const leadRefs    = useRef<(HTMLDivElement|null)[]>([]);
  const partnerRefs = useRef<(HTMLDivElement|null)[]>([]);
  const newsRefs    = useRef<(HTMLDivElement|null)[]>([]);
  const irlTrackRef = useRef<HTMLDivElement>(null);

  // ── Canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let animId: number;
    type Node = { x:number; y:number; vx:number; vy:number; r:number; pulse:number; speed:number };
    const nodes: Node[] = Array.from({ length: 55 }, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-0.5)*0.35, vy: (Math.random()-0.5)*0.35,
      r: Math.random()*1.8+0.6,
      pulse: Math.random()*Math.PI*2,
      speed: Math.random()*0.02+0.01,
    }));
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += n.speed;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const dx = nodes[i].x-nodes[j].x, dy = nodes[i].y-nodes[j].y;
          const d = Math.sqrt(dx*dx+dy*dy);
          if (d < 160) {
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,255,135,${(1-d/160)*0.18})`; ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
      }
      nodes.forEach(n => {
        const glow = (Math.sin(n.pulse)+1)/2;
        const radius = n.r + glow*1.2, alpha = 0.4 + glow*0.6;
        const grad = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,radius*4);
        grad.addColorStop(0, `rgba(0,255,135,${alpha*0.3})`); grad.addColorStop(1, "rgba(0,255,135,0)");
        ctx.beginPath(); ctx.arc(n.x,n.y,radius*4,0,Math.PI*2); ctx.fillStyle = grad; ctx.fill();
        ctx.beginPath(); ctx.arc(n.x,n.y,radius,0,Math.PI*2); ctx.fillStyle = `rgba(0,255,135,${alpha})`; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize",onResize); };
  }, []);

  // ── Mount ──
  useEffect(() => {
    if (!document.getElementById("gf-st")) {
      const l = document.createElement("link"); l.id="gf-st"; l.rel="stylesheet"; l.href=FONTS; document.head.appendChild(l);
    }
    document.body.style.background = BK; document.body.style.margin = "0";
    const isTouch = window.matchMedia("(pointer:coarse)").matches;
    if (!isTouch) document.body.style.cursor = "none";
    const syncH = () => { if (contentRef.current) document.body.style.height = `${contentRef.current.scrollHeight}px`; };
    syncH(); window.addEventListener("resize", syncH);
    document.documentElement.style.overflow = "hidden"; document.body.style.overflow = "hidden";
    const onWheel = (e: WheelEvent) => { e.preventDefault(); const max = contentRef.current ? contentRef.current.scrollHeight - window.innerHeight : 0; tY.current = Math.max(0, Math.min(tY.current + e.deltaY, max)); };
    window.addEventListener("wheel", onWheel, { passive: false });
    let lty = 0, vel = 0, lt = 0;
    const onTS = (e: TouchEvent) => { lty = e.touches[0].clientY; lt = Date.now(); vel = 0; };
    const onTM = (e: TouchEvent) => { e.preventDefault(); const now=Date.now(),cy=e.touches[0].clientY,dt=Math.max(1,now-lt),dy=lty-cy; vel=dy/dt; const max=contentRef.current?contentRef.current.scrollHeight-window.innerHeight:0; tY.current=Math.max(0,Math.min(tY.current+dy*1.2,max)); lty=cy; lt=now; };
    const onTE = () => { const go=()=>{ if(Math.abs(vel)<0.01)return; const max=contentRef.current?contentRef.current.scrollHeight-window.innerHeight:0; tY.current=Math.max(0,Math.min(tY.current+vel*16,max)); vel*=0.92; requestAnimationFrame(go); }; requestAnimationFrame(go); };
    window.addEventListener("touchstart", onTS, { passive: true }); window.addEventListener("touchmove", onTM, { passive: false }); window.addEventListener("touchend", onTE, { passive: true });
    const onMM = (e: MouseEvent) => { mx.current = e.clientX; my.current = e.clientY; };
    document.addEventListener("mousemove", onMM);
    const mkObs = (els: (HTMLElement|null)[], cb: (i:number)=>void, thresh=.12) => {
      const list: IntersectionObserver[] = [];
      els.forEach((el,i) => { if (!el) return; const o = new IntersectionObserver(([en]) => { if (en.isIntersecting) { cb(i); o.disconnect(); } }, { threshold: thresh }); o.observe(el); list.push(o); });
      return list;
    };
    const o1 = mkObs(guildRefs.current,   i => setVisGuilds(p   => { const n=[...p]; n[i]=true; return n; }));
    const o2 = mkObs(projectRefs.current, i => setVisProjects(p => { const n=[...p]; n[i]=true; return n; }));
    const o3 = mkObs(eventRefs.current,   i => setVisEvents(p   => { const n=[...p]; n[i]=true; return n; }));
    const o4 = mkObs(earnRefs.current,    i => setVisEarn(p     => { const n=[...p]; n[i]=true; return n; }));
    const o5 = mkObs(leadRefs.current,    i => setVisLeads(p    => { const n=[...p]; n[i]=true; return n; }));
    const o6 = mkObs(partnerRefs.current, i => setVisPartners(p => { const n=[...p]; n[i]=true; return n; }));
    const o7 = mkObs(newsRefs.current,    i => setVisNews(p     => { const n=[...p]; n[i]=true; return n; }));
    const sObs = new IntersectionObserver(([e])=>{ if(e.isIntersecting){setVisStats(true);sObs.disconnect();} },{threshold:.2});
    if (statsRef.current) sObs.observe(statsRef.current);
    const cObs = new IntersectionObserver(([e])=>{ if(e.isIntersecting){setVisCta(true);cObs.disconnect();} },{threshold:.15});
    if (ctaRef.current) cObs.observe(ctaRef.current);
    return () => { window.removeEventListener("resize",syncH); window.removeEventListener("wheel",onWheel); window.removeEventListener("touchstart",onTS); window.removeEventListener("touchmove",onTM); window.removeEventListener("touchend",onTE); document.removeEventListener("mousemove",onMM); document.documentElement.style.overflow=""; document.body.style.overflow=""; document.body.style.height=""; document.body.style.cursor=""; [...o1,...o2,...o3,...o4,...o5,...o6,...o7,sObs,cObs].forEach(o=>o.disconnect()); };
  }, []);

  // ── RAF ──
  useEffect(() => {
    let id: number;
    if (contentRef.current) contentRef.current.style.transform = "translateY(0px)";
    const loop = () => {
      cY.current += (tY.current - cY.current) * 0.08;
      if (Math.abs(tY.current - cY.current) < 0.04) cY.current = tY.current;
      const y = cY.current;
      if (contentRef.current) contentRef.current.style.transform = `translateY(${-y}px)`;
      if (curRef.current) { rx.current += (mx.current-rx.current)*0.1; ry.current += (my.current-ry.current)*0.1; curRef.current.style.left=`${rx.current}px`; curRef.current.style.top=`${ry.current}px`; }
      if (Math.abs(y - lastY.current) > 0.005) {
        lastY.current = y; setNavScrolled(y > 60); setShowFloat(y > 400);
        const aboutImg = aboutRef.current?.querySelector<HTMLDivElement>(".about-img");
        if (aboutImg && aboutRef.current) { const off = absTop(aboutRef.current) - y; aboutImg.style.transform = `translateY(${off * -0.12}px)`; }
      }
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => { if (ref.current) { tY.current = absTop(ref.current); setNavOpen(false); } };

  const NAV = [
    { label: "About",    ref: aboutRef },
    { label: "Guilds",   ref: guildsRef },
    { label: "Projects", ref: projectsRef },
    { label: "Events",   ref: eventsRef },
    { label: "Earn",     ref: earnRef },
    { label: "News",     ref: newsRef },
  ];

  return (
    <>
      <style>{`
        *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
        html,body { background:${BK}; color:${WHT}; }
        ::selection { background:${GRN}; color:${BK}; }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:${GRN}; border-radius:2px; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes glow     { 0%,100%{text-shadow:0 0 20px ${GRN}55} 50%{text-shadow:0 0 60px ${GRN}99, 0 0 120px ${GRN}44} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(200vh)} }
        @keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:.25} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes marqueeL { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        /* Section heading rule — small horizontal line before the tag */
        .h-rule { display:flex; align-items:center; gap:.75rem; margin-bottom:1rem; }
        .h-rule::before { content:''; display:block; width:24px; height:1.5px; background:${GRN}; opacity:.7; flex-shrink:0; }

        @keyframes lineDrawH { from{width:0;opacity:0} to{width:100%;opacity:1} }
        @keyframes lineDrawV { from{height:0;opacity:0} to{height:100%;opacity:1} }
        @keyframes linePulse { 0%,100%{opacity:.18} 50%{opacity:.55} }

        /* Corner bracket decoration */
        .deco-corner { position:absolute; width:28px; height:28px; pointer-events:none; }
        .deco-corner::before,.deco-corner::after { content:''; position:absolute; background:${GRN}; }
        .deco-corner.tl { top:0; left:0; }
        .deco-corner.tl::before { top:0;left:0;width:100%;height:1.5px; }
        .deco-corner.tl::after  { top:0;left:0;width:1.5px;height:100%; }
        .deco-corner.tr { top:0; right:0; }
        .deco-corner.tr::before { top:0;right:0;width:100%;height:1.5px; }
        .deco-corner.tr::after  { top:0;right:0;width:1.5px;height:100%; }
        .deco-corner.bl { bottom:0; left:0; }
        .deco-corner.bl::before { bottom:0;left:0;width:100%;height:1.5px; }
        .deco-corner.bl::after  { bottom:0;left:0;width:1.5px;height:100%; }
        .deco-corner.br { bottom:0; right:0; }
        .deco-corner.br::before { bottom:0;right:0;width:100%;height:1.5px; }
        .deco-corner.br::after  { bottom:0;right:0;width:1.5px;height:100%; }

        @keyframes glitchMain {
          0%,72%,100% { transform:translate(0,0) skew(0deg); }
          73%  { transform:translate(-4px, 1px) skew(-1.5deg); }
          74%  { transform:translate(4px,-1px) skew(1deg); }
          75%  { transform:translate(-2px, 2px) skew(.5deg); }
          76%  { transform:translate(0,0) skew(0deg); }
          84%  { transform:translate(3px, 0) skew(-1deg); }
          85%  { transform:translate(-3px, 1px) skew(.8deg); }
          86%  { transform:translate(0,0); }
        }
        @keyframes glitchTop {
          0%,72%,100% { transform:translate(0,0); opacity:0; clip-path:inset(0 0 100% 0); }
          73%  { transform:translate(-6px, 0); opacity:1; clip-path:inset(8% 0 55% 0); }
          74%  { transform:translate(6px, 0); opacity:.8; clip-path:inset(15% 0 60% 0); }
          75%  { transform:translate(-3px, 0); opacity:.6; clip-path:inset(5% 0 70% 0); }
          76%  { opacity:0; clip-path:inset(0 0 100% 0); }
          84%  { transform:translate(5px, 0); opacity:.9; clip-path:inset(20% 0 40% 0); }
          85%  { transform:translate(-4px, 0); opacity:.7; clip-path:inset(10% 0 65% 0); }
          86%  { opacity:0; clip-path:inset(0 0 100% 0); }
        }
        @keyframes glitchBot {
          0%,72%,100% { transform:translate(0,0); opacity:0; clip-path:inset(100% 0 0 0); }
          73%  { transform:translate(7px, 0); opacity:1; clip-path:inset(55% 0 10% 0); }
          74%  { transform:translate(-5px, 0); opacity:.8; clip-path:inset(60% 0 5% 0); }
          75%  { transform:translate(3px, 0); opacity:.5; clip-path:inset(70% 0 2% 0); }
          76%  { opacity:0; clip-path:inset(100% 0 0 0); }
          84%  { transform:translate(-6px, 0); opacity:.85; clip-path:inset(45% 0 15% 0); }
          85%  { transform:translate(4px, 0); opacity:.6; clip-path:inset(65% 0 8% 0); }
          86%  { opacity:0; clip-path:inset(100% 0 0 0); }
        }
        @keyframes glitchBar {
          0%,72%,100% { opacity:0; }
          73%,74%,75% { opacity:1; }
          76%          { opacity:0; }
          84%,85%      { opacity:1; }
          86%          { opacity:0; }
        }

        .glitch-future {
          position: relative;
          display: inline-block;
          color: ${GRN};
          animation: glitchMain 4s ease-in-out 2s infinite;
        }
        .glitch-future::before,
        .glitch-future::after {
          content: 'FUTURE';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          font-family: inherit;
          font-size: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          pointer-events: none;
        }
        .glitch-future::before {
          color: #ff2d6b;
          text-shadow: 2px 0 #ff2d6b;
          animation: glitchTop 4s ease-in-out 2s infinite;
          mix-blend-mode: screen;
        }
        .glitch-future::after {
          color: #00c8ff;
          text-shadow: -2px 0 #00c8ff;
          animation: glitchBot 4s ease-in-out 2s infinite;
          mix-blend-mode: screen;
        }
        .glitch-scanbar {
          position: absolute;
          left: -2px; right: -2px;
          height: 3px;
          background: ${GRN};
          opacity: 0;
          pointer-events: none;
          animation: glitchBar 4s ease-in-out 2s infinite;
          top: 38%;
          mix-blend-mode: overlay;
        }

        .st-nav-link { position:relative; cursor:none; transition:color .2s; }
        .st-nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:${GRN}; transition:width .3s cubic-bezier(.16,1,.3,1); }
        .st-nav-link:hover { color:${GRN} !important; }
        .st-nav-link:hover::after { width:100%; }

        .btn-grn { position:relative; overflow:hidden; transition:color .3s, transform .25s !important; cursor:none; }
        .btn-grn::before { content:''; position:absolute; inset:0; background:${WHT}; transform:scaleX(0); transform-origin:right; transition:transform .4s cubic-bezier(.16,1,.3,1); z-index:0; }
        .btn-grn:hover::before { transform:scaleX(1); transform-origin:left; }
        .btn-grn:hover { color:${BK} !important; transform:translateY(-2px) !important; }
        .btn-grn > * { position:relative; z-index:1; }

        .btn-ghost { position:relative; overflow:hidden; transition:color .3s, border-color .3s, transform .25s !important; cursor:none; }
        .btn-ghost::before { content:''; position:absolute; inset:0; background:${GRN}; transform:scaleY(0); transform-origin:bottom; transition:transform .35s cubic-bezier(.16,1,.3,1); z-index:0; }
        .btn-ghost:hover::before { transform:scaleY(1); transform-origin:top; }
        .btn-ghost:hover { color:${BK} !important; border-color:${GRN} !important; transform:translateY(-2px) !important; }
        .btn-ghost > * { position:relative; z-index:1; }

        .guild-tab { position:relative; cursor:none; transition:color .2s, background .2s; }
        .guild-tab::before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:${GRN}; transform:scaleY(0); transition:transform .3s cubic-bezier(.16,1,.3,1); }
        .guild-tab:hover::before, .guild-tab.active::before { transform:scaleY(1); }
        .guild-tab:hover, .guild-tab.active { background:rgba(0,255,135,.06) !important; color:${GRN} !important; }

        .proj-card { transition:border-color .3s, transform .4s cubic-bezier(.16,1,.3,1), box-shadow .3s !important; cursor:none; }
        .proj-card:hover { border-color:${GRN}44 !important; transform:translateY(-6px) !important; box-shadow:0 16px 48px rgba(0,255,135,.08) !important; }
        .proj-card:hover .proj-img { filter:grayscale(.2) brightness(.8) !important; transform:scale(1.04); }
        .proj-card .proj-img { transition:filter .5s, transform .5s; }

        .event-row { transition:background .2s, padding-left .3s, border-color .25s !important; cursor:none; }
        .event-row:hover { background:rgba(0,255,135,.04) !important; padding-left:2rem !important; border-left-color:${GRN} !important; }
        .event-row:hover .event-dot { background:${WHT}; transform:scale(1.5); }
        .event-dot { transition:background .2s, transform .2s; }

        .social-sq { transition:background .25s, color .25s, border-color .25s, transform .3s !important; cursor:none; }
        .social-sq:hover { background:${GRN} !important; color:${BK} !important; border-color:${GRN} !important; transform:translateY(-4px) scale(1.1) !important; }

        .partner-card { transition:border-color .3s, transform .4s cubic-bezier(.16,1,.3,1), background .3s !important; cursor:none; }
        .partner-card:hover { transform:translateY(-4px) !important; }

        .news-card { transition:border-color .3s, transform .4s cubic-bezier(.16,1,.3,1), box-shadow .3s !important; cursor:none; overflow:hidden; }
        .news-card:hover { border-color:${GRN}33 !important; transform:translateY(-6px) !important; box-shadow:0 16px 48px rgba(0,255,135,.06) !important; }
        .news-card:hover .news-img { transform:scale(1.06); filter:grayscale(.1) brightness(.75) !important; }
        .news-img { transition:transform .5s, filter .5s; }

        /* ── Line decorations ── */
        @keyframes lineGrowH { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes lineGrowV { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        @keyframes lineFadeIn { from{opacity:0} to{opacity:1} }

        .sec-heading { position:relative; display:inline-block; }
        .sec-heading::after {
          content:'';
          position:absolute;
          bottom:-10px; left:0;
          width:100%; height:1.5px;
          background:linear-gradient(to right, ${GRN}, transparent);
          transform:scaleX(0);
          transform-origin:left;
          transition:transform .7s cubic-bezier(.16,1,.3,1);
        }
        .sec-heading.vis::after { transform:scaleX(1); }

        .v-accent {
          position:absolute;
          left:-clamp(1rem,3vw,2.5rem);
          top:0; bottom:0;
          width:1.5px;
          background:linear-gradient(to bottom, transparent, ${GRN}88, transparent);
          opacity:0;
          transition:opacity .6s;
        }
        .v-accent.vis { opacity:1; }

        .h-rule {
          display:flex; align-items:center; gap:1rem;
          margin-bottom:1rem;
        }
        .h-rule::before {
          content:'';
          display:block; height:1px; width:32px;
          background:${GRN};
          flex-shrink:0;
        }

        .crosshair {
          position:absolute;
          width:20px; height:20px;
          pointer-events:none;
        }
        .crosshair::before,.crosshair::after { content:''; position:absolute; background:${GRN}; opacity:.4; }
        .crosshair::before { top:50%;left:0; width:100%;height:1px;transform:translateY(-50%); }
        .crosshair::after  { left:50%;top:0; height:100%;width:1px;transform:translateX(-50%); }

        .tick-line {
          display:flex; align-items:center; gap:.6rem;
          font-family:'IBM Plex Mono',monospace; font-size:.42rem;
          color:${GRN}66; letter-spacing:.25em; text-transform:uppercase;
        }
        .st-tag { display:inline-flex; align-items:center; gap:.4rem; font-family:'IBM Plex Mono',monospace; font-size:.5rem; letter-spacing:.3em; text-transform:uppercase; color:${GRN}; background:${GRN3}; border:1px solid ${BDR_G}; padding:.3rem .8rem; }

        @media(max-width:768px) {
          .hide-mob { display:none !important; }
          .show-mob { display:flex !important; }
        }
        @media(min-width:769px) { .show-mob { display:none !important; } }

        /* ── Scroll reveal animations ── */
        @keyframes revealUp {
          from { opacity:0; transform:translateY(70px) skewY(1.5deg); filter:blur(4px); }
          to   { opacity:1; transform:translateY(0) skewY(0deg); filter:blur(0); }
        }
        @keyframes revealLeft {
          from { opacity:0; transform:translateX(-60px); filter:blur(3px); }
          to   { opacity:1; transform:translateX(0); filter:blur(0); }
        }
        @keyframes revealRight {
          from { opacity:0; transform:translateX(60px); filter:blur(3px); }
          to   { opacity:1; transform:translateX(0); filter:blur(0); }
        }
        @keyframes revealFade {
          from { opacity:0; transform:translateY(30px); filter:blur(6px); }
          to   { opacity:1; transform:translateY(0); filter:blur(0); }
        }
        @keyframes revealScale {
          from { opacity:0; transform:scaleX(0) translateX(-20px); filter:blur(2px); }
          to   { opacity:1; transform:scaleX(1) translateX(0); filter:blur(0); }
        }
        @keyframes revealClip {
          from { opacity:0; transform:translateY(50px); clip-path:inset(0 0 100% 0); }
          to   { opacity:1; transform:translateY(0);    clip-path:inset(0 0 0% 0); }
        }

        /* Base hidden state */
        .rv { opacity:0; }

        /* Triggered states */
        .rv.vis-up    { animation: revealUp   .9s cubic-bezier(.16,1,.3,1) both; }
        .rv.vis-left  { animation: revealLeft .85s cubic-bezier(.16,1,.3,1) both; }
        .rv.vis-right { animation: revealRight .85s cubic-bezier(.16,1,.3,1) both; }
        .rv.vis-fade  { animation: revealFade 1s cubic-bezier(.16,1,.3,1) both; }
        .rv.vis-scale { animation: revealScale .7s cubic-bezier(.16,1,.3,1) both; transform-origin:left; }
        .rv.vis-char  { animation: revealClip .8s cubic-bezier(.16,1,.3,1) both; }

        /* Delay helpers */
        .rv.d1 { animation-delay:.1s; }
        .rv.d2 { animation-delay:.2s; }
        .rv.d3 { animation-delay:.32s; }
        .rv.d4 { animation-delay:.44s; }
        .rv.d5 { animation-delay:.56s; }
      `}</style>

      {/* ── Cursor ── */}
      <div ref={curRef} style={{ position:"fixed",width:32,height:32,border:`1px solid ${GRN}`,borderRadius:"50%",pointerEvents:"none",zIndex:99999,transform:"translate(-50%,-50%)",left:0,top:0,mixBlendMode:"difference" }} />
      <div style={{ position:"fixed",width:6,height:6,background:GRN,borderRadius:"50%",pointerEvents:"none",zIndex:99999,transform:"translate(-50%,-50%)",left:mx.current,top:my.current }} />

      {/* ── Scanline ── */}
      <div style={{ position:"fixed",inset:0,pointerEvents:"none",zIndex:9990,background:`repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,135,.008) 3px,rgba(0,255,135,.008) 4px)` }} />

      {/* ── NAV ── */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:500,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"clamp(.75rem,1.5vw,1.25rem) clamp(1.5rem,5vw,4rem)",background:navScrolled?"rgba(8,8,8,0.94)":"transparent",backdropFilter:navScrolled?"blur(20px)":"none",borderBottom:navScrolled?`1px solid ${BDR}`:"none",transition:"all .4s" }}>
        <div style={{ display:"flex",alignItems:"center",gap:".75rem",cursor:"none" }}>
          <img src="/logo.png" alt="SuperteamNG" style={{ height:56,width:"auto",objectFit:"contain" }} />
        </div>
        <div style={{ display:"flex",gap:"clamp(1.5rem,3vw,2.5rem)",alignItems:"center" }} className="hide-mob">
          {NAV.map(n=>(
            <span key={n.label} className="st-nav-link" onClick={()=>scrollTo(n.ref)} style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".62rem",letterSpacing:".2em",textTransform:"uppercase",color:MUT }}>
              {n.label}
            </span>
          ))}
          <a href="https://discord.gg/superteamng" target="_blank" rel="noreferrer" className="btn-grn" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".58rem",letterSpacing:".15em",textTransform:"uppercase",color:BK,background:GRN,padding:".55rem 1.4rem",textDecoration:"none",display:"inline-block" }}>
            <span>Join Discord</span>
          </a>
        </div>
        <button onClick={()=>setNavOpen(o=>!o)} className="show-mob" style={{ background:"none",border:"none",cursor:"none",padding:".25rem",flexDirection:"column",gap:5 }}>
          {[0,1,2].map(i=>(
            <span key={i} style={{ display:"block",width:22,height:1.5,background:WHT,transition:"all .3s",transform:navOpen?(i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"scaleX(0)"):"none",opacity:navOpen&&i===1?0:1 }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {navOpen&&(
        <div style={{ position:"fixed",inset:0,zIndex:490,background:"rgba(8,8,8,.98)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2.5rem" }}>
          {NAV.map(n=>(
            <span key={n.label} onClick={()=>scrollTo(n.ref)} style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2rem,8vw,3.5rem)",color:WHT,letterSpacing:".1em",cursor:"none" }}>
              {n.label}
            </span>
          ))}
          <a href="https://discord.gg/superteamng" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".7rem",letterSpacing:".2em",textTransform:"uppercase",color:BK,background:GRN,padding:".8rem 2.5rem",textDecoration:"none" }}>Join Discord</a>
        </div>
      )}

      {/* ══════════════════════ SCROLL CONTENT ══════════════════════ */}
      <div ref={contentRef} style={{ position:"fixed",top:0,left:0,width:"100%",willChange:"transform",transform:"translateY(0px)" }}>

        {/* ─── HERO ──────────────────────────────── */}
        <section ref={heroRef} style={{ position:"relative",height:"100vh",overflow:"hidden",background:BK,display:"flex",alignItems:"center" }}>
          {/* Right image */}
          <div style={{ position:"absolute",right:0,top:0,bottom:0,width:"55%",zIndex:0 }} className="hide-mob">
            <img src="https://www.superteamng.fun/assets/img-1-_nApYT3f.svg" alt="SuperteamNG builders" style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",filter:"grayscale(.35) brightness(.5) contrast(1.1)" }} />
            <div style={{ position:"absolute",inset:0,background:`linear-gradient(to right,${BK} 0%,rgba(8,8,8,.5) 25%,transparent 60%)` }} />
            <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top,${BK} 0%,transparent 50%)` }} />
          </div>
          <canvas ref={canvasRef} style={{ position:"absolute",inset:0,willChange:"transform",opacity:.9,zIndex:1 }} />
          <div style={{ position:"absolute",top:0,left:0,bottom:0,width:"55%",background:`linear-gradient(to right,${BK} 0%,rgba(8,8,8,.95) 70%,transparent 100%)`,zIndex:2,pointerEvents:"none" }} />
          <div style={{ position:"absolute",bottom:0,left:0,right:0,height:"28%",background:`linear-gradient(to top,${BK} 0%,transparent 100%)`,zIndex:2,pointerEvents:"none" }} />
          <div style={{ position:"absolute",inset:0,backgroundImage:`linear-gradient(${BDR} 1px,transparent 1px),linear-gradient(90deg,${BDR} 1px,transparent 1px)`,backgroundSize:"80px 80px",pointerEvents:"none",opacity:.5,zIndex:2 }} />
          <div style={{ position:"absolute",left:0,top:"20%",bottom:"20%",width:2,background:`linear-gradient(to bottom,transparent,${GRN},transparent)`,zIndex:3 }} />
          <div style={{ position:"absolute",top:"clamp(5rem,10vw,7rem)",right:"clamp(1.5rem,5vw,4rem)",textAlign:"right",zIndex:3 }} className="hide-mob">
            <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".45rem",color:`${GRN}66`,letterSpacing:".25em" }}>6.5244°N, 3.3792°E</div>
            <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".45rem",color:`${GRN}44`,letterSpacing:".25em",marginTop:".25rem" }}>LAGOS, NIGERIA</div>
          </div>

          {/* Content */}
          <div style={{ position:"relative",zIndex:4,padding:"0 clamp(1.5rem,8vw,6rem)",maxWidth:900 }}>
            {/* Top-left corner bracket on content */}
            <div style={{ position:"absolute",top:-20,left:"clamp(1rem,7.5vw,5.5rem)",width:32,height:32,pointerEvents:"none" }}>
              <div style={{ position:"absolute",top:0,left:0,width:32,height:1.5,background:GRN,opacity:.5 }} />
              <div style={{ position:"absolute",top:0,left:0,width:1.5,height:32,background:GRN,opacity:.5 }} />
            </div>

            <div style={{ display:"flex",alignItems:"center",gap:".75rem",marginBottom:"clamp(1.5rem,3vw,2.5rem)",animation:"fadeUp .7s .2s both",opacity:0 }}>
              <span className="st-tag">Solana · Nigeria · Africa</span>
              <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".45rem",color:`${GRN}66`,letterSpacing:".2em" }}>EST. JUNE 2023</span>
            </div>

            <h1 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(4rem,5vw,10rem)",lineHeight:.88,letterSpacing:".04em",color:WHT,animation:"fadeUp 1s .35s both",opacity:0 }}>
              BUILD THE<br />
              <span className="glitch-future">
                FUTURE
                <span className="glitch-scanbar" />
              </span><br />
              FROM NIGERIA.
            </h1>

            {/* Updated tagline */}
            <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:"clamp(.85rem,1.5vw,1.1rem)",color:GRN,lineHeight:1.6,maxWidth:500,marginTop:"clamp(1rem,2vw,1.5rem)",animation:"fadeUp .8s .6s both",opacity:0,fontStyle:"italic",letterSpacing:".05em" }}>
              "Join SuperteamNG, a community built for all"
            </p>

            <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:"clamp(.7rem,1.1vw,.85rem)",color:MUT,lineHeight:1.85,maxWidth:500,marginTop:"clamp(.75rem,1.5vw,1rem)",animation:"fadeUp .8s .7s both",opacity:0 }}>
              SuperteamNG is a community of builders — developers, designers, and writers — growing the Solana ecosystem in Africa through innovative projects and relentless collaboration.
            </p>

            {/* Updated CTA buttons */}
            <div style={{ display:"flex",gap:"1rem",marginTop:"clamp(2rem,4vw,3rem)",flexWrap:"wrap",animation:"fadeUp .8s .9s both",opacity:0 }}>
              <a href="https://discord.gg/superteamng" target="_blank" rel="noreferrer" className="btn-grn"
                style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".65rem",letterSpacing:".15em",textTransform:"uppercase",color:BK,background:GRN,padding:".9rem 2.5rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".5rem" }}>
                <span>⚡</span><span>Join Our Community</span>
              </a>
              <a href="mailto:partner@superteamng.com" className="btn-ghost"
                style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".65rem",letterSpacing:".15em",textTransform:"uppercase",color:WHT,background:"transparent",border:`1px solid ${BDR}`,padding:".9rem 2.5rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".5rem" }}>
                <span>◈</span><span>Partner With Us</span>
              </a>
            </div>

            {/* Horizontal rule after CTAs */}
            <div style={{ display:"flex",alignItems:"center",gap:"1rem",marginTop:"clamp(2rem,4vw,3rem)",animation:"fadeUp .6s 1.1s both",opacity:0 }}>
              <div style={{ flex:1,height:1,background:`linear-gradient(to right,${GRN}44,transparent)`,maxWidth:320 }} />
              <div style={{ width:4,height:4,background:GRN,opacity:.5,transform:"rotate(45deg)" }} />
            </div>
          </div>

          {/* Bottom-right corner bracket */}
          <div style={{ position:"absolute",bottom:"4rem",right:"clamp(1.5rem,5vw,4rem)",zIndex:4,pointerEvents:"none" }} className="hide-mob">
            <div style={{ position:"absolute",bottom:0,right:0,width:40,height:1.5,background:GRN,opacity:.25 }} />
            <div style={{ position:"absolute",bottom:0,right:0,width:1.5,height:40,background:GRN,opacity:.25 }} />
          </div>

          <div style={{ position:"absolute",bottom:"2.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:".5rem",animation:"fadeUp .8s 1.3s both",opacity:0,zIndex:4 }}>
            <div style={{ width:1,height:48,background:`linear-gradient(to bottom,${GRN},transparent)`,animation:"pulse 2s infinite" }} />
            <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".42rem",color:`${WHT}33`,letterSpacing:".4em",textTransform:"uppercase" }}>scroll</span>
          </div>

        </section>

        {/* ─── STATS ─────────────────────────────── */}
        <div ref={statsRef} style={{ background:`linear-gradient(to right, ${GRN2}, ${NGR})`,padding:"clamp(1.5rem,3vw,2.5rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          {/* Scan-line decoration on stats bar */}
          <div style={{ position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(to right,transparent,rgba(0,0,0,.15),transparent)`,pointerEvents:"none" }} />
          <div style={{ display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:"1.5rem",maxWidth:900,margin:"0 auto" }}>
            {STATS.map((s,i)=>(
              <div key={i} style={{ textAlign:"center",opacity:visStats?1:0,transform:visStats?"translateY(0)":"translateY(14px)",transition:`all .6s ${i*.1}s`,position:"relative" }}>
                {/* Vertical divider after each stat except last */}
                {i < STATS.length-1 && (
                  <div style={{ position:"absolute",right:"-calc(1.5rem/2 + 12px)",top:"10%",bottom:"10%",width:1,background:"rgba(0,0,0,.2)",pointerEvents:"none" }} className="hide-mob" />
                )}
                <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,5vw,3.5rem)",color:BK,lineHeight:1,letterSpacing:".05em" }}>{s.val}</div>
                {/* Small underline tick below stat value */}
                <div style={{ width:24,height:2,background:"rgba(0,0,0,.25)",margin:".2rem auto .1rem" }} />
                <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5rem",color:`${BK}88`,letterSpacing:".2em",textTransform:"uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── ABOUT ─────────────────────────────── */}
        <section ref={aboutRef} style={{ background:BK2,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:`linear-gradient(${BDR} 1px,transparent 1px),linear-gradient(90deg,${BDR} 1px,transparent 1px)`,backgroundSize:"80px 80px",opacity:.4,pointerEvents:"none" }} />
          <div style={{ position:"absolute",right:"-5%",top:"10%",width:"40vw",height:"40vw",background:`radial-gradient(circle, ${GRN}05 0%, transparent 70%)`,pointerEvents:"none" }} />
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",gap:"clamp(3rem,6vw,7rem)",alignItems:"center",maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1 }}>
            <div style={{ position:"relative",overflow:"hidden" }}>
              <div className="about-img" style={{ willChange:"transform" }}>
                <img src="https://www.superteamng.fun/assets/img-1-_nApYT3f.svg" alt="SuperteamNG builders" style={{ width:"100%",aspectRatio:"4/5",objectFit:"cover",filter:"grayscale(.2) contrast(1.05)" }} />
                <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top, ${BK2} 0%, transparent 50%)` }} />
                <div style={{ position:"absolute",inset:0,border:`1px solid ${BDR_G}` }} />
              </div>
              <div style={{ position:"absolute",bottom:"2rem",left:"2rem",background:GRN,padding:"1rem 1.5rem",zIndex:2 }}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"2.5rem",color:BK,lineHeight:1 }}>$1M+</div>
                <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".45rem",color:`${BK}88`,letterSpacing:".2em",textTransform:"uppercase" }}>Community GDP</div>
              </div>
            </div>
            <div style={{ position:"relative" }}>
              {/* Vertical left rail on about text */}
              <div style={{ position:"absolute",left:"-1.5rem",top:0,bottom:0,width:1,background:`linear-gradient(to bottom,transparent,${GRN}44,transparent)`,pointerEvents:"none" }} className="hide-mob" />
              <div className="st-tag rv rv-left" style={{ marginBottom:"1.5rem" }}>Founded June 2023</div>
              {/* Ruled heading with vertical accent */}
              <div style={{ position:"relative",paddingLeft:"clamp(.75rem,2vw,1.5rem)",marginBottom:"1.75rem" }}>
                <div style={{ position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom,${GRN},${GRN}44,transparent)` }} />
                <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,6vw,5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                  Building Solana's<br /><span style={{ color:GRN }}>Nigerian Chapter.</span>
                </h2>
              </div>
              {/* Short underline after heading */}
              <div style={{ display:"flex",alignItems:"center",gap:".5rem",marginBottom:"1.5rem" }}>
                <div style={{ width:48,height:1.5,background:GRN,opacity:.6 }} />
                <div style={{ width:6,height:6,borderRadius:"50%",background:GRN,opacity:.4 }} />
                <div style={{ width:24,height:1,background:GRN,opacity:.25 }} />
              </div>
              <p className="rv rv-up d1" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:"clamp(.7rem,1.1vw,.85rem)",color:MUT,lineHeight:1.9,marginBottom:"1.25rem" }}>
                Founded by Nzube Ezudo and Harrison Obiefule, SuperteamNG has grown from a bold idea into a movement. Our core team of 12 has helped 160+ projects get built and submitted to global hackathons — with winners emerging from Renaissance, Hyperdrive, cHack, and Radar.
              </p>
              <p className="rv rv-up d2" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:"clamp(.7rem,1.1vw,.85rem)",color:MUT,lineHeight:1.9,marginBottom:"2rem" }}>
                We are four guilds — Developers, Designers, Writers, and Content Creators — open to every builder who dares to build.
              </p>
              {/* Thin rule before CTA */}
              <div style={{ width:"100%",height:1,background:`linear-gradient(to right,${GRN}33,transparent)`,marginBottom:"1.75rem" }} />
              <a href="https://discord.gg/superteamng" target="_blank" rel="noreferrer" className="btn-ghost"
                style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".6rem",letterSpacing:".2em",textTransform:"uppercase",color:GRN,background:"transparent",border:`1px solid ${BDR_G}`,padding:".8rem 2rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".5rem" }}>
                <span>→</span><span>Join Our Community</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── GUILDS ────────────────────────────── */}
        <section ref={guildsRef} style={{ background:BK,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right, transparent, ${GRN}, transparent)` }} />
          <div style={{ maxWidth:1200,margin:"0 auto" }}>

            {/* Header */}
            <div style={{ marginBottom:"clamp(3rem,5vw,4rem)" }}>
              <div className="h-rule rv rv-left"><div className="st-tag">Our Guilds</div></div>
              <div style={{ position:"relative",paddingLeft:"clamp(.75rem,2vw,1.5rem)" }}>
                <div style={{ position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom,${GRN},transparent)` }} />
                <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,6vw,5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                  Four Guilds.<br /><span style={{ color:GRN }}>One Mission.</span>
                </h2>
              </div>
              {/* Horizontal tick rule below heading */}
              <div style={{ display:"flex",alignItems:"center",gap:".75rem",marginTop:"1.25rem" }}>
                <div style={{ width:48,height:1,background:GRN,opacity:.5 }} />
                <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".4rem",color:`${GRN}55`,letterSpacing:".3em" }}>SELECT A GUILD</div>
                <div style={{ flex:1,height:1,background:`linear-gradient(to right,${GRN}22,transparent)` }} />
              </div>
            </div>

            {/* Main panel: tabs left + content right */}
            <div style={{ display:"grid",gridTemplateColumns:"260px 1fr",gap:0,border:`1px solid ${BDR}`,minHeight:480,background:BK3 }} className="hide-mob">

              {/* Tab column */}
              <div style={{ borderRight:`1px solid ${BDR}`,display:"flex",flexDirection:"column" }}>
                {GUILDS.map((g,i)=>(
                  <div key={i} ref={el=>{guildRefs.current[i]=el;}}
                    onClick={()=>setActiveGuild(i)}
                    style={{
                      padding:"1.5rem 1.75rem",
                      borderLeft:`3px solid ${activeGuild===i?GRN:"transparent"}`,
                      borderBottom:`1px solid ${BDR}`,
                      background:activeGuild===i?`rgba(0,255,135,.06)`:"transparent",
                      cursor:"none",
                      transition:"background .25s, border-color .25s",
                      opacity:visGuilds[i]?1:0,
                      transform:visGuilds[i]?"translateX(0)":"translateX(-16px)",
                      transitionProperty:"background, border-color, opacity, transform",
                      transitionDuration:`.25s, .25s, .5s, .5s`,
                      transitionDelay:`0s, 0s, ${i*.08}s, ${i*.08}s`,
                    }}
                    onMouseEnter={e=>{ if(activeGuild!==i) e.currentTarget.style.background="rgba(255,255,255,.03)"; }}
                    onMouseLeave={e=>{ if(activeGuild!==i) e.currentTarget.style.background="transparent"; }}
                  >
                    <div style={{ display:"flex",alignItems:"center",gap:".85rem",marginBottom:".3rem" }}>
                      <span style={{ fontSize:"1.1rem",opacity:activeGuild===i?1:.6,transition:"opacity .2s" }}>{g.icon}</span>
                      <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.35rem",color:activeGuild===i?GRN:WHT,letterSpacing:".08em",transition:"color .2s" }}>{g.name}</div>
                    </div>
                    <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".44rem",color:MUT,letterSpacing:".15em",paddingLeft:"1.95rem" }}>GUILD {g.id}</div>
                  </div>
                ))}
                {/* Bottom filler */}
                <div style={{ flex:1,borderLeft:`3px solid transparent` }} />
              </div>

              {/* Content panel */}
              {GUILDS.map((g,i)=> i!==activeGuild ? null : (
                <div key={g.id} style={{ display:"grid",gridTemplateColumns:"1fr 1fr",animation:"fadeIn .35s both" }}>

                  {/* Text side */}
                  <div style={{ padding:"2.5rem 2.5rem 2.5rem",display:"flex",flexDirection:"column",justifyContent:"center",borderRight:`1px solid ${BDR}` }}>
                    <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".44rem",color:GRN,letterSpacing:".3em",textTransform:"uppercase",marginBottom:".75rem" }}>
                      Guild {g.id} — {g.name}
                    </div>
                    <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,4vw,4rem)",color:WHT,lineHeight:.9,letterSpacing:".04em",marginBottom:"1.5rem" }}>
                      {g.name}<br /><span style={{ color:GRN }}>Guild.</span>
                    </div>
                    <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".72rem",color:MUT,lineHeight:1.9,marginBottom:"1.75rem" }}>{g.desc}</p>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:".5rem",marginBottom:"2rem" }}>
                      {g.skills.map(s=>(
                        <span key={s} style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".48rem",color:GRN,border:`1px solid ${BDR_G}`,background:`${GRN}08`,padding:".25rem .65rem",letterSpacing:".1em" }}>{s}</span>
                      ))}
                    </div>
                    <a href="https://discord.gg/superteamng" target="_blank" rel="noreferrer" className="btn-grn"
                      style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".58rem",letterSpacing:".15em",textTransform:"uppercase",color:BK,background:GRN,padding:".75rem 2rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".5rem",alignSelf:"flex-start" }}>
                      <span>Join {g.name} Guild →</span>
                    </a>
                  </div>

                  {/* Image side */}
                  <div style={{ position:"relative",overflow:"hidden",minHeight:420 }}>
                    <img src={g.img} alt={g.name}
                      style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(.25) contrast(1.05) brightness(.75)",display:"block",transition:"filter .5s" }} />
                    {/* Gradient overlay */}
                    <div style={{ position:"absolute",inset:0,background:`linear-gradient(to right,${BK3} 0%,transparent 40%),linear-gradient(to top,${BK3} 0%,transparent 50%)` }} />
                    {/* Giant watermark icon */}
                    <div style={{ position:"absolute",bottom:"-1rem",right:"1rem",fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(5rem,10vw,8rem)",color:`${WHT}06`,lineHeight:1,pointerEvents:"none",userSelect:"none" }}>{g.icon}</div>
                    {/* Guild name overlay */}
                    <div style={{ position:"absolute",top:"1.5rem",right:"1.5rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".42rem",color:`${GRN}88`,letterSpacing:".3em",textTransform:"uppercase",background:`${BK}88`,border:`1px solid ${BDR_G}`,padding:".25rem .65rem",backdropFilter:"blur(4px)" }}>
                      {g.name} · Active
                    </div>
                    {/* Corner accent */}
                    <div style={{ position:"absolute",bottom:0,left:0,width:"100%",height:2,background:`linear-gradient(to right,${GRN},transparent)` }} />
                  </div>

                </div>
              ))}
            </div>

            {/* Mobile: stacked accordion-style cards */}
            <div className="show-mob" style={{ flexDirection:"column",gap:"1px",background:BDR,display:"none" }}>
              {GUILDS.map((g,i)=>(
                <div key={i} style={{ background:BK3,overflow:"hidden" }}>
                  {/* Mobile tab header */}
                  <div onClick={()=>setActiveGuild(activeGuild===i?-1:i)}
                    style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1.25rem 1.5rem",borderLeft:`3px solid ${activeGuild===i?GRN:"transparent"}`,cursor:"none",transition:"border-color .2s" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:".75rem" }}>
                      <span style={{ fontSize:"1.1rem" }}>{g.icon}</span>
                      <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.4rem",color:activeGuild===i?GRN:WHT,letterSpacing:".08em" }}>{g.name}</div>
                    </div>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".7rem",color:GRN,transition:"transform .3s",display:"inline-block",transform:activeGuild===i?"rotate(90deg)":"rotate(0deg)" }}>›</span>
                  </div>
                  {/* Mobile expanded content */}
                  {activeGuild===i&&(
                    <div style={{ animation:"fadeIn .3s both" }}>
                      <img src={g.img} alt={g.name} style={{ width:"100%",height:200,objectFit:"cover",filter:"grayscale(.3) brightness(.7)",display:"block" }} />
                      <div style={{ padding:"1.5rem" }}>
                        <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".7rem",color:MUT,lineHeight:1.8,marginBottom:"1.25rem" }}>{g.desc}</p>
                        <div style={{ display:"flex",flexWrap:"wrap",gap:".4rem",marginBottom:"1.25rem" }}>
                          {g.skills.map(s=>(
                            <span key={s} style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".48rem",color:GRN,border:`1px solid ${BDR_G}`,background:`${GRN}08`,padding:".2rem .55rem",letterSpacing:".1em" }}>{s}</span>
                          ))}
                        </div>
                        <a href="https://discord.gg/superteamng" target="_blank" rel="noreferrer" className="btn-grn"
                          style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".58rem",letterSpacing:".15em",textTransform:"uppercase",color:BK,background:GRN,padding:".7rem 1.75rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".5rem" }}>
                          <span>Join Guild →</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── PROJECTS ──────────────────────────── */}
        <section ref={projectsRef} style={{ background:BK2,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right, transparent, ${GRN}, transparent)` }} />

          <div style={{ maxWidth:1300,margin:"0 auto" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"clamp(3rem,5vw,5rem)",flexWrap:"wrap",gap:"1rem" }}>
              <div>
                <div className="h-rule rv rv-left"><div className="st-tag" style={{ marginBottom:0 }}>Our Members Are Building</div></div>
                <div style={{ position:"relative",paddingLeft:"clamp(.75rem,2vw,1.5rem)",marginTop:".75rem",marginBottom:"1.25rem" }}>
                  <div style={{ position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom,${GRN},transparent)` }} />
                  <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,6vw,5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                    A Community Where<br /><span style={{ color:GRN }}>Builders Thrive.</span>
                  </h2>
                </div>
                <p className="rv rv-fade d1" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:"clamp(.7rem,1.1vw,.85rem)",color:MUT,lineHeight:1.9,maxWidth:600 }}>
                  Since our launch in June 2023, our community members have built over 60 projects on the Solana network pushing its expansion beyond limits. Check out what we have.
                </p>
              </div>
              <a href="#" className="hide-mob btn-ghost" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".58rem",letterSpacing:".15em",textTransform:"uppercase",color:GRN,background:"transparent",border:`1px solid ${BDR_G}`,padding:".65rem 1.5rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".4rem" }}>
                <span>View All Projects →</span>
              </a>
            </div>

            {/* ── Desktop: static grid ── */}
            <div className="hide-mob" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,360px),1fr))",gap:"1px",background:BDR }}>
              {PROJECTS.map((p,i)=>(
                <div key={i} ref={el=>{projectRefs.current[i]=el;}}
                  className="proj-card"
                  style={{ background:BK2,border:`1px solid transparent`,overflow:"hidden",opacity:visProjects[i]?1:0,transform:visProjects[i]?"translateY(0)":"translateY(20px)",transition:`opacity .6s ${i*.07}s, transform .6s ${i*.07}s, border-color .3s, box-shadow .3s` }}>
                  <div style={{ height:250,overflow:"hidden",position:"relative" }}>
                    <img src={p.img} alt={p.name} className="proj-img"
                      style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(.6) brightness(.5)",display:"block" }} />
                    <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top,${BK2} 0%,transparent 60%)` }} />
                  </div>
                  <div style={{ padding:"1.5rem 1.75rem 2rem" }}>
                    <div style={{ display:"flex",gap:".4rem",flexWrap:"wrap",marginBottom:".75rem" }}>
                      {p.tags.map(tag=>(
                        <span key={tag} style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".44rem",color:p.color,background:`${p.color}14`,border:`1px solid ${p.color}33`,padding:".18rem .55rem",letterSpacing:".12em",textTransform:"uppercase" }}>{tag}</span>
                      ))}
                    </div>
                    <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.8rem",color:WHT,letterSpacing:".06em",marginBottom:".6rem",lineHeight:1 }}>{p.name}</h3>
                    <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".65rem",color:MUT,lineHeight:1.75,marginBottom:"1.25rem" }}>{p.desc}</p>
                    <a href="#" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".55rem",color:p.color,textDecoration:"none",letterSpacing:".1em",borderBottom:`1px solid ${p.color}44`,paddingBottom:"2px",cursor:"none" }}>
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Mobile: parallax drag carousel ── */}
            <MobileProjCarousel projects={PROJECTS} bk={BK} bk2={BK2} bk3={BK3} bdr={BDR} bdr_g={BDR_G} grn={GRN} mut={MUT} wht={WHT} />
          </div>
        </section>

        {/* ─── PROOF OF WORK ─────────────────────── */}
        <section style={{ background:BK2,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${GRN},transparent)` }} />
          <div style={{ position:"absolute",inset:0,backgroundImage:`linear-gradient(${BDR} 1px,transparent 1px),linear-gradient(90deg,${BDR} 1px,transparent 1px)`,backgroundSize:"80px 80px",opacity:.25,pointerEvents:"none" }} />
          {/* Background glow */}
          <div style={{ position:"absolute",left:"50%",top:"40%",transform:"translate(-50%,-50%)",width:"55vw",height:"55vw",background:`radial-gradient(circle,${GRN}05 0%,transparent 65%)`,pointerEvents:"none" }} />

          <div style={{ maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1 }}>

            {/* Two-column layout: text left, cards right */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",gap:"clamp(3rem,6vw,6rem)",alignItems:"start" }}>

              {/* Left — text + download CTA */}
              <div>
                <div className="h-rule rv rv-left"><div className="st-tag" style={{ marginBottom:0 }}>2025 Impact Report</div></div>
                <div style={{ position:"relative",paddingLeft:"clamp(.75rem,2vw,1.5rem)",marginTop:".75rem",marginBottom:"1.5rem" }}>
                  <div style={{ position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom,${GRN},transparent)` }} />
                  <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,6vw,4.5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                    Proof of<br /><span style={{ color:GRN }}>Work.</span>
                  </h2>
                </div>

                {/* Short underline */}
                <div style={{ display:"flex",alignItems:"center",gap:".5rem",marginBottom:"1.5rem" }}>
                  <div style={{ width:48,height:1.5,background:GRN,opacity:.6 }} />
                  <div style={{ width:6,height:6,borderRadius:"50%",background:GRN,opacity:.4 }} />
                  <div style={{ width:24,height:1,background:GRN,opacity:.25 }} />
                </div>

                <p className="rv rv-fade d1" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:"clamp(.7rem,1.1vw,.85rem)",color:MUT,lineHeight:1.95,marginBottom:"2.5rem" }}>
                  In 2025, Superteam Nigeria evolved from a grassroots community into a sovereign economic engine. We incubated and integrated revenue-generating products, generated tangible economic value, fostered institutional trust, and built the infrastructure for a digital nation state.
                </p>

                {/* Horizontal rule before download */}
                <div style={{ width:"100%",height:1,background:`linear-gradient(to right,${GRN}33,transparent)`,marginBottom:"1.75rem" }} />

                <a href="/proof-of-work.pdf" download
                  className="btn-grn"
                  style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".62rem",letterSpacing:".15em",textTransform:"uppercase",color:BK,background:GRN,padding:".9rem 2.5rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".65rem" }}>
                  <span style={{ fontSize:"1rem" }}>↓</span>
                  <span>Download Proof of Work</span>
                </a>

                {/* Small note below btn */}
                <div style={{ marginTop:"1rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".44rem",color:`${WHT}28`,letterSpacing:".15em" }}>
                  PDF · 2025 Annual Impact Report
                </div>
              </div>

              {/* Right — three proof cards */}
              <div style={{ display:"flex",flexDirection:"column",gap:"1px",background:BDR }}>

                {[
                  {
                    Icon: Users,
                    label:"Strategic Partner",
                    headline:"Public-Sector Engagement",
                    desc:"Formal engagement with Federal Ministry of Youth Development.",
                    color:"#60A5FA",
                    num:"01",
                  },
                  {
                    Icon: Trophy,
                    label:"Top Ranked",
                    headline:"Global Competitiveness",
                    desc:"Consistently winning global hackathons and executing high-leverage bounties.",
                    color:GRN,
                    num:"02",
                  },
                  {
                    Icon: Lightbulb,
                    label:"Product Scale",
                    headline:"FAT Thesis",
                    desc:"Incubated products like Ribh and NectarFi processing millions in volume.",
                    color:"#A78BFA",
                    num:"03",
                  },
                ].map((card,i)=>(
                  <div key={i}
                    style={{ background:BK3,padding:"2rem 2rem 2.25rem",position:"relative",overflow:"hidden",transition:"background .25s",cursor:"none" }}
                    onMouseEnter={e=>{ e.currentTarget.style.background=BK4; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background=BK3; }}
                  >
                    {/* Top color accent */}
                    <div style={{ position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(to right,${card.color},transparent)`,opacity:.7 }} />

                    {/* Card header */}
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.25rem" }}>
                      <div style={{ display:"flex",alignItems:"center",gap:".75rem" }}>
                        <div style={{ width:40,height:40,background:`${card.color}14`,border:`1px solid ${card.color}33`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                          <card.Icon size={18} color={card.color} strokeWidth={1.5} />
                        </div>
                        <div>
                          <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".42rem",color:card.color,letterSpacing:".25em",textTransform:"uppercase",marginBottom:".2rem" }}>{card.label}</div>
                          <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.35rem",color:WHT,letterSpacing:".06em",lineHeight:1 }}>{card.headline}</div>
                        </div>
                      </div>
                      <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".48rem",color:`${WHT}22`,letterSpacing:".15em" }}>{card.num}</span>
                    </div>

                    <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".65rem",color:MUT,lineHeight:1.8,paddingLeft:"3.25rem" }}>{card.desc}</p>

                    {/* Bottom corner bracket */}
                    <div style={{ position:"absolute",bottom:0,right:0,width:16,height:16,pointerEvents:"none" }}>
                      <div style={{ position:"absolute",bottom:0,right:0,width:"100%",height:1,background:card.color,opacity:.25 }} />
                      <div style={{ position:"absolute",bottom:0,right:0,width:1,height:"100%",background:card.color,opacity:.25 }} />
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* ─── EVENTS ────────────────────────────── */}
        <section ref={eventsRef} style={{ background:BK,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right, transparent, ${GRN}, transparent)` }} />
          <div style={{ position:"absolute",inset:0,backgroundImage:`linear-gradient(${BDR} 1px,transparent 1px),linear-gradient(90deg,${BDR} 1px,transparent 1px)`,backgroundSize:"80px 80px",opacity:.3,pointerEvents:"none" }} />
          <div style={{ maxWidth:1000,margin:"0 auto",position:"relative",zIndex:1 }}>
            <div style={{ marginBottom:"clamp(3rem,5vw,5rem)" }}>
              <div className="h-rule rv rv-left"><div className="st-tag">Regular Meetings</div></div>
              <div style={{ position:"relative",paddingLeft:"clamp(.75rem,2vw,1.5rem)",marginTop:".75rem" }}>
                <div style={{ position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom,${GRN},transparent)` }} />
                <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,6vw,5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                  Guild Calls &<br /><span style={{ color:GRN }}>Events.</span>
                </h2>
              </div>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:0,border:`1px solid ${BDR}` }}>
              {EVENTS.map((e,i)=>(
                <div key={i} ref={el=>{eventRefs.current[i]=el;}}
                  className="event-row"
                  style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1.5rem 1.75rem",borderLeft:`2px solid ${BDR}`,borderBottom:i<EVENTS.length-1?`1px solid ${BDR}`:"none",gap:"1rem",flexWrap:"wrap",opacity:visEvents[i]?1:0,transform:visEvents[i]?"translateX(0)":"translateX(-12px)",transition:`opacity .5s ${i*.08}s, transform .5s ${i*.08}s, background .2s, padding-left .3s, border-color .25s` }}>
                  <div style={{ display:"flex",alignItems:"center",gap:"1.25rem" }}>
                    <div className="event-dot" style={{ width:8,height:8,borderRadius:"50%",background:GRN,flexShrink:0 }} />
                    <div>
                      <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".75rem",color:WHT,fontWeight:500 }}>{e.name}</div>
                      <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".52rem",color:MUT,marginTop:".2rem",letterSpacing:".1em" }}>{e.freq}</div>
                    </div>
                  </div>
                  <div style={{ display:"flex",alignItems:"center",gap:"1.5rem" }}>
                    <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".6rem",color:GRN,letterSpacing:".2em" }}>{e.time}</div>
                    <a href="https://discord.gg/superteamng" target="_blank" rel="noreferrer" className="btn-grn"
                      style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".52rem",letterSpacing:".15em",textTransform:"uppercase",color:BK,background:GRN,padding:".45rem 1.1rem",textDecoration:"none",display:"inline-flex",alignItems:"center",whiteSpace:"nowrap" }}>
                      <span>Register →</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── IRL IMAGE MARQUEE (continuous + slidable) ─── */}
        <div style={{ overflow:"hidden",borderTop:`1px solid ${BDR}`,borderBottom:`1px solid ${BDR}`,height:220,position:"relative",cursor:"grab" }}
          onMouseDown={e => {
            const track = irlTrackRef.current; if (!track) return;
            track.style.animationPlayState = "paused";
            const startX = e.clientX, startLeft = parseInt(track.style.marginLeft||"0");
            const onMove = (ev: MouseEvent) => { track.style.marginLeft = `${startLeft + ev.clientX - startX}px`; };
            const onUp   = () => { document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp); track.style.animationPlayState = "running"; };
            document.addEventListener("mousemove", onMove);
            document.addEventListener("mouseup", onUp);
          }}
          onTouchStart={e => {
            const track = irlTrackRef.current; if (!track) return;
            track.style.animationPlayState = "paused";
            const startX = e.touches[0].clientX, startLeft = parseInt(track.style.marginLeft||"0");
            const onMove = (ev: TouchEvent) => { track.style.marginLeft = `${startLeft + ev.touches[0].clientX - startX}px`; };
            const onEnd  = () => { document.removeEventListener("touchmove", onMove); document.removeEventListener("touchend", onEnd); track.style.animationPlayState = "running"; };
            document.addEventListener("touchmove", onMove, {passive:true});
            document.addEventListener("touchend", onEnd, {passive:true});
          }}
        >
          <div style={{ position:"absolute",left:0,top:0,bottom:0,width:80,background:`linear-gradient(to right,${BK2},transparent)`,zIndex:2,pointerEvents:"none" }} />
          <div style={{ position:"absolute",right:0,top:0,bottom:0,width:80,background:`linear-gradient(to left,${BK2},transparent)`,zIndex:2,pointerEvents:"none" }} />
          {/* Continuous: 3x repeat so it never shows a gap */}
          <div ref={irlTrackRef} style={{ display:"flex",gap:"1rem",animation:"marqueeL 40s linear infinite",height:"100%",alignItems:"center",paddingLeft:"1rem",willChange:"transform",width:"max-content" }}>
            {[...IRL_IMAGES,...IRL_IMAGES,...IRL_IMAGES].map((src,i)=>(
              <div key={i} style={{ flexShrink:0,width:300,height:190,overflow:"hidden",position:"relative",border:`1px solid ${BDR}` }}>
                <img src={src} alt={`IRL ${i}`} draggable={false}
                  style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(.35) brightness(.7)",transition:"filter .4s" }}
                  onMouseEnter={e=>e.currentTarget.style.filter="grayscale(0) brightness(.9)"}
                  onMouseLeave={e=>e.currentTarget.style.filter="grayscale(.35) brightness(.7)"}
                />
                <div style={{ position:"absolute",inset:0,background:`linear-gradient(135deg,${BK}44,transparent)` }} />
                <div style={{ position:"absolute",top:".6rem",left:".6rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".4rem",color:GRN,background:`${GRN}14`,border:`1px solid ${BDR_G}`,padding:".18rem .5rem",letterSpacing:".2em" }}>IRL</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TEXT MARQUEE ─────────────────────── */}
        <div style={{ background:BK2,overflow:"hidden",padding:"1.1rem 0",borderBottom:`1px solid ${BDR}` }}>
          <div style={{ display:"flex",gap:0,whiteSpace:"nowrap",animation:"marqueeL 18s linear infinite" }}>
            {[...Array(8)].map((_,i)=>(
              <span key={i} style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.2rem,2.5vw,2rem)",color:`${WHT}44`,padding:"0 3rem",letterSpacing:".2em" }}>
                DEVELOPERS<span style={{ color:GRN,margin:"0 2rem" }}>·</span>
                DESIGNERS<span style={{ color:GRN,margin:"0 2rem" }}>·</span>
                WRITERS<span style={{ color:GRN,margin:"0 2rem" }}>·</span>
                CONTENT CREATION<span style={{ color:GRN,margin:"0 2rem" }}>·</span>
                BUILDERS<span style={{ color:GRN,margin:"0 2rem" }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── COUNTRY LEADS ─────────────────────────────── */}
        <section ref={leadsRef} style={{ background:BK,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${GRN},transparent)` }} />
          <div style={{ position:"absolute",inset:0,backgroundImage:`linear-gradient(${BDR} 1px,transparent 1px),linear-gradient(90deg,${BDR} 1px,transparent 1px)`,backgroundSize:"80px 80px",opacity:.3,pointerEvents:"none" }} />
          <div style={{ maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1 }}>
            <div style={{ marginBottom:"clamp(3rem,5vw,5rem)" }}>
              <div className="h-rule rv rv-left"><div className="st-tag">Leadership</div></div>
              <div style={{ position:"relative",paddingLeft:"clamp(.75rem,2vw,1.5rem)",marginTop:".75rem" }}>
                <div style={{ position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom,${GRN},transparent)` }} />
                <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,6vw,5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                  Co-Founders &<br /><span style={{ color:GRN }}>Country Leads.</span>
                </h2>
              </div>
            </div>

            {/* ── Co-founders — responsive: image top, text bottom ── */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"clamp(1.5rem,3vw,2rem)",marginBottom:"clamp(2.5rem,4vw,4rem)" }}>
              {COFOUNDERS.map((l,i)=>(
                <div key={i} style={{ background:BK3,border:`1px solid ${GRN}22`,position:"relative",overflow:"hidden" }}>
                  <div style={{ position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(to right,${GRN},transparent)` }} />
                  {/* Image — full width, fixed height */}
                  <div style={{ position:"relative",overflow:"hidden",height:350 }}>
                    <img src={l.img} alt={l.name} style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",filter:"grayscale(.15)",display:"block",transition:"filter .4s, transform .4s" }}
                      onMouseEnter={e=>{ e.currentTarget.style.filter="grayscale(0)"; e.currentTarget.style.transform="scale(1.03)"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.filter="grayscale(.15)"; e.currentTarget.style.transform="scale(1)"; }}
                    />
                    {/* Bottom gradient fade */}
                    <div style={{ position:"absolute",bottom:0,left:0,right:0,height:"50%",background:`linear-gradient(to top,${BK3},transparent)` }} />
                    {/* Corner brackets */}
                    <div style={{ position:"absolute",top:0,left:0,width:16,height:2,background:GRN }} />
                    <div style={{ position:"absolute",top:0,left:0,width:2,height:16,background:GRN }} />
                    <div style={{ position:"absolute",top:0,right:0,width:16,height:2,background:GRN,opacity:.4 }} />
                    <div style={{ position:"absolute",top:0,right:0,width:2,height:16,background:GRN,opacity:.4 }} />
                    {/* CO-FOUNDER badge */}
                    <div style={{ position:"absolute",bottom:"1rem",left:"1rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".38rem",color:GRN,background:`${BK}CC`,border:`1px solid ${BDR_G}`,padding:".2rem .6rem",letterSpacing:".2em",backdropFilter:"blur(4px)" }}>CO-FOUNDER</div>
                  </div>
                  {/* Text below image */}
                  <div style={{ padding:"1.25rem 1.5rem 1.5rem" }}>
                    <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.7rem",color:WHT,letterSpacing:".06em",lineHeight:1,marginBottom:".25rem" }}>{l.name}</div>
                    <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".48rem",color:GRN,letterSpacing:".2em",textTransform:"uppercase",marginBottom:"1rem" }}>{l.role}</div>
                    <a href={`https://twitter.com/${l.handles.twitter.replace("@","")}`} target="_blank" rel="noreferrer"
                      style={{ display:"inline-flex",alignItems:"center",gap:".5rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".58rem",color:WHT,background:BK4,border:`1px solid ${BDR}`,padding:".4rem .85rem",textDecoration:"none",letterSpacing:".08em",cursor:"none",transition:"border-color .2s,color .2s" }}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor=GRN;e.currentTarget.style.color=GRN;}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor=BDR;e.currentTarget.style.color=WHT;}}
                    >
                      <span style={{ fontSize:".72rem" }}>𝕏</span>
                      <span>{l.handles.twitter}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ display:"flex",alignItems:"center",gap:"1.5rem",marginBottom:"clamp(2rem,3vw,3rem)" }}>
              <div style={{ flex:1,height:1,background:`linear-gradient(to right,transparent,${BDR})` }} />
              <span className="st-tag">Country Leads</span>
              <div style={{ flex:1,height:1,background:`linear-gradient(to left,transparent,${BDR})` }} />
            </div>

            {/* Country Leads — continuous RAF carousel */}
            <LeadsCarousel leads={COUNTRY_LEADS} bk={BK} bk3={BK3} bk4={BK4} bdr={BDR} bdr_g={BDR_G} grn={GRN} mut={MUT} wht={WHT} />

          </div>
        </section>

        {/* ─── EARN ──────────────────────────────── */}
        <section ref={earnRef} style={{ background:BK2,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${GRN},transparent)` }} />
          <div style={{ position:"absolute",right:"-5%",bottom:"10%",width:"40vw",height:"40vw",background:`radial-gradient(circle,${GRN}05 0%,transparent 70%)`,pointerEvents:"none" }} />
          <div style={{ maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1 }}>
            <div style={{ marginBottom:"clamp(3rem,5vw,5rem)" }}>
              <div className="h-rule rv rv-left"><div className="st-tag">Opportunities</div></div>
              <div style={{ position:"relative",paddingLeft:"clamp(.75rem,2vw,1.5rem)",marginTop:".75rem",marginBottom:"1rem" }}>
                <div style={{ position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom,${GRN},transparent)` }} />
                <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,6vw,5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                  Multiple Ways<br /><span style={{ color:GRN }}>to Earn.</span>
                </h2>
              </div>
              <p className="rv rv-fade d1" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:"clamp(.7rem,1.1vw,.85rem)",color:MUT,lineHeight:1.85,maxWidth:540 }}>
                Discover bounties, hackathons, instagrants, and more. SuperteamNG puts real earning opportunities directly in your hands.
              </p>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,340px),1fr))",gap:"1px",background:BDR,marginBottom:"1px" }}>
              {EARN_CARDS.slice(0,3).map((c,i)=>(
                <div key={i} ref={el=>{earnRefs.current[i]=el;}}
                  style={{ background:BK3,padding:"2rem 2rem 2.5rem",position:"relative",overflow:"hidden",cursor:"none",opacity:visEarn[i]?1:0,transform:visEarn[i]?"translateY(0)":"translateY(20px)",transition:`opacity .6s ${i*.08}s,transform .6s ${i*.08}s`,borderBottom:`1px solid ${BDR}` }}
                  onMouseEnter={e=>{e.currentTarget.style.background=BK4;}} onMouseLeave={e=>{e.currentTarget.style.background=BK3;}}>
                  <div style={{ position:"absolute",top:0,left:0,right:0,height:2,background:c.color,opacity:.6 }} />
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.5rem" }}>
                    {/* Logo */}
                    <div style={{ width:48,height:48,background:`${c.color}12`,border:`1px solid ${c.color}33`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                      <img src={c.logo} alt={c.title} style={{ width:"100%",height:"100%",objectFit:"cover" }}
                        onError={e=>{ e.currentTarget.style.display="none"; (e.currentTarget.parentElement as HTMLElement).innerHTML=`<span style="font-size:1.4rem">${c.icon}</span>`; }} />
                    </div>
                    <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".52rem",color:c.color,letterSpacing:".2em" }}>{c.id}</span>
                  </div>
                  <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.8rem",color:WHT,letterSpacing:".06em",marginBottom:".75rem",lineHeight:1 }}>{c.title}</h3>
                  <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".65rem",color:MUT,lineHeight:1.8,marginBottom:"1.5rem" }}>{c.desc}</p>
                  <a href={c.href} target="_blank" rel="noreferrer" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".55rem",color:c.color,textDecoration:"none",letterSpacing:".1em",borderBottom:`1px solid ${c.color}44`,paddingBottom:"2px",cursor:"none" }}>{c.cta} →</a>
                </div>
              ))}
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,480px),1fr))",gap:"1px",background:BDR }}>
              {EARN_CARDS.slice(3).map((c,i)=>(
                <div key={i} ref={el=>{earnRefs.current[i+3]=el;}}
                  style={{ background:BK3,padding:"2rem 2rem 2.5rem",position:"relative",overflow:"hidden",cursor:"none",opacity:visEarn[i+3]?1:0,transform:visEarn[i+3]?"translateY(0)":"translateY(20px)",transition:`opacity .6s ${(i+3)*.08}s,transform .6s ${(i+3)*.08}s` }}
                  onMouseEnter={e=>{e.currentTarget.style.background=BK4;}} onMouseLeave={e=>{e.currentTarget.style.background=BK3;}}>
                  <div style={{ position:"absolute",top:0,left:0,right:0,height:2,background:c.color,opacity:.6 }} />
                  <div style={{ display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem" }}>
                    {/* Logo */}
                    <div style={{ width:48,height:48,background:`${c.color}12`,border:`1px solid ${c.color}33`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                      <img src={c.logo} alt={c.title} style={{ width:"100%",height:"100%",objectFit:"cover" }}
                        onError={e=>{ e.currentTarget.style.display="none"; (e.currentTarget.parentElement as HTMLElement).innerHTML=`<span style="font-size:1.4rem">${c.icon}</span>`; }} />
                    </div>
                    <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.8rem",color:WHT,letterSpacing:".06em",lineHeight:1 }}>{c.title}</h3>
                  </div>
                  <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".65rem",color:MUT,lineHeight:1.8,marginBottom:"1.5rem" }}>{c.desc}</p>
                  <a href={c.href} target="_blank" rel="noreferrer" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".55rem",color:c.color,textDecoration:"none",letterSpacing:".1em",borderBottom:`1px solid ${c.color}44`,paddingBottom:"2px",cursor:"none" }}>{c.cta} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PARTNERS — logo slider ─────────────── */}
        <section ref={partnersRef} style={{ background:BK2,padding:"clamp(4rem,8vw,7rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${GRN},transparent)` }} />
          <div style={{ position:"absolute",bottom:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${BDR},transparent)` }} />
          <div style={{ maxWidth:1200,margin:"0 auto" }}>
            {/* Header row */}
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem",marginBottom:"clamp(2.5rem,4vw,4rem)" }}>
              <div>
                <div className="h-rule rv rv-left" style={{ marginBottom:".6rem" }}><div className="st-tag" style={{ marginBottom:0 }}>Ecosystem</div></div>
                <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2rem,4vw,3.5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                  SuperteamNG <span style={{ color:GRN }}>Partners.</span>
                </h2>
              </div>
              <a href="mailto:partner@superteamng.com" className="btn-ghost"
                style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".58rem",letterSpacing:".15em",textTransform:"uppercase",color:GRN,background:"transparent",border:`1px solid ${BDR_G}`,padding:".65rem 1.5rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".4rem" }}>
                <span>◈ Become a Partner →</span>
              </a>
            </div>
          </div>

          {/* Continuous logo marquee */}
          <PartnerLogos bk={BK} bk2={BK2} bk3={BK3} bdr={BDR} bdr_g={BDR_G} grn={GRN} mut={MUT} wht={WHT} />
        </section>

        {/* ─── NEWS ──────────────────────────────── */}
        <section ref={newsRef} style={{ background:BK2,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(to right,transparent,${GRN},transparent)` }} />
          <div style={{ position:"absolute",right:"-5%",top:"5%",width:"35vw",height:"35vw",background:`radial-gradient(circle,${GRN}04 0%,transparent 70%)`,pointerEvents:"none" }} />
          {/* Left vertical rail for entire news section */}
          <div style={{ position:"absolute",left:"clamp(1rem,4vw,3rem)",top:"10%",bottom:"10%",width:1,background:`linear-gradient(to bottom,transparent,${GRN}22,transparent)`,pointerEvents:"none" }} className="hide-mob" />
          <div style={{ maxWidth:1300,margin:"0 auto",position:"relative",zIndex:1 }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"clamp(3rem,5vw,5rem)",flexWrap:"wrap",gap:"1rem" }}>
              <div>
                <div className="h-rule rv rv-left"><div className="st-tag" style={{ marginBottom:0 }}>Latest Updates</div></div>
                <div style={{ position:"relative",paddingLeft:"clamp(.75rem,2vw,1.5rem)",marginTop:".75rem" }}>
                  <div style={{ position:"absolute",left:0,top:0,bottom:0,width:2,background:`linear-gradient(to bottom,${GRN},transparent)` }} />
                  <h2 className="rv rv-up" style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2.5rem,6vw,5rem)",color:WHT,lineHeight:.92,letterSpacing:".04em" }}>
                    News &<br /><span style={{ color:GRN }}>Updates.</span>
                  </h2>
                </div>
              </div>
              <a href="#" className="hide-mob btn-ghost" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".58rem",letterSpacing:".15em",textTransform:"uppercase",color:GRN,background:"transparent",border:`1px solid ${BDR_G}`,padding:".65rem 1.5rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".4rem" }}>
                <span>View All News →</span>
              </a>
            </div>

            {/* Featured first article — full width */}
            <div ref={el=>{newsRefs.current[0]=el;}}
              className="news-card"
              style={{ position:"relative",display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,border:`1px solid ${BDR}`,background:BK3,marginBottom:"1px",opacity:visNews[0]?1:0,transform:visNews[0]?"translateY(0)":"translateY(20px)",transition:"opacity .6s, transform .6s" }}
              onMouseEnter={e=>e.currentTarget.style.borderColor=`${GRN}33`}
              onMouseLeave={e=>e.currentTarget.style.borderColor=BDR}
            >
              {/* Corner brackets on featured card */}
              {[{t:"-1px",l:"-1px"},{t:"-1px",r:"-1px"},{b:"-1px",l:"-1px"},{b:"-1px",r:"-1px"}].map((pos,ci)=>(
                <div key={ci} style={{ position:"absolute",width:20,height:20,pointerEvents:"none",zIndex:3,...(pos as any) }}>
                  <div style={{ position:"absolute",...("t" in pos?{top:0}:{bottom:0}),...("l" in pos?{left:0}:{right:0}),width:"100%",height:1.5,background:GRN,opacity:.5 }} />
                  <div style={{ position:"absolute",...("t" in pos?{top:0}:{bottom:0}),...("l" in pos?{left:0}:{right:0}),width:1.5,height:"100%",background:GRN,opacity:.5 }} />
                </div>
              ))}
              <div style={{ height:"clamp(200px,30vw,380px)",overflow:"hidden",position:"relative" }}>
                <img src={NEWS[0].img} alt={NEWS[0].title} className="news-img" style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(.3) brightness(.65)",display:"block" }} />
                <div style={{ position:"absolute",inset:0,background:`linear-gradient(135deg,${BK3}55,transparent)` }} />
              </div>
              <div style={{ padding:"2.5rem 2.5rem 3rem",display:"flex",flexDirection:"column",justifyContent:"center" }}>
                <div style={{ display:"flex",alignItems:"center",gap:".75rem",marginBottom:"1.25rem" }}>
                  <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".48rem",color:NEWS[0].tagColor,background:`${NEWS[0].tagColor}14`,border:`1px solid ${NEWS[0].tagColor}33`,padding:".2rem .6rem",letterSpacing:".15em" }}>{NEWS[0].tag}</span>
                  <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".45rem",color:MUT,letterSpacing:".15em" }}>{NEWS[0].date}</span>
                  <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".42rem",color:`${WHT}33`,letterSpacing:".1em" }}>{NEWS[0].readTime}</span>
                </div>
                <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.6rem,3vw,2.5rem)",color:WHT,letterSpacing:".05em",lineHeight:1.05,marginBottom:"1rem" }}>{NEWS[0].title}</h3>
                <p className="rv rv-fade d1" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".68rem",color:MUT,lineHeight:1.85,marginBottom:"1.75rem" }}>{NEWS[0].excerpt}</p>
                <a href="#" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".55rem",color:GRN,textDecoration:"none",letterSpacing:".1em",borderBottom:`1px solid ${GRN}44`,paddingBottom:"2px",width:"fit-content",cursor:"none" }}>Read Full Story →</a>
              </div>
            </div>

            {/* Dashed separator with label */}
            <div style={{ display:"flex",alignItems:"center",gap:"1rem",margin:"0 0 1px" }}>
              <div style={{ flex:1,height:1,backgroundImage:`repeating-linear-gradient(to right,${GRN}33 0px,${GRN}33 6px,transparent 6px,transparent 14px)` }} />
              <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".38rem",color:`${GRN}55`,letterSpacing:".3em",textTransform:"uppercase",whiteSpace:"nowrap" }}>More Stories</span>
              <div style={{ flex:1,height:1,backgroundImage:`repeating-linear-gradient(to right,${GRN}33 0px,${GRN}33 6px,transparent 6px,transparent 14px)` }} />
            </div>

            {/* Remaining 5 articles in grid */}
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,300px),1fr))",gap:"1px",background:BDR }}>
              {NEWS.slice(1).map((n,i)=>(
                <div key={i} ref={el=>{newsRefs.current[i+1]=el;}}
                  className="news-card"
                  style={{ background:BK3,border:`1px solid transparent`,opacity:visNews[i+1]?1:0,transform:visNews[i+1]?"translateY(0)":"translateY(20px)",transition:`opacity .6s ${(i+1)*.07}s, transform .6s ${(i+1)*.07}s, border-color .3s, box-shadow .3s` }}
                >
                  <div style={{ height:170,overflow:"hidden",position:"relative" }}>
                    <img src={n.img} alt={n.title} className="news-img" style={{ width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(.4) brightness(.55)",display:"block" }} />
                    <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top,${BK3} 0%,transparent 55%)` }} />
                    <div style={{ position:"absolute",top:".75rem",left:".75rem" }}>
                      <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".44rem",color:n.tagColor,background:`${n.tagColor}20`,border:`1px solid ${n.tagColor}44`,padding:".2rem .55rem",letterSpacing:".12em" }}>{n.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding:"1.25rem 1.5rem 1.75rem" }}>
                    <div style={{ display:"flex",gap:".75rem",marginBottom:".75rem",alignItems:"center" }}>
                      <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".44rem",color:MUT,letterSpacing:".12em" }}>{n.date}</span>
                      <span style={{ width:3,height:3,borderRadius:"50%",background:`${WHT}33`,flexShrink:0 }} />
                      <span style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".42rem",color:`${WHT}33`,letterSpacing:".08em" }}>{n.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.35rem",color:WHT,letterSpacing:".05em",lineHeight:1.1,marginBottom:".75rem" }}>{n.title}</h3>
                    <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".6rem",color:MUT,lineHeight:1.75,marginBottom:"1rem" }}>{n.excerpt}</p>
                    <a href="#" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".5rem",color:GRN,textDecoration:"none",letterSpacing:".1em",borderBottom:`1px solid ${GRN}33`,paddingBottom:"2px",cursor:"none" }}>Read More →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ───────────────────────────────── */}
        <section ref={ctaRef} style={{ background:BK,padding:"clamp(5rem,10vw,9rem) clamp(1.5rem,8vw,6rem)",position:"relative",overflow:"hidden",textAlign:"center" }}>
          <div style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"60vw",height:"60vw",background:`radial-gradient(circle,${GRN}06 0%,transparent 65%)`,pointerEvents:"none" }} />

          {/* Corner brackets on section edges */}
          {[["top:2rem","left:2rem"],["top:2rem","right:2rem"],["bottom:2rem","left:2rem"],["bottom:2rem","right:2rem"]].map((pos,i)=>{
            const style: React.CSSProperties = { position:"absolute",width:36,height:36,pointerEvents:"none" };
            pos.forEach(p=>{ const [k,v]=p.split(":"); (style as any)[k]=v; });
            const isRight = pos[1].startsWith("right");
            const isBottom = pos[0].startsWith("bottom");
            return (
              <div key={i} style={style}>
                <div style={{ position:"absolute",[isBottom?"bottom":"top"]:0,[isRight?"right":"left"]:0,width:"100%",height:1.5,background:GRN,opacity:.3 }} />
                <div style={{ position:"absolute",[isBottom?"bottom":"top"]:0,[isRight?"right":"left"]:0,width:1.5,height:"100%",background:GRN,opacity:.3 }} />
              </div>
            );
          })}

          {/* Horizontal rules flanking content */}
          <div style={{ position:"absolute",top:"50%",left:"2rem",right:"50%",height:1,background:`linear-gradient(to right,transparent,${GRN}18)`,pointerEvents:"none" }} className="hide-mob" />
          <div style={{ position:"absolute",top:"50%",left:"50%",right:"2rem",height:1,background:`linear-gradient(to left,transparent,${GRN}18)`,pointerEvents:"none" }} className="hide-mob" />

          <div style={{ maxWidth:700,margin:"0 auto",position:"relative",zIndex:1 }}>
            <div className="st-tag" style={{ justifyContent:"center",marginBottom:"1.5rem",opacity:visCta?1:0,transform:visCta?"translateY(0)":"translateY(16px)",transition:"all .5s" }}>Join the Movement</div>
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(3rem,8vw,7rem)",color:WHT,lineHeight:.88,letterSpacing:".04em",marginBottom:"1.5rem",opacity:visCta?1:0,transform:visCta?"translateY(0)":"translateY(20px)",transition:"all .6s .1s" }}>
              BUILD WITH THE<br /><span style={{ color:GRN }}>BEST IN NIGERIA.</span>
            </h2>
            <p style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:"clamp(.7rem,1.2vw,.9rem)",color:MUT,lineHeight:1.85,maxWidth:480,margin:"0 auto clamp(2rem,4vw,3rem)",opacity:visCta?1:0,transform:visCta?"translateY(0)":"translateY(16px)",transition:"all .6s .2s" }}>
              Join SuperteamNG and build alongside 27,000+ developers, designers, and writers pushing the limits of what's possible on Solana in Nigeria.
            </p>
            <div style={{ display:"flex",gap:0,maxWidth:480,margin:"0 auto 2rem",opacity:visCta?1:0,transform:visCta?"translateY(0)":"translateY(16px)",transition:"all .6s .3s",flexWrap:"wrap" }}>
              <input type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)}
                style={{ flex:1,minWidth:200,padding:".85rem 1.25rem",background:BK3,border:`1px solid ${BDR}`,borderRight:"none",fontFamily:"'IBM Plex Mono',monospace",fontSize:".65rem",color:WHT,outline:"none",letterSpacing:".05em" }}
              />
              <button className="btn-grn" style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".6rem",letterSpacing:".15em",textTransform:"uppercase",color:BK,background:GRN,border:"none",padding:".85rem 1.5rem",whiteSpace:"nowrap" }}>
                <span>Subscribe</span>
              </button>
            </div>
            {/* Decorative rule before CTA buttons */}
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",maxWidth:360,margin:"0 auto 2rem",opacity:visCta?1:0,transition:"all .6s .35s" }}>
              <div style={{ flex:1,height:1,background:`linear-gradient(to right,transparent,${GRN}33)` }} />
              <div style={{ width:5,height:5,border:`1px solid ${GRN}`,transform:"rotate(45deg)",opacity:.5 }} />
              <div style={{ flex:1,height:1,background:`linear-gradient(to left,transparent,${GRN}33)` }} />
            </div>
            <div style={{ display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap",opacity:visCta?1:0,transition:"all .6s .4s" }}>
              <a href="https://discord.gg/superteamng" target="_blank" rel="noreferrer" className="btn-grn"
                style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".62rem",letterSpacing:".15em",textTransform:"uppercase",color:BK,background:GRN,padding:".9rem 2.5rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".5rem" }}>
                <span>⚡ Join Our Community</span>
              </a>
              <a href="mailto:partner@superteamng.com" className="btn-ghost"
                style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".62rem",letterSpacing:".15em",textTransform:"uppercase",color:WHT,background:"transparent",border:`1px solid ${BDR}`,padding:".9rem 2.5rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".5rem" }}>
                <span>◈ Partner With Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ────────────────────────────── */}
        <footer style={{ background:BK2,padding:"clamp(2rem,4vw,3rem) clamp(1.5rem,8vw,6rem)",borderTop:`1px solid ${BDR}`,position:"relative" }}>
          {/* Tick marks on top border */}
          <div style={{ position:"absolute",top:-1,left:0,right:0,height:1,pointerEvents:"none",overflow:"hidden" }}>
            {[...Array(24)].map((_,i)=>(
              <div key={i} style={{ position:"absolute",left:`${(i/23)*100}%`,top:-3,width:1,height:7,background:GRN,opacity:i%6===0?0.6:0.15,transform:"translateX(-50%)" }} />
            ))}
          </div>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1.5rem",maxWidth:1200,margin:"0 auto" }}>
            <div style={{ display:"flex",alignItems:"center",gap:".75rem" }}>
              <img src="/logo.png" alt="SuperteamNG" style={{ height:28,width:"auto",objectFit:"contain" }} />
              <div>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1rem",color:WHT,letterSpacing:".1em" }}>SuperteamNG</div>
                <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".4rem",color:MUT,letterSpacing:".2em",textTransform:"uppercase" }}>© 2025 All rights reserved</div>
              </div>
            </div>
            <div style={{ display:"flex",gap:".75rem" }}>
              {[{icon:"𝕏",href:"https://twitter.com/superteamng"},{icon:"▶",href:"https://discord.gg/superteamng"},{icon:"in",href:"https://linkedin.com/company/superteamng"}].map((s,i)=>(
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-sq"
                  style={{ width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${BDR}`,background:BK3,color:MUT,textDecoration:"none",fontFamily:"'IBM Plex Mono',monospace",fontSize:".7rem",cursor:"none" }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div style={{ fontFamily:"'IBM Plex Mono',monospace",fontSize:".48rem",color:GRN,letterSpacing:".15em",textTransform:"uppercase" }}>
              Building Nigeria's Web3 Future ✦
            </div>
          </div>
        </footer>

      </div>{/* /contentRef */}

      {/* ══ FLOATING BUTTONS ══ */}
      <style>{`
        @keyframes stPulse { 0%{transform:scale(1);opacity:.6} 70%{transform:scale(1.9);opacity:0} 100%{transform:scale(1.9);opacity:0} }
        @keyframes stShimmer { 0%{left:-80%} 100%{left:130%} }
        @keyframes stArcSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes stArrowBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        .st-wa-btn:hover .st-shimmer { animation:stShimmer .6s ease forwards !important; }
        .st-top-btn:hover .st-arrow  { animation:stArrowBounce .5s ease infinite; }

        @keyframes discordWobble {
          0%   { transform: rotate(0deg) scale(1); }
          15%  { transform: rotate(-18deg) scale(1.15); }
          30%  { transform: rotate(14deg) scale(1.1); }
          45%  { transform: rotate(-10deg) scale(1.05); }
          60%  { transform: rotate(7deg) scale(1.02); }
          75%  { transform: rotate(-4deg) scale(1.01); }
          100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes discordGlow {
          0%,100% { filter: drop-shadow(0 0 4px rgba(88,101,242,0)); }
          50%      { filter: drop-shadow(0 0 10px rgba(88,101,242,0.9)) drop-shadow(0 0 20px rgba(88,101,242,0.5)); }
        }
        @keyframes discordBounce {
          0%,100% { transform: translateY(0) scale(1); }
          30%     { transform: translateY(-5px) scale(1.12); }
          60%     { transform: translateY(2px) scale(0.97); }
          80%     { transform: translateY(-2px) scale(1.03); }
        }
        .discord-logo-wrap {
          animation: discordBounce 2.4s ease-in-out infinite, discordGlow 2.4s ease-in-out infinite;
          transform-origin: center;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; position: relative; z-index: 1;
        }
        .discord-logo-wrap svg {
          animation: discordWobble 2.4s ease-in-out infinite;
          transform-origin: center;
        }
        .st-wa-btn:hover .discord-logo-wrap {
          animation: discordBounce .6s ease-in-out infinite, discordGlow .6s ease-in-out infinite;
        }
        .st-wa-btn:hover .discord-logo-wrap svg {
          animation: discordWobble .6s ease-in-out infinite;
        }
      `}</style>

      <a href="https://discord.gg/superteamng" target="_blank" rel="noreferrer" className="st-wa-btn"
        style={{ position:"fixed",bottom:"clamp(1.5rem,4vw,2.5rem)",left:"clamp(1rem,3vw,2rem)",zIndex:9000,display:"flex",alignItems:"center",gap:".7rem",background:"#5865F2",color:"#ffffff",textDecoration:"none",padding:".75rem 1.5rem .75rem 1rem",fontFamily:"'IBM Plex Mono',monospace",fontSize:".54rem",letterSpacing:".15em",textTransform:"uppercase",cursor:"none",overflow:"hidden",border:"1px solid #7289da",opacity:showFloat?1:0,transform:showFloat?"translateY(0) scale(1)":"translateY(16px) scale(.9)",pointerEvents:showFloat?"all":"none",transition:showFloat?"opacity .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.16,1,.3,1),box-shadow .3s":"opacity .3s,transform .3s",boxShadow:`0 4px 24px rgba(88,101,242,.5)` }}
        onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 8px 36px rgba(88,101,242,.8)`;e.currentTarget.style.transform="translateY(-3px) scale(1.02)";e.currentTarget.style.background="#4752c4";}}
        onMouseLeave={e=>{e.currentTarget.style.boxShadow=`0 4px 24px rgba(88,101,242,.5)`;e.currentTarget.style.transform="translateY(0) scale(1)";e.currentTarget.style.background="#5865F2";}}
      >
        <span className="st-shimmer" style={{ position:"absolute",top:"-20%",left:"-80%",width:"50%",height:"140%",background:"linear-gradient(105deg,transparent 0%,rgba(255,255,255,.12) 50%,transparent 100%)",transform:"skewX(-15deg)",pointerEvents:"none",transition:"none" }} />
        {/* Animated Discord logo */}
        <span className="discord-logo-wrap">
          <svg style={{ width:20,height:20 }} viewBox="0 0 24 24" fill="white">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </span>
        <span style={{ position:"relative",zIndex:1,whiteSpace:"nowrap" }}>Join Discord</span>
      </a>

      <button onClick={()=>{tY.current=0;}} className="st-top-btn"
        style={{ position:"fixed",bottom:"clamp(1.5rem,4vw,2.5rem)",right:"clamp(1rem,3vw,2rem)",zIndex:9000,width:52,height:52,background:"transparent",border:"none",padding:0,cursor:"none",display:"flex",alignItems:"center",justifyContent:"center",opacity:showFloat?1:0,transform:showFloat?"translateY(0) scale(1)":"translateY(16px) scale(.9)",pointerEvents:showFloat?"all":"none",transition:showFloat?"opacity .5s .1s cubic-bezier(.16,1,.3,1),transform .5s .1s cubic-bezier(.16,1,.3,1)":"opacity .3s,transform .3s" }}
        onMouseEnter={e=>{const inner=e.currentTarget.querySelector<HTMLElement>(".st-inner");if(inner){inner.style.background=GRN;inner.style.borderColor=GRN;inner.style.color=BK;}}}
        onMouseLeave={e=>{const inner=e.currentTarget.querySelector<HTMLElement>(".st-inner");if(inner){inner.style.background=BK3;inner.style.borderColor=BDR;inner.style.color=WHT;}}}
      >
        <svg width="52" height="52" viewBox="0 0 52 52" style={{ position:"absolute",top:0,left:0,animation:"stArcSpin 3s linear infinite",pointerEvents:"none" }}>
          <circle cx="26" cy="26" r="24" fill="none" stroke={BDR} strokeWidth="1.5" />
          <circle cx="26" cy="26" r="24" fill="none" stroke={GRN} strokeWidth="1.5" strokeDasharray={`${2*Math.PI*24*0.28} ${2*Math.PI*24*0.72}`} strokeLinecap="round" />
        </svg>
        <div className="st-inner" style={{ width:38,height:38,background:BK3,border:`1px solid ${BDR}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"background .3s,border-color .3s,color .3s",position:"relative",zIndex:1,boxShadow:`0 4px 16px rgba(0,0,0,.6)` }}>
          <span className="st-arrow" style={{ color:WHT,fontSize:".95rem",display:"inline-block",lineHeight:1 }}>↑</span>
        </div>
      </button>
    </>
  );
}

declare global {
  interface Window { __dismissLoader?: () => void; }
}