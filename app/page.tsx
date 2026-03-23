"use client";
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const t = {
  ar: { title: "SABAEPDF PRO ⚡", subtitle: "منصة ذكية للتعامل مع كل ملفاتك", uploadPrompt: "اسحب أو اضغط لرفع الملفات هنا", back: "عودة", process: "ابدأ الآن ⚡", processing: "...جاري التنفيذ", alertNoFiles: "ارفع ملفاتك الأول يا بطل!" },
  en: { title: "SABAEPDF PRO ⚡", subtitle: "Smart platform for all your files", uploadPrompt: "Drag or click to upload files here", back: "Back", process: "Start Now ⚡", processing: "Processing...", alertNoFiles: "Upload your files first!" }
};

const tools = [
  { id: 'pdf-to-word', nameAr: 'PDF لـ Word', nameEn: 'PDF to Word', icon: '📝', color: 'from-emerald-500 to-teal-600', neon: '#10b981', descAr: 'تحويل الملف لنص قابل للتعديل.', isPro: false },
  { id: 'img-to-pdf', nameAr: 'صور لـ PDF', nameEn: 'Images to PDF', icon: '🖼️', color: 'from-orange-500 to-red-600', neon: '#ef4444', descAr: 'تحويل الصور إلى مستندات PDF.', isPro: false },
  { id: 'merge-pdf', nameAr: 'دمج ملفات', nameEn: 'Merge PDF', icon: '📑', color: 'from-blue-600 to-indigo-700', neon: '#3b82f6', descAr: 'دمج عدة ملفات في مستند واحد.', isPro: false },
  { id: 'pdf-to-img', nameAr: 'PDF لـ صور', nameEn: 'PDF to Images', icon: '📸', color: 'from-yellow-400 to-orange-500', neon: '#f59e0b', descAr: 'تحويل صفحات الـ PDF لصور.', isPro: false },
  { id: 'compress-pdf', nameAr: 'ضغط الميديا', nameEn: 'Compress Media', icon: '📉', color: 'from-pink-500 to-rose-600', neon: '#f43f5e', descAr: 'ضغط حجم الصور والفيديوهات.', isPro: false },
  { id: 'mp4-to-mp3', nameAr: 'استخراج الصوت', nameEn: 'MP4 to MP3', icon: '🎧', color: 'from-cyan-500 to-blue-600', neon: '#06b6d4', descAr: 'فصل الصوت كملف MP3.', isPro: true },
  { id: 'bg-remover', nameAr: 'إزالة الخلفية (AI)', nameEn: 'Remove BG', icon: '✨', color: 'from-fuchsia-500 to-purple-600', neon: '#d946ef', descAr: 'مسح الخلفية بالذكاء الاصطناعي.', isPro: true },
  { id: 'pdf-to-excel', nameAr: 'PDF لـ Excel (AI)', nameEn: 'PDF to Excel', icon: '📊', color: 'from-green-600 to-emerald-800', neon: '#059669', descAr: 'استخراج الجداول بدقة عالية.', isPro: true },
  { id: 'grayscale-pdf', nameAr: 'توفير حبر', nameEn: 'Grayscale', icon: '🏁', color: 'from-gray-500 to-slate-700', neon: '#64748b', descAr: 'تحويل لأبيض وأسود.', isPro: false },
  { id: 'delete-pages', nameAr: 'مسح صفحات', nameEn: 'Delete Pages', icon: '✂️', color: 'from-red-500 to-pink-600', neon: '#ec4899', descAr: 'حذف صفحات من الملف.', isPro: false, inputPlaceholderAr: 'أرقام الصفحات (1, 3)' },
  { id: 'rotate-pdf', nameAr: 'تدوير الملف', nameEn: 'Rotate PDF', icon: '🔄', color: 'from-yellow-500 to-orange-600', neon: '#f59e0b', descAr: 'تدوير الصفحات أو الصور.', isPro: false, inputPlaceholderAr: 'الزاوية (90, 180)' },
  { id: 'security-pdf', nameAr: 'قفل وفك التشفير', nameEn: 'Lock & Unlock', icon: '🔒', color: 'from-purple-600 to-violet-700', neon: '#a78bfa', descAr: 'تشفير أو فك الحماية.', isPro: true, inputPlaceholderAr: 'اكتب كلمة السر' }
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
    if (!emailInput || !passwordInput) return alert("اكتب الإيميل والباسورد يا بطل!");
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
        alert(err.response?.data?.detail || "Error 🚨");
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
      alert("🎉 مبروك يا هندسة! تم الدفع بنجاح.");
      setView('grid');
    } catch (err) {
      alert("تم الدفع بس حصلت مشكلة في التفعيل!");
    }
  };

  const getAcceptTypes = () => {
    if (activeTool.id === 'rotate-pdf') return '.pdf, image/*';
    if (activeTool.id === 'img-to-pdf') return 'image/*';
    if (activeTool.id === 'bg-remover') return 'image/*';
    if (activeTool.id === 'mp4-to-mp3') return 'video/*';
    return '.pdf, image/*, video/*';
  };

  const handleProcess = async () => {
    if (files.length === 0) return alert(loc.alertNoFiles);
    if (!user) { alert("لازم تسجل دخول الأول 🔒"); setView('login'); return; }
    
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
      
      let ext = 'pdf';
      const cType = res.headers['content-type'];
      if (activeTool.id === 'pdf-to-word') ext = 'docx';
      else if (activeTool.id === 'bg-remover') ext = 'png';
      else if (activeTool.id === 'mp4-to-mp3') ext = 'mp3';

      const a = document.createElement('a'); a.href = url; a.download = `Sabae_${activeTool.id}.${ext}`; a.click();
   } catch (err: any) {
      // 👈 هنا بنشوف لو السيرفر بعت رسالة خطأ محددة (زي رسالة الـ PRO)
      if (err.response && err.response.data && err.response.data.detail) {
        alert(err.response.data.detail); 
      } else {
        // لو الخطأ مجهول بنظهر الرسالة القديمة
        alert(lang === 'ar' ? "حدث خطأ أثناء المعالجة ❌" : "Error during processing ❌");
      }
    } finally {
      clearInterval(interval);
      setTimeout(() => { setLoading(false); setProgress(0); }, 1000);
    };

  return (
    <div className={`min-h-screen bg-[#020617] text-white font-sans ${lang === 'ar' ? 'rtl' : 'ltr'} relative overflow-x-hidden`}>
      {/* الـ Cursor السحري رجع */}
      <div ref={cursorRef} className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] z-[0] opacity-30 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: view === 'grid' || view === 'login' ? hoveredNeon : activeTool.neon, transform: 'translate(calc(var(--x, -100px) - 50%), calc(var(--y, -100px) - 50%))' }} />

      <nav className="p-4 md:p-6 border-b border-gray-800/50 flex justify-between items-center sticky top-0 bg-[#020617]/70 z-[100] backdrop-blur-xl">
        <h1 className="text-2xl md:text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-wider cursor-pointer" onClick={() => setView('grid')}>SABAEPDF PRO ⚡</h1>
        <div className="flex gap-2 md:gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-2 md:gap-3 mr-2 md:mr-4">
              {user.plan === 'PRO' ? (
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-full text-white font-black text-xs md:text-sm border border-cyan-400/50 shadow-[0_0_15px_rgba(8,145,178,0.4)] flex items-center gap-2">
                  <span>Premium</span> 🚀
                </div>
              ) : (
                <button onClick={() => setView('login')} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 text-black font-black py-2 px-4 rounded-full transition-all text-xs md:text-sm shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-yellow-300 flex items-center gap-1 cursor-pointer">
                  {lang === 'ar' ? 'الاشتراك Premium' : 'Get Premium'} ⚡
                </button>
              )}
              <button onClick={handleSignOut} className="bg-gray-800/80 hover:bg-red-500/20 text-gray-300 hover:text-red-400 font-bold py-2 px-4 rounded-full transition-all duration-300 border border-gray-600 cursor-pointer">🚪</button>
            </div>
          ) : (
            <button onClick={() => setView('login')} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-105 text-white font-bold py-2 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)] border border-cyan-500/50 cursor-pointer text-xs md:text-sm">Login / PRO ⚡</button>
          )}
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-gray-800/80 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition-all border border-gray-600 cursor-pointer text-xs md:text-sm">
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-16 relative z-50">
        {view === 'login' && (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 italic uppercase">أدوات المحترفين هنا 🔥</h1>
            <p className="text-gray-400 text-xl font-bold mb-12">{authMode === 'login' ? 'سجل دخولك لفتح مساحة العمل' : 'اعمل حساب جديد وانضم لينا'}</p>
            {!user ? (
              <>
                <form onSubmit={handleAuth} className="flex flex-col gap-4 max-w-md mx-auto mb-6">
                  <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="الإيميل" required className="w-full bg-gray-900/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 text-center font-bold" />
                  <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder="كلمة السر" required className="w-full bg-gray-900/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 text-center font-bold" />
                  <button type="submit" disabled={loading} className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:scale-[1.03] transition-all cursor-pointer mt-2">
                    {loading ? '...' : (authMode === 'login' ? 'دخول ⚡' : 'إنشاء حساب 🚀')}
                  </button>
                </form>
                <button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} className="text-gray-400 hover:text-cyan-400 underline font-bold transition-colors cursor-pointer mb-16">
                  {authMode === 'login' ? 'معندكش حساب؟ سجل دلوقتي' : 'عندك حساب بالفعل؟ سجل دخول'}
                </button>
              </>
            ) : (
              <div className="mb-16 text-cyan-400 font-bold text-xl flex items-center justify-center gap-2">أنت مسجل دخول بإيميل: {user.email} ✅</div>
            )}
            {/* رجوع الخطط بتصميمها الأصلي */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right mb-12">
              <div className="p-8 rounded-[2.5rem] bg-gray-900/40 border-2 border-gray-800 backdrop-blur-md">
                <h3 className="text-2xl font-black mb-4">المواطن المجاني 🆓</h3>
                <div className="text-5xl font-black mb-6">0$</div>
                <ul className="space-y-4 mb-8 text-gray-400 font-bold">
                  <li>✅ دمج، ضغط، وتدوير الملفات</li>
                  <li>❌ مقفول: أدوات الذكاء الاصطناعي (AI)</li>
                </ul>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-gray-900/60 border-2 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-6 left-[-40px] bg-cyan-500 text-black font-black py-1 px-12 rotate-[-45deg] text-sm">موصى به</div>
                <h3 className="text-3xl font-black mb-4 text-cyan-400">Sabae PRO ⚡</h3>
                <div className="text-5xl font-black mb-6">5$ <span className="text-lg text-gray-500">/شهر</span></div>
                {user && user.plan === 'Free' && (
                  <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                    <PayPalButtons style={{ layout: "vertical", color: "blue", shape: "pill" }} createOrder={(data, actions) => actions.order.create({ purchase_units: [{ amount: { value: "5.00" } }] })} onApprove={async (data, actions) => { await actions.order?.capture(); handleSuccessfulPayment(); }} />
                  </PayPalScriptProvider>
                )}
              </div>
            </div>
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
                {t.isPro && <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-black py-1 px-3 rounded-full z-20">PRO</div>}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${t.color} flex items-center justify-center text-4xl transform group-hover:rotate-12 transition-all duration-500 z-10`}>{t.icon}</div>
                <h3 className="text-2xl font-black text-white z-10">{lang === 'ar' ? t.nameAr : t.nameEn}</h3>
              </div>
            ))}
          </div>
        )}

        {view === 'tool' && (
          <div className="max-w-4xl mx-auto bg-gray-900/60 border-2 border-gray-800/80 rounded-[3rem] p-12 shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-xl text-center relative overflow-hidden">
            <div className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${activeTool.color} flex items-center justify-center text-6xl mx-auto mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-500`}>{activeTool.icon}</div>
            <h2 className="text-5xl font-black text-white mb-4">{lang === 'ar' ? activeTool.nameAr : activeTool.nameEn}</h2>
            
            <div className="relative border-2 border-dashed border-gray-600/60 rounded-[2.5rem] p-10 mb-10 bg-black/30 min-h-[250px] flex flex-col items-center justify-center hover:border-cyan-500 transition-all duration-300">
              {files.length === 0 ? (
                <>
                  <input type="file" multiple accept={getAcceptTypes()} onChange={(e) => setFiles(Array.from(e.target.files || []))} className="absolute inset-0 opacity-0 cursor-pointer z-50 w-full h-full" />
                  <p className="text-2xl font-black text-gray-400 uppercase tracking-tighter">{loc.uploadPrompt}</p>
                </>
              ) : (
                <div className="flex flex-wrap gap-5 justify-center w-full relative z-50 p-4">
                  {files.map((file, idx) => (
                    <div key={idx} className="relative w-32 h-32 rounded-2xl border-2 border-cyan-800 bg-gray-900 flex flex-col items-center justify-center p-2 shadow-2xl transform hover:scale-105 transition-all">
                      <button onClick={(e) => { e.stopPropagation(); setFiles(files.filter((_, i) => i !== idx)); }} className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-black z-[60] cursor-pointer">×</button>
                      <div className="text-4xl">{file.type.startsWith('image/') ? '🖼️' : '📄'}</div>
                      <div className="text-[10px] text-cyan-400 truncate w-full mt-2" dir="ltr">{file.name}</div>
                    </div>
                  ))}
                  <button onClick={() => setFiles([])} className="text-red-500 font-bold w-full mt-6 hover:text-red-400 transition-colors cursor-pointer">× مسح الكل</button>
                </div>
              )}
            </div>

            {(activeTool.inputPlaceholderAr) && (
              <div className="mb-10 relative z-50">
                <input type="text" value={extraParam} onChange={(e) => setExtraParam(e.target.value)} placeholder={activeTool.inputPlaceholderAr} className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 text-center font-bold" />
              </div>
            )}

            <div className="flex gap-6 relative z-50">
              <button onClick={() => { setFiles([]); setExtraParam(""); setView('grid'); }} className="flex-1 py-5 rounded-2xl bg-gray-800 font-black text-xl hover:bg-gray-700 transition-all cursor-pointer border border-gray-700">عودة</button>
              <button onClick={handleProcess} disabled={loading} className="flex-[2] py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-cyan-400/50 relative overflow-hidden">
                {loading ? (
                  <>
                    <span className="relative z-10">{progress}% {loc.processing}</span>
                    <div className="absolute top-0 left-0 h-full bg-white/20 transition-all duration-500" style={{ width: `${progress}%` }} />
                  </>
                ) : loc.process}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
