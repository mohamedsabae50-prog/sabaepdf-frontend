"use client";
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const t = {
  ar: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "منصة الأعمال الأولى للتعامل مع مستنداتك بذكاء", 
    uploadPrompt: "اسحب أو اضغط لرفع الملفات هنا", 
    back: "عودة للأدوات 🔙", 
    process: "ابدأ الآن ⚡", 
    processing: "...جاري التنفيذ", 
    alertNoFiles: "ارفع ملفاتك الأول يا بطل!",
    loginHeader: "أهلاً بك مجدداً 👋",
    signupHeader: "ابدأ رحلتك الآن 🚀",
    emailPlaceholder: "البريد الإلكتروني",
    passwordPlaceholder: "كلمة السر",
    loginBtn: "دخول ⚡",
    signupBtn: "إنشاء حساب 🚀",
    noAccount: "ليس لديك حساب؟",
    hasAccount: "لديك حساب بالفعل؟"
  },
  en: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "The premier business platform", 
    uploadPrompt: "Drag or click to upload files", 
    back: "Back 🔙", 
    process: "Process Now ⚡", 
    processing: "Processing...", 
    alertNoFiles: "Upload files first!",
    loginHeader: "Welcome Back 👋",
    signupHeader: "Join Now 🚀",
    emailPlaceholder: "Email Address",
    passwordPlaceholder: "Password",
    loginBtn: "Login ⚡",
    signupBtn: "Sign Up 🚀",
    noAccount: "No account?",
    hasAccount: "Have account?"
  }
};

const tools = [
  { id: 'ai-pdf-translator', nameAr: 'ترجمة ذكية (AI)', icon: '🌍', color: 'from-blue-600 to-indigo-900', neon: '#3b82f6', reqPlan: 'Business' },
  { id: 'ai-summarizer', nameAr: 'تلخيص PDF (AI)', icon: '🧠', color: 'from-indigo-600 to-blue-800', neon: '#4f46e5', reqPlan: 'PRO' },
  { id: 'pdf-to-word', nameAr: 'PDF لـ Word', icon: '📝', color: 'from-emerald-500 to-teal-600', neon: '#10b981', reqPlan: 'Free' },
  { id: 'img-to-pdf', nameAr: 'صور لـ PDF', icon: '🖼️', color: 'from-orange-500 to-red-600', neon: '#ef4444', reqPlan: 'Free' },
  { id: 'pdf-to-img', nameAr: 'PDF لـ صور', icon: '📸', color: 'from-yellow-400 to-orange-500', neon: '#f59e0b', reqPlan: 'Free' },
  { id: 'merge-pdf', nameAr: 'دمج ملفات', icon: '📑', color: 'from-blue-600 to-indigo-700', neon: '#3b82f6', reqPlan: 'Free' }
];

const API_URL = "https://memosssssss-sabaepdf-backen.hf.space";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [user, setUser] = useState<{email: string, plan: string} | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [view, setView] = useState<'grid' | 'login' | 'tool'>('grid');
  const [activeTool, setActiveTool] = useState(tools[0]);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('sabae_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  if (!isMounted) return null;
  const loc = t[lang];

  const handleProcess = async () => {
    if (files.length === 0) return alert(loc.alertNoFiles);
    setLoading(true); setProgress(0);
    const interval = setInterval(() => setProgress(p => p < 98 ? p + 10 : p), 800);

    const formData = new FormData();
    files.forEach(f => formData.append("files", f));
    formData.append("user_email", user?.email || "guest");

    try {
      const res = await axios.post(`${API_URL}/${activeTool.id}/`, formData, { responseType: 'blob' });
      
      // السحر هنا: تحديد صيغة الملف بناءً على الأداة
      let ext = 'pdf';
      if (['pdf-to-word', 'ai-pdf-translator', 'ai-summarizer'].includes(activeTool.id)) ext = 'docx';
      else if (activeTool.id === 'pdf-to-img') ext = 'zip';

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement('a'); 
      a.href = url; a.download = `SabaePDF_Result.${ext}`; a.click();
    } catch (err: any) {
        alert("خطأ في السيرفر! تأكد من رفع الملف بالكامل.");
    } finally { clearInterval(interval); setLoading(false); setProgress(0); }
  };

  return (
    <div className={`min-h-screen bg-[#020617] text-white font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <nav className="p-6 border-b border-gray-800 flex justify-between items-center backdrop-blur-xl sticky top-0 z-[100]">
        <h1 className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer" onClick={() => setView('grid')}>SABAEPDF PRO ⚡</h1>
        <div className="flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-xs font-bold capitalize">{user.plan} 🚀</span>
              <button onClick={() => { setUser(null); localStorage.removeItem('sabae_user'); setView('login'); }} className="text-red-400 font-bold">🚪</button>
            </div>
          ) : <button onClick={() => setView('login')} className="bg-cyan-600 px-6 py-2 rounded-full font-bold">Login</button>}
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-gray-800 px-4 py-1 rounded-lg text-xs">{lang === 'ar' ? 'EN' : 'AR'}</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8 py-16">
        {view === 'login' && (
          <div className="max-w-md mx-auto bg-gray-900/50 p-10 rounded-[2.5rem] border border-cyan-500/30 text-center shadow-2xl">
            <h2 className="text-4xl font-black text-cyan-400 mb-8">{authMode === 'login' ? loc.loginHeader : loc.signupHeader}</h2>
            <form className="flex flex-col gap-5">
              <input type="email" placeholder={loc.emailPlaceholder} className="bg-gray-950 p-4 rounded-2xl border border-gray-700 text-center font-bold outline-none focus:border-cyan-500" />
              <input type="password" placeholder={loc.passwordPlaceholder} className="bg-gray-950 p-4 rounded-2xl border border-gray-700 text-center font-bold outline-none focus:border-cyan-500" />
              <button type="button" onClick={() => { setUser({email: 'guest@sabae.com', plan: 'Business'}); setView('grid'); }} className="py-4 bg-cyan-600 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all">دخول سريع ⚡</button>
            </form>
            <button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} className="mt-6 text-gray-400 underline text-sm">{authMode === 'login' ? loc.noAccount : loc.hasAccount}</button>
          </div>
        )}

        {view === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="col-span-full mb-12">
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">{loc.title}</h1>
              <p className="text-gray-400 text-xl font-bold opacity-80">{loc.subtitle}</p>
            </div>
            {tools.map(tool => (
              <div key={tool.id} onClick={() => { setActiveTool(tool); setView('tool'); }} className="group p-10 rounded-[2.5rem] bg-gray-900/40 border-2 border-gray-800 hover:border-cyan-500 transition-all cursor-pointer flex flex-col items-center gap-6 relative overflow-hidden backdrop-blur-md">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-4xl shadow-xl group-hover:rotate-12 transition-transform`}>{tool.icon}</div>
                <h3 className="text-2xl font-black">{tool.nameAr}</h3>
                {tool.reqPlan !== 'Free' && <span className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-500 text-[10px] font-black px-2 py-1 rounded-full border border-yellow-500/30">{tool.reqPlan} 🔒</span>}
              </div>
            ))}
          </div>
        )}

        {view === 'tool' && (
          <div className="max-w-3xl mx-auto bg-gray-900/70 p-12 rounded-[3rem] border-2 border-gray-800 text-center shadow-2xl relative overflow-hidden">
             <div className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${activeTool.color} flex items-center justify-center text-5xl mx-auto mb-6 shadow-2xl transform hover:scale-110 transition-transform`}>{activeTool.icon}</div>
             <h2 className="text-4xl font-black mb-10 text-white">{activeTool.nameAr}</h2>
             <div className="relative border-2 border-dashed border-gray-700 rounded-3xl p-12 mb-8 bg-black/30 group hover:border-cyan-500 transition-all cursor-pointer">
                {files.length === 0 ? (
                    <>
                    <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                    <p className="text-xl font-bold text-gray-500 group-hover:text-cyan-400 transition-colors uppercase tracking-widest">{loc.uploadPrompt}</p>
                    </>
                ) : (
                    <div className="flex flex-wrap gap-4 justify-center">
                        {files.map((f, i) => <div key={i} className="bg-gray-800 p-4 rounded-2xl text-xs font-black border border-cyan-900 shadow-inner">{f.name.slice(0,12)}...</div>)}
                        <button onClick={() => setFiles([])} className="text-red-500 font-black block w-full mt-6 hover:text-red-400 uppercase transition-colors">× مسح الكل</button>
                    </div>
                )}
             </div>
             <div className="flex gap-4">
                 <button onClick={() => setView('grid')} className="flex-1 py-5 bg-gray-800 rounded-2xl font-black text-xl hover:bg-gray-700 transition-all border border-gray-700 shadow-lg">{loc.back}</button>
                 <button onClick={handleProcess} disabled={loading} className="flex-[2] py-5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl font-black text-2xl shadow-2xl hover:scale-[1.02] transition-all relative overflow-hidden">
                     {loading ? <span className="relative z-10">{progress}% {loc.processing}</span> : loc.process}
                     {loading && <div className="absolute left-0 top-0 h-full bg-white/20 transition-all duration-500" style={{width: `${progress}%`}} />}
                 </button>
             </div>
          </div>
        )}
      </main>
    </div>
  );
}
