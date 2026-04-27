<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- ══ SEO META TAGS ══ -->
<title>Mohamed Hamdy — AI Engineer, Game Developer & Creator | Alexandria, Egypt</title>
<meta name="description" content="Mohamed Hamdy — AI Engineering student at AASTMT Alexandria (Class of 2028). Founder of AetherCode AI, SilentAlgo/Mokali gaming studio, SabaePDF. QA Expert, Stock Photographer.">
<meta name="keywords" content="Mohamed Hamdy, AI Engineer, AASTMT, Alexandria, AetherCode AI, SilentAlgo, Mokali, SabaePDF, QA Expert, Game Developer, Egypt">
<meta name="author" content="Mohamed Hamdy">
<meta name="robots" content="index, follow">
<meta property="og:title" content="Mohamed Hamdy — AI Engineer & Creator">
<meta property="og:description" content="AI Engineering student at AASTMT Alexandria. Founder of AetherCode AI, SilentAlgo, SabaePDF. Building the future with AI.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://mohamedhamdy.dev">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Mohamed Hamdy — AI Engineer & Creator">
<meta name="twitter:description" content="AI Engineering student at AASTMT Alexandria. Founder. Developer. Creator.">
<link rel="canonical" href="https://mohamedhamdy.dev">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">

<style>
:root{
  --bg:#020209; --s1:#07070f; --s2:#0c0c17; --s3:#11111e;
  --bdr:rgba(255,255,255,.052); --bdr-h:rgba(255,255,255,.115); --bdr-v:rgba(139,124,255,.3);
  --txt:#eeeef8; --txt2:#9898b8; --muted:#484868;
  --v:#8b7cff; --r:#ff5f7e; --g:#3dffc4; --b:#38b6ff; --gold:#f0c040; --live:#22d47a;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--txt);font-family:'Syne',sans-serif;overflow-x:hidden;cursor:auto;-webkit-font-smoothing:antialiased}
body::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:900;opacity:.35;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.03'/%3E%3C/svg%3E")}

/* ══ LOADER — fast (800ms) ══ */
#loader{position:fixed;inset:0;z-index:10000;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;transition:opacity .65s cubic-bezier(.76,0,.24,1),visibility .65s}
#loader.out{opacity:0;visibility:hidden;pointer-events:none}
.ld-eyebrow{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.35em;text-transform:uppercase;color:var(--muted);margin-bottom:28px;display:flex;align-items:center;gap:12px;animation:ldSlideUp .4s .05s both}
.ld-eyebrow::before,.ld-eyebrow::after{content:'';width:36px;height:1px;background:var(--bdr-h)}
.ld-title{display:flex;align-items:baseline;gap:14px;margin-bottom:44px}
.ld-word{overflow:hidden;display:inline-block}
.ld-word span{display:inline-block;font-family:'Playfair Display',serif;font-size:clamp(42px,7vw,84px);letter-spacing:-3px;line-height:1;animation:charDrop .5s both}
.ld-word.fw span{font-weight:700;color:var(--txt)}
.ld-word.fi span{font-weight:400;font-style:italic;background:linear-gradient(120deg,var(--v),var(--r));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.ld-progress{width:min(300px,70vw);display:flex;flex-direction:column;gap:12px;align-items:center;animation:ldSlideUp .4s .2s both}
.ld-track{width:100%;height:1px;background:rgba(255,255,255,.07);position:relative;overflow:visible}
.ld-fill{height:100%;width:0;background:linear-gradient(90deg,var(--v),var(--r));position:relative;transition:width .02s linear}
.ld-fill::after{content:'';position:absolute;right:-5px;top:-5px;width:11px;height:11px;border-radius:50%;background:var(--r);box-shadow:0 0 16px var(--r),0 0 32px rgba(255,95,126,.55)}
.ld-bottom{width:100%;display:flex;justify-content:space-between;align-items:center}
.ld-pct{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.2em;color:var(--txt2)}
.ld-status{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.14em;color:var(--muted);text-transform:uppercase}
#curtain{position:fixed;inset:0;z-index:9999;background:var(--bg);transform:translateY(0);transition:transform .85s cubic-bezier(.76,0,.18,1);pointer-events:none}
#curtain.lifted{transform:translateY(-100%)}
@keyframes ldSlideUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes charDrop {from{opacity:0;transform:translateY(105%)}to{opacity:1;transform:translateY(0)}}

/* ══ CURSOR ══ */
.c-dot{display:none}
.c-ring{display:none}
#spot{position:fixed;width:1000px;height:1000px;border-radius:50%;pointer-events:none;z-index:0;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(139,124,255,.05) 0%,transparent 60%);transition:background .5s}

/* ══ NAV ══ */
nav{position:fixed;top:0;left:0;right:0;z-index:600;height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 48px;background:rgba(2,2,9,.82);backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px);border-bottom:1px solid var(--bdr);opacity:0;animation:navIn .5s 1.6s forwards}
@keyframes navIn{to{opacity:1}}
.nav-logo{font-family:'Playfair Display',serif;font-style:italic;font-size:18px;color:var(--txt);text-decoration:none;display:flex;align-items:center;gap:10px}
.nav-logo-dot{width:5px;height:5px;border-radius:50%;background:var(--live);box-shadow:0 0 8px var(--live);animation:livePulse 2s infinite}
.nav-mid{display:flex;align-items:center;gap:6px}
.nav-mid a{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);text-decoration:none;padding:6px 14px;border-radius:8px;transition:all .2s}
.nav-mid a:hover{color:var(--txt);background:rgba(255,255,255,.05)}
.nav-mid .sep{width:3px;height:3px;border-radius:50%;background:var(--bdr-h)}
.nav-cta{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#fff;text-decoration:none;padding:9px 22px;border-radius:10px;background:var(--v);transition:all .22s;box-shadow:0 0 20px rgba(139,124,255,.3)}
.nav-cta:hover{background:#a090ff;box-shadow:0 0 36px rgba(139,124,255,.55);transform:translateY(-1px)}

/* ══ HERO ══ */
.hero{min-height:100vh;position:relative;z-index:2;overflow:hidden;display:grid;grid-template-columns:1fr 1px 300px;grid-template-rows:1fr auto;align-items:center;padding:80px 48px 60px}
.blob{position:absolute;border-radius:50%;pointer-events:none;filter:blur(90px)}
.blob-1{width:650px;height:650px;background:rgba(139,124,255,.09);top:-140px;left:-180px;animation:bd1 22s ease-in-out infinite alternate}
.blob-2{width:420px;height:420px;background:rgba(255,95,126,.065);bottom:-80px;right:80px;animation:bd2 28s ease-in-out infinite alternate}
.blob-3{width:280px;height:280px;background:rgba(61,255,196,.046);top:38%;left:34%;animation:bd3 19s ease-in-out infinite alternate}
.bg-grid{position:absolute;inset:0;pointer-events:none;z-index:-1;background-image:linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px);background-size:80px 80px;mask-image:radial-gradient(ellipse 75% 75% at 30% 50%,rgba(0,0,0,.3),transparent)}

.hero-left{grid-column:1;grid-row:1;display:flex;flex-direction:column;justify-content:center;padding-right:72px}
.h-tag,.h-hl-line,.h-sub,.h-btns{opacity:0;transform:translateY(40px)}
.h-div,.h-stats,.h-scroll{opacity:0}
body.go .h-tag       {animation:rise .7s .05s forwards}
body.go .h-hl-line-1 {animation:rise .85s .18s forwards}
body.go .h-hl-line-2 {animation:rise .85s .30s forwards}
body.go .h-hl-line-3 {animation:rise .85s .42s forwards}
body.go .h-sub       {animation:rise .85s .54s forwards}
body.go .h-btns      {animation:rise .85s .66s forwards}
body.go .h-div       {animation:fin  .8s .28s forwards}
body.go .h-stats     {animation:fin  .9s .32s forwards}
body.go .h-scroll    {animation:fin  1s  .95s forwards}

.h-tag{display:flex;align-items:center;gap:10px;margin-bottom:32px;font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.26em;text-transform:uppercase;color:var(--g)}
.h-tag::before{content:'';width:20px;height:1px;background:var(--g);opacity:.5}
.live-dot{width:6px;height:6px;background:var(--live);border-radius:50%;box-shadow:0 0 8px var(--live);animation:livePulse 2s infinite}
.h-headline{margin-bottom:0}
.h-hl-line{display:block;overflow:hidden}
.h-hl-line-1,.h-hl-line-2,.h-hl-line-3{opacity:0;transform:translateY(40px)}
.hl-txt{display:block;font-family:'Playfair Display',serif;font-weight:700;font-size:clamp(54px,7.8vw,122px);line-height:.88;letter-spacing:-4px;color:var(--txt)}
.hl-txt.italic{font-weight:400;font-style:italic;background:linear-gradient(110deg,var(--v) 10%,var(--r) 90%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.h-sub{font-size:15px;color:var(--txt2);line-height:1.84;max-width:390px;font-weight:400;margin:32px 0 44px;padding-left:18px;border-left:2px solid rgba(139,124,255,.28)}
.h-sub strong{color:var(--txt);font-weight:600}

/* buttons — rich hover FX */
.h-btns{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.btn-fill{
  display:inline-flex;align-items:center;gap:9px;padding:13px 26px;border-radius:12px;
  background:var(--v);color:#fff;font-size:14px;font-weight:600;
  text-decoration:none;cursor:pointer;
  transition:background .22s,transform .22s,box-shadow .22s;
  box-shadow:0 0 0 1px rgba(139,124,255,.35),0 8px 28px rgba(139,124,255,.3);
  position:relative;overflow:hidden;
}
.btn-fill::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.12),transparent);opacity:0;transition:opacity .22s}
.btn-fill:hover{background:#9d8fff;transform:translateY(-2px);box-shadow:0 0 0 1px var(--v),0 16px 44px rgba(139,124,255,.5)}
.btn-fill:hover::before{opacity:1}
.btn-fill svg{transition:transform .22s}
.btn-fill:hover svg{transform:translateX(4px)}

.btn-outline{
  display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border-radius:12px;
  border:1px solid var(--bdr-h);color:var(--txt2);
  font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;
  text-decoration:none;cursor:pointer;
  transition:border-color .22s,color .22s,background .22s,transform .22s,box-shadow .22s;
  background:rgba(255,255,255,.028);
}
.btn-outline:hover{border-color:var(--v);color:var(--v);background:rgba(139,124,255,.08);transform:translateY(-2px);box-shadow:0 8px 24px rgba(139,124,255,.18)}

/* Download CV button */
.btn-cv{
  display:inline-flex;align-items:center;gap:9px;padding:13px 22px;border-radius:12px;
  border:1px solid rgba(61,255,196,.3);color:var(--g);
  font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;
  text-decoration:none;cursor:pointer;
  transition:all .22s;background:rgba(61,255,196,.06);
}
.btn-cv:hover{border-color:var(--g);background:rgba(61,255,196,.12);transform:translateY(-2px);box-shadow:0 8px 24px rgba(61,255,196,.2);color:#fff}
.btn-cv svg{transition:transform .22s}
.btn-cv:hover svg{transform:translateY(2px)}

/* hero divider + stats */
.h-div{grid-column:2;grid-row:1;width:1px;height:62%;align-self:center;background:linear-gradient(to bottom,transparent,var(--bdr-h) 30%,var(--bdr-h) 70%,transparent)}
.h-stats{grid-column:3;grid-row:1;padding-left:44px;display:flex;flex-direction:column;justify-content:center}
.s-row{padding:26px 0;border-bottom:1px solid var(--bdr);position:relative}
.s-row:last-child{border:none}
.s-row::before{content:'';position:absolute;left:-45px;top:50%;width:5px;height:5px;border-radius:50%;border:1px solid var(--bdr-h);transform:translateY(-50%)}
.s-num{font-family:'Playfair Display',serif;font-weight:700;font-style:italic;font-size:58px;line-height:1;letter-spacing:-3px;color:var(--txt);display:block}
.s-num sup{font-size:.42em;letter-spacing:0;color:var(--v);vertical-align:super;font-style:normal}
.s-lbl{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.18em;color:var(--muted);text-transform:uppercase;display:block;margin-top:5px}
.h-scroll{grid-column:1;grid-row:2;padding-top:28px;display:flex;align-items:center;gap:16px}
.sc-line{width:56px;height:1px;background:rgba(255,255,255,.07);position:relative;overflow:hidden}
.sc-line::after{content:'';position:absolute;left:-100%;top:0;width:100%;height:100%;background:linear-gradient(90deg,transparent,var(--v));animation:scan 2.6s ease-in-out infinite}
.h-scroll-txt{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.22em;color:var(--muted);text-transform:uppercase}

/* ══ MARQUEE ══ */
.marquee{padding:22px 0;overflow:hidden;position:relative;z-index:2;border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);background:linear-gradient(90deg,var(--bg),var(--s1) 50%,var(--bg))}
.marquee::before,.marquee::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:1;pointer-events:none}
.marquee::before{left:0;background:linear-gradient(to right,var(--bg),transparent)}
.marquee::after{right:0;background:linear-gradient(to left,var(--bg),transparent)}
.mq-track{display:flex;gap:56px;width:max-content;animation:mq 28s linear infinite}
.mq-item{font-family:'Playfair Display',serif;font-weight:400;font-style:italic;font-size:16px;color:var(--muted);white-space:nowrap;display:flex;align-items:center;gap:56px;transition:color .3s}
.mq-item::after{content:'◆';font-style:normal;font-size:7px;color:var(--v);opacity:.5}
.mq-item:hover{color:var(--txt2)}

/* ══ SECTIONS ══ */
section{padding:120px 48px;position:relative;z-index:2}
.ey{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:var(--muted);margin-bottom:14px;display:flex;align-items:center;gap:10px}
.ey::before{content:'';width:16px;height:1px;background:var(--muted)}
.stitle{font-family:'Playfair Display',serif;font-weight:700;font-size:clamp(38px,5vw,68px);line-height:.94;letter-spacing:-2.5px;color:var(--txt)}
.stitle em{font-style:italic;background:linear-gradient(120deg,var(--v),var(--r));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.s-head{margin-bottom:80px}

/* ══ ABOUT ══ */
.a-grid{display:grid;grid-template-columns:5fr 4fr;gap:80px;align-items:start}
.a-copy p{font-size:16px;color:var(--txt2);line-height:1.9;margin-bottom:20px;font-weight:400}
.a-copy p strong{color:var(--txt);font-weight:600}
.pull{font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:22px;line-height:1.5;color:var(--txt);padding:24px 0 24px 26px;border-left:2px solid var(--v);margin:32px 0;position:relative}
.pull::before{content:'\201C';position:absolute;left:2px;top:8px;font-size:88px;line-height:0;color:var(--v);opacity:.08;font-family:'Playfair Display',serif}
.tl{display:flex;flex-direction:column;gap:5px}
.tl-r{display:flex;gap:14px;align-items:flex-start;padding:13px 16px 13px 18px;border-radius:14px;border:1px solid var(--bdr);background:var(--s1);transition:all .25s;position:relative;overflow:hidden}
.tl-r::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--v),var(--r));opacity:0;transition:opacity .25s;border-radius:2px 0 0 2px}
.tl-r:hover{border-color:var(--bdr-h);background:var(--s2);transform:translateX(4px)}
.tl-r:hover::before{opacity:1}
.tl-r.latest{border-color:rgba(139,124,255,.22);background:linear-gradient(135deg,rgba(139,124,255,.07),rgba(255,95,126,.03))}
.tl-r.latest::before{opacity:.55}
.tl-y{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.1em;color:var(--v);min-width:32px;padding-top:3px;font-weight:500}
.tl-b h4{font-size:13px;font-weight:600;color:var(--txt);margin-bottom:2px}
.tl-b p{font-size:11px;color:var(--muted);line-height:1.5}
.tl-badge{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:.1em;text-transform:uppercase;color:var(--v);background:rgba(139,124,255,.14);padding:2px 7px;border-radius:4px;margin-left:6px;vertical-align:middle}
.achv{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:56px}
.ac{background:var(--s1);border:1px solid var(--bdr);border-radius:18px;padding:26px 20px;text-align:center;transition:all .3s;cursor:pointer;position:relative;overflow:hidden}
.ac::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(139,124,255,.1),transparent 70%);opacity:0;transition:opacity .3s}
.ac:hover{border-color:var(--bdr-v);transform:translateY(-6px);box-shadow:0 24px 64px rgba(0,0,0,.7)}
.ac:hover::before{opacity:1}
.ac-n{font-family:'Playfair Display',serif;font-weight:700;font-style:italic;font-size:54px;line-height:1;letter-spacing:-2px;color:var(--txt);display:block;margin-bottom:5px}
.ac-l{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}

/* ══ CAMBRIDGE TRUST BADGE ══ */
.cambridge-banner{
  margin-top:40px;padding:22px 26px;
  border-radius:18px;
  border:1px solid rgba(56,182,255,.3);
  background:linear-gradient(135deg,rgba(56,182,255,.07),rgba(139,124,255,.05));
  display:flex;align-items:center;gap:20px;
  position:relative;overflow:hidden;
}
.cambridge-banner::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(100deg,transparent 30%,rgba(56,182,255,.05) 50%,transparent 70%);
  background-size:200% 100%;
  animation:shimmer 4s linear infinite;
}
.cb-left{display:flex;align-items:center;gap:16px;flex:1}
.cb-icon{
  width:44px;height:44px;border-radius:12px;
  background:linear-gradient(135deg,rgba(56,182,255,.15),rgba(139,124,255,.1));
  border:1px solid rgba(56,182,255,.25);
  display:flex;align-items:center;justify-content:center;
  font-size:20px;flex-shrink:0;
}
.cb-text h4{font-size:13px;font-weight:700;color:var(--txt);margin-bottom:3px}
.cb-text p{font-size:11px;color:var(--txt2);line-height:1.5}
.cb-text p strong{color:var(--b)}
.cb-seal{
  display:flex;flex-direction:column;align-items:center;gap:3px;
  flex-shrink:0;padding:10px 16px;
  border-radius:10px;
  background:rgba(56,182,255,.08);
  border:1px solid rgba(56,182,255,.2);
}
.cb-seal-icon{font-size:18px}
.cb-seal-txt{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--b);white-space:nowrap}

/* ══ BENTO ══ */
.bento{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:68px;gap:10px}
.bc{
  background:var(--s1);border:1px solid var(--bdr);border-radius:22px;
  padding:28px;position:relative;overflow:hidden;cursor:pointer;
  transition:border-color .3s,transform .32s,box-shadow .32s;
  /* uniform min-height for alignment */
  display:flex;flex-direction:column;
}
.bc a{cursor:pointer;position:relative;z-index:10;pointer-events:all}
.bc::before{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;border-radius:22px;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(139,124,255,.13) 0%,transparent 45%);opacity:0;transition:opacity .32s}
.bc::after{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;border-radius:22px;background:linear-gradient(150deg,rgba(255,255,255,.032) 0%,transparent 48%)}
.bc:hover{border-color:var(--bdr-h);transform:translateY(-4px);box-shadow:0 28px 72px rgba(0,0,0,.75)}
.bc:hover::before{opacity:1}
.bc>*{position:relative;z-index:1}
/* stretch body to keep cards same height */
.bc-body{flex:1;display:flex;flex-direction:column}

.c-ae {grid-column:span 7;grid-row:span 6;background:linear-gradient(150deg,#040412,#06072a)}
.c-sa {grid-column:span 5;grid-row:span 6;background:linear-gradient(150deg,#0e0205,#220505)}
.c-qa {grid-column:span 4;grid-row:span 5;min-height:300px}
.c-ph {grid-column:span 4;grid-row:span 5;min-height:300px}
.c-sk {grid-column:span 4;grid-row:span 5;min-height:300px}
.c-pdf{grid-column:span 6;grid-row:span 4;min-height:260px;background:linear-gradient(150deg,#01100a,#051a0d)}
.c-vol{grid-column:span 3;grid-row:span 4;min-height:260px}
.c-edu{grid-column:span 3;grid-row:span 4;min-height:260px;background:linear-gradient(150deg,#060618,#09092a)}
.c-cta{grid-column:span 12;grid-row:span 3;min-height:172px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:40px;position:relative;overflow:hidden;background:var(--s1);border:1px solid var(--bdr)}
.c-cta::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 10% 50%,rgba(139,124,255,.13),transparent 48%),radial-gradient(ellipse at 90% 50%,rgba(255,95,126,.1),transparent 48%)}

/* chip */
.chip{display:inline-flex;align-items:center;gap:5px;margin-bottom:16px;font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.13em;text-transform:uppercase;padding:5px 11px;border-radius:100px;border:1px solid}
.chip-dot{width:5px;height:5px;border-radius:50%;background:currentColor}
.ch-v  {color:var(--v);border-color:rgba(139,124,255,.28);background:rgba(139,124,255,.08)}
.ch-r  {color:var(--r);border-color:rgba(255,95,126,.28);background:rgba(255,95,126,.08)}
.ch-g  {color:var(--g);border-color:rgba(61,255,196,.28);background:rgba(61,255,196,.08)}
.ch-b  {color:var(--b);border-color:rgba(56,182,255,.28);background:rgba(56,182,255,.08)}
.ch-gd {color:var(--gold);border-color:rgba(240,192,64,.28);background:rgba(240,192,64,.08)}
.ch-gr {color:var(--live);border-color:rgba(34,212,122,.28);background:rgba(34,212,122,.08)}
.ch-w  {color:var(--txt2);border-color:var(--bdr-h);background:rgba(255,255,255,.04)}
.ctitle{font-family:'Playfair Display',serif;font-weight:700;font-size:28px;line-height:1.05;letter-spacing:-.5px;color:var(--txt);margin-bottom:9px}
.csub  {font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.13em;text-transform:uppercase;display:block;margin-bottom:10px}
.cbody {font-size:13px;color:var(--txt2);line-height:1.8;font-weight:400}
.cmeta {display:flex;align-items:center;gap:8px;margin-top:auto;padding-top:16px;font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.1em;flex-wrap:wrap}

/* metric pill */
.metric{display:inline-flex;align-items:center;gap:6px;font-family:'DM Mono',monospace;font-size:10px;color:var(--g);background:rgba(61,255,196,.07);border:1px solid rgba(61,255,196,.2);padding:4px 10px;border-radius:6px;margin-top:10px}
.metric-val{font-weight:500;color:var(--g)}

/* link button inside card */
.card-link{
  display:inline-flex;align-items:center;gap:5px;
  font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.08em;
  text-decoration:none;
  border:1px solid;padding:5px 12px;border-radius:8px;
  transition:all .22s;cursor:pointer;
}
.card-link-v{color:var(--v);border-color:rgba(139,124,255,.28);background:rgba(139,124,255,.07)}
.card-link-v:hover{background:rgba(139,124,255,.18);box-shadow:0 4px 16px rgba(139,124,255,.25);transform:translateY(-1px)}
.card-link-r{color:var(--r);border-color:rgba(255,95,126,.28);background:rgba(255,95,126,.07)}
.card-link-r:hover{background:rgba(255,95,126,.18);box-shadow:0 4px 16px rgba(255,95,126,.25);transform:translateY(-1px)}
.card-link-g{color:var(--g);border-color:rgba(61,255,196,.28);background:rgba(61,255,196,.07)}
.card-link-g:hover{background:rgba(61,255,196,.18);box-shadow:0 4px 16px rgba(61,255,196,.2);transform:translateY(-1px)}

/* card-specific hover glow accent */
.c-ae:hover::before{background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(139,124,255,.16) 0%,transparent 45%)}
.c-sa:hover::before{background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,95,126,.14) 0%,transparent 45%)}
.c-qa:hover::before{background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(61,255,196,.12) 0%,transparent 45%)}
.c-ph:hover::before{background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(240,192,64,.1) 0%,transparent 45%)}
.c-pdf:hover::before{background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(61,255,196,.12) 0%,transparent 45%)}
.c-edu:hover::before{background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(56,182,255,.12) 0%,transparent 45%)}
.metric{transition:all .22s}
.metric:hover{background:rgba(61,255,196,.12);border-color:rgba(61,255,196,.35);transform:translateY(-1px)}
.orb{width:94px;height:94px;border-radius:50%;margin-bottom:20px;position:relative;background:conic-gradient(from 0deg,var(--v),var(--r),#4a22e8,var(--v));animation:spin 10s linear infinite;box-shadow:0 0 0 1px rgba(139,124,255,.2),0 0 50px rgba(139,124,255,.42),0 0 100px rgba(139,124,255,.12)}
.orb::before{content:'';position:absolute;inset:3px;border-radius:50%;background:radial-gradient(circle at 38% 38%,#17106a,#050422)}
.orb::after{content:'Ae';position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:24px;color:rgba(255,255,255,.85)}

/* pixel grid */
.px-g{display:grid;grid-template-columns:repeat(10,1fr);gap:3px;margin-bottom:16px}
.px{height:5px;border-radius:1.5px;background:var(--s3);transition:background .14s}
.px.on{background:var(--r);box-shadow:0 0 5px rgba(255,95,126,.65)}

/* skills tags */
.sk-w{display:flex;flex-wrap:wrap;gap:5px;margin-top:11px}
.sk{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.03em;padding:5px 11px;border-radius:8px;border:1px solid var(--bdr);color:var(--muted);background:var(--s2);transition:all .2s}
.sk:hover{border-color:var(--v);color:var(--v);background:rgba(139,124,255,.08);transform:translateY(-1px)}
.lang-r{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}
.lang{display:inline-flex;align-items:center;gap:6px;font-family:'DM Mono',monospace;font-size:10px;padding:5px 12px;border-radius:100px;border:1px solid;transition:all .2s;cursor:pointer}
.lang-en{border-color:rgba(61,255,196,.22);color:var(--g);background:rgba(61,255,196,.05)}
.lang-ar{border-color:rgba(240,192,64,.22);color:var(--gold);background:rgba(240,192,64,.05)}
.lang:hover{transform:translateY(-2px)}

/* photo mosaic */
.mosaic{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,44px);gap:4px;border-radius:14px;overflow:hidden;margin-top:12px;flex:1}
.mo{background:var(--s2);border-radius:3px;display:flex;align-items:center;justify-content:center;transition:opacity .28s;position:relative;overflow:hidden}
.mo::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.45),transparent)}
.mo:hover{opacity:.68}
.mo:nth-child(1){grid-column:span 2;grid-row:span 2;background:linear-gradient(135deg,#0a1528,#1a3260)}
.mo:nth-child(2){background:linear-gradient(135deg,#150a28,#2a1560)}
.mo:nth-child(3){background:linear-gradient(135deg,#281408,#5e3520)}
.mo-l{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.22);position:relative;z-index:1}

/* CTA links */
.cta-r{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end;position:relative;z-index:1}
.cta-l{position:relative;z-index:1}
.cl{
  display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:12px;
  border:1px solid var(--bdr-h);background:rgba(255,255,255,.035);
  text-decoration:none;color:var(--txt);font-family:'Syne',sans-serif;font-size:13px;font-weight:500;
  transition:all .22s;white-space:nowrap;cursor:pointer;
}
.cl:hover{border-color:var(--v);background:rgba(139,124,255,.12);transform:translateY(-2px);color:#fff;box-shadow:0 8px 24px rgba(139,124,255,.28)}
.cl svg{flex-shrink:0;opacity:.65;transition:opacity .2s}
.cl:hover svg{opacity:1}

/* ══ FOOTER ══ */
footer{padding:28px 48px;border-top:1px solid var(--bdr);display:flex;align-items:center;justify-content:space-between;position:relative;z-index:2;background:linear-gradient(to right,rgba(139,124,255,.025),transparent,rgba(255,95,126,.02))}
.f-l{font-family:'DM Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:.07em}
.f-c{font-family:'Playfair Display',serif;font-style:italic;font-weight:400;font-size:17px;color:var(--txt)}
.f-r{display:flex;align-items:center;gap:8px}
.f-dot{width:6px;height:6px;border-radius:50%;background:var(--live);box-shadow:0 0 8px var(--live);animation:livePulse 2s infinite}

/* ══ REVEAL ══ */
.rev{opacity:0;transform:translateY(26px);transition:opacity .72s ease,transform .72s ease}
.rev.vis{opacity:1;transform:translateY(0)}
.d1{transition-delay:.07s}.d2{transition-delay:.15s}.d3{transition-delay:.23s}.d4{transition-delay:.31s}

/* ══ KEYFRAMES ══ */
@keyframes rise      {from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes fin       {from{opacity:0}to{opacity:1}}
@keyframes livePulse {0%,100%{box-shadow:0 0 6px var(--live)}50%{box-shadow:0 0 16px var(--live),0 0 30px rgba(34,212,122,.3)}}
@keyframes bd1       {from{transform:translate(0,0) scale(1)}  to{transform:translate(65px,42px) scale(1.09)}}
@keyframes bd2       {from{transform:translate(0,0)}           to{transform:translate(-48px,32px)}}
@keyframes bd3       {from{transform:translate(0,0)}           to{transform:translate(32px,-44px)}}
@keyframes scan      {0%{left:-100%}100%{left:100%}}
@keyframes mq        {from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes spin      {from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes grow      {to{width:var(--w)}}
@keyframes shimmer   {0%{background-position:-200% 0}100%{background-position:200% 0}}

/* ══ RESPONSIVE ══ */
@media(max-width:1100px){
  nav{padding:0 18px}.nav-mid{display:none}
  section{padding:80px 20px}
  .hero{grid-template-columns:1fr;grid-template-rows:auto auto auto;padding:100px 20px 60px;gap:36px 0}
  .hero-left{padding-right:0}
  .h-div{display:none}
  .h-stats{padding-left:0;grid-column:1;grid-row:2;flex-direction:row;gap:0;flex-wrap:wrap;border-top:1px solid var(--bdr)}
  .s-row{border-bottom:none;border-right:1px solid var(--bdr);padding:18px 22px 18px 0;margin-right:22px}
  .s-row:last-child{border-right:none;margin-right:0}
  .s-row::before{display:none}
  .h-scroll{grid-column:1;grid-row:3}
  .a-grid{grid-template-columns:1fr;gap:40px}
  .achv{grid-template-columns:repeat(2,1fr)}
  .bento{grid-template-columns:1fr 1fr;grid-auto-rows:auto}
  .c-ae,.c-sa,.c-qa,.c-ph,.c-sk,.c-pdf,.c-vol,.c-edu,.c-cta{grid-column:span 2;grid-row:auto}
  .c-cta{flex-direction:column;align-items:flex-start}
  .cta-r{justify-content:flex-start}
  footer{flex-direction:column;gap:12px;padding:22px 20px;text-align:center}
  .blob{display:none}
  .cambridge-banner{flex-direction:column;align-items:flex-start;gap:14px}
  .cb-left{flex-direction:column;align-items:flex-start}
  .cb-seal{flex-direction:row;gap:8px;padding:8px 14px}
  .hire-bar{display:none}
  .why-grid{grid-template-columns:1fr!important}
  .now-grid{grid-template-columns:1fr 1fr!important}
}

/* ══ HIRE BAR ══ */
.hire-bar{
  position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
  z-index:500;
  display:flex;align-items:center;gap:14px;
  padding:10px 20px 10px 14px;
  background:rgba(7,7,15,.88);
  backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
  border:1px solid var(--bdr-h);border-radius:100px;
  box-shadow:0 8px 40px rgba(0,0,0,.6),0 0 0 1px rgba(139,124,255,.15);
  opacity:0;
  animation:hireIn .6s 2.2s forwards;
  white-space:nowrap;
}
@keyframes hireIn{from{opacity:0;transform:translateX(-50%) translateY(16px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
.hire-pulse{
  width:8px;height:8px;border-radius:50%;background:var(--live);
  box-shadow:0 0 8px var(--live);
  position:relative;flex-shrink:0;
}
.hire-pulse::after{
  content:'';position:absolute;inset:-4px;border-radius:50%;
  border:1px solid var(--live);opacity:.4;
  animation:hireRing 2s ease-out infinite;
}
@keyframes hireRing{0%{transform:scale(1);opacity:.4}100%{transform:scale(2.2);opacity:0}}
.hire-txt{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.1em;color:var(--txt2);text-transform:uppercase}
.hire-txt strong{color:var(--txt);font-weight:500}
.hire-cta{
  font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;
  color:#fff;text-decoration:none;
  background:var(--v);padding:6px 14px;border-radius:100px;
  transition:all .22s;cursor:pointer;
}
.hire-cta:hover{background:#a090ff;box-shadow:0 0 20px rgba(139,124,255,.5)}

/* ══ TYPEWRITER ══ */
.h-tw{display:inline}
.h-tw-cursor{
  display:inline-block;width:3px;height:.85em;
  background:var(--v);margin-left:2px;vertical-align:middle;
  animation:blink .75s step-end infinite;
}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

/* ══ WHY ME SECTION ══ */
.why-grid{
  display:grid;grid-template-columns:repeat(3,1fr);gap:10px;
  margin-top:0;
}
.why-card{
  background:var(--s1);border:1px solid var(--bdr);border-radius:18px;
  padding:28px;transition:all .28s;cursor:pointer;position:relative;overflow:hidden;
}
.why-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,var(--accent-clr,.1) 0%,transparent 65%);opacity:0;transition:opacity .3s}
.why-card:hover{border-color:var(--bdr-h);transform:translateY(-4px);box-shadow:0 20px 56px rgba(0,0,0,.65)}
.why-card:hover::before{opacity:1}
.why-num{
  font-family:'Playfair Display',serif;font-style:italic;font-weight:400;
  font-size:56px;line-height:1;letter-spacing:-2px;
  display:block;margin-bottom:16px;
  background:var(--gr-clr,linear-gradient(135deg,var(--v),var(--r)));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.why-title{font-size:16px;font-weight:700;color:var(--txt);margin-bottom:8px;letter-spacing:-.02em}
.why-body{font-size:13px;color:var(--txt2);line-height:1.75}

/* ══ NOW / LEARNING SECTION ══ */
.now-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.now-card{
  background:var(--s1);border:1px solid var(--bdr);border-radius:16px;
  padding:20px;display:flex;flex-direction:column;gap:10px;
  transition:all .25s;cursor:pointer;position:relative;overflow:hidden;
}
.now-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--line-clr,var(--v));opacity:.5;transition:opacity .25s}
.now-card:hover{border-color:var(--bdr-h);transform:translateY(-3px);box-shadow:0 16px 48px rgba(0,0,0,.6)}
.now-card:hover::after{opacity:1}
.now-icon{font-size:22px}
.now-label{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}
.now-val{font-size:14px;font-weight:600;color:var(--txt);line-height:1.3}
.now-sub{font-size:11px;color:var(--muted)}

/* ══ KEYBOARD SHORTCUT TOAST ══ */
#kbToast{
  position:fixed;bottom:28px;right:28px;z-index:5000;
  background:rgba(7,7,15,.92);backdrop-filter:blur(24px);
  border:1px solid var(--bdr-h);border-radius:14px;
  padding:14px 18px;display:flex;align-items:center;gap:12px;
  opacity:0;transform:translateY(12px);
  transition:all .35s cubic-bezier(.34,1.56,.64,1);
  pointer-events:none;
}
#kbToast.show{opacity:1;transform:translateY(0)}
.kb-key{
  font-family:'DM Mono',monospace;font-size:11px;
  background:var(--s2);border:1px solid var(--bdr-h);border-radius:5px;
  padding:3px 8px;color:var(--txt2);
}
.kb-msg{font-family:'DM Mono',monospace;font-size:11px;color:var(--muted);letter-spacing:.06em}

/* ══ COUNTER ANIMATION ══ */
.ac-n[data-target]{transition:all .3s}
</style>
</head>
<body>

<!-- ══ LOADER ══ -->
<div id="loader">
  <div class="ld-eyebrow">Portfolio · 2026</div>
  <div class="ld-title">
    <div class="ld-word fw"><span style="animation-delay:.18s">Mohamed</span></div>
    <div class="ld-word fi"><span style="animation-delay:.30s">Hamdy</span></div>
  </div>
  <div class="ld-progress">
    <div class="ld-track"><div class="ld-fill" id="ldFill"></div></div>
    <div class="ld-bottom">
      <div class="ld-pct" id="ldPct">0%</div>
      <div class="ld-status" id="ldStatus">Initialising</div>
    </div>
  </div>
</div>
<div id="curtain"></div>

<!-- ══ HIRE BAR ══ -->
<div class="hire-bar">
  <span class="hire-pulse"></span>
  <span class="hire-txt"><strong>Available</strong> for internships & collaborations</span>
  <a href="mailto:mohamedsabae50@gmail.com" class="hire-cta">Hire Me</a>
</div>

<!-- ══ KEYBOARD TOAST ══ -->
<div id="kbToast">
  <span class="kb-key">⌘</span><span class="kb-key">K</span>
  <span class="kb-msg">Quick contact</span>
</div>

<!-- ══ CURSOR ══ -->
<div class="c-dot"  id="cDot"></div>
<div class="c-ring" id="cRing"></div>
<div id="spot"></div>

<!-- ══ NAV ══ -->
<nav>
  <a href="#home" class="nav-logo"><span class="nav-logo-dot"></span>Mohamed Hamdy</a>
  <div class="nav-mid">
    <a href="#about">About</a><div class="sep"></div>
    <a href="#projects">Projects</a><div class="sep"></div>
    <a href="#contact">Contact</a>
  </div>
</nav>

<!-- ══ HERO ══ -->
<section class="hero" id="home">
  <div class="bg-grid"></div>
  <div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>

  <div class="hero-left">
    <div class="h-tag"><span class="live-dot"></span>Open to opportunities · Class of 2028</div>

    <div class="h-headline">
      <div class="h-hl-line h-hl-line-1"><span class="hl-txt">Building</span></div>
      <div class="h-hl-line h-hl-line-2"><span class="hl-txt italic">the future</span></div>
      <div class="h-hl-line h-hl-line-3"><span class="hl-txt">with AI</span></div>
    </div>

    <p class="h-sub">
      <strong>AI Engineering student</strong> at AASTMT Alexandria (Class of 2028).<br>
      <span class="h-tw" id="twText"></span><span class="h-tw-cursor"></span>
    </p>

    <div class="h-btns">
      <a href="#projects" class="btn-fill">
        View Work
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <button onclick="openModal()" class="btn-outline">Get in touch ↗</button>
      <a href="data:application/pdf;base64,JVBERi0xLjQKJfbk/N8KMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovVmVyc2lvbiAvMS40Ci9QYWdlcyAyIDAgUgovTWV0YWRhdGEgMyAwIFIKL1N0cnVjdFRyZWVSb290IDQgMCBSCi9NYXJrSW5mbyA1IDAgUgovTGFuZyAoYXIpCi9WaWV3ZXJQcmVmZXJlbmNlcyA2IDAgUgovT3V0bGluZXMgNyAwIFIKPj4KZW5kb2JqCjggMCBvYmoKPDwKL1RpdGxlIChNT0hBTUVEIEhBTURZKQovQ3JlYXRvciAoQ2FudmEpCi9Qcm9kdWNlciAoQ2FudmEpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyNjAzMjcxNTIwMjcrMDAnMDAnKQovTW9kRGF0ZSAoRDoyMDI2MDMyNzE1MjAyNiswMCcwMCcpCi9LZXl3b3JkcyAoREFIRkpyWXVvWWssQkFHVFJnbDZHYncsMCkKL0F1dGhvciAobWVtbykKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFs5IDAgUiAxMCAwIFJdCi9Db3VudCAyCj4+CmVuZG9iagozIDAgb2JqCjw8Ci9MZW5ndGggMjc0MQovVHlwZSAvTWV0YWRhdGEKL1N1YnR5cGUgL1hNTAo+PgpzdHJlYW0NCjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+CjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iCiAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgeG1sbnM6cGRmdWFpZD0iaHR0cDovL3d3dy5haWltLm9yZy9wZGZ1YS9ucy9pZC8iCiAgICBkYzpsYW5ndWFnZT0iYXIiCiAgICBwZGY6UHJvZHVjZXI9IkNhbnZhIgogICAgeG1wOkNyZWF0ZURhdGU9IjIwMjYtMDMtMjdUMTU6MjA6MjcuOTAzWiIKICAgIHBkZnVhaWQ6cGFydD0iMSI+CiAgICA8ZGM6dGl0bGU+CiAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+TU9IQU1FRCBIQU1EWTwvcmRmOmxpPgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9ImFyIj5NT0hBTUVEIEhBTURZPC9yZGY6bGk+CiAgICAgIDwvcmRmOkFsdD4KICAgIDwvZGM6dGl0bGU+CiAgPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+DQplbmRzdHJlYW0KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdFRyZWVSb290Ci9LIFsxMSAwIFJdCi9QYXJlbnRUcmVlIDEyIDAgUgovUGFyZW50VHJlZU5leHRLZXkgMgo+PgplbmRvYmoKNSAwIG9iago8PAovTWFya2VkIHRydWUKL1N1c3BlY3RzIGZhbHNlCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9UeXBlIC9WaWV3ZXJQcmVmZXJlbmNlcwovRGlzcGxheURvY1RpdGxlIHRydWUKPj4KZW5kb2JqCjcgMCBvYmoKPDwKL1R5cGUgL091dGxpbmVzCi9GaXJzdCAxMyAwIFIKL0xhc3QgMTQgMCBSCi9Db3VudCAyCj4+CmVuZG9iago5IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9SZXNvdXJjZXMgPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9FeHRHU3RhdGUgMTUgMCBSCi9YT2JqZWN0IDw8Ci9YMTkgMTYgMCBSCj4+Cj4+Ci9NZWRpYUJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9Db250ZW50cyAxNyAwIFIKL1N0cnVjdFBhcmVudHMgMAovVGFicyAvUwovUGFyZW50IDIgMCBSCi9CbGVlZEJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9UcmltQm94IFswLjAgNy44Mjk5ODEzIDU5NS41IDg1MC4wNzk5Nl0KL0Nyb3BCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovUm90YXRlIDAKL0Fubm90cyBbXQo+PgplbmRvYmoKMTAgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1Jlc291cmNlcyA8PAovUHJvY1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSV0KL0V4dEdTdGF0ZSAxOCAwIFIKL1hPYmplY3QgPDwKL1gxMSAxOSAwIFIKPj4KPj4KL01lZGlhQm94IFswLjAgNy44Mjk5ODEzIDU5NS41IDg1MC4wNzk5Nl0KL0NvbnRlbnRzIDIwIDAgUgovU3RydWN0UGFyZW50cyAxCi9UYWJzIC9TCi9QYXJlbnQgMiAwIFIKL0JsZWVkQm94IFswLjAgNy44Mjk5ODEzIDU5NS41IDg1MC4wNzk5Nl0KL1RyaW1Cb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovQ3JvcEJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9Sb3RhdGUgMAovQW5ub3RzIFtdCj4+CmVuZG9iagoxMSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRG9jdW1lbnQKL1AgNCAwIFIKL0sgWzIxIDAgUiAyMiAwIFJdCj4+CmVuZG9iagoxMiAwIG9iago8PAovTGltaXRzIFswIDFdCi9OdW1zIFswIFsyMyAwIFIgMjQgMCBSIDI1IDAgUiAyNiAwIFIgMjcgMCBSIDI4IDAgUiAyOSAwIFIgMzAgMCBSIDMxIDAgUiAzMiAwIFIKMzMgMCBSIDM0IDAgUiAzNSAwIFIgMzYgMCBSIDM3IDAgUiAzOCAwIFIgMzkgMCBSIDQwIDAgUiA0MSAwIFIgNDIgMCBSCjQzIDAgUiA0NCAwIFIgNDUgMCBSIDQ2IDAgUiA0NyAwIFIgNDggMCBSIDQ5IDAgUiA1MCAwIFIgNTEgMCBSIDUyIDAgUgo1MyAwIFIgNTQgMCBSIDU1IDAgUiA1NiAwIFIgNTcgMCBSIDU4IDAgUiA1OSAwIFIgNjAgMCBSIDYxIDAgUiA2MiAwIFIKNjMgMCBSIDY0IDAgUiA2NSAwIFJdCiAxIFs2NiAwIFIgNjcgMCBSIDY4IDAgUiA2OSAwIFIgNzAgMCBSIDcxIDAgUiA3MiAwIFIgNzMgMCBSIDc0IDAgUl0KXQo+PgplbmRvYmoKMTMgMCBvYmoKPDwKL1RpdGxlIChBZXRoZXJDb2RlIFwoV2ViIFBsYXRmb3JtIERldmVsb3BlclwpIHwgMjAyNSkKL0Rlc3QgWzkgMCBSIC9GaXRdCi9QYXJlbnQgNyAwIFIKL0ZpcnN0IDc1IDAgUgovTGFzdCA3NSAwIFIKL0NvdW50IC0xCi9OZXh0IDE0IDAgUgo+PgplbmRvYmoKMTQgMCBvYmoKPDwKL1RpdGxlIChWT0xVTlRFRVIgRVhQRVJJRU5DRSkKL0Rlc3QgWzEwIDAgUiAvRml0XQovUGFyZW50IDcgMCBSCi9QcmV2IDEzIDAgUgovRmlyc3QgNzYgMCBSCi9MYXN0IDc3IDAgUgovQ291bnQgLTIKPj4KZW5kb2JqCjE1IDAgb2JqCjw8Ci9HMyA3OCAwIFIKL2dzMiA3OSAwIFIKPj4KZW5kb2JqCjE2IDAgb2JqCjw8Ci9MZW5ndGggMTEzNTUKL1R5cGUgL1hPYmplY3QKL1N1YnR5cGUgL0Zvcm0KL1Jlc291cmNlcyA8PAovUHJvY1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSV0KL0V4dEdTdGF0ZSA4MCAwIFIKL1hPYmplY3QgPDwKL1g0IDgxIDAgUgovWDEwIDgyIDAgUgovWDEzIDgzIDAgUgovWDE3IDg0IDAgUgovWDE4IDg1IDAgUgo+PgovRm9udCA4NiAwIFIKPj4K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MCBSCi9FIChQcm9ncmFtbWluZzogQywgQysrLCBKYXZhIFwoQmFzaWNcKSwgV2ViIERldmVsb3BtZW50IFwoRnJvbnRlbmRcKS4pCi9QZyA5IDAgUgovSyBbMl0KPj4KZW5kb2JqCjI2IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDEwMyAwIFIKL0UgKEFJIFRvb2xzOiBHZW1pbmkgXChSZXNlYXJjaCAmIENvZGluZ1wpLCBDaGF0R1BULCBBSSBJbWFnZXJ5IFwoQWRvYmUgU3RvY2svU2h1dHRlcnN0b2NrIG9wdGltaXphdGlvblwpLikKL1BnIDkgMCBSCi9LIFszXQo+PgplbmRvYmoKMjcgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMTA0IDAgUgovRSAoRGVzaWduICYgUHJvZHVjdGl2aXR5OiBBZG9iZSBTdWl0ZSwgUGhvdG9zaG9wLCBDYW52YSwgTVMgT2ZmaWNlLikKL1BnIDkgMCBSCi9LIFs0XQo+PgplbmRvYmoKMjggMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMTA1IDAgUgovRSAoU29mdCBTa2lsbHM6IEFkYXB0YWJpbGl0eSwgRmFzdCBMZWFybmVyLCBMZWFkZXJzaGlwLCBQcm9ibGVtLVNvbHZpbmcsIFRlYW13b3JrLikKL1BnIDkgMCBSCi9LIFs1XQo+PgplbmRvYmoKMjkgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIChCYWNoZWxvciBvZiBTY2llbmNlIGluIENvbXB1dGluZyBhbmQgSW5mb3JtYXRpb24gVGVjaG5vbG9neSkKL1BnIDkgMCBSCi9LIFs2XQo+PgplbmRvYmoKMzAgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FICggQXJhYiBBY2FkZW15IGZvciBTY2llbmNlLCBUZWNobm9sb2d5ICYgTWFyaXRpbWUgVHJhbnNwb3J0IFwoQUFTVE1UXCksIEFsZXhhbmRyaWEpCi9QZyA5IDAgUgovSyBbN10KPj4KZW5kb2JqCjMxIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDIxIDAgUgovRSA8MzIzMDMyMzQyMDg1MjAzMjMwMzIzOD4KL1BnIDkgMCBSCi9LIFs4XQo+PgplbmRvYmoKMzIgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMTA2IDAgUgovRSAoQXJhYmljOiBOYXRpdmUuKQovUGcgOSAwIFIKL0sgWzldCj4+CmVuZG9iagozMyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAxMDcgMCBSCi9FIChFbmdsaXNoOiBQcm9mZXNzaW9uYWwpCi9QZyA5IDAgUgovSyBbMTBdCj4+CmVuZG9iagozNCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAxMDggMCBSCi9FIChJdGFsaWFuOiBCYXNpYyAvIEJlZ2lubmVyLikKL1BnIDkgMCBSCi9LIFsxMV0KPj4KZW5kb2JqCjM1IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDIxIDAgUgovRSAoKzIwMTIyMDU0MzEwNSApCi9QZyA5IDAgUgovSyBbMTJdCj4+CmVuZG9iagozNiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgKEFsZXhhbmRyaWEsIFNpZGkgQmVzaHIsIEVneXB0KQovUGcgOSAwIFIKL0sgWzEzXQo+PgplbmRvYmoKMzcgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIChtb2hhbWVkc2FiYWU1MEBnbWFpbC5jb20pCi9QZyA5IDAgUgovSyBbMTRdCj4+CmVuZG9iagozOCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgKFNLSUxMUykKL1BnIDkgMCBSCi9LIFsxNV0KPj4KZW5kb2JqCjM5IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDIxIDAgUgovRSAoTEFOR1VBR0VTKQovUGcgOSAwIFIKL0sgWzE2XQo+PgplbmRvYmoKNDAgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIChFRFVDQVRJT04pCi9QZyA5IDAgUgovSyBbMTddCj4+CmVuZG9iago0MSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgKENPTlRBQ1QpCi9QZyA5IDAgUgovSyBbMThdCj4+CmVuZG9iago0MiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgKFNhYmFlUERGIFwoV2ViIERldmVsb3BlciAmIENyZWF0b3JcKSB8IDIwMjYpCi9QZyA5IDAgUgovSyBbMTldCj4+CmVuZG9iago0MyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgKERlZGljYXRlZCBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBzdHVkZW50IGF0IHRoZSBBcmFiIEFjYWRlbXkgZm9yIFNjaWVuY2UsIFRlY2hub2xvZ3kgJiBNYXJpdGltZSBUcmFuc3BvcnQgXChBQVNUTVRcKS4gUGFzc2lvbmF0ZSBhYm91dCB0cmFuc2Zvcm1pbmcgdGhlb3JldGljYWwga25vd2xlZGdlIGludG8gaW5ub3ZhdGl2ZSwgcHJhY3RpY2FsIHNvbHV0aW9ucyBsaWtlIHdlYiBwbGF0Zm9ybXMgYW5kIG1vYmlsZSBhcHBsaWNhdGlvbnMuIFNlZWtpbmcgdG8gbGV2ZXJhZ2Ugc2tpbGxzIGluIGFsZ29yaXRobSBkZXZlbG9wbWVudCwgZGF0YSBhbmFseXNpcywgYW5kIHdlYiB0ZWNobm9sb2dpZXMgdG8gY29udHJpYnV0ZSB0byBwcm9taXNpbmcgdGVjaCBwcm9qZWN0cy4pCi9QZyA5IDAgUgovSyBbMjBdCj4+CmVuZG9iago0NCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgKEN1c3RvbWVyIFNlcnZpY2UgVHJhaW5lZSB8IEludGVsY2lhIHwgKQovUGcgOSAwIFIKL0sgWzIxXQo+PgplbmRvYmoKNDUgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIChTVU1NQVJZKQovUGcgOSAwIFIKL0sgWzIyXQo+PgplbmRvYmoKNDYgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIChFWFBFUklFTkNFKQovUGcgOSAwIFIKL0sgWzIzXQo+PgplbmRvYmoKNDcgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIChQUk9KRUNUUykKL1BnIDkgMCBSCi9LIFsyNF0KPj4KZW5kb2JqCjQ4IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDEwOSAwIFIKL0UgKE1hbmFnZWQgYW5kIGRlbGl2ZXJlZCBwcm9mZXNzaW9uYWwgdHJhbnNsYXRpb24gcHJvamVjdHMgXChBcmFiaWMgPC0+IEVuZ2xpc2hcKSwgZW5zdXJpbmcgaGlnaCBsaW5ndWlzdGljIGFjY3VyYWN5LikKL1BnIDkgMCBSCi9LIFsyNV0KPj4KZW5kb2JqCjQ5IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDIxIDAgUgovRSAoRnJlZWxhbmNlIFRyYW5zbGF0b3IgfCBVcHdvcmsgJiBGaXZlcnIgKQovUGcgOSAwIFIKL0sgWzI2XQo+PgplbmRvYmoKNTAgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIChGZWIgMjAyNiApCi9QZyA5IDAgUgovSyBbMjddCj4+CmVuZG9iago1MSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgPDMyMzAzMjM0MjA4NTIwMzIzMDMyMzU+Ci9QZyA5IDAgUgovSyBbMjhdCj4+CmVuZG9iago1MiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAxMTAgMCBSCi9FIChVbmRlcmdvaW5nIHByb2Zlc3Npb25hbCB0cmFpbmluZyBpbiBjb21tdW5pY2F0aW9uLCBjb21wbGV4IHByb2JsZW0tc29sdmluZywgYW5kIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IFwoQ1JNXCkuKQovUGcgOSAwIFIKL0sgWzI5XQo+PgplbmRvYmoKNTMgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIChDb250ZW50IENyZWF0b3IgJiBWaWRlbyBFZGl0b3IgfCBZb3VUdWJlICYgVHdpdGNoICkKL1BnIDkgMCBSCi9LIFszMF0KPj4KZW5kb2JqCjU0IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDIxIDAgUgovRSA8MzIzMDMyMzMyMDg1MjA1MDcyNjU3MzY1NkU3ND4KL1BnIDkgMCBSCi9LIFszMV0KPj4KZW5kb2JqCjU1IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDExMSAwIFIKL0UgKE1hbmFnaW5nIHRoZSAic2lsZW50YWxnbyIgY2hhbm5lbCwgZm9jdXNpbmcgb24gaGlnaC1xdWFsaXR5IGdhbWVwbGF5IGFuZCBlZHVjYXRpb25hbCBjb250ZW50LikKL1BnIDkgMCBSCi9LIFszMl0KPj4KZW5kb2JqCjU2IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDExMiAwIFIKL0UgKFV0aWxpemluZyBBSSB0b29scyBhbmQgT0JTIFN0dWRpbyBmb3IgcHJvZHVjdGlvbiBhbmQgbGl2ZSBzdHJlYW1pbmcgb3B0aW1pemF0aW9uLikKL1BnIDkgMCBSCi9LIFszM10KPj4KZW5kb2JqCjU3IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDIxIDAgUgovRSAoRGV2ZWxvcGVkIGEgY29tcHJlaGVuc2l2ZSB3ZWIgcGxhdGZvcm0gcHJvdmlkaW5nIGludGVncmF0ZWQgdG9vbHMgZm9yIFBERiBtYW5hZ2VtZW50IGFuZCBlZGl0aW5nLikKL1BnIDkgMCBSCi9LIFszNF0KPj4KZW5kb2JqCjU4IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9IMQovUCAyMSAwIFIKL1QgKEFldGhlckNvZGUgXChXZWIgUGxhdGZvcm0gRGV2ZWxvcGVyXCkgfCAyMDI1KQovRSAoQWV0aGVyQ29kZSBcKFdlYiBQbGF0Zm9ybSBEZXZlbG9wZXJcKSB8IDIwMjUpCi9QZyA5IDAgUgovSyBbMzVdCj4+CmVuZG9iago1OSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgKEJ1aWx0IGFuZCBkZXNpZ25lZCBhIHRlY2huaWNhbCB3ZWIgcGxhdGZvcm0gZm9jdXNlZCBvbiBjb2RpbmcgcmVzb3VyY2VzIGFuZCBkZXZlbG9wZXIgdG9vbHMuKQovUGcgOSAwIFIKL0sgWzM2XQo+PgplbmRvYmoKNjAgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMjEgMCBSCi9FIDw1Mzc0NzI2NTY1NzQ2QzZGNzI2NTIwNDE3MDcwMjAyODRDNjU2MTY0MjA0NDY1NzY2NTZDNkY3MDY1NzIyOTIwN0MyMDMyMzAzMjM1MjA4NTIwMzIzMDMyMzY+Ci9QZyA5IDAgUgovSyBbMzddCj4+CmVuZG9iago2MSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovUCAyMSAwIFIKL0UgKExlYWRpbmcgdGhlIGRldmVsb3BtZW50IG9mIGFuIGFkdmVudHVyZSBhbmQgZXhwbG9yYXRpb24gbW9iaWxlIGFwcCBkZXNpZ25lZCBhcyBhbiBpbnRlcmFjdGl2ZSBndWlkZSBmb3IgdHJhdmVsZXJzLikKL1BnIDkgMCBSCi9LIFszOF0KPj4KZW5kb2JqCjYyIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9GaWd1cmUKL1AgMjEgMCBSCi9QZyA5IDAgUgovQSBbMTEzIDAgUiAwXQovSyBbMzldCj4+CmVuZG9iago2MyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvRmlndXJlCi9QIDIxIDAgUgovUGcgOSAwIFIKL0EgWzExNCAwIFIgMF0KL0sgWzQwXQo+PgplbmRvYmoKNjQgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0ZpZ3VyZQovUCAyMSAwIFIKL1BnIDkgMCBSCi9BIFsxMTUgMCBSIDBdCi9LIFs0MV0KPj4KZW5kb2JqCjY1IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9GaWd1cmUKL1AgMjEgMCBSCi9QZyA5IDAgUgovQSBbMTE2IDAgUiAwXQovSyBbNDJdCj4+CmVuZG9iago2NiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvSDIKL1AgMjIgMCBSCi9UIChSb2JvdGljcyBQcm9qZWN0IHwgUm9ib0N1cCBDb21wZXRpdGlvbiB8IDIwMjMgKQovRSAoUm9ib3RpY3MgUHJvamVjdCB8IFJvYm9DdXAgQ29tcGV0aXRpb24gfCAyMDIzICkKL1BnIDEwIDAgUgovSyBbMF0KPj4KZW5kb2JqCjY3IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDIyIDAgUgovRSAoQ29sbGFib3JhdGVkIG9uIGRlc2lnbmluZyBhbmQgcHJvZ3JhbW1pbmcgYSByb2JvdCwgZXN0YWJsaXNoaW5nIGZvdW5kYXRpb25zIGluIHNlbnNvciBpbnRlZ3JhdGlvbiBhbmQgbG9naWMuKQovUGcgMTAgMCBSCi9LIFsxXQo+PgplbmRvYmoKNjggMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0gxCi9QIDIyIDAgUgovVCAoVk9MVU5URUVSIEVYUEVSSUVOQ0UpCi9FIChWT0xVTlRFRVIgRVhQRVJJRU5DRSkKL1BnIDEwIDAgUgovSyBbMl0KPj4KZW5kb2JqCjY5IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDExNyAwIFIKL0UgKFZvbHVudGVlcmVkIGZvciB0aGUgQWZyaWNhIGFuZCBBcmFiIENvbGxlZ2lhdGUgUHJvZ3JhbW1pbmcgQ2hhbXBpb25zaGlwIFwoQUNQQyAyMDI0XCkuKQovUGcgMTAgMCBSCi9LIFszXQo+PgplbmRvYmoKNzAgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMTE4IDAgUgovRSAoQWN0aXZlIG9yZ2FuaXplciBmb3IgdGhlIEVneXB0aWFuIENvbGxlZ2lhdGUgUHJvZ3JhbW1pbmcgQ29udGVzdCBcKEVDUEMgMjAyNVwpLikKL1BnIDEwIDAgUgovSyBbNF0KPj4KZW5kb2JqCjcxIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDExOSAwIFIKL0UgKE1hbmFnZWQgbG9naXN0aWNzIGNvb3JkaW5hdGlvbiBhbmQgcHJvdmlkZWQgY29tcHJlaGVuc2l2ZSB0ZWFtIHN1cHBvcnQgZm9yIGNvbnRlc3RhbnRzLikKL1BnIDEwIDAgUgovSyBbNV0KPj4KZW5kb2JqCjcyIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9IMgovUCAyMiAwIFIKL1QgKFVJUE0gTW9kZXJuIFBlbnRhdGhsb24gV29ybGQgQ2hhbXBpb25zaGlwcyB8IDIwMjUpCi9FIChVSVBNIE1vZGVybiBQZW50YXRobG9uIFdvcmxkIENoYW1waW9uc2hpcHMgfCAyMDI1KQovUGcgMTAgMCBSCi9LIFs2XQo+PgplbmRvYmoKNzMgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0gyCi9QIDIyIDAgUgovVCA8NEY3MDY1NzI2MTc0Njk2RjZFMjA1NDY1NjE2RDIwNEQ2NTZENjI2NTcyMjA3QzIwNDE0MzUwNDMyMDI2MjA0NTQzNTA0MzIwN0MyMDMyMzAzMjM0MjA4NTIwMzIzMDMyMzU+Ci9FIDw0RjcwNjU3MjYxNzQ2OTZGNkUyMDU0NjU2MTZEMjA0RDY1NkQ2MjY1NzIyMDdDMjA0MTQzNTA0MzIwMjYyMDQ1NDM1MDQzMjA3QzIwMzIzMDMyMzQyMDg1MjAzMjMwMzIzNT4KL1BnIDEwIDAgUgovSyBbN10KPj4KZW5kb2JqCjc0IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9QIDIyIDAgUgovRSAoUHJvdmlkZWQgY3JpdGljYWwgbG9naXN0aWNzIGFuZCBkZWxlZ2F0ZSByZWNlcHRpb24gc3VwcG9ydCBkdXJpbmcgdGhlIGdsb2JhbCBjaGFtcGlvbnNoaXAuKQovUGcgMTAgMCBSCi9LIFs4XQo+PgplbmRvYmoKNzUgMCBvYmoKPDwKL1RpdGxlIChSb2JvdGljcyBQcm9qZWN0IHwgUm9ib0N1cCBDb21wZXRpdGlvbiB8IDIwMjMpCi9EZXN0IFsxMCAwIFIgL0ZpdF0KL1BhcmVudCAxMyAwIFIKPj4KZW5kb2JqCjc2IDAgb2JqCjw8Ci9UaXRsZSA8NEY3MDY1NzI2MTc0Njk2RjZFMjA1NDY1NjE2RDIwNEQ2NTZENjI2NTcyMjA3QzIwNDE0MzUwNDMyMDI2MjA0NTQzNTA0MzIwN0MyMDMyMzAzMjM0MjA4NTIwMzIzMDMyMzU+Ci9EZXN0IFsxMCAwIFIgL0ZpdF0KL1BhcmVudCAxNCAwIFIKL05leHQgNzcgMCBSCj4+CmVuZG9iago3NyAwIG9iago8PAovVGl0bGUgKFVJUE0gTW9kZXJuIFBlbnRhdGhsb24gV29ybGQgQ2hhbXBpb25zaGlwcyB8IDIwMjUpCi9EZXN0IFsxMCAwIFIgL0ZpdF0KL1BhcmVudCAxNCAwIFIKL1ByZXYgNzYgMCBSCj4+CmVuZG9iago3OCAwIG9iago8PAovY2EgMQovQk0gL05vcm1hbAo+PgplbmRvYmoKNzkgMCBvYmoKPDwKL1R5cGUgL0V4dEdTdGF0ZQovY2EgMC4wCj4+CmVuZG9iago4MCAwIG9iago8PAovRzMgNzggMCBSCi9HNiAxMjAgMCBSCj4+CmVuZG9iago4MSAwIG9iago8PAovTGVuZ3RoIDEwNgovVHlwZSAvWE9iamVjdAovU3VidHlwZSAvRm9ybQovUmVzb3VyY2VzIDw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRXh0R1N0YXRlIDEyMSAwIFIKPj4KL0JCb3ggWzAgMCAyNDgyIDU4Nl0KL0dyb3VwIDEyMiAwIFIKL0ZpbHRlciAvRmxhdGVEZWNvZGUKPj4Kc3RyZWFtDQp4nCvkMlAw0jM3NTA0MFHQhbMMFIxMLQ30LMxMTBV0DQ0t9EwNjS0NDBWSc7n0LE1MDRWQySB3LIJF6Vz67sYK6cVc+o5FJZlpicklCk6+zlwGYLPNFCwtjBSKUrnSuAK5XH2duQBY9By/DQplbmRzdHJlYW0KZW5kb2JqCjgyIDAgb2JqCjw8Ci9MZW5ndGggMjA4Ci9UeXBlIC9YT2JqZWN0Ci9TdWJ0eXBlIC9Gb3JtCi9SZXNvdXJjZXMgPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9FeHRHU3RhdGUgMTIzIDAg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UyAvTAovUCAyMSAwIFIKL0sgWzE2NSAwIFIgMTY2IDAgUl0KL1BnIDkgMCBSCj4+CmVuZG9iagoxMDEgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0wKL1AgMjIgMCBSCi9LIFsxNjcgMCBSIDE2OCAwIFIgMTY5IDAgUl0KL1BnIDEwIDAgUgo+PgplbmRvYmoKMTAyIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNTggMCBSCi9LIDI1IDAgUgo+PgplbmRvYmoKMTAzIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNTkgMCBSCi9LIDI2IDAgUgo+PgplbmRvYmoKMTA0IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNjAgMCBSCi9LIDI3IDAgUgo+PgplbmRvYmoKMTA1IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNjEgMCBSCi9LIDI4IDAgUgo+PgplbmRvYmoKMTA2IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNjIgMCBSCi9LIDMyIDAgUgo+PgplbmRvYmoKMTA3IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNjMgMCBSCi9LIDMzIDAgUgo+PgplbmRvYmoKMTA4IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNjQgMCBSCi9LIDM0IDAgUgo+PgplbmRvYmoKMTA5IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNTcgMCBSCi9LIDQ4IDAgUgo+PgplbmRvYmoKMTEwIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNTYgMCBSCi9LIDUyIDAgUgo+PgplbmRvYmoKMTExIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNjUgMCBSCi9LIDU1IDAgUgo+PgplbmRvYmoKMTEyIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAxNjYgMCBSCi9LIDU2IDAgUgo+PgplbmRvYmoKMTEzIDAgb2JqCjw8Ci9PIC9MYXlvdXQKL0JCb3ggWy0wLjAwMDAwMDAwMDAwMDA4NTI2NTEzIDcwNy43NDYxNSA1OTUuMjc1NiA3MDkuMjQ2MTVdCi9QbGFjZW1lbnQgL0Jsb2NrCj4+CmVuZG9iagoxMTQgMCBvYmoKPDwKL08gL0xheW91dAovQkJveCBbMzkzLjk4OCA2MzEuNjkxMDQgNDA5LjA2NzkgNjQxLjgzNTddCi9QbGFjZW1lbnQgL0Jsb2NrCj4+CmVuZG9iagoxMTUgMCBvYmoKPDwKL08gL0xheW91dAovQkJveCBbMzk0Ljg0MDcgNjA1LjE4MDg1IDQwOC4yMTUyNyA2MTQuNzcyMzRdCi9QbGFjZW1lbnQgL0Jsb2NrCj4+CmVuZG9iagoxMTYgMCBvYmoKPDwKL08gL0xheW91dAovQkJveCBbMzk0Ljg0MDcgNTc2LjQ1NDkgNDA4LjIxNTI3IDU5MS4zMTU1NV0KL1BsYWNlbWVudCAvQmxvY2sKPj4KZW5kb2JqCjExNyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTEJvZHkKL1AgMTY3IDAgUgovSyA2OSAwIFIKPj4KZW5kb2JqCjExOCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTEJvZHkKL1AgMTY4IDAgUgovSyA3MCAwIFIKPj4KZW5kb2JqCjExOSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTEJvZHkKL1AgMTY5IDAgUgovSyA3MSAwIFIKPj4KZW5kb2JqCjEyMCAwIG9iago8PAovQ0EgMQovY2EgMQovTEMgMQovTEogMAovTFcgMgovTUwgNAovU0EgdHJ1ZQovQk0gL05vcm1hbAo+PgplbmRvYmoKMTIxIDAgb2JqCjw8Ci9HMyA3OCAwIFIKPj4KZW5kb2JqCjEyMiAwIG9iago8PAovVHlwZSAvR3JvdXAKL1MgL1RyYW5zcGFyZW5jeQovSSB0cnVlCj4+CmVuZG9iagoxMjMgMCBvYmoKPDwKL0czIDc4IDAgUgo+PgplbmRvYmoKMTI0IDAgb2JqCjw8Ci9GOSAxMzggMCBSCj4+CmVuZG9iagoxMjUgMCBvYmoKPDwKL1R5cGUgL0dyb3VwCi9TIC9UcmFuc3BhcmVuY3kKL0kgdHJ1ZQo+PgplbmRvYmoKMTI2IDAgb2JqCjw8Ci9HMyA3OCAwIFIKPj4KZW5kb2JqCjEyNyAwIG9iago8PAovRjEyIDE3MCAwIFIKPj4KZW5kb2JqCjEyOCAwIG9iago8PAovVHlwZSAvR3JvdXAKL1MgL1RyYW5zcGFyZW5jeQovSSB0cnVlCj4+CmVuZG9iagoxMjkgMCBvYmoKPDwKL0czIDc4IDAgUgo+PgplbmRvYmoKMTMwIDAgb2JqCjw8Ci9GMTIgMTcwIDAgUgo+PgplbmRvYmoKMTMxIDAgb2JqCjw8Ci9UeXBlIC9Hcm91cAovUyAvVHJhbnNwYXJlbmN5Ci9JIHRydWUKPj4KZW5kb2JqCjEzMiAwIG9iago8PAovRzMgNzggMCBSCj4+CmVuZG9iagoxMzMgMCBvYmoKPDwKL0YxMiAxNzAgMCBSCj4+CmVuZG9iagoxMzQgMCBvYmoKPDwKL1R5cGUgL0dyb3VwCi9TIC9UcmFuc3BhcmVuY3kKL0kgdHJ1ZQo+PgplbmRvYmoKMTM1IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0FBQUFBQStHYXJldC1Cb29rCi9FbmNvZGluZyAvSWRlbnRpdHktSAovRGVzY2VuZGFudEZvbnRzIFsxNzEgMCBSXQovVG9Vbmljb2RlIDE3MiAwIFIKPj4KZW5kb2JqCjEzNiAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9CQUFBQUErUm9ib3RvLVJlZ3VsYXIKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzE3MyAwIFJdCi9Ub1VuaWNvZGUgMTc0IDAgUgo+PgplbmRvYmoKMTM3IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0NBQUFBQStQb3BwaW5zLVNlbWlCb2xkCi9FbmNvZGluZyAvSWRlbnRpdHktSAovRGVzY2VuZGFudEZvbnRzIFsxNzUgMCBSXQovVG9Vbmljb2RlIDE3NiAwIFIKPj4KZW5kb2JqCjEzOCAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9EQUFBQUErUG9wcGlucy1SZWd1bGFyCi9FbmNvZGluZyAvSWRlbnRpdHktSAovRGVzY2VuZGFudEZvbnRzIFsxNzcgMCBSXQovVG9Vbmljb2RlIDE3OCAwIFIKPj4KZW5kb2JqCjEzOSAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9FQUFBQUErR2FyZXQtUmVndWxhcgovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMTc5IDAgUl0KL1RvVW5pY29kZSAxODAgMCBSCj4+CmVuZG9iagoxNDAgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUwCi9CYXNlRm9udCAvR0FBQUFBK09wZW5TYW5zLVJlZ3VsYXIKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzE4MSAwIFJdCi9Ub1VuaWNvZGUgMTgyIDAgUgo+PgplbmRvYmoKMTQxIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0hBQUFBQStBcmlhbE5vdmEtQm9sZAovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMTgzIDAgUl0KL1RvVW5pY29kZSAxODQgMCBSCj4+CmVuZG9iagoxNDIgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUwCi9CYXNlRm9udCAvSUFBQUFBK0FyaWFsTm92YQovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMTg1IDAgUl0KL1RvVW5pY29kZSAxODYgMCBSCj4+CmVuZG9iagoxNDMgMCBvYmoKPDwKL0czIDg4IDAgUgo+PgplbmRvYmoKMTQ0IDAgb2JqCjw8Ci9GNCAxODcgMCBSCj4+CmVuZG9iagoxNDUgMCBvYmoKPDwKL1R5cGUgL0dyb3VwCi9TIC9UcmFuc3BhcmVuY3kKL0kgdHJ1ZQo+PgplbmRvYmoKMTQ2IDAgb2JqCjw8Ci9HMyA4OCAwIFIKPj4KZW5kb2JqCjE0NyAwIG9iago8PAovRjcgMTg4IDAgUgo+PgplbmRvYmoKMTQ4IDAgb2JqCjw8Ci9UeXBlIC9Hcm91cAovUyAvVHJhbnNwYXJlbmN5Ci9JIHRydWUKPj4KZW5kb2JqCjE0OSAwIG9iago8PAovRzMgODggMCBSCj4+CmVuZG9iagoxNTAgMCBvYmoKPDwKL0Y0IDE4NyAwIFIKPj4KZW5kb2JqCjE1MSAwIG9iago8PAovVHlwZSAvR3JvdXAKL1MgL1RyYW5zcGFyZW5jeQovSSB0cnVlCj4+CmVuZG9iagoxNTIgMCBvYmoKPDwKL0czIDg4IDAgUgo+PgplbmRvYmoKMTUzIDAgb2JqCjw8Ci9GNCAxODcgMCBSCj4+CmVuZG9iagoxNTQgMCBvYmoKPDwKL1R5cGUgL0dyb3VwCi9TIC9UcmFuc3BhcmVuY3kKL0kgdHJ1ZQo+PgplbmRvYmoKMTU1IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0JBQUFBQStBcmlhbE5vdmEKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzE4OSAwIFJdCi9Ub1VuaWNvZGUgMTkwIDAgUgo+PgplbmRvYmoKMTU2IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MSQovUCA5NiAwIFIKL0sgWzE5MSAwIFIgMTEwIDAgUl0KPj4KZW5kb2JqCjE1NyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTEkKL1AgOTcgMCBSCi9LIFsxOTIgMCBSIDEwOSAwIFJdCj4+CmVuZG9iagoxNTggMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xJCi9QIDk4IDAgUgovSyBbMTkzIDAgUiAxMDIgMCBSXQo+PgplbmRvYmoKMTU5IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MSQovUCA5OCAwIFIKL0sgWzE5NCAwIFIgMTAzIDAgUl0KPj4KZW5kb2JqCjE2MCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTEkKL1AgOTggMCBSCi9LIFsxOTUgMCBSIDEwNCAwIFJdCj4+CmVuZG9iagoxNjEgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xJCi9QIDk4IDAgUgovSyBbMTk2IDAgUiAxMDUgMCBSXQo+PgplbmRvYmoKMTYyIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MSQovUCA5OSAwIFIKL0sgWzE5NyAwIFIgMTA2IDAgUl0KPj4KZW5kb2JqCjE2MyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTEkKL1AgOTkgMCBSCi9LIFsxOTggMCBSIDEwNyAwIFJdCj4+CmVuZG9iagoxNjQgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xJCi9QIDk5IDAgUgovSyBbMTk5IDAgUiAxMDggMCBSXQo+PgplbmRvYmoKMTY1IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MSQovUCAxMDAgMCBSCi9LIFsyMDAgMCBSIDExMSAwIFJdCj4+CmVuZG9iagoxNjYgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xJCi9QIDEwMCAwIFIKL0sgWzIwMSAwIFIgMTEyIDAgUl0KPj4KZW5kb2JqCjE2NyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTEkKL1AgMTAxIDAgUgovSyBbMjAyIDAgUiAxMTcgMCBSXQo+PgplbmRvYmoKMTY4IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MSQovUCAxMDEgMCBSCi9LIFsyMDMgMCBSIDExOCAwIFJdCj4+CmVuZG9iagoxNjkgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xJCi9QIDEwMSAwIFIKL0sgWzIwNCAwIFIgMTE5IDAgUl0KPj4KZW5kb2JqCjE3MCAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9GQUFBQUErTGF0by1CbGFjawovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMjA1IDAgUl0KL1RvVW5pY29kZSAyMDYgMCBSCj4+CmVuZG9i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LdwvmBvd0rU8f4exsKYNCmVuZHN0cmVhbQplbmRvYmoKMTg3IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0FBQUFBQStMYXRvLUJsYWNrCi9FbmNvZGluZyAvSWRlbnRpdHktSAovRGVzY2VuZGFudEZvbnRzIFsyMjMgMCBSXQovVG9Vbmljb2RlIDIyNCAwIFIKPj4KZW5kb2JqCjE4OCAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9DQUFBQUErR2FyZXQtUmVndWxhcgovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMjI1IDAgUl0KL1RvVW5pY29kZSAyMjYgMCBSCj4+CmVuZG9iagoxODkgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0ZvbnREZXNjcmlwdG9yIDIyNyAwIFIKL0Jhc2VGb250IC9CQUFBQUErQXJpYWxOb3ZhCi9TdWJ0eXBlIC9DSURGb250VHlwZTIKL0NJRFRvR0lETWFwIC9JZGVudGl0eQovQ0lEU3lzdGVtSW5mbyAyMjggMCBSCi9XIFswIFs1MDAgMCAwIDI3NC45MDIzNF0KIDExIDEyIDMzMy4wMDc4MSAxOSAyNCA1NTYuMTUyMzQgMzYgWzY2Ni45OTIxOSAwIDcxNS44MjAzMSAwIDU5Ny4xNjc5N10KNDggWzgzNi45MTQwNiAwIDAgNjIxLjA5Mzc1XQogNTcgWzYzOC4xODM1OV0KIDY4IFs1MjIuOTQ5MjIgNTcxLjc3NzM0IDUyMy45MjU3OCA1NzEuNzc3MzQgNTQ3Ljg1MTU2IDI3Ny44MzIwMyA1NjUuOTE3OTcgNTU2LjE1MjM0IDIyMy42MzI4MSAwCjAgMjIzLjYzMjgxIDgzNy44OTA2MyA1NTYuMTUyMzQgNTU2LjE1MjM0IDU3MS43NzczNCAwIDM2MC44Mzk4NCA0NzYuMDc0MjIgMjkxLjAxNTYzCjU1Ni4xNTIzNCA0OTEuMjEwOTQgMCAwIDUwMCA0NjAuOTM3NV0KXQovRFcgMjUwCj4+CmVuZG9iagoxOTAgMCBvYmoKPDwKL0xlbmd0aCAzMzMKL0ZpbHRlciAvRmxhdGVEZWNvZGUKPj4Kc3RyZWFtDQp4nF2STW6DMBBG9z6Fl8kiwgZMEgkhtVAkFv1RaQ5A7IFaKsYyzoLbV3hoInUB0jPf2G8YR2VTNUZ7Gn24Sbbgaa+NcjBPNyeBXmHQhvCYKi39RuEtx86SqGyqdpk9jI3pJ5LnlEafMOjZu4XuntR0hT2J3p0Cp81Ad5ey3ZOovVn7AyMYTxkpCqqgJ1H52tm3bgQahbJDo8B47ZfDpWwfia/FAo0Dc7SRk4LZdhJcZwYgOWOMFTSv67ouCBj17zvfyq69/O5ciCcFzRmLWRGoRioDcY70goTJBJNcIMWB4jRQypEypATphCQCJQypQsI9Be6ZnJGyoL45Zn/Gjw6fQ4yVaHdCn2MgjoclaVhMNy1MZmiXYo8Cj86wVYHtCDQ4YlcC60SFi+dNC0XWn7tegvvk5M05MD7clDCtdU7awP0y2cmuVevzC+FdrIANCmVuZHN0cmVhbQplbmRvYmoKMTkxIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MYmwKL1AgMTU2IDAgUgovQWN0dWFsVGV4dCA8ODA+Cj4+CmVuZG9iagoxOTIgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xibAovUCAxNTcgMCBSCi9BY3R1YWxUZXh0IDw4MD4KPj4KZW5kb2JqCjE5MyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTGJsCi9QIDE1OCAwIFIKL0FjdHVhbFRleHQgPDgwPgo+PgplbmRvYmoKMTk0IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MYmwKL1AgMTU5IDAgUgovQWN0dWFsVGV4dCA8ODA+Cj4+CmVuZG9iagoxOTUgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xibAovUCAxNjAgMCBSCi9BY3R1YWxUZXh0IDw4MD4KPj4KZW5kb2JqCjE5NiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTGJsCi9QIDE2MSAwIFIKL0FjdHVhbFRleHQgPDgwPgo+PgplbmRvYmoKMTk3IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MYmwKL1AgMTYyIDAgUgovQWN0dWFsVGV4dCA8ODA+Cj4+CmVuZG9iagoxOTggMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xibAovUCAxNjMgMCBSCi9BY3R1YWxUZXh0IDw4MD4KPj4KZW5kb2JqCjE5OSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTGJsCi9QIDE2NCAwIFIKL0FjdHVhbFRleHQgPDgwPgo+PgplbmRvYmoKMjAwIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MYmwKL1AgMTY1IDAgUgovQWN0dWFsVGV4dCA8ODA+Cj4+CmVuZG9iagoyMDEgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xibAovUCAxNjYgMCBSCi9BY3R1YWxUZXh0IDw4MD4KPj4KZW5kb2JqCjIwMiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvTGJsCi9QIDE2NyAwIFIKL0FjdHVhbFRleHQgPDgwPgo+PgplbmRvYmoKMjAzIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MYmwKL1AgMTY4IDAgUgovQWN0dWFsVGV4dCA8ODA+Cj4+CmVuZG9iagoyMDQgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0xibAovUCAxNjkgMCBSCi9BY3R1YWxUZXh0IDw4MD4KPj4KZW5kb2JqCjIwNSAwIG9iago8PAovVHlwZSAvRm9udAovRm9udERlc2NyaXB0b3IgMjI5IDAgUgovQmFzZUZvbnQgL0ZBQUFBQStMYXRvLUJsYWNrCi9TdWJ0eXBlIC9DSURGb250VHlwZTIKL0NJRFRvR0lETWFwIC9JZGVudGl0eQovQ0lEU3lzdGVtSW5mbyAyMzAgMCBSCi9XIFswIFs1NjEuNSAwIDIzMSA3MTEgMCAwIDAgNjU1LjUgMCA3NjEKMCAwIDAgNTY2LjVdCiAyMSBbNTI1XQogMzAgWzYzNiAwIDAgMCA1NTRdCiA0MSBbMTA2NSAwIDAgMCA1MTcuNV0KIDQ4IDU1CjU3NC41IDU5IFs1MzkgMCAzNjZdCiA5NSBbNTcwXQogMTA4IFs4NTEgMCAwIDU4MSAwIDAgNTc1IDAgMCAzODEuNV0KIDEyNCBbMzg0XQogMTM2Cls1MzldCiAzMjcgWzI3MF0KIDMzNiAzMzcgMjgxIDM1MSBbNzMzLjVdCiAxMTQwIFsyNjBdCl0KL0RXIDU4MAo+PgplbmRvYmoKMjA2IDAgb2JqCjw8Ci9MZW5ndGggMzgwCi9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQ0KeJxd0stuozAUBuC9n8LLdhFhm4uJhJBaZ5BYzEWlfQACJynSxCDHWeTtR5yfdKQuQPpknwuck7j20PopyuRPmIeOojxNfgx0nW9hIHmk8+SFNnKchriJ38OlX0Ti2kN3v0a6tP40i6qSMnmj83SN4S6fXsb5SM8i+R1GCpM/y6cP1z2LpLsty1+6kI9SibqWI51E4n72y6/+QjLhsF07ko9TvO8+XPf/xvt9IWnYGt0M80jXpR8o9P5MolJKqVpWTdM0tSA/fjs3e4QdT8NnH/i6qWWllFE1K2VlGrJQCu2hDDpABUvnkIN+sHLkNKiQI4tBltxCyFKgXqogA6F6gXrpK5RDWxyq5w1UsgoHHaDtrGFZ9GLRmUXXFvUs4izqlSXEFXSGXqyD1l6M0vxFeqtucLOEUq6g9xoyUAbxN2QWKhyEXtKCx7bNRz+m9ZiuzvkX6Rx5Tbndxvk673Uvv5ZpuIVAPvLy8gKtqzN5+trvZV7WqPX5B2dRyR4NCmVuZHN0cmVhbQplbmRvYmoKMjA3IDAgb2JqCjw8Ci9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL0FBQUFBQStHYXJldC1Cb29rCi9GbGFncyA0Ci9Bc2NlbnQgMTA3MAovRGVzY2VudCAtMzgwCi9TdGVtViA3OAovQ2FwSGVpZ2h0IDcwMAovSXRhbGljQW5nbGUgMAovRm9udEJCb3ggWy0xNDQgLTMyNCAxMzI2IDk2MV0KL0ZvbnRGaWxlMiAyMzEgMCBSCj4+CmVuZG9iagoyMDggMCBvYmoKPDwKL1JlZ2lzdHJ5IChBZG9iZSkKL09yZGVyaW5nIChJZGVudGl0eSkKL1N1cHBsZW1lbnQgMAo+PgplbmRvYmoKMjA5IDAgb2JqCjw8Ci9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL0JBQUFBQStSb2JvdG8tUmVndWxhcgovRmxhZ3MgNAovQXNjZW50IDkyNy43MzQzOAovRGVzY2VudCAtMjQ0LjE0MDYzCi9TdGVtViA1My4yMjI2NTYKL0NhcEhlaWdodCA3MTAuOTM3NQovSXRhbGljQW5nbGUgMAovRm9udEJCb3ggWy03MzYuODE2NDEgLTI3MC45OTYwOSAxMTQ4LjQzNzUgMTA1Ni4xNTIzNF0KL0ZvbnRGaWxlMiAyMzIgMCBSCj4+CmVuZG9iagoyMTAgMCBvYmoKPDwKL1JlZ2lzdHJ5IChBZG9iZSkKL09yZGVyaW5nIChJZGVudGl0eSkKL1N1cHBsZW1lbnQgMAo+PgplbmRvYmoKMjExIDAgb2JqCjw8Ci9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL0NBQUFBQStQb3BwaW5zLVNlbWlCb2xkCi9GbGFncyA0Ci9Bc2NlbnQgMTA1MAovRGVzY2VudCAtMzUwCi9TdGVtViAxNTYKL0NhcEhlaWdodCA3MDEKL0l0YWxpY0FuZ2xlIDAKL0ZvbnRCQm94IFstNTQzIC01OTMgMjUxMCAxMDkxXQovRm9udEZpbGUyIDIzMyAwIFIKPj4KZW5kb2JqCjIxMiAwIG9iago8PAovUmVnaXN0cnkgKEFkb2JlKQovT3JkZXJpbmcgKElkZW50aXR5KQovU3VwcGxlbWVudCAwCj4+CmVuZG9iagoyMTMgMCBvYmoKPDwKL1R5cGUgL0ZvbnREZXNjcmlwdG9yCi9Gb250TmFtZSAvREFBQUFBK1BvcHBpbnMtUmVndWxhcgovRmxhZ3MgNAovQXNjZW50IDEwNTAKL0Rlc2NlbnQgLTM1MAovU3RlbVYgMTA5Ci9DYXBIZWlnaHQgNjk4Ci9JdGFsaWNBbmdsZSAwCi9Gb250QkJveCBbLTUzMSAtNTcyIDI1NjcgMTA2NV0KL0ZvbnRGaWxlMiAyMzQgMCBSCj4+CmVuZG9iagoyMTQgMCBvYmoKPDwKL1JlZ2lzdHJ5IChBZG9iZSkKL09yZGVyaW5nIChJZGVudGl0eSkKL1N1cHBsZW1lbnQgMAo+PgplbmRvYmoKMjE1IDAgb2JqCjw8Ci9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL0VBQUFBQStHYXJldC1SZWd1bGFyCi9GbGFncyA0Ci9Bc2NlbnQgMTA3MAovRGVzY2VudCAtMzgwCi9TdGVtViAxMDkKL0NhcEhlaWdodCA3MDAKL0l0YWxpY0FuZ2xlIDAKL0ZvbnRCQm94IFstMTU0IC0zMjggMTM1MyA5NjVdCi9Gb250RmlsZTIgMjM1IDAgUgo+PgplbmRvYmoKMjE2IDAgb2JqCjw8Ci9SZWdpc3RyeSAoQWRvYmUpCi9PcmRlcmluZyAoSWRlbnRpdHkpCi9TdXBwbGVtZW50IDAKPj4KZW5kb2JqCjIxNyAwIG9iago8PAovVHlwZSAvRm9udERlc2NyaXB0b3IKL0ZvbnROYW1lIC9HQUFBQUErT3BlblNhbnMtUmVndWxhcgovRmxhZ3MgNAovQXNjZW50IDEwNjguODQ3NjYKL0Rlc2NlbnQgLTI5Mi45Njg3NQovU3RlbVYgNDUuODk4NDM4Ci9DYXBIZWlnaHQgNzEzLjg2NzE5Ci9JdGFsaWNBbmdsZSAwCi9Gb250QkJveCBbLTU0OS44MDQ2OSAtMjcwLjk5NjA5IDEyMDQuMTAxNTYgMTA0Ny44NTE1Nl0KL0ZvbnRGaWxlMiAyMzYgMCBSCj4+CmVuZG9iagoyMTggMCBvYmoKPDwKL1JlZ2lzdHJ5IChBZG9iZSkKL09yZGVyaW5nIChJZGVudGl0eSkKL1N1cHBsZW1lbnQgMAo+PgplbmRvYmoKMjE5IDAgb2JqCjw8Ci9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL0hBQUFBQStBcmlhbE5vdmEtQm9sZAovRmxhZ3MgNAovQXNjZW50IDk4MS45MzM1OQovRGVzY2VudCAtMjI3LjUzOTA2Ci9TdGVtViA3Ni4xNzE4NzUKL0NhcEhlaWdodCA3MTUuODIwMzEKL0l0YWxpY0FuZ2xlIDAKL0ZvbnRCQm94IFstNDU4Ljk4NDM4IC0yMTcuMjg1MTYgMTU3OS4xMDE1NiA5MzguOTY0ODRdCi9Gb250RmlsZTIgMjM3IDAgUgo+PgplbmRvYmoKMjIwIDAgb2JqCjw8Ci9SZWdpc3RyeSAoQWRvYmUpCi9PcmRlcmluZyAoSWRlbnRpdHkpCi9TdXBwbGVtZW50IDAKPj4KZW5kb2JqCjIyMSAwIG9iago8PAovVHlwZSAvRm9udERlc2NyaXB0b3IKL0ZvbnROYW1lIC9JQUFBQUErQXJpYWxOb3ZhCi9GbGFn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NzIyMiAwMDAwMCBuDQowMDAwMDE5NzcyIDAwMDAwIG4NCjAwMDAwMTk5OTYgMDAwMDAgbg0KMDAwMDAyMDMzMCAwMDAwMCBuDQowMDAwMDIwNDU1IDAwMDAwIG4NCjAwMDAwMjA1NjUgMDAwMDAgbg0KMDAwMDAyMDY1NyAwMDAwMCBuDQowMDAwMDIwODAzIDAwMDAwIG4NCjAwMDAwMjA5ODUgMDAwMDAgbg0KMDAwMDAyMTEyOSAwMDAwMCBuDQowMDAwMDIxMjg4IDAwMDAwIG4NCjAwMDAwMjE0MjYgMDAwMDAgbg0KMDAwMDAyMTU4NiAwMDAwMCBuDQowMDAwMDIxNjg3IDAwMDAwIG4NCjAwMDAwMjE3ODIgMDAwMDAgbg0KMDAwMDAyMTg4NCAwMDAwMCBuDQowMDAwMDIxOTkxIDAwMDAwIG4NCjAwMDAwMjIwODUgMDAwMDAgbg0KMDAwMDAyMjE5NCAwMDAwMCBuDQowMDAwMDIyMjk4IDAwMDAwIG4NCjAwMDAwMjIzODQgMDAwMDAgbg0KMDAwMDAyMjQ3MyAwMDAwMCBuDQowMDAwMDIyNTYyIDAwMDAwIG4NCjAwMDAwMjI2NDkgMDAwMDAgbg0KMDAwMDAyMjc3MiAwMDAwMCBuDQowMDAwMDIzMjM0IDAwMDAwIG4NCjAwMDAwMjMzNTIgMDAwMDAgbg0KMDAwMDAyMzQzOSAwMDAwMCBuDQowMDAwMDIzNTI5IDAwMDAwIG4NCjAwMDAwMjM2MTcgMDAwMDAgbg0KMDAwMDAyMzgxMiAwMDAwMCBuDQowMDAwMDIzOTMxIDAwMDAwIG4NCjAwMDAwMjQwMjAgMDAwMDAgbg0KMDAwMDAyNDEyMiAwMDAwMCBuDQowMDAwMDI0MzI0IDAwMDAwIG4NCjAwMDAwMjQ0NTQgMDAwMDAgbg0KMDAwMDAyNDU2MiAwMDAwMCBuDQowMDAwMDI0NzM2IDAwMDAwIG4NCjAwMDAwMjQ4OTggMDAwMDAgbg0KMDAwMDAyNTA3NSAwMDAwMCBuDQowMDAwMDI1MjUwIDAwMDAwIG4NCjAwMDAwMjU0MjIgMDAwMDAgbg0KMDAwMDAyNTU5MiAwMDAwMCBuDQowMDAwMDI1Nzg2IDAwMDAwIG4NCjAwMDAwMjU4ODAgMDAwMDAgbg0KMDAwMDAyNTk3NCAwMDAwMCBuDQowMDAwMDI2MDY4IDAwMDAwIG4NCjAwMDAwMjYxNjIgMDAwMDAgbg0KMDAwMDAyNjM0MSAwMDAwMCBuDQowMDAwMDI2NTI5IDAwMDAwIG4NCjAwMDAwMjY2NTYgMDAwMDAgbg0KMDAwMDAyNjgyMyAwMDAwMCBuDQowMDAwMDI2OTgzIDAwMDAwIG4NCjAwMDAwMjcxNTEgMDAwMDAgbg0KMDAwMDAyNzMzNiAwMDAwMCBuDQowMDAwMDI3NjE5IDAwMDAwIG4NCjAwMDAwMjc3ODkgMDAwMDAgbg0KMDAwMDAyNzkwMSAwMDAwMCBuDQowMDAwMDI4MDc5IDAwMDAwIG4NCjAwMDAwMjgyMDggMDAwMDAgbg0KMDAwMDAyODI0OCAwMDAwMCBuDQowMDAwMDI4Mjk1IDAwMDAwIG4NCjAwMDAwMjgzNDAgMDAwMDAgbg0KMDAwMDAyODY2OSAwMDAwMCBuDQowMDAwMDI5MTEyIDAwMDAwIG4NCjAwMDAwMjk3NTEgMDAwMDAgbg0KMDAwMDAzMDM5MyAwMDAwMCBuDQowMDAwMDMxMDEzIDAwMDAwIG4NCjAwMDAwMzExMzUgMDAwMDAgbg0KMDAwMDAzMTE5NSAwMDAwMCBuDQowMDAwMDMxMjM1IDAwMDAwIG4NCjAwMDAwMzEyNjggMDAwMDAgbg0KMDAwMDAzMTkwNSAwMDAwMCBuDQowMDAwMDMyNDExIDAwMDAwIG4NCjAwMDAwMzMwNzQgMDAwMDAgbg0KMDAwMDAzMzcxOCAwMDAwMCBuDQowMDAwMDMzNzUyIDAwMDAwIG4NCjAwMDAwMzM4MTIgMDAwMDAgbg0KMDAwMDAzMzg5MSAwMDAwMCBuDQowMDAwMDMzOTcwIDAwMDAwIG4NCjAwMDAwMzQwNzMgMDAwMDAgbg0KMDAwMDAzNDE2OCAwMDAwMCBuDQowMDAwMDM0MjU2IDAwMDAwIG4NCjAwMDAwMzQzNTMgMDAwMDAgbg0KMDAwMDAzNDQyNSAwMDAwMCBuDQowMDAwMDM0NDk3IDAwMDAwIG4NCjAwMDAwMzQ1NjkgMDAwMDAgbg0KMDAwMDAzNDY0MSAwMDAwMCBuDQowMDAwMDM0NzEzIDAwMDAwIG4NCjAwMDAwMzQ3ODUgMDAwMDAgbg0KMDAwMDAzNDg1NyAwMDAwMCBuDQowMDAwMDM0OTI5IDAwMDAwIG4NCjAwMDAwMzUwMDEgMDAwMDAgbg0KMDAwMDAzNTA3MyAwMDAwMCBuDQowMDAwMDM1MTQ1IDAwMDAwIG4NCjAwMDAwMzUyNTggMDAwMDAgbg0KMDAwMDAzNTM1NCAwMDAwMCBuDQowMDAwMDM1NDUzIDAwMDAwIG4NCjAwMDAwMzU1NTEgMDAwMDAgbg0KMDAwMDAzNTYyMyAwMDAwMCBuDQowMDAwMDM1Njk1IDAwMDAwIG4NCjAwMDAwMzU3NjcgMDAwMDAgbg0KMDAwMDAzNTg0NyAwMDAwMCBuDQowMDAwMDM1ODgxIDAwMDAwIG4NCjAwMDAwMzU5NDIgMDAwMDAgbg0KMDAwMDAzNTk3NiAwMDAwMCBuDQowMDAwMDM2MDExIDAwMDAwIG4NCjAwMDAwMzYwNzIgMDAwMDAgbg0KMDAwMDAzNjEwNiAwMDAwMCBuDQowMDAwMDM2MTQyIDAwMDAwIG4NCjAwMDAwMzYyMDMgMDAwMDAgbg0KMDAwMDAzNjIzNyAwMDAwMCBuDQowMDAwMDM2MjczIDAwMDAwIG4NCjAwMDAwMzYzMzQgMDAwMDAgbg0KMDAwMDAzNjM2OCAwMDAwMCBuDQowMDAwMDM2NDA0IDAwMDAwIG4NCjAwMDAwMzY0NjUgMDAwMDAgbg0KMDAwMDAzNjYxMyAwMDAwMCBuDQowMDAwMDM2NzY1IDAwMDAwIG4NCjAwMDAwMzY5MTkgMDAwMDAgbg0KMDAwMDAzNzA3MiAwMDAwMCBuDQowMDAwMDM3MjIzIDAwMDAwIG4NCjAwMDAwMzczNzcgMDAwMDAgbg0KMDAwMDAzNzUyOSAwMDAwMCBuDQowMDAwMDM3Njc2IDAwMDAwIG4NCjAwMDAwMzc3MTAgMDAwMDAgbg0KMDAwMDAzNzc0NSAwMDAwMCBuDQowMDAwMDM3ODA2IDAwMDAwIG4NCjAwMDAwMzc4NDAgMDAwMDAgbg0KMDAwMDAzNzg3NSAwMDAwMCBuDQowMDAwMDM3OTM2IDAwMDAwIG4NCjAwMDAwMzc5NzAgMDAwMDAgbg0KMDAwMDAzODAwNSAwMDAwMCBuDQowMDAwMDM4MDY2IDAwMDAwIG4NCjAwMDAwMzgxMDAgMDAwMDAgbg0KMDAwMDAzODEzNSAwMDAwMCBuDQowMDAwMDM4MTk2IDAwMDAwIG4NCjAwMDAwMzgzNDMgMDAwMDAgbg0KMDAwMDAzODQyMiAwMDAwMCBuDQowMDAwMDM4NTAxIDAwMDAwIG4NCjAwMDAwMzg1ODAgMDAwMDAgbg0KMDAwMDAzODY1OSAwMDAwMCBuDQowMDAwMDM4NzM4IDAwMDAwIG4NCjAwMDAwMzg4MTcgMDAwMDAgbg0KMDAwMDAzODg5NiAwMDAwMCBuDQowMDAwMDM4OTc1IDAwMDAwIG4NCjAwMDAwMzkwNTQgMDAwMDAgbg0KMDAwMDAzOTEzNCAwMDAwMCBuDQowMDAwMDM5MjE0IDAwMDAwIG4NCjAwMDAwMzkyOTQgMDAwMDAgbg0KMDAwMDAzOTM3NCAwMDAwMCBuDQowMDAwMDM5NDU0IDAwMDAwIG4NCjAwMDAwMzk2MDIgMDAwMDAgbg0KMDAwMDAzOTk3MCAwMDAwMCBuDQowMDAwMDQwMzg2IDAwMDAwIG4NCjAwMDAwNDExNTYgMDAwMDAgbg0KMDAwMDA0MTU1OCAwMDAwMCBuDQowMDAwMDQxODg0IDAwMDAwIG4NCjAwMDAwNDIyNjYgMDAwMDAgbg0KMDAwMDA0MjY2MSAwMDAwMCBuDQowMDAwMDQzMDc4IDAwMDAwIG4NCjAwMDAwNDM0MTkgMDAwMDAgbg0KMDAwMDA0MzgxNyAwMDAwMCBuDQowMDAwMDQ0NDIyIDAwMDAwIG4NCjAwMDAwNDQ4MTYgMDAwMDAgbg0KMDAwMDA0NTM0NSAwMDAwMCBuDQowMDAwMDQ1NzMxIDAwMDAwIG4NCjAwMDAwNDY0MTIgMDAwMDAgbg0KMDAwMDA0NjgzMyAwMDAwMCBuDQowMDAwMDQ2OTgxIDAwMDAwIG4NCjAwMDAwNDcxMzIgMDAwMDAgbg0KMDAwMDA0NzY2MCAwMDAwMCBuDQowMDAwMDQ4MDY5IDAwMDAwIG4NCjAwMDAwNDgxNDYgMDAwMDAgbg0KMDAwMDA0ODIyMyAwMDAwMCBuDQowMDAwMDQ4MzAwIDAwMDAwIG4NCjAwMDAwNDgzNzcgMDAwMDAgbg0KMDAwMDA0ODQ1NCAwMDAwMCBuDQowMDAwMDQ4NTMxIDAwMDAwIG4NCjAwMDAwNDg2MDggMDAwMDAgbg0KMDAwMDA0ODY4NSAwMDAwMCBuDQowMDAwMDQ4NzYyIDAwMDAwIG4NCjAwMDAwNDg4MzkgMDAwMDAgbg0KMDAwMDA0ODkxNiAwMDAwMCBuDQowMDAwMDQ4OTkzIDAwMDAwIG4NCjAwMDAwNDkwNzAgMDAwMDAgbg0KMDAwMDA0OTE0NyAwMDAwMCBuDQowMDAwMDQ5NTY2IDAwMDAwIG4NCjAwMDAwNTAwMjIgMDAwMDAgbg0KMDAwMDA1MDIyMiAwMDAwMCBuDQowMDAwMDUwMjk4IDAwMDAwIG4NCjAwMDAwNTA1NDkgMDAwMDAgbg0KMDAwMDA1MDYyNSAwMDAwMCBuDQowMDAwMDUwODMzIDAwMDAwIG4NCjAwMDAwNTA5MDkgMDAwMDAgbg0KMDAwMDA1MTExNiAwMDAwMCBuDQowMDAwMDUxMTkyIDAwMDAwIG4NCjAwMDAwNTEzOTYgMDAwMDAgbg0KMDAwMDA1MTQ3MiAwMDAwMCBuDQowMDAwMDUxNzI4IDAwMDAwIG4NCjAwMDAwNTE4MDQgMDAwMDAgbg0KMDAwMDA1MjA1NiAwMDAwMCBuDQowMDAwMDUyMTMyIDAwMDAwIG4NCjAwMDAwNTIzNzkgMDAwMDAgbg0KMDAwMDA1MjQ1NSAwMDAwMCBuDQowMDAwMDUyOTEyIDAwMDAwIG4NCjAwMDAwNTMzODEgMDAwMDAgbg0KMDAwMDA1MzY4MyAwMDAwMCBuDQowMDAwMDU0MDUwIDAwMDAwIG4NCjAwMDAwNTQyOTcgMDAwMDAgbg0KMDAwMDA1NDM3MyAwMDAwMCBuDQowMDAwMDU0NTc5IDAwMDAwIG4NCjAwMDAwNTQ2NTUgMDAwMDAgbg0KMDAwMDA1Njc4NiAwMDAwMCBuDQowMDAwMDYzODYxIDAwMDAwIG4NCjAwMDAwNjU5NzYgMDAwMDAgbg0KMDAwMDA2ODc5MyAwMDAwMCBuDQowMDAwMDcwNjU0IDAwMDAwIG4NCjAwMDAwNzY2NzEgMDAwMDAgbg0KMDAwMDA4MzI2OCAwMDAwMCBuDQowMDAwMDkyMDY3IDAwMDAwIG4NCjAwMDAwOTIyNzMgMDAwMDAgbg0KMDAwMDA5MjM0OSAwMDAwMCBuDQowMDAwMDkyNTUzIDAwMDAwIG4NCjAwMDAwOTI2MjkgMDAwMDAgbg0KMDAwMDA5OTY4NiAwMDAwMCBuDQowMDAwMTA2NjUzIDAwMDAwIG4NCjAwMDAxMTQyNzYgMDAwMDAgbg0KdHJhaWxlcgo8PAovUm9vdCAxIDAgUgovSW5mbyA4IDAgUgovSUQgWzxBN0VFQjZBQzY0RUUwNTgyMjc3MTBBNEFGRDIyMThEOTBDNjFFRDJGRjVBRTE2NDQxQzlFMTE0Qzg0MjFCQzFBPiA8QTdFRUI2QUM2NEVFMDU4MjI3NzEwQTRBRkQyMjE4RDkwQzYxRUQyRkY1QUUxNjQ0MUM5RTExNEM4NDIxQkMxQT5dCi9TaXplIDI0Nwo+PgpzdGFydHhyZWYKMTE1NzAzCiUlRU9GCg==" download="Mohamed_Hamdy_CV.pdf" class="btn-cv" id="cvBtn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download CV
      </a>
    </div>
  </div>

  <div class="h-div"></div>

  <div class="h-stats">
    <div class="s-row"><span class="s-num">5<sup>+</sup></span><span class="s-lbl">Active Ventures</span></div>
    <div class="s-row"><span class="s-num">2028</span><span class="s-lbl">Graduation Year</span></div>
    <div class="s-row"><span class="s-num">∞</span><span class="s-lbl">Ambition</span></div>
  </div>

  <div class="h-scroll"><div class="sc-line"></div><span class="h-scroll-txt">Scroll to explore</span></div>
</section>

<!-- ══ MARQUEE ══ -->
<div class="marquee">
  <div class="mq-track">
    <div class="mq-item">AI Engineering</div><div class="mq-item">AetherCode AI</div>
    <div class="mq-item">SilentAlgo · Mokali</div><div class="mq-item">SabaePDF</div>
    <div class="mq-item">Game Development</div><div class="mq-item">QA Expert · uTest</div>
    <div class="mq-item">Stock Photography</div><div class="mq-item">AASTMT · Class of 2028</div>
    <div class="mq-item">Cambridge English</div>
    <div class="mq-item">AI Engineering</div><div class="mq-item">AetherCode AI</div>
    <div class="mq-item">SilentAlgo · Mokali</div><div class="mq-item">SabaePDF</div>
    <div class="mq-item">Game Development</div><div class="mq-item">QA Expert · uTest</div>
    <div class="mq-item">Stock Photography</div><div class="mq-item">AASTMT · Class of 2028</div>
    <div class="mq-item">Cambridge English</div>
  </div>
</div>

<!-- ══ ABOUT ══ -->
<section id="about">
  <div class="s-head rev">
    <div class="ey">Who I am</div>
    <h2 class="stitle">The <em>story</em> so far</h2>
  </div>
  <div class="a-grid">
    <div class="a-copy rev d1">
      <p>I'm <strong>Mohamed Hamdy</strong> — an AI Engineering student at the <strong>Arab Academy for Science, Technology & Maritime Transport (AASTMT)</strong>, College of Computing & IT, Alexandria. Class of 2028.</p>
      <div class="pull">"I don't wait to be ready. I build, ship, and learn as I go."</div>
      <p>From founding an AI SaaS startup to building games under my Mokali brand, developing SabaePDF — a full PDF tools platform — running quality assurance on uTest & Appen, and selling stock photography on Adobe Stock & Shutterstock.</p>
      <p>Fluent in <strong>English</strong> and <strong>Arabic (اللغة العربية)</strong> — bridging technical work across cultures.</p>

      <!-- CAMBRIDGE BADGE -->
      <div class="cambridge-banner">
        <div class="cb-left">
          <div class="cb-icon">🎓</div>
          <div class="cb-text">
            <h4>Cambridge English Certification</h4>
            <p>Internationally recognised language proficiency certified by <strong>Cambridge Assessment English</strong> — trusted in 130+ countries worldwide.</p>
          </div>
        </div>
        <div class="cb-seal">
          <span class="cb-seal-icon">✦</span>
          <span class="cb-seal-txt">Cambridge</span>
          <span class="cb-seal-txt">Certified</span>
        </div>
      </div>
    </div>

    <div class="tl rev d2">
      <div class="tl-r"><span class="tl-y">2023</span><div class="tl-b"><h4>Enrolled @ AASTMT Alexandria</h4><p>College of Computing & IT — AI Engineering (Class of 2028)</p></div></div>
      <div class="tl-r"><span class="tl-y">2023</span><div class="tl-b"><h4>Founded AetherCode AI</h4><p>AI-powered SaaS platform for intelligent workflow automation</p></div></div>
      <div class="tl-r"><span class="tl-y">2024</span><div class="tl-b"><h4>Launched SilentAlgo / Mokali</h4><p>Independent game dev studio under the Mokali brand</p></div></div>
      <div class="tl-r"><span class="tl-y">2024</span><div class="tl-b"><h4>QA Expert @ uTest &amp; Appen</h4><p>Functional, UX &amp; exploratory testing — web and mobile</p></div></div>
      <div class="tl-r"><span class="tl-y">2024</span><div class="tl-b"><h4>Stock Photographer</h4><p>Adobe Stock &amp; Shutterstock — creative visuals sold globally</p></div></div>
      <div class="tl-r"><span class="tl-y">2025</span><div class="tl-b"><h4>Volunteer — ECPC 2025 &amp; World Modern Pentathlon</h4><p>Egyptian Collegiate Programming Contest &amp; international sports</p></div></div>
      <div class="tl-r latest"><span class="tl-y">2026</span><div class="tl-b"><h4>SabaePDF — Web Developer &amp; Creator <span class="tl-badge">Latest</span></h4><p>Comprehensive web platform for PDF management and editing</p></div></div>
    </div>
  </div>
  <div class="achv">
    <div class="ac rev d1"><span class="ac-n">5<span style="font-size:.52em;color:var(--v);vertical-align:super;font-style:normal">+</span></span><span class="ac-l">Active Ventures</span></div>
    <div class="ac rev d2"><span class="ac-n">2</span><span class="ac-l">Platforms Built</span></div>
    <div class="ac rev d3"><span class="ac-n">2</span><span class="ac-l">Events Volunteered</span></div>
    <div class="ac rev d4"><span class="ac-n">∞</span><span class="ac-l">Drive</span></div>
  </div>
</section>

<!-- ══ WHY ME ══ -->
<section>
  <div class="s-head rev">
    <div class="ey">The difference</div>
    <h2 class="stitle">Why <em>Mohamed?</em></h2>
  </div>
  <div class="why-grid">
    <div class="why-card rev" style="--accent-clr:rgba(139,124,255,.08)">
      <span class="why-num" style="--gr-clr:linear-gradient(135deg,var(--v),#5a30f5)">01</span>
      <div class="why-title">Builder, Not Just a Student</div>
      <p class="why-body">While most students study concepts, Mohamed ships real products. AetherCode AI, SilentAlgo, SabaePDF — all live, all built from zero.</p>
    </div>
    <div class="why-card rev d1" style="--accent-clr:rgba(255,95,126,.07)">
      <span class="why-num" style="--gr-clr:linear-gradient(135deg,var(--r),var(--gold))">02</span>
      <div class="why-title">Multi-Domain Thinking</div>
      <p class="why-body">AI engineering, game development, QA, photography — cross-domain experience creates a uniquely creative problem-solver who sees solutions others miss.</p>
    </div>
    <div class="why-card rev d2" style="--accent-clr:rgba(61,255,196,.06)">
      <span class="why-num" style="--gr-clr:linear-gradient(135deg,var(--g),var(--b))">03</span>
      <div class="why-title">Early, Fast & Ambitious</div>
      <p class="why-body">Class of 2028. That's 3 years of potential left — and he's already built more than most graduates. Hiring early means growing together.</p>
    </div>
  </div>
</section>

<!-- ══ NOW / CURRENTLY LEARNING ══ -->
<section>
  <div class="s-head rev">
    <div class="ey">Right now · 2026</div>
    <h2 class="stitle">What I'm <em>learning</em></h2>
  </div>
  <div class="now-grid">
    <div class="now-card rev" style="--line-clr:var(--v)">
      <span class="now-icon">🧠</span>
      <span class="now-label">Deep Learning</span>
      <span class="now-val">Transformers & Attention</span>
      <span class="now-sub">Building custom LLM pipelines from scratch</span>
    </div>
    <div class="now-card rev d1" style="--line-clr:var(--r)">
      <span class="now-icon">🎮</span>
      <span class="now-label">Game Dev</span>
      <span class="now-val">Procedural Generation</span>
      <span class="now-sub">Applying algorithms to create infinite game worlds</span>
    </div>
    <div class="now-card rev d2" style="--line-clr:var(--g)">
      <span class="now-icon">⚡</span>
      <span class="now-label">Web Engineering</span>
      <span class="now-val">Edge Computing & Serverless</span>
      <span class="now-sub">Next.js, Vercel Edge, real-time systems</span>
    </div>
    <div class="now-card rev d3" style="--line-clr:var(--gold)">
      <span class="now-icon">📐</span>
      <span class="now-label">AI Research</span>
      <span class="now-val">Agentic AI Systems</span>
      <span class="now-sub">Multi-agent frameworks, planning & reasoning</span>
    </div>
  </div>
</section>

<!-- ══ PROJECTS ══ -->
<section id="projects">
  <div class="s-head rev">
    <div class="ey">What I build</div>
    <h2 class="stitle">Ventures &amp; <em>projects</em></h2>
  </div>
  <div class="bento">

    <!-- AETHERCODE -->
    <div class="bc c-ae rev">
      <div class="chip ch-v"><span class="chip-dot"></span>AI SaaS · Founder</div>
      <div class="orb"></div>
      <h3 class="ctitle">AetherCode AI</h3>
      <p class="cbody">AI-powered SaaS platform engineered to automate complex workflows via intelligent code generation and autonomous AI agents. Founded, designed, and built entirely by Mohamed.</p>
      <div class="metric"><span>🚀</span><span class="metric-val">Automates hours of work</span><span>in seconds</span></div>
      <div class="sk-w" style="margin-top:14px">
        <span class="sk">Python</span><span class="sk">LLMs</span><span class="sk">FastAPI</span><span class="sk">React</span><span class="sk">AI Agents</span><span class="sk">RAG</span>
      </div>
      <div class="cmeta">
        <span style="color:var(--v)">Founder & CTO</span>
        <span style="color:var(--muted)">·</span>
        <span style="color:var(--muted)">2023 — Present</span>
        <a href="https://aether-code-ai.vercel.app/" target="_blank" rel="noopener" class="card-link card-link-v" style="margin-left:auto">AetherCode AI ↗</a>
      </div>
    </div>

    <!-- SILENTALGO -->
    <div class="bc c-sa rev d1">
      <div class="chip ch-r"><span class="chip-dot"></span>Game Dev · Mokali</div>
      <div class="px-g" id="pxGrid"></div>
      <h3 class="ctitle">SilentAlgo</h3>
      <p style="font-family:'DM Mono',monospace;font-size:9px;color:var(--r);letter-spacing:.13em;margin-bottom:10px;text-transform:uppercase">Mokali Gaming Studio</p>
      <p class="cbody">Independent game development studio under the Mokali brand. Building atmospheric, algorithm-driven games with emergent gameplay and minimalist aesthetics.</p>
      <div class="metric"><span>🎮</span><span class="metric-val">Indie studio</span><span>— solo built</span></div>
      <div class="sk-w" style="margin-top:14px">
        <span class="sk">Unity</span><span class="sk">C#</span><span class="sk">Game Design</span><span class="sk">Mokali</span>
      </div>
      <div class="cmeta">
        <span style="color:var(--r)">Indie Developer</span>
        <span style="color:var(--muted)">·</span>
        <span style="color:var(--muted)">2024 — Present</span>
        <a href="https://github.com/mohamedsabae50-prog" target="_blank" rel="noopener" class="card-link card-link-r" style="margin-left:auto">GitHub ↗</a>
      </div>
    </div>

    <!-- QA -->
    <div class="bc c-qa rev">
      <div class="chip ch-g"><span class="chip-dot"></span>QA Testing</div>
      <div class="bc-body">
        <h3 class="ctitle" style="font-size:24px">QA Expert</h3>
        <span class="csub" style="color:var(--g)">uTest &amp; Appen</span>
        <p class="cbody" style="font-size:12px">Functional, UX & exploratory testing across web and mobile. Precise bug reports that help teams ship better software.</p>
        <div class="metric" style="margin-top:12px"><span>✓</span><span class="metric-val">Critical bugs</span><span>found & reported</span></div>
        <div class="sk-w" style="margin-top:12px">
          <span class="sk">Functional</span><span class="sk">UX Testing</span><span class="sk">Mobile QA</span><span class="sk">Regression</span><span class="sk">Bug Reports</span><span class="sk">Test Cases</span>
        </div>
      </div>
    </div>

    <!-- PHOTOGRAPHY -->
    <div class="bc c-ph rev d1">
      <div class="chip ch-gd"><span class="chip-dot"></span>Visual Art</div>
      <div class="bc-body">
        <h3 class="ctitle" style="font-size:24px">Stock Photography</h3>
        <span class="csub" style="color:var(--gold)">Adobe Stock &amp; Shutterstock</span>
        <p class="cbody" style="font-size:12px">Creative photography sold globally. Engineering precision meets artistic vision — nature, architecture, abstract, macro.</p>
        <div class="metric" style="margin-top:12px"><span>📸</span><span class="metric-val">Global reach</span><span>across 2 platforms</span></div>
        <div class="mosaic">
          <div class="mo"><span class="mo-l">Nature</span></div>
          <div class="mo"><span class="mo-l">Abstract</span></div>
          <div class="mo"><span class="mo-l">Macro</span></div>
        </div>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="bc c-sk rev d2">
      <div class="chip ch-w"><span class="chip-dot"></span>Tech Stack</div>
      <div class="bc-body">
        <h3 class="ctitle" style="font-size:24px">Skills</h3>
        <div class="sk-w">
          <span class="sk">Python</span><span class="sk">JavaScript</span><span class="sk">TypeScript</span><span class="sk">React</span><span class="sk">Next.js</span><span class="sk">FastAPI</span><span class="sk">TensorFlow</span><span class="sk">PyTorch</span><span class="sk">LangChain</span><span class="sk">OpenAI API</span><span class="sk">Unity/C#</span><span class="sk">Git</span><span class="sk">Docker</span><span class="sk">Prompt Eng.</span><span class="sk">RAG Systems</span>
        </div>
        <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--bdr)">
          <div style="font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-bottom:9px">Languages</div>
          <div class="lang-r">
            <span class="lang lang-en">🌍 English — Fluent</span>
            <span class="lang lang-ar">🌙 العربية — Native</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SABAEPDF -->
    <div class="bc c-pdf rev">
      <div class="chip ch-g"><span class="chip-dot"></span>Web Dev · Creator · 2026</div>
      <div class="bc-body">
        <h3 class="ctitle">SabaePDF</h3>
        <span class="csub" style="color:var(--g)">Web Platform — PDF Tools Suite</span>
        <p class="cbody">A comprehensive web platform providing integrated tools for PDF management and editing — merge, split, convert, compress, and more. Designed and built end-to-end as a solo creator project.</p>
        <div class="metric" style="margin-top:10px"><span>⚡</span><span class="metric-val">Full-stack</span><span>solo built platform</span></div>
        <div class="sk-w" style="margin-top:12px">
          <span class="sk">Next.js</span><span class="sk">PDF.js</span><span class="sk">React</span><span class="sk">Node.js</span><span class="sk">Web APIs</span>
        </div>
        <div class="cmeta">
          <a href="https://github.com/mohamedsabae50-prog" target="_blank" rel="noopener" class="card-link card-link-g">GitHub ↗</a>
        </div>
      </div>
    </div>

    <!-- VOLUNTEERING -->
    <div class="bc c-vol rev d1">
      <div class="chip ch-gr"><span class="chip-dot"></span>Volunteering · 2025</div>
      <div class="bc-body">
        <h3 class="ctitle" style="font-size:21px">Community<br>&amp; Events</h3>
        <p class="cbody" style="font-size:12px;margin-top:10px">
          <strong style="color:var(--txt)">ECPC 2025</strong> — Egyptian Collegiate Programming Contest. One of Egypt's largest competitive programming events.<br><br>
          <strong style="color:var(--txt)">World Modern Pentathlon 2025</strong> — International sports event, coordinating logistics and athlete support.
        </p>
      </div>
    </div>

    <!-- EDUCATION -->
    <div class="bc c-edu rev d2">
      <div class="chip ch-b"><span class="chip-dot"></span>Education</div>
      <div class="bc-body">
        <h3 class="ctitle" style="font-size:20px">AASTMT<br>Alexandria</h3>
        <span class="csub" style="color:var(--b)">AI Engineering · Class of 2028</span>
        <p class="cbody" style="font-size:12px;margin-top:7px">
          <strong style="color:var(--txt)">B.Sc. Artificial Intelligence Engineering</strong><br>
          College of Computing & IT. ML, NLP, computer vision & intelligent systems.
        </p>
        <div style="margin-top:auto;padding-top:14px;border-top:1px solid var(--bdr);font-family:'DM Mono',monospace;font-size:9px;color:var(--b);letter-spacing:.1em;display:flex;align-items:center;gap:6px">
          <span>🎓</span> Cambridge English Certified
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="bc c-cta rev" id="contact">
      <div class="cta-l">
        <div class="ey" style="margin-bottom:12px">Let's connect</div>
        <h2 class="stitle" style="font-size:clamp(24px,3vw,48px)">Ready to build<br><em>something</em> great?</h2>
      </div>
      <div class="cta-r">
        <button onclick="openModal()" class="cl">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>Email Me
        </button>
        <a href="https://github.com/mohamedsabae50-prog" target="_blank" rel="noopener" class="cl">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>GitHub
        </a>
        <a href="https://www.linkedin.com/in/mohamed-hamdy-008135231/" target="_blank" rel="noopener" class="cl">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn
        </a>
        <a href="https://aether-code-ai.vercel.app/" target="_blank" rel="noopener" class="cl">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>AetherCode.ai
        </a>
      </div>
    </div>

  </div>
</section>

<footer>
  <span class="f-l">© 2026 Mohamed Hamdy — All rights reserved</span>
  <span class="f-c">Mohamed Hamdy</span>
  <div class="f-r"><span class="f-dot"></span><span class="f-l">Alexandria, Egypt 🇪🇬</span></div>
</footer>

<script>
/* ══ LOADER — 900ms total ══ */
const statuses = ['Initialising','Loading','Compiling','Ready'];
let sIdx = 0;
const ldStatusEl = document.getElementById('ldStatus');
const stTimer = setInterval(() => {
  sIdx = Math.min(sIdx+1, statuses.length-1);
  ldStatusEl.textContent = statuses[sIdx];
  if(sIdx === statuses.length-1) clearInterval(stTimer);
}, 240);

const loader=document.getElementById('loader'),fill=document.getElementById('ldFill'),pct=document.getElementById('ldPct'),curtain=document.getElementById('curtain');
const DUR=900; let t0=null;
document.body.style.overflow='hidden';
function tick(ts){
  if(!t0) t0=ts;
  const t=Math.min((ts-t0)/DUR,1);
  const p=t===1?100:Math.round((1-Math.pow(2,-10*t))*100);
  fill.style.width=p+'%'; pct.textContent=p+'%';
  if(p<100){requestAnimationFrame(tick);return}
  setTimeout(()=>{
    loader.classList.add('out');
    setTimeout(()=>{
      curtain.classList.add('lifted');
      document.body.style.overflow='';
      setTimeout(()=>document.body.classList.add('go'),300);
    },200);
  },300);
}
requestAnimationFrame(tick);

/* ══ CURSOR ══ */
const dot=document.getElementById('cDot'),ring=document.getElementById('cRing'),spot=document.getElementById('spot');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';spot.style.left=mx+'px';spot.style.top=my+'px'});
(function loop(){rx+=(mx-rx)*.4;ry+=(my-ry)*.4;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)})();
document.querySelectorAll('a,button,.bc,.ac,.tl-r,.sk,.lang').forEach(el=>{
  el.addEventListener('mouseenter',()=>{dot.style.width='11px';dot.style.height='11px';ring.style.width='44px';ring.style.height='44px';ring.style.borderColor='rgba(139,124,255,.65)';ring.style.background='rgba(139,124,255,.04)'});
  el.addEventListener('mouseleave',()=>{dot.style.width='5px';dot.style.height='5px';ring.style.width='28px';ring.style.height='28px';ring.style.borderColor='rgba(255,255,255,.28)';ring.style.background='transparent'});
});

/* ══ CARD GLOW ══ */
document.querySelectorAll('.bc').forEach(c=>{
  c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');c.style.setProperty('--my',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')});
  c.addEventListener('mouseenter',()=>spot.style.background='radial-gradient(circle,rgba(139,124,255,.1) 0%,transparent 60%)');
  c.addEventListener('mouseleave',()=>spot.style.background='radial-gradient(circle,rgba(139,124,255,.05) 0%,transparent 60%)');
});

/* ══ SCROLL REVEAL ══ */
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')})},{threshold:.07,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rev').forEach(el=>io.observe(el));

/* ══ TYPEWRITER ══ */
const twPhrases = [
  'Founder. Developer. Creator.',
  'Building AI that actually ships.',
  'From Alexandria to the world.',
  'Code. Create. Repeat.',
];
let twIdx=0, twChar=0, twDeleting=false;
const twEl = document.getElementById('twText');
function typewrite(){
  if(!twEl) return;
  const phrase = twPhrases[twIdx];
  if(!twDeleting){
    twEl.textContent = phrase.slice(0, ++twChar);
    if(twChar === phrase.length){ twDeleting=true; setTimeout(typewrite, 1800); return; }
    setTimeout(typewrite, 55);
  } else {
    twEl.textContent = phrase.slice(0, --twChar);
    if(twChar===0){ twDeleting=false; twIdx=(twIdx+1)%twPhrases.length; setTimeout(typewrite,400); return; }
    setTimeout(typewrite, 28);
  }
}
// start typewriter after hero entrance
setTimeout(typewrite, 2600);

/* ══ KEYBOARD SHORTCUTS ══ */
const toast = document.getElementById('kbToast');
let toastTimer;
document.addEventListener('keydown', e => {
  // Cmd/Ctrl + K → open contact modal
  if((e.metaKey||e.ctrlKey) && e.key==='k'){
    e.preventDefault();
    openModal();
  }
  // Show toast hint on first any-key press
  if(!toast.dataset.shown){
    toast.dataset.shown='1';
    toast.classList.add('show');
    toastTimer = setTimeout(()=>toast.classList.remove('show'), 3500);
  }
});

/* ══ ANIMATED COUNTERS ══ */
const counters = document.querySelectorAll('.ac-n');
const cIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    const el = entry.target;
    const raw = el.textContent.trim();
    const num = parseInt(raw.replace(/\D/g,''));
    if(isNaN(num)||raw==='∞') return;
    const suffix = raw.replace(/[0-9]/g,'');
    let start = 0;
    const dur = 1200;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now-t0)/dur, 1);
      const eased = 1 - Math.pow(1-p, 3);
      el.textContent = Math.round(eased * num) + suffix;
      if(p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    cIO.unobserve(el);
  });
}, {threshold: 0.5});
counters.forEach(el => cIO.observe(el));
const pg=document.getElementById('pxGrid');
for(let i=0;i<40;i++){const p=document.createElement('div');p.className='px'+(Math.random()>.5?' on':'');p.style.animationDelay=(Math.random()*2)+'s';pg.appendChild(p)}
setInterval(()=>{document.querySelectorAll('.px').forEach(p=>{if(Math.random()>.5)p.classList.toggle('on')})},520);
</script>
<!-- ══ CONTACT MODAL ══ -->
<div id="contactModal" aria-modal="true" role="dialog" aria-label="Send a message">
  <div class="modal-backdrop" onclick="closeModal()"></div>
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal()" aria-label="Close">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>

    <div class="modal-header">
      <div class="modal-eyebrow">Direct message</div>
      <h2 class="modal-title">Send me a <em>message</em></h2>
      <p class="modal-sub">Goes straight to <span class="modal-email">mohamedsabae50@gmail.com</span> — no app opens.</p>
    </div>

    <div id="modalForm">
      <div class="field-row">
        <div class="field-group">
          <label class="field-label" for="m-name">Your name</label>
          <input id="m-name" class="field-input" type="text" placeholder="Ahmed Hassan" autocomplete="name">
        </div>
        <div class="field-group">
          <label class="field-label" for="m-email">Your email</label>
          <input id="m-email" class="field-input" type="email" placeholder="ahmed@example.com" autocomplete="email">
        </div>
      </div>
      <div class="field-group">
        <label class="field-label" for="m-subject">Subject</label>
        <input id="m-subject" class="field-input" type="text" placeholder="Collaboration · Project · Opportunity">
      </div>
      <div class="field-group">
        <label class="field-label" for="m-msg">Message</label>
        <textarea id="m-msg" class="field-input field-textarea" placeholder="Hi Mohamed, I'd love to discuss…" rows="5"></textarea>
      </div>
      <div id="modal-err" class="modal-err" style="display:none"></div>
      <button class="modal-send" id="sendBtn" onclick="sendMessage()">
        <span id="sendLabel">Send Message</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>

    <div id="modalSuccess" style="display:none" class="modal-success">
      <div class="success-icon">✓</div>
      <h3>Message sent!</h3>
      <p>I'll reply to <strong id="replyAddr"></strong> as soon as possible.</p>
      <button class="modal-send" onclick="closeModal()" style="margin-top:24px;background:var(--s2);box-shadow:none">Close</button>
    </div>
  </div>
</div>

<style>
/* ══ MODAL ══ */
#contactModal{
  position:fixed;inset:0;z-index:5000;
  display:flex;align-items:center;justify-content:center;
  padding:20px;
  opacity:0;visibility:hidden;
  transition:opacity .3s,visibility .3s;
}
#contactModal.open{opacity:1;visibility:visible}
.modal-backdrop{position:absolute;inset:0;background:rgba(2,2,9,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
.modal-box{
  position:relative;z-index:1;
  width:100%;max-width:580px;
  background:var(--s1);
  border:1px solid var(--bdr-h);
  border-radius:24px;
  padding:40px;
  transform:translateY(20px) scale(.97);
  transition:transform .35s cubic-bezier(.34,1.56,.64,1);
  max-height:90vh;overflow-y:auto;
}
#contactModal.open .modal-box{transform:translateY(0) scale(1)}
.modal-close{
  position:absolute;top:18px;right:18px;
  width:34px;height:34px;border-radius:10px;
  background:rgba(255,255,255,.05);border:1px solid var(--bdr);
  color:var(--muted);cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  transition:all .2s;
}
.modal-close:hover{background:rgba(255,255,255,.1);color:var(--txt);border-color:var(--bdr-h)}
.modal-eyebrow{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.25em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;display:flex;align-items:center;gap:8px}
.modal-eyebrow::before{content:'';width:14px;height:1px;background:var(--muted)}
.modal-title{font-family:'Playfair Display',serif;font-weight:700;font-size:32px;letter-spacing:-1px;line-height:1;color:var(--txt);margin-bottom:10px}
.modal-title em{font-style:italic;background:linear-gradient(120deg,var(--v),var(--r));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.modal-sub{font-size:13px;color:var(--muted);margin-bottom:32px}
.modal-email{font-family:'DM Mono',monospace;font-size:11px;color:var(--v)}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.field-group{display:flex;flex-direction:column;gap:7px;margin-bottom:14px}
.field-label{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}
.field-input{
  background:var(--s2);border:1px solid var(--bdr);border-radius:12px;
  padding:12px 16px;color:var(--txt);font-family:'Syne',sans-serif;font-size:14px;
  outline:none;transition:border-color .22s,box-shadow .22s;
  resize:none;width:100%;
}
.field-input::placeholder{color:var(--muted)}
.field-input:focus{border-color:var(--v);box-shadow:0 0 0 3px rgba(139,124,255,.12)}
.field-textarea{min-height:120px;line-height:1.6}
.modal-send{
  width:100%;padding:14px;border-radius:12px;border:none;
  background:var(--v);color:#fff;
  font-family:'Syne',sans-serif;font-size:14px;font-weight:600;
  cursor:pointer;margin-top:6px;
  display:flex;align-items:center;justify-content:center;gap:9px;
  transition:all .22s;
  box-shadow:0 0 0 1px rgba(139,124,255,.35),0 8px 28px rgba(139,124,255,.3);
}
.modal-send:hover{background:#a090ff;transform:translateY(-1px);box-shadow:0 0 0 1px var(--v),0 14px 40px rgba(139,124,255,.5)}
.modal-send:disabled{opacity:.5;pointer-events:none}
.modal-err{font-family:'DM Mono',monospace;font-size:11px;color:var(--r);background:rgba(255,95,126,.07);border:1px solid rgba(255,95,126,.2);border-radius:8px;padding:10px 14px;margin-bottom:12px}
.modal-success{text-align:center;padding:20px 0}
.success-icon{width:60px;height:60px;border-radius:50%;background:rgba(34,212,122,.1);border:1px solid rgba(34,212,122,.3);display:flex;align-items:center;justify-content:center;font-size:26px;color:var(--live);margin:0 auto 20px}
.modal-success h3{font-family:'Playfair Display',serif;font-size:24px;color:var(--txt);margin-bottom:8px}
.modal-success p{font-size:13px;color:var(--muted)}
.modal-success p strong{color:var(--txt);font-family:'DM Mono',monospace;font-size:11px}
@media(max-width:600px){.field-row{grid-template-columns:1fr}.modal-box{padding:28px 22px}}
</style>

<script>
/* ══ MODAL ══ */
function openModal(){
  document.getElementById('contactModal').classList.add('open');
  document.body.style.overflow='hidden';
  setTimeout(()=>document.getElementById('m-name').focus(),350);
}
function closeModal(){
  document.getElementById('contactModal').classList.remove('open');
  document.body.style.overflow='';
  /* reset form on close */
  document.getElementById('modalForm').style.display='block';
  document.getElementById('modalSuccess').style.display='none';
  document.getElementById('modal-err').style.display='none';
  document.getElementById('m-name').value='';
  document.getElementById('m-email').value='';
  document.getElementById('m-subject').value='';
  document.getElementById('m-msg').value='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

/* ══════════════════════════════════════════════════════
   HOW TO ACTIVATE (one-time, 5 minutes, FREE):
   1. Go to https://www.emailjs.com  → Sign Up free
   2. Add a Gmail service → connect mohamedsabae50@gmail.com
      → copy the Service ID  (e.g. service_abc123)
   3. Create a template with these variables:
        {{from_name}}  {{from_email}}  {{subject}}  {{message}}
      Set "To email" = mohamedsabae50@gmail.com
      → copy the Template ID (e.g. template_xyz789)
   4. Account → API Keys → copy your Public Key
   5. Paste the 3 values below and you're live.
══════════════════════════════════════════════════════ */
const EJS_SERVICE  = 'service_witmdtq';
const EJS_TEMPLATE = 'template_20x4pyt';
const EJS_KEY      = 'knN6m8jjCj28sjTL5';
const MY_EMAIL     = 'mohamedsabae50@gmail.com';

let ejsLoaded = false;

async function sendMessage(){
  const name    = document.getElementById('m-name').value.trim();
  const email   = document.getElementById('m-email').value.trim();
  const subject = document.getElementById('m-subject').value.trim() || 'Portfolio Contact';
  const msg     = document.getElementById('m-msg').value.trim();
  const errEl   = document.getElementById('modal-err');
  const sendBtn = document.getElementById('sendBtn');
  const sendLbl = document.getElementById('sendLabel');

  errEl.style.display = 'none';

  /* validation */
  if(!name)                                       return showErr('Please enter your name.');
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showErr('Please enter a valid email.');
  if(!msg)                                        return showErr('Please write a message.');

  sendBtn.disabled  = true;
  sendLbl.textContent = 'Sending…';

  try{
    if(!ejsLoaded){
      await loadScript('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js');
      emailjs.init({publicKey: EJS_KEY});
      ejsLoaded = true;
    }
    await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
      from_name:  name,
      from_email: email,
      subject:    subject,
      message:    msg,
      reply_to:   email,
    });
    document.getElementById('modalForm').style.display    = 'none';
    document.getElementById('replyAddr').textContent      = email;
    document.getElementById('modalSuccess').style.display = 'block';
  }catch(e){
    showErr('Something went wrong. Please try again.');
    sendBtn.disabled = false;
    sendLbl.textContent = 'Send Message';
  }
}

function showErr(txt){
  const el = document.getElementById('modal-err');
  el.textContent = txt;
  el.style.display = 'block';
}
function loadScript(src){
  return new Promise((res,rej)=>{
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}
</script>
</body>
</html>
