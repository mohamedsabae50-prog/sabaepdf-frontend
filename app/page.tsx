"use client";
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const t = {
  ar: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "منصة الأعمال الأولى للتعامل مع مستنداتك بذكاء", 
    uploadPrompt: "اسحب أو اضغط لرفع الملفات هنا", 
    back: "عودة للأدوات 🔙", 
    process: "ابدأ الآن ⚡", 
    processing: "...جاري التنفيذ", 
    finalizing: "...جاري اللمسات الأخيرة (انتظر قليلاً)",
    alertNoFiles: "ارفع ملفاتك الأول يا بطل!",
    alertNoPrompt: "اكتب وصف خيالك الأول يا بطل عشان الـ AI يشتغل! ✨",
    loginHeader: "أهلاً بك مجدداً 👋",
    signupHeader: "ابدأ رحلتك الآن 🚀",
    loginSub: "سجل دخولك لمواصلة العمل على ملفاتك",
    signupSub: "أنشئ حسابك المجاني وانضم لآلاف المحترفين",
    emailPlaceholder: "البريد الإلكتروني",
    passwordPlaceholder: "كلمة السر",
    loginBtn: "تسجيل الدخول ⚡",
    signupBtn: "إنشاء حساب جديد 🚀",
    noAccount: "ليس لديك حساب؟ أنشئ حساباً مجانياً",
    hasAccount: "لديك حساب بالفعل؟ سجل دخولك",
    loggedInAs: "أنت مسجل دخول بإيميل:",
    freePlan: "المجانية 🆓",
    proPlan: "Sabae PRO ⚡",
    businessPlan: "Business 💼",
    recommended: "الأكثر مبيعاً",
    month: "/شهر",
    loginToPay: "سجل دخول للاشتراك",
    browseTools: "العودة للموقع الأساسي 🏠",
    freeFeatures: ["✅ تعديل، دمج، ضغط وتدوير", "✅ عمليات أساسية غير محدودة", "❌ مقفول: أدوات الـ AI", "❌ مقفول: الترجمة والتعتيم"],
    proFeatures: ["✅ كل مميزات المجاني", "✅ تعديل وتلخيص بالـ AI 🧠", "✅ تعتيم حساس للمعلومات ⬛", "✅ إزالة العلامات المائية 💧", "✅ توليد صور وتفريغ صوتي 🎙️"],
    businessFeatures: ["✅ كل مميزات الـ PRO", "✅ ترجمة كاملة بنفس التنسيق 🌍", "✅ استخراج نصوص OCR فائق 📊", "✅ أولوية المعالجة على السيرفر 🚀", "✅ دعم فني مخصص"],
    unlimited: "متاح لك عدد لا نهائي من العمليات ∞",
    proUnlimited: "مرحباً بك في مساحة المحترفين 🚀",
    businessUnlimited: "مرحباً بك في مساحة الأعمال الفائقة 💼",
    passwordMismatch: "كلمات السر غير متطابقة"
  },
  en: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "The premier business platform for smart documents", 
    uploadPrompt: "Drag or click to upload files here", 
    back: "Back to Tools 🔙", 
    process: "Start Now ⚡", 
    processing: "Processing...", 
    finalizing: "Finalizing...",
    alertNoFiles: "Upload your files first!",
    alertNoPrompt: "Enter prompt first!",
    loginHeader: "Welcome Back 👋",
    signupHeader: "Start Your Journey 🚀",
    loginSub: "Login to continue",
    signupSub: "Create free account",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    loginBtn: "Login ⚡",
    signupBtn: "Sign Up 🚀",
    noAccount: "No account? Sign up",
    hasAccount: "Have an account? Login",
    loggedInAs: "Logged in as:",
    freePlan: "Free 🆓",
    proPlan: "Sabae PRO ⚡",
    businessPlan: "Business 💼",
    recommended: "Best Seller",
    month: "/month",
    loginToPay: "Login to Pay",
    browseTools: "Back to Home 🏠",
    freeFeatures: ["✅ Edit, Merge", "✅ Unlimited basic", "❌ Locked: AI Tools", "❌ Locked: Translation"],
    proFeatures: ["✅ All Free", "✅ AI Edit", "✅ Redaction", "✅ Image generation", "✅ Audio extraction"],
    businessFeatures: ["✅ All PRO", "✅ Layout Translation", "✅ OCR to Excel", "✅ Priority Server"],
    unlimited: "Unlimited ∞",
    proUnlimited: "Welcome PRO 🚀",
    businessUnlimited: "Welcome Business 💼",
    passwordMismatch: "Passwords mismatch"
  }
};

const tools = [
  { id: 'ai-pdf-translator', nameAr: 'ترجمة ذكية (AI)', nameEn: 'Smart Translation', icon: '🌍', color: 'from-blue-600 to-indigo-900', neon: '#3b82f6', descAr: 'ترجمة كاملة مع حفظ التنسيق.', reqPlan: 'Business' },
  { id: 'pdf-to-excel', nameAr: 'PDF لـ Excel (OCR)', nameEn: 'Pro OCR to Excel', icon: '📊', color: 'from-green-600 to-emerald-900', neon: '#059669', descAr: 'استخراج الجداول.', reqPlan: 'Business' },
  { id: 'ai-pdf-editor', nameAr: 'تعديل ذكي (AI)', nameEn: 'AI Editor', icon: '✨', color: 'from-purple-600 to-fuchsia-800', neon: '#d946ef', descAr: 'أعد صياغة النصوص.', reqPlan: 'PRO', inputPlaceholderAr: 'اكتب التعديل...' },
  { id: 'pdf-redaction', nameAr: 'تعتيم حساس', nameEn: 'Smart Redaction', icon: '⬛', color: 'from-gray-700 to-black', neon: '#ffffff', descAr: 'إخفاء الأرقام.', reqPlan: 'PRO', inputPlaceholderAr: 'الكلمة المراد إخفاؤها...' },
  { id: 'ai-summarizer', nameAr: 'تلخيص PDF (AI)', nameEn: 'AI Summarizer', icon: '🧠', color: 'from-indigo-600 to-blue-800', neon: '#4f46e5', descAr: 'لخص الملف.', reqPlan: 'PRO' },
  { id: 'bg-remover', nameAr: 'إزالة الخلفية (AI)', nameEn: 'Remove BG', icon: '✂️', color: 'from-fuchsia-500 to-purple-600', neon: '#d946ef', descAr: 'مسح الخلفية.', reqPlan: 'PRO' },
  { id: 'image-upscaler', nameAr: 'تكبير الصور (4K)', nameEn: 'Image Upscaler', icon: '🪄', color: 'from-orange-500 to-red-600', neon: '#f97316', descAr: 'تحسين الجودة.', reqPlan: 'PRO' },
  { id: 'mp4-to-mp3', nameAr: 'استخراج الصوت', nameEn: 'MP4 to MP3', icon: '🎧', color: 'from-cyan-500 to-blue-600', neon: '#06b6d4', descAr: 'فصل الصوت.', reqPlan: 'PRO' }, 
  { id: 'watermark-remover', nameAr: 'مسح العلامة المائية', nameEn: 'Watermark Remover', icon: '💧', color: 'from-cyan-500 to-teal-600', neon: '#06b6d4', descAr: 'إزالة العلامات.', reqPlan: 'PRO', isComingSoon: true },
  { id: 'ai-image-gen', nameAr: 'توليد صور (AI)', nameEn: 'AI Image Gen', icon: '🎨', color: 'from-indigo-500 to-purple-600', neon: '#8b5cf6', descAr: 'توليد صور.', reqPlan: 'PRO', isPromptOnly: true, inputPlaceholderAr: 'وصف الصورة...' },
  { id: 'pdf-editor', nameAr: 'تعديل PDF', nameEn: 'Edit PDF', icon: '🖍️', color: 'from-teal-500 to-emerald-600', neon: '#14b8a6', descAr: 'إضافة نصوص.', reqPlan: 'Free', isComingSoon: true },
  { id: 'pdf-to-word', nameAr: 'PDF لـ Word', nameEn: 'PDF to Word', icon: '📝', color: 'from-emerald-500 to-teal-600', neon: '#10b981', descAr: 'تحويل لوورد.', reqPlan: 'Free' },
  { id: 'img-to-pdf', nameAr: 'صور لـ PDF', nameEn: 'Images to PDF', icon: '🖼️', color: 'from-orange-500 to-red-600', neon: '#ef4444', descAr: 'تحويل لـ PDF.', reqPlan: 'Free' },
  { id: 'pdf-to-img', nameAr: 'PDF لـ صور', nameEn: 'PDF to Images', icon: '📸', color: 'from-yellow-400 to-orange-500', neon: '#f59e0b', descAr: 'تحويل لصور.', reqPlan: 'Free' },
  { id: 'merge-pdf', nameAr: 'دمج ملفات', nameEn: 'Merge PDF', icon: '📑', color: 'from-blue-600 to-indigo-700', neon: '#3b82f6', descAr: 'دمج ملفات.', reqPlan: 'Free' },
  { id: 'compress-pdf', nameAr: 'ضغط الميديا', nameEn: 'Compress Media', icon: '📉', color: 'from-pink-500 to-rose-600', neon: '#f43f5e', descAr: 'ضغط الحجم.', reqPlan: 'Free' },
  { id: 'grayscale-pdf', nameAr: 'توفير حبر', nameEn: 'Grayscale', icon: '🏁', color: 'from-gray-500 to-slate-700', neon: '#64748b', descAr: 'أبيض وأسود.', reqPlan: 'Free' },
  { id: 'delete-pages', nameAr: 'مسح صفحات', nameEn: 'Delete Pages', icon: '✂️', color: 'from-red-500 to-pink-600', neon: '#ec4899', descAr: 'حذف صفحات.', reqPlan: 'Free', inputPlaceholderAr: 'أرقام الصفحات...' },
  { id: 'rotate-pdf', nameAr: 'تدوير الملف', nameEn: 'Rotate PDF', icon: '🔄', color: 'from-yellow-500 to-orange-600', neon: '#f59e0b', descAr: 'تدوير الملف.', reqPlan: 'Free', inputPlaceholderAr: 'الزاوية...' },
  { id: 'security-pdf', nameAr: 'قفل وفك التشفير', nameEn: 'Lock & Unlock', icon: '🔒', color: 'from-purple-600 to-violet-700', neon: '#a78bfa', descAr: 'تشفير الملف.', reqPlan: 'Free', inputPlaceholderAr: 'كلمة السر...' }
];

const PAYPAL_CLIENT_ID = "AQtXECvCPx2nWKmNV23EwUPmNRozM16vxJ2vlBP9IQTKzPtkbwMiKR08fVPjYhHP3xrP9OK93sNbWI--"; 
const API_URL = "https://memosssssss-sabaepdf-backen.hf.space";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [user, setUser] = useState<{email: string, plan: string} | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [view, setView] = useState<'grid' | 'login' | 'tool'>('grid');
  const [activeTool, setActiveTool] = useState(tools[0]);
  const [files, setFiles] = useState<File[]>([]);
  const [extraParam, setExtraParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoveredNeon, setHoveredNeon] = useState('#06b6d4');

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const savedUser = localStorage.getItem('sabae_user');
    if (savedUser) setUser(JSON.parse(savedUser));
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

  const getCurrentUserPlan = () => user?.plan?.trim().toLowerCase() || 'free';
  const isBusinessUser = () => getCurrentUserPlan() === 'business';
  const isProUser = () => getCurrentUserPlan() === 'pro' || getCurrentUserPlan() === 'business'; 

  const resetAndGoBack = () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    setFiles([]); setExtraParam(""); setLoading(false); setProgress(0); setView('grid');
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'signup' && passwordInput !== confirmPasswordInput) return alert(loc.passwordMismatch);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", emailInput);
      formData.append("password", passwordInput);
      const res = await axios.post(`${API_URL}/${authMode}/`, formData);
      setUser(res.data);
      localStorage.setItem('sabae_user', JSON.stringify(res.data));
      setView('grid');
      setPasswordInput(""); setConfirmPasswordInput("");
    } catch (err: any) { alert(err.response?.data?.detail || "خطأ 🚨"); }
    finally { setLoading(false); }
  };

  const handleSignOut = () => {
    setUser(null); localStorage.removeItem('sabae_user'); resetAndGoBack(); setView('login');
  };

  const handleSuccessfulPayment = async (planType: string) => {
    if (!user) return;
    try {
      const formData = new FormData();
      formData.append("email", user.email);
      formData.append("plan", planType);
      await axios.post(`${API_URL}/upgrade/`, formData); 
      const updatedUser = { ...user, plan: planType };
      setUser(updatedUser);
      localStorage.setItem('sabae_user', JSON.stringify(updatedUser)); 
      alert(`🎉 تم التفعيل.`);
      setView('grid');
    } catch (err) { alert("خطأ!"); }
  };

  const handleProcess = async () => {
    if (!activeTool.isPromptOnly && files.length === 0) return alert(loc.alertNoFiles);
    const requiredPlan = activeTool.reqPlan.toLowerCase();
    if (requiredPlan === 'business' && !isBusinessUser()) { alert("تطلب Business 💼"); setView('login'); return; }
    if (requiredPlan === 'pro' && !isProUser()) { alert("تطلب PRO ⚡"); setView('login'); return; }
    
    setLoading(true); setProgress(0);
    abortControllerRef.current = new AbortController();
    const interval = setInterval(() => setProgress(prev => prev < 98 ? prev + 10 : prev), 800);

    const formData = new FormData();
    files.forEach(f => formData.append("files", f));
    formData.append("user_email", user?.email || "guest");
    if (extraParam) formData.append("extra_param", extraParam);

    try {
      const res = await axios.post(`${API_URL}/${activeTool.id}/`, formData, { 
          responseType: 'blob', signal: abortControllerRef.current.signal
      });
      let ext = 'pdf';
      if (['pdf-to-word', 'ai-pdf-translator', 'ai-pdf-editor', 'ai-summarizer'].includes(activeTool.id)) ext = 'docx';
      else if (activeTool.id === 'pdf-to-excel') ext = 'xlsx';
      else if (['bg-remover', 'ai-image-gen', 'image-upscaler'].includes(activeTool.id)) ext = 'png';
      else if (activeTool.id === 'mp4-to-mp3') ext = 'mp3';

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a'); 
      a.href = url; a.download = `SabaePDF_Result.${ext}`; a.click();
    } catch (err: any) {
        let msg = "فشل المعالجة";
        if (err.response?.data instanceof Blob) {
            const text = await err.response.data.text();
            try { msg = JSON.parse(text).detail || text; } catch(e) { msg = text; }
        }
        alert(msg);
    } finally { clearInterval(interval); setLoading(false); setProgress(0); }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#020617] text-white font-sans ${lang === 'ar' ? 'rtl' : 'ltr'} relative overflow-x-hidden`}>
      <div ref={cursorRef} className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] z-[0] opacity-30 pointer-events-none"
        style={{ backgroundColor: hoveredNeon, transform: 'translate(calc(var(--x, -100px) - 50%), calc(var(--y, -100px) - 50%))' }} />

      <nav className="p-4 md:p-6 border-b border-gray-800/50 flex justify-between items-center sticky top-0 bg-[#020617]/70 z-[100] backdrop-blur-xl">
        <h1 className="text-2xl md:text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase cursor-pointer" onClick={resetAndGoBack}>SABAEPDF PRO ⚡</h1>
        <div className="flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="bg-gray-800 px-4 py-2 rounded-full text-xs font-bold capitalize">{getCurrentUserPlan()} 🚀</div>
              <button onClick={handleSignOut} className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full border border-red-500/50 cursor-pointer">🚪</button>
            </div>
          ) : <button onClick={() => setView('login')} className="bg-cyan-600 px-6 py-2 rounded-full font-bold cursor-pointer text-xs md:text-sm">Login / PRO ⚡</button>}
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-gray-800 px-4 py-2 rounded-full text-xs font-bold">{lang === 'ar' ? 'EN' : 'AR'}</button>
        </div>
      </nav>

      <main className="flex-grow max-w-[1400px] w-full mx-auto px-6 py-16 relative z-50">
        {view === 'login' && (
          <div className="max-w-6xl mx-auto text-center">
             <button onClick={resetAndGoBack} className="mb-8 bg-gray-800 px-6 py-3 rounded-2xl border border-gray-700 font-bold">🏠 {loc.browseTools}</button>
             {authMode === 'login' ? (
                 <div className="max-w-md mx-auto bg-gray-900/50 p-10 rounded-[2.5rem] border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
                     <h2 className="text-4xl font-black text-cyan-400 mb-8">{loc.loginHeader}</h2>
                     <form onSubmit={handleAuth} className="flex flex-col gap-5">
                         <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder={loc.emailPlaceholder} required className="bg-gray-950 p-4 rounded-2xl border border-gray-700 text-center font-bold outline-none focus:border-cyan-500" />
                         <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder={loc.passwordPlaceholder} required className="bg-gray-950 p-4 rounded-2xl border border-gray-700 text-center font-bold outline-none focus:border-cyan-500" />
                         <button type="submit" disabled={loading} className="py-4 bg-cyan-600 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all">{loading ? '...' : loc.loginBtn}</button>
                     </form>
                     <button onClick={() => setAuthMode('signup')} className="mt-6 text-gray-400 underline text-sm cursor-pointer">{loc.noAccount}</button>
                 </div>
             ) : (
                 <div className="max-w-md mx-auto bg-gray-900/50 p-10 rounded-[2.5rem] border border-purple-500/30 backdrop-blur-xl shadow-2xl">
                     <h2 className="text-4xl font-black text-purple-400 mb-8">{loc.signupHeader}</h2>
                     <form onSubmit={handleAuth} className="flex flex-col gap-5">
                         <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder={loc.emailPlaceholder} required className="bg-gray-950 p-4 rounded-2xl border border-gray-700 text-center font-bold outline-none focus:border-purple-500" />
                         <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder={loc.passwordPlaceholder} required className="bg-gray-950 p-4 rounded-2xl border border-gray-700 text-center font-bold outline-none focus:border-purple-500" />
                         <input type="password" value={confirmPasswordInput} onChange={(e) => setConfirmPasswordInput(e.target.value)} placeholder="Confirm Password" required className="bg-gray-950 p-4 rounded-2xl border border-gray-700 text-center font-bold outline-none focus:border-purple-500" />
                         <button type="submit" disabled={loading} className="py-4 bg-purple-600 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all">{loading ? '...' : loc.signupBtn}</button>
                     </form>
                     <button onClick={() => setAuthMode('login')} className="mt-6 text-gray-400 underline text-sm cursor-pointer">{loc.hasAccount}</button>
                 </div>
             )}
          </div>
        )}

        {view === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="col-span-full text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">{loc.title}</h1>
              <p className="text-gray-400 text-lg md:text-xl font-bold">{loc.subtitle}</p>
            </div>
            {tools.map((tool) => (
              <div key={tool.id} onClick={() => { setActiveTool(tool as any); setView('tool'); }}
                onMouseEnter={() => setHoveredNeon(tool.neon)}
                className="group p-8 rounded-[2.5rem] bg-gray-900/40 border-2 border-gray-800 hover:border-cyan-500 transition-all cursor-pointer flex flex-col items-center gap-5 backdrop-blur-md relative overflow-hidden">
                {tool.reqPlan !== 'Free' && (
                    <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-500 text-[10px] font-black py-1 px-2 rounded-full border border-yellow-500/30">
                        {tool.reqPlan} 🔒
                    </div>
                )}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>{tool.icon}</div>
                <h3 className="text-xl font-black text-center">{lang === 'ar' ? tool.nameAr : tool.nameEn}</h3>
              </div>
            ))}
          </div>
        )}

        {view === 'tool' && (
          <div className="max-w-3xl mx-auto bg-gray-900/60 p-12 rounded-[3rem] border-2 border-gray-800 text-center backdrop-blur-xl">
             <div className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${activeTool.color} flex items-center justify-center text-5xl mx-auto mb-6`}>{activeTool.icon}</div>
             <h2 className="text-4xl font-black mb-10">{lang === 'ar' ? activeTool.nameAr : activeTool.nameEn}</h2>
             
             {activeTool.isComingSoon ? (
                 <div className="p-10 bg-gray-950/50 rounded-3xl border border-dashed border-gray-700 text-gray-400">قريباً جداً 🚀</div>
             ) : (
                <>
                 <div className="relative border-2 border-dashed border-gray-700 rounded-3xl p-10 mb-8 bg-black/20 group hover:border-cyan-500 transition-all">
                    {files.length === 0 ? (
                        <>
                        <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                        <p className="text-xl font-bold text-gray-500 group-hover:text-cyan-400">{loc.uploadPrompt}</p>
                        </>
                    ) : (
                        <div className="flex flex-wrap gap-4 justify-center">
                            {files.map((f, i) => <div key={i} className="bg-gray-800 p-3 rounded-xl text-xs font-bold border border-cyan-900">{f.name.slice(0,10)}...</div>)}
                            <button onClick={() => setFiles([])} className="text-red-500 font-bold block w-full mt-4">× مسح الكل</button>
                        </div>
                    )}
                 </div>
                 {activeTool.inputPlaceholderAr && (
                     <textarea value={extraParam} onChange={(e) => setExtraParam(e.target.value)} placeholder={lang === 'ar' ? activeTool.inputPlaceholderAr : "Type here..."} className="w-full bg-gray-950 p-6 rounded-2xl border-2 border-gray-800 mb-8 text-center font-bold focus:border-cyan-500 outline-none" />
                 )}
                 <div className="flex gap-4">
                     <button onClick={resetAndGoBack} className="flex-1 py-4 bg-gray-800 rounded-2xl font-black text-xl">{loc.back}</button>
                     <button onClick={handleProcess} disabled={loading} className="flex-[2] py-4 bg-cyan-600 rounded-2xl font-black text-2xl shadow-xl hover:scale-[1.02] transition-all relative overflow-hidden">
                         {loading ? `${progress}%` : loc.process}
                         {loading && <div className="absolute left-0 top-0 h-full bg-white/20 transition-all duration-500" style={{width: `${progress}%`}} />}
                     </button>
                 </div>
                </>
             )}
          </div>
        )}
      </main>
    </div>
  );
}
