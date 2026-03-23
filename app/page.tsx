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
      if (err.response && err.response.data && err.response.data.detail) {
        alert(err.response.data.detail);
      } else {
        alert(lang === 'ar' ? "مشكلة في الاتصال بالسيرفر 🚨" : "Server connection error 🚨");
      }
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
      alert(lang === 'ar' ? "🎉 مبروك يا هندسة! تم الدفع بنجاح وحسابك بقى PRO." : "🎉 Congrats! Payment successful. You are now PRO.");
      setView('grid');
    } catch (err) {
      alert(lang === 'ar' ? "تم الدفع بس حصلت مشكلة في تفعيل الحساب!" : "Payment done but account activation failed!");
    }
  };

  const getAcceptTypes = () => {
    if (activeTool.id === 'rotate-pdf') return '.pdf, image/*';
    if (activeTool.id === 'security-pdf') return '.pdf, image/*';
    if (activeTool.id === 'img-to-pdf') return 'image/*';
    if (activeTool.id === 'grayscale-pdf') return '.pdf, image/*'; 
    if (activeTool.id === 'compress-pdf') return 'image/*, video/*';
    if (activeTool.id === 'bg-remover') return 'image/*';
    if (activeTool.id === 'mp4-to-mp3') return 'video/*';
    return '.pdf';
  };

  const handleProcess = async () => {
    if (files.length === 0) return alert(loc.alertNoFiles);
    if (!user) {
      alert(lang === 'ar' ? "لازم تسجل دخول الأول 🔒" : "Please login first 🔒");
      setView('login');
      return;
    }
    
    setLoading(true);
    setProgress(0); // تصغير العداد للصفر

    // خدعة العداد الذكي: بيمشي سريع لحد 90% وبعدين يستنى السيرفر
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + (prev < 60 ? 10 : 2);
      });
    }, 400);

    const formData = new FormData();
    files.forEach(f => formData.append("files", f));
    formData.append("user_email", user.email);
    if (extraParam) formData.append("extra_param", extraParam);

    try {
      const res = await axios.post(`${API_URL}/${activeTool.id}/`, formData, { 
        responseType: 'blob', timeout: 180000 
      });

      setProgress(100); // كمل العداد لـ 100% أول ما يخلص
      
      const url = window.URL.createObjectURL(new Blob([res.data]));
      let ext = 'pdf'; // ... (باقي الكود بتاع الـ extension زي ما هو)
      
      const a = document.createElement('a'); 
      a.href = url; 
      a.download = `Sabae_${activeTool.id}.zip`; 
      a.click();
    } catch (err: any) {
      alert(lang === 'ar' ? "حدث خطأ أثناء المعالجة ❌" : "Error during processing ❌");
    } finally {
      clearInterval(interval); // وقف العداد
      setTimeout(() => { setLoading(false); setProgress(0); }, 1000);
    }
  };

  return (
    <div className={`min-h-screen bg-[#020617] text-white font-sans ${lang === 'ar' ? 'rtl' : 'ltr'} relative overflow-x-hidden`}>
      <div ref={cursorRef} className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] z-[0] opacity-30 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: view === 'grid' || view === 'login' ? hoveredNeon : activeTool.neon, transform: 'translate(calc(var(--x, -100px) - 50%), calc(var(--y, -100px) - 50%))' }} />

      <nav className="p-4 md:p-6 border-b border-gray-800/50 flex justify-between items-center sticky top-0 bg-[#020617]/70 z-[100] backdrop-blur-xl">
        <h1 className="text-2xl md:text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-wider cursor-pointer" onClick={() => setView('grid')}>SABAEPDF PRO ⚡</h1>
        <div className="flex gap-2 md:gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-2 md:gap-3 mr-2 md:mr-4">
              {user.plan === 'PRO' ? (
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white font-black text-xs md:text-sm border border-cyan-400/50 shadow-[0_0_15px_rgba(8,145,178,0.4)] flex items-center gap-2">
                  <span className="hidden md:inline">Premium</span>
                  <span className="md:hidden">PRO</span>
                  <span className="text-base leading-none">🚀</span>
                </div>
              ) : (
                <button onClick={() => setView('login')} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 text-black font-black py-1.5 md:py-2 px-3 md:px-4 rounded-full transition-all text-xs md:text-sm shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-yellow-300 flex items-center gap-1 cursor-pointer">
                  {lang === 'ar' ? 'الاشتراك Premium' : 'Get Premium'} <span className="text-base leading-none">⚡</span>
                </button>
              )}
              <button onClick={handleSignOut} className="bg-gray-800/80 hover:bg-red-500/20 text-gray-300 hover:text-red-400 font-bold py-1.5 md:py-2 px-3 md:px-4 rounded-full transition-all duration-300 border border-gray-600 hover:border-red-500/50 text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm">
                <span className="hidden md:inline">{lang === 'ar' ? 'تسجيل خروج' : 'Sign Out'}</span>
                <span className="text-base leading-none">🚪</span>
              </button>
            </div>
          ) : (
            <button onClick={() => setView('login')} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-105 text-white font-bold py-1.5 md:py-2 px-4 md:px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.5)] border border-cyan-500/50 cursor-pointer text-xs md:text-sm">
              {lang === 'ar' ? 'دخول / PRO ⚡' : 'Login / PRO ⚡'}
            </button>
          )}
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-gray-800/80 hover:bg-gray-700 text-white font-bold py-1.5 md:py-2 px-3 md:px-6 rounded-full transition-all duration-300 border border-gray-600 shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm cursor-pointer text-xs md:text-sm">
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-16 relative z-50">
        {view === 'login' && (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 italic uppercase">{loc.loginHeader}</h1>
            <p className="text-gray-400 text-xl font-bold mb-12">{authMode === 'login' ? loc.loginSub : loc.signupSub}</p>
            
            {!user ? (
              <>
                <form onSubmit={handleAuth} className="flex flex-col gap-4 justify-center max-w-md mx-auto mb-6">
                  <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder={loc.emailPlaceholder} required className="w-full bg-gray-900/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 transition-colors text-center font-bold" />
                  <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder={loc.passwordPlaceholder} required className="w-full bg-gray-900/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 transition-colors text-center font-bold" />
                  <button type="submit" disabled={loading} className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:scale-[1.03] transition-all cursor-pointer mt-2">
                    {loading ? '...' : (authMode === 'login' ? loc.loginBtn : loc.signupBtn)}
                  </button>
                </form>
                <button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} className="text-gray-400 hover:text-cyan-400 underline font-bold transition-colors cursor-pointer mb-16">
                  {authMode === 'login' ? loc.noAccount : loc.hasAccount}
                </button>
              </>
            ) : (
              <div className="mb-16 text-cyan-400 font-bold text-xl flex items-center justify-center gap-2">
                <span>{loc.loggedInAs} {user.email}</span>
                <span className="text-2xl">✅</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right mb-12">
              <div className="p-8 rounded-[2.5rem] bg-gray-900/40 border-2 border-gray-800 backdrop-blur-md">
                <h3 className="text-2xl font-black mb-4">{loc.freePlan}</h3>
                <div className="text-5xl font-black mb-6">0$</div>
                <ul className="space-y-4 mb-8 text-gray-400 font-bold">
                  {loc.freeFeatures.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-gray-900/60 border-2 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-6 left-[-40px] bg-cyan-500 text-black font-black py-1 px-12 rotate-[-45deg] text-sm shadow-lg">{loc.recommended}</div>
                <h3 className="text-3xl font-black mb-4 text-cyan-400">{loc.proPlan}</h3>
                <div className="text-5xl font-black mb-6 text-white">5$ <span className="text-lg text-gray-500">{loc.month}</span></div>
                <ul className="space-y-4 mb-8 text-gray-300 font-bold">
                   {loc.proFeatures.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                
                {(!user || user.plan === 'Free') && (
                  <div className="mt-6 z-50 relative">
                    {!user ? (
                       <button onClick={() => alert(lang === 'ar' ? "سجل دخولك الأول!" : "Please login first!")} className="w-full py-4 rounded-xl bg-gray-700 text-gray-400 font-black text-xl cursor-not-allowed border border-gray-600">
                         {loc.loginToPay}
                       </button>
                    ) : (
                      <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                        <PayPalButtons 
                          style={{ layout: "vertical", color: "blue", shape: "pill", label: "pay" }}
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              intent: "CAPTURE",
                              purchase_units: [{ amount: { currency_code: "USD", value: "5.00" } }]
                            });
                          }}
                          onApprove={async (data, actions) => {
                            if (actions.order) {
                               await actions.order.capture();
                               handleSuccessfulPayment();
                            }
                          }}
                        />
                      </PayPalScriptProvider>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <button onClick={() => setView('grid')} className="text-gray-400 hover:text-white underline font-bold transition-colors cursor-pointer">
              {loc.browseTools}
            </button>
          </div>
        )}

        {view === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
            <div className="col-span-full mb-12">
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 italic uppercase drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">{loc.title}</h1>
              <p className="text-gray-400 text-lg md:text-2xl font-bold italic opacity-90">{loc.subtitle}</p>
            </div>
            {tools.map((t) => (
              <div key={t.id} onClick={() => { setActiveTool(t); setFiles([]); setExtraParam(""); setView('tool'); }} 
                onMouseEnter={() => { setHoveredNeon(t.neon); setHoveredCardId(t.id); }} 
                onMouseLeave={() => { setHoveredNeon('#06b6d4'); setHoveredCardId(null); }}
                style={{ boxShadow: hoveredCardId === t.id ? `0 0 30px ${t.neon}70` : '0 10px 30px rgba(0,0,0,0.3)', borderColor: hoveredCardId === t.id ? t.neon : 'rgba(31, 41, 55, 0.8)' }}
                className={`group p-8 rounded-[2.5rem] bg-gray-900/40 transition-all duration-500 hover:-translate-y-3 flex flex-col items-center gap-5 cursor-pointer backdrop-blur-md border-2 overflow-hidden relative`}>
                
                {t.isPro && <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-black py-1 px-3 rounded-full shadow-lg z-20">PRO</div>}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: t.neon }}></div>
                
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${t.color} flex items-center justify-center text-4xl shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 z-10`}>{t.icon}</div>
                <div className="z-10">
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">{lang === 'ar' ? t.nameAr : t.nameEn}</h3>
                  <p className="text-gray-400 text-sm font-bold leading-relaxed group-hover:text-gray-300 transition-colors">{lang === 'ar' ? t.descAr : t.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'tool' && (
          <div className="max-w-4xl mx-auto bg-gray-900/60 border-2 border-gray-800/80 rounded-[3rem] p-12 shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, transparent, ${activeTool.neon}, transparent)` }}></div>
            
            <div className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${activeTool.color} flex items-center justify-center text-6xl mx-auto mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform hover:scale-110 transition-transform duration-500`}>{activeTool.icon}</div>
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-md flex justify-center items-center gap-4">
              {lang === 'ar' ? activeTool.nameAr : activeTool.nameEn}
              {activeTool.isPro && <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-black py-1 px-3 rounded-full align-middle">PRO</span>}
            </h2>
            <p className="text-gray-400 font-bold mb-10">{user?.plan === 'Free' && !activeTool.isPro ? loc.unlimited : user?.plan === 'PRO' ? loc.proUnlimited : loc.loginRequired}</p>
            
            <div className="relative border-2 border-dashed border-gray-600/60 rounded-[2.5rem] p-10 mb-10 bg-black/30 min-h-[250px] flex flex-col items-center justify-center hover:border-cyan-500 hover:bg-black/50 transition-all duration-300 group">
              {files.length === 0 ? (
                <>
                  <input type="file" multiple accept={getAcceptTypes()} onChange={(e) => setFiles(Array.from(e.target.files || []))} className="absolute inset-0 opacity-0 cursor-pointer z-50 w-full h-full" />
                  <div className="text-7xl mb-6 transform group-hover:-translate-y-3 transition-transform duration-500">🚀</div>
                  <p className="text-2xl font-black text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">{loc.uploadPrompt}</p>
                </>
              ) : (
                <div className="flex flex-wrap gap-5 justify-center w-full relative z-50 p-4">
                  {files.map((file, idx) => (
                    <div key={idx} className="relative w-32 h-32 rounded-2xl border-2 border-cyan-800 bg-gray-900 flex flex-col items-center justify-center p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <button onClick={(e) => { e.stopPropagation(); setFiles(files.filter((_, i) => i !== idx)); }} className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-lg shadow-lg z-[60] cursor-pointer transition-colors">×</button>
                        <div className="text-5xl">{file.type.startsWith('image/') ? '🖼️' : '📄'}</div>
                        <div className="text-[10px] text-cyan-400 truncate w-full font-bold mt-3 text-center px-1" dir="ltr">{file.name}</div>
                    </div>
                  ))}
                  <button onClick={() => setFiles([])} className="text-red-500 font-bold text-lg w-full mt-6 hover:text-red-400 transition-colors cursor-pointer tracking-wider">{lang === 'ar' ? '× مسح الكل' : '× Clear All'}</button>
                </div>
              )}
            </div>

           {((activeTool as any).inputPlaceholderAr || (activeTool as any).inputPlaceholderEn) && (
              <div className="mb-10 relative z-50">
                <input type="text" value={extraParam} onChange={(e) => setExtraParam(e.target.value)} placeholder={lang === 'ar' ? activeTool.inputPlaceholderAr : activeTool.inputPlaceholderEn} className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 transition-colors text-center font-bold shadow-inner" />
              </div>
            )}

          <div className="flex gap-6 relative z-50">
              {/* زرار العودة */}
              <button 
                onClick={() => { setFiles([]); setExtraParam(""); setView('grid'); }} 
                className="flex-1 py-5 rounded-2xl bg-gray-800 font-black text-xl hover:bg-gray-700 transition-all cursor-pointer shadow-lg border border-gray-700"
              >
                {loc.back}
              </button>

              {/* زرار التنفيذ الصافي - شلنا التكرار */}
              <button 
                onClick={handleProcess} 
                disabled={loading} 
                className="flex-[2] py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-cyan-400/50 relative overflow-hidden"
              >
                {loading ? (
                  <>
                    <span className="relative z-10">{progress}% {loc.processing}</span>
                    <div 
                      className="absolute top-0 left-0 h-full bg-white/20 transition-all duration-500" 
                      style={{ width: `${progress}%` }} 
                    />
                  </>
                ) : loc.process}
              </button>
            </div>
