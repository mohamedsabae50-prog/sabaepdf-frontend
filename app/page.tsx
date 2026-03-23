"use client";
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const t = {
  ar: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "منصة ذكية للتعامل مع كل ملفاتك", 
    uploadPrompt: "اسحب أو اضغط لرفع الملفات هنا", 
    back: "عودة", 
    process: "ابدأ الآن ⚡", 
    processing: "...جاري التنفيذ", 
    alertNoFiles: "ارفع ملفاتك الأول يا بطل!",
    loginHeader: "أدوات المحترفين هنا 🔥",
    loginSub: "سجل دخولك لفتح مساحة العمل",
    signupSub: "اعمل حساب جديد وانضم لينا",
    emailPlaceholder: "الإيميل",
    passwordPlaceholder: "كلمة السر",
    loginBtn: "دخول ⚡",
    signupBtn: "إنشاء حساب 🚀",
    noAccount: "معندكش حساب؟ سجل دلوقتي",
    hasAccount: "عندك حساب بالفعل؟ سجل دخول",
    loggedInAs: "أنت مسجل دخول بإيميل:",
    freePlan: "المواطن المجاني 🆓",
    proPlan: "Sabae PRO ⚡",
    recommended: "موصى به",
    month: "/شهر",
    loginToPay: "سجل دخول للاشتراك",
    browseTools: "تصفح الأدوات",
    freeFeatures: ["✅ دمج، ضغط، وتدوير الملفات", "✅ عمليات غير محدودة يومياً ∞", "❌ مقفول: التشفير واستخراج الصوت", "❌ مقفول: أدوات الذكاء الاصطناعي (AI)"],
    proFeatures: ["✅ كل مميزات المجاني (لا نهائي)", "✅ حماية وفك تشفير الملفات 🔒", "✅ فصل واستخراج الصوت (MP3) 🎧", "✅ إزالة الخلفية واستخراج جداول Excel (AI) ✨"],
    unlimited: "متاح لك عدد لا نهائي من العمليات ∞",
    proUnlimited: "عمليات غير محدودة 🚀",
    loginRequired: "سجل دخولك أو رقي حسابك عشان تستخدم الأداة 🔒"
  },
  en: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "Smart platform for all your files", 
    uploadPrompt: "Drag or click to upload files here", 
    back: "Back", 
    process: "Start Now ⚡", 
    processing: "Processing...", 
    alertNoFiles: "Upload your files first!",
    loginHeader: "Pro Tools Are Here 🔥",
    loginSub: "Login to open your workspace",
    signupSub: "Create a new account and join us",
    emailPlaceholder: "Email Address",
    passwordPlaceholder: "Password",
    loginBtn: "Login ⚡",
    signupBtn: "Sign Up 🚀",
    noAccount: "Don't have an account? Register now",
    hasAccount: "Already have an account? Login",
    loggedInAs: "Logged in as:",
    freePlan: "Free Citizen 🆓",
    proPlan: "Sabae PRO ⚡",
    recommended: "Recommended",
    month: "/month",
    loginToPay: "Login to Subscribe",
    browseTools: "Browse Tools",
    freeFeatures: ["✅ Merge, Compress, Rotate", "✅ Unlimited daily operations ∞", "❌ Locked: Encrypt & Audio", "❌ Locked: AI Tools"],
    proFeatures: ["✅ All Free features (Unlimited)", "✅ Protect & Unlock PDF 🔒", "✅ Extract Audio (MP3) 🎧", "✅ AI Background Remover & Excel ✨"],
    unlimited: "Unlimited operations available ∞",
    proUnlimited: "Unlimited Pro operations 🚀",
    loginRequired: "Login or upgrade to use this tool 🔒"
  }
};

const tools = [
  { id: 'pdf-to-word', nameAr: 'PDF لـ Word', nameEn: 'PDF to Word', icon: '📝', color: 'from-emerald-500 to-teal-600', neon: '#10b981', descAr: 'تحويل الملف لنص قابل للتعديل.', descEn: 'Convert PDF to editable text.', isPro: false },
  { id: 'img-to-pdf', nameAr: 'صور لـ PDF', nameEn: 'Images to PDF', icon: '🖼️', color: 'from-orange-500 to-red-600', neon: '#ef4444', descAr: 'تحويل الصور إلى مستندات PDF.', descEn: 'Convert images to PDF docs.', isPro: false },
  { id: 'merge-pdf', nameAr: 'دمج ملفات', nameEn: 'Merge PDF', icon: '📑', color: 'from-blue-600 to-indigo-700', neon: '#3b82f6', descAr: 'دمج عدة ملفات في مستند واحد.', descEn: 'Merge multiple files into one.', isPro: false },
  { id: 'pdf-to-img', nameAr: 'PDF لـ صور', nameEn: 'PDF to Images', icon: '📸', color: 'from-yellow-400 to-orange-500', neon: '#f59e0b', descAr: 'تحويل صفحات الـ PDF لصور.', descEn: 'Convert PDF pages to images.', isPro: false },
  { id: 'compress-pdf', nameAr: 'ضغط الميديا', nameEn: 'Compress Media', icon: '📉', color: 'from-pink-500 to-rose-600', neon: '#f43f5e', descAr: 'ضغط حجم الصور والفيديوهات.', descEn: 'Compress images and videos.', isPro: false },
  { id: 'mp4-to-mp3', nameAr: 'استخراج الصوت', nameEn: 'MP4 to MP3', icon: '🎧', color: 'from-cyan-500 to-blue-600', neon: '#06b6d4', descAr: 'فصل الصوت كملف MP3.', descEn: 'Extract audio as MP3.', isPro: true },
  { id: 'bg-remover', nameAr: 'إزالة الخلفية (AI)', nameEn: 'Remove BG', icon: '✨', color: 'from-fuchsia-500 to-purple-600', neon: '#d946ef', descAr: 'مسح الخلفية بالذكاء الاصطناعي.', descEn: 'AI background removal.', isPro: true },
  { id: 'pdf-to-excel', nameAr: 'PDF لـ Excel (AI)', nameEn: 'PDF to Excel', icon: '📊', color: 'from-green-600 to-emerald-800', neon: '#059669', descAr: 'استخراج الجداول بدقة عالية.', descEn: 'Extract tables with high accuracy.', isPro: true },
  { id: 'grayscale-pdf', nameAr: 'توفير حبر', nameEn: 'Grayscale', icon: '🏁', color: 'from-gray-500 to-slate-700', neon: '#64748b', descAr: 'تحويل لأبيض وأسود.', descEn: 'Convert to black and white.', isPro: false },
  { id: 'delete-pages', nameAr: 'مسح صفحات', nameEn: 'Delete Pages', icon: '✂️', color: 'from-red-500 to-pink-600', neon: '#ec4899', descAr: 'حذف صفحات من الملف.', descEn: 'Remove pages from file.', isPro: false, inputPlaceholderAr: 'أرقام الصفحات (1, 3)', inputPlaceholderEn: 'Page numbers (1, 3)' },
  { id: 'rotate-pdf', nameAr: 'تدوير الملف', nameEn: 'Rotate PDF', icon: '🔄', color: 'from-yellow-500 to-orange-600', neon: '#f59e0b', descAr: 'تدوير الصفحات أو الصور.', descEn: 'Rotate pages or images.', isPro: false, inputPlaceholderAr: 'الزاوية (90, 180)', inputPlaceholderEn: 'Angle (90, 180)' },
  { id: 'security-pdf', nameAr: 'قفل وفك التشفير', nameEn: 'Lock & Unlock', icon: '🔒', color: 'from-purple-600 to-violet-700', neon: '#a78bfa', descAr: 'تشفير أو فك الحماية.', descEn: 'Encrypt or unlock files.', isPro: true, inputPlaceholderAr: 'اكتب كلمة السر', inputPlaceholderEn: 'Enter password' }
];

const PAYPAL_CLIENT_ID = "test"; 
const API_URL = "https://memosssssss-sabaepdf-backen.hf.space";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [user, setUser] = useState<{email: string, plan: string} | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [view, setView] = useState<'grid' | 'login' | 'tool'>('grid');
  const [activeTool, setActiveTool] = useState(tools[0]);
  const [files, setFiles] = useState<File[]>([]);
  const [extraParam, setExtraParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoveredNeon, setHoveredNeon] = useState('#06b6d4');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--x', `${e.clientX}px`);
        cursorRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  if (!isMounted) return null;
  const loc = t[lang];

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !passwordInput) return alert(lang === 'ar' ? "اكتب الإيميل والباسورد يا بطل!" : "Please enter email and password!");
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", emailInput);
      formData.append("password", passwordInput);
      const endpoint = authMode === 'login' ? 'login' : 'signup';
      const res = await axios.post(`${API_URL}/${endpoint}/`, formData);
      setUser(res.data);
      setView('grid');
      setPasswordInput(""); 
    } catch (err: any) {
      alert(err.response?.data?.detail || "Error connecting to server 🚨");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    setUser(null);
    setFiles([]);
    setExtraParam("");
    setView('login');
  };

  const handleSuccessfulPayment = async () => {
    if (!user) return;
    try {
      const formData = new FormData();
      formData.append("email", user.email);
      await axios.post(`${API_URL}/upgrade/`, formData);
      setUser({ ...user, plan: 'PRO' });
      alert(lang === 'ar' ? "🎉 مبروك يا هندسة!" : "🎉 Congrats!");
      setView('grid');
    } catch (err) {
      alert("Payment activation failed!");
    }
  };

  const getAcceptTypes = () => {
    if (activeTool.id === 'rotate-pdf') return '.pdf, image/*';
    if (activeTool.id === 'img-to-pdf') return 'image/*';
    if (activeTool.id === 'mp4-to-mp3') return 'video/*';
    return '.pdf, image/*, video/*';
  };

  const handleProcess = async () => {
    if (files.length === 0) return alert(loc.alertNoFiles);
    if (!user) {
      alert(lang === 'ar' ? "لازم تسجل دخول الأول 🔒" : "Please login first 🔒");
      setView('login');
      return;
    }
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? prev : prev + (prev < 60 ? 10 : 2)));
    }, 400);
    const formData = new FormData();
    files.forEach(f => formData.append("files", f));
    formData.append("user_email", user.email);
    if (extraParam) formData.append("extra_param", extraParam);
    try {
      const res = await axios.post(`${API_URL}/${activeTool.id}/`, formData, { responseType: 'blob', timeout: 180000 });
      setProgress(100);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a'); 
      a.href = url; a.download = `Sabae_${activeTool.id}.zip`; a.click();
    } catch (err) {
      alert("Error processing file ❌");
    } finally {
      clearInterval(interval);
      setTimeout(() => { setLoading(false); setProgress(0); }, 1000);
    }
  };

  return (
    <div className={`min-h-screen bg-[#020617] text-white font-sans ${lang === 'ar' ? 'rtl' : 'ltr'} relative overflow-x-hidden`}>
      <div ref={cursorRef} className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] z-[0] opacity-30 pointer-events-none"
        style={{ backgroundColor: view === 'grid' || view === 'login' ? hoveredNeon : activeTool.neon, transform: 'translate(calc(var(--x, -100px) - 50%), calc(var(--y, -100px) - 50%))' }} />

      <nav className="p-4 md:p-6 border-b border-gray-800/50 flex justify-between items-center sticky top-0 bg-[#020617]/70 z-[100] backdrop-blur-xl">
        <h1 className="text-2xl md:text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-wider cursor-pointer" onClick={() => setView('grid')}>SABAEPDF PRO ⚡</h1>
        <div className="flex gap-2 md:gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-2 md:gap-3 mr-2 md:mr-4">
              {user.plan === 'PRO' ? (
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-full text-white font-black text-xs md:text-sm border border-cyan-400/50 flex items-center gap-2">
                  <span>Premium</span><span className="text-base">🚀</span>
                </div>
              ) : (
                <button onClick={() => setView('login')} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black py-2 px-4 rounded-full text-xs md:text-sm">
                  {lang === 'ar' ? 'الاشتراك Premium' : 'Get Premium'} ⚡
                </button>
              )}
              <button onClick={handleSignOut} className="bg-gray-800/80 text-gray-300 font-bold py-2 px-4 rounded-full text-xs md:text-sm">🚪</button>
            </div>
          ) : (
            <button onClick={() => setView('login')} className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2 px-6 rounded-full text-xs md:text-sm">Login / PRO ⚡</button>
          )}
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-gray-800/80 text-white font-bold py-2 px-6 rounded-full text-xs md:text-sm">
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-16 relative z-50">
        {view === 'login' && (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 uppercase">{loc.loginHeader}</h1>
            <p className="text-gray-400 text-xl font-bold mb-12">{authMode === 'login' ? loc.loginSub : loc.signupSub}</p>
            {!user ? (
              <>
                <form onSubmit={handleAuth} className="flex flex-col gap-4 max-w-md mx-auto mb-6">
                  <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder={loc.emailPlaceholder} required className="w-full bg-gray-900 border-2 border-gray-700 rounded-2xl p-5 text-xl text-center font-bold" />
                  <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder={loc.passwordPlaceholder} required className="w-full bg-gray-900 border-2 border-gray-700 rounded-2xl p-5 text-xl text-center font-bold" />
                  <button type="submit" className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl mt-2">
                    {loading ? '...' : (authMode === 'login' ? loc.loginBtn : loc.signupBtn)}
                  </button>
                </form>
                <button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} className="text-gray-400 underline font-bold">{authMode === 'login' ? loc.noAccount : loc.hasAccount}</button>
              </>
            ) : (
              <div className="text-cyan-400 font-bold text-xl">{loc.loggedInAs} {user.email} ✅</div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 rounded-[2.5rem] bg-gray-900/40 border-2 border-gray-800 text-right">
                    <h3 className="text-2xl font-black mb-4">{loc.freePlan}</h3>
                    <ul className="space-y-4 text-gray-400 font-bold">{loc.freeFeatures.map((f, i) => <li key={i}>{f}</li>)}</ul>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gray-900/60 border-2 border-cyan-500 text-right relative">
                    <h3 className="text-3xl font-black mb-4 text-cyan-400">{loc.proPlan}</h3>
                    <ul className="space-y-4 text-gray-300 font-bold">{loc.proFeatures.map((f, i) => <li key={i}>{f}</li>)}</ul>
                    {(!user || user.plan === 'Free') && (
                        <div className="mt-6">
                            {user ? (
                                <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                                    <PayPalButtons style={{ layout: "vertical", color: "blue", shape: "pill" }} createOrder={(data, actions) => actions.order.create({ purchase_units: [{ amount: { value: "5.00" } }] })} onApprove={async (data, actions) => { await actions.order?.capture(); handleSuccessfulPayment(); }} />
                                </PayPalScriptProvider>
                            ) : <button className="w-full py-4 bg-gray-700 rounded-xl">{loc.loginToPay}</button>}
                        </div>
                    )}
                </div>
            </div>
          </div>
        )}

        {view === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
            <div className="col-span-full mb-12">
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 uppercase">{loc.title}</h1>
              <p className="text-gray-400 text-lg font-bold italic">{loc.subtitle}</p>
            </div>
            {tools.map((t) => (
              <div key={t.id} onClick={() => { setActiveTool(t); setFiles([]); setView('tool'); }} onMouseEnter={() => setHoveredNeon(t.neon)} className="p-8 rounded-[2.5rem] bg-gray-900/40 border-2 border-gray-800 flex flex-col items-center gap-5 cursor-pointer hover:-translate-y-2 transition-all">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${t.color} flex items-center justify-center text-4xl`}>{t.icon}</div>
                <h3 className="text-2xl font-black">{lang === 'ar' ? t.nameAr : t.nameEn}</h3>
              </div>
            ))}
          </div>
        )}

        {view === 'tool' && (
          <div className="max-w-4xl mx-auto bg-gray-900/60 border-2 border-gray-800 rounded-[3rem] p-12 text-center">
            <h2 className="text-5xl font-black mb-4">{lang === 'ar' ? activeTool.nameAr : activeTool.nameEn}</h2>
            <div className="border-2 border-dashed border-gray-600 rounded-[2.5rem] p-10 mb-10 min-h-[250px] flex flex-col items-center justify-center relative">
              {files.length === 0 ? (
                <>
                  <input type="file" multiple accept={getAcceptTypes()} onChange={(e) => setFiles(Array.from(e.target.files || []))} className="absolute inset-0 opacity-0 cursor-pointer" />
                  <p className="text-2xl font-black text-gray-400">{loc.uploadPrompt}</p>
                </>
              ) : (
                <div className="flex flex-wrap gap-5 justify-center">
                  {files.map((file, idx) => <div key={idx} className="bg-gray-900 p-4 rounded-xl border-2 border-cyan-800">{file.name}</div>)}
                </div>
              )}
            </div>
            <div className="flex gap-6">
              <button onClick={() => setView('grid')} className="flex-1 py-5 rounded-2xl bg-gray-800 font-black text-xl">{loc.back}</button>
              <button onClick={handleProcess} disabled={loading} className="flex-[2] py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl relative overflow-hidden">
                {loading ? <><span className="relative z-10">{progress}% {loc.processing}</span><div className="absolute top-0 left-0 h-full bg-white/20" style={{ width: `${progress}%` }} /></> : loc.process}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
