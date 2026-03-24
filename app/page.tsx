"use client";
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const t = {
  ar: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "منصة ذكية للتعامل مع كل ملفاتك", 
    uploadPrompt: "اسحب أو اضغط لرفع الملفات هنا", 
    back: "عودة للأدوات 🔙", 
    process: "ابدأ الآن ⚡", 
    processing: "...جاري التنفيذ", 
    finalizing: "...جاري اللمسات الأخيرة (انتظر قليلاً)",
    alertNoFiles: "ارفع ملفاتك الأول يا بطل!",
    alertNoPrompt: "اكتب وصف خيالك الأول يا بطل عشان الـ AI يشتغل! ✨",
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
    browseTools: "العودة للموقع الأساسي 🏠",
    freeFeatures: ["✅ دمج، ضغط، وتدوير الملفات", "✅ عمليات غير محدودة يومياً ∞", "❌ مقفول: التشفير واستخراج الصوت", "❌ مقفول: أدوات الذكاء الاصطناعي (AI)"],
    proFeatures: ["✅ كل مميزات المجاني (لا نهائي)", "✅ تلخيص وتفريغ صوتي (AI) 🎙️", "✅ تحسين جودة الصور 4K ✨", "✅ إزالة العلامات المائية والخلفيات 💧", "✅ توليد صور بالذكاء الاصطناعي 🎨"],
    unlimited: "متاح لك عدد لا نهائي من العمليات ∞",
    proUnlimited: "عمليات غير محدودة 🚀",
    loginRequired: "سجل دخولك أو رقي حسابك عشان تستخدم الأداة 🔒",
    comingSoonTitle: "قريباً جداً! 🚀",
    comingSoonText: "عذراً يا بطل! هذه الأداة تتطلب خوادم فائقة السرعة (GPU) وجاري العمل على توفيرها لتكون متاحة قريباً جداً في المنصة.",
    footerDesc: "منصتك الأولى للتعامل مع الملفات بذكاء وسرعة.",
    contactUs: "تواصل معنا",
    terms: "شروط الخدمة",
    privacy: "سياسة الخصوصية",
    rights: "جميع الحقوق محفوظة © 2026 SABAEPDF PRO",
    closeBtn: "إغلاق ❌",
    termsTitle: "شروط الخدمة 📜",
    termsText: "1. الاستخدام: تقدم منصة SABAEPDF PRO أدوات مجانية ومدفوعة لتعديل الملفات.\n2. الحماية: نحن لا نحتفظ بملفاتك على خوادمنا، يتم حذفها فوراً بعد اكتمال المعالجة.\n3. المدفوعات: اشتراك الـ PRO يمنحك وصولاً غير محدود لكل الأدوات، ولا يمكن استرداد المبلغ بعد تفعيل الاشتراك.\n4. المسؤولية: المنصة غير مسؤولة عن محتوى الملفات التي تقوم برفعها.",
    privacyTitle: "سياسة الخصوصية 🔒",
    privacyText: "خصوصيتك تهمنا ومحفوظة تماماً في SABAEPDF PRO.\n\n- أمان الملفات: جميع الملفات التي تقوم برفعها يتم تشفيرها أثناء النقل، ويتم حذفها بشكل تلقائي ونهائي من خوادمنا بمجرد انتهاء المعالجة وتنزيلك للملف.\n- البيانات الشخصية: نحن لا نبيع أو نشارك بريدك الإلكتروني أو بيانات الدفع الخاصة بك مع أي طرف ثالث.\n- نحن نستخدم أحدث تقنيات التشفير لضمان سرية معلوماتك وملفاتك."
  },
  en: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "Smart platform for all your files", 
    uploadPrompt: "Drag or click to upload files here", 
    back: "Back to Tools 🔙", 
    process: "Start Now ⚡", 
    processing: "Processing...", 
    finalizing: "Finalizing... (Please wait)",
    alertNoFiles: "Upload your files first!",
    alertNoPrompt: "Enter your prompt first for the AI to work! ✨",
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
    browseTools: "Back to Main Site 🏠",
    freeFeatures: ["✅ Merge, Compress, Rotate", "✅ Unlimited daily operations ∞", "❌ Locked: Encrypt & Audio", "❌ Locked: AI Tools"],
    proFeatures: ["✅ All Free features (Unlimited)", "✅ AI Summarize & Transcribe 🎙️", "✅ 4K Image Upscaler ✨", "✅ Remove Watermarks & BG 💧", "✅ AI Image Generation 🎨"],
    unlimited: "Unlimited operations available ∞",
    proUnlimited: "Unlimited Pro operations 🚀",
    loginRequired: "Login or upgrade to use this tool 🔒",
    comingSoonTitle: "Coming Soon! 🚀",
    comingSoonText: "Sorry hero! This tool requires extremely powerful GPU servers. We are currently preparing them and the tool will be available very soon.",
    footerDesc: "Your premier platform for smart and fast file handling.",
    contactUs: "Contact Us",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    rights: "All Rights Reserved © 2026 SABAEPDF PRO",
    closeBtn: "Close ❌",
    termsTitle: "Terms of Service 📜",
    termsText: "1. Usage: SABAEPDF PRO offers free and paid tools for file manipulation.\n2. Security: We do not store your files on our servers; they are deleted immediately after processing.\n3. Payments: The PRO subscription grants unlimited access to all tools and is non-refundable once activated.\n4. Liability: The platform is not responsible for the content of the files you upload.",
    privacyTitle: "Privacy Policy 🔒",
    privacyText: "Your privacy matters and is fully protected at SABAEPDF PRO.\n\n- File Security: All uploaded files are encrypted during transit and are automatically and permanently deleted from our servers once processing is complete.\n- Personal Data: We do not sell or share your email or payment details with any third party.\n- We use the latest encryption technologies to ensure the confidentiality of your information."
  }
};

const tools = [
  // الأدوات الجديدة (AI Premium) 🔥 - لاحظ اضافة isComingSoon للادوات التقيلة
  { id: 'ai-summarizer', nameAr: 'تلخيص PDF (AI)', nameEn: 'AI Summarizer', icon: '🧠', color: 'from-indigo-600 to-blue-800', neon: '#4f46e5', descAr: 'لخص 100 صفحة في ثواني.', isPro: true },
  { id: 'audio-transcription', nameAr: 'تفريغ الصوت (AI)', nameEn: 'Transcription', icon: '🎙️', color: 'from-emerald-500 to-green-700', neon: '#10b981', descAr: 'تحويل الصوت/الفيديو لملف PDF.', isPro: true },
  { id: 'image-upscaler', nameAr: 'تكبير الصور (4K)', nameEn: 'Image Upscaler', icon: '🪄', color: 'from-orange-500 to-red-600', neon: '#f97316', descAr: 'تحسين جودة الصور الضعيفة.', isPro: true },
  { id: 'watermark-remover', nameAr: 'مسح العلامة المائية', nameEn: 'Watermark Remover', icon: '💧', color: 'from-cyan-500 to-teal-600', neon: '#06b6d4', descAr: 'إزالة الشعارات من الصور.', isPro: true, isComingSoon: true },
  { id: 'ai-image-gen', nameAr: 'توليد صور (AI)', nameEn: 'AI Image Gen', icon: '🎨', color: 'from-indigo-500 to-purple-600', neon: '#8b5cf6', descAr: 'توليد صور بالوصف.', isPro: true, isPromptOnly: true, inputPlaceholderAr: 'اكتب وصف للصورة (يفضل باللغة الإنجليزية)...' },
  { id: 'ai-video-gen', nameAr: 'توليد فيديو (AI)', nameEn: 'AI Video Gen', icon: '🎬', color: 'from-red-600 to-rose-800', neon: '#e11d48', descAr: 'توليد فيديو بالوصف.', isPro: true, isPromptOnly: true, inputPlaceholderAr: 'اكتب وصف للفيديو (يفضل باللغة الإنجليزية)...', isComingSoon: true },
  
  // الأدوات الأساسية 🛠️
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

const PAYPAL_CLIENT_ID = "AQtXECvCPx2nWKmNV23EwUPmNRozM16vxJ2vlBP9IQTKzPtkbwMiKR08fVPjYhHP3xrP9OK93sNbWI--"; 
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
  const [modalContent, setModalContent] = useState<'terms' | 'privacy' | null>(null);

  // 👈 الدرع الجديد: متحكم الإلغاء
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const savedUser = localStorage.getItem('sabae_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
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

  // 👈 دالة العودة وتصفير كل حاجة وقتل التحميل
  const resetAndGoBack = () => {
    if (abortControllerRef.current) {
        abortControllerRef.current.abort(); // بيوقف أي طلب بيحمل في الخلفية
        abortControllerRef.current = null;
    }
    setFiles([]);
    setExtraParam("");
    setLoading(false);
    setProgress(0);
    setView('grid');
  };

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
      
      const userData = res.data;
      setUser(userData);
      localStorage.setItem('sabae_user', JSON.stringify(userData)); 
      
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
    localStorage.removeItem('sabae_user');
    resetAndGoBack();
    setView('login');
  };

  const handleSuccessfulPayment = async () => {
    if (!user) return;
    try {
      const formData = new FormData();
      formData.append("email", user.email);
      await axios.post(`${API_URL}/upgrade/`, formData);
      
      const updatedUser = { ...user, plan: 'PRO' };
      setUser(updatedUser);
      localStorage.setItem('sabae_user', JSON.stringify(updatedUser)); 
      
      alert("🎉 مبروك يا هندسة! تم الدفع بنجاح.");
      setView('grid');
    } catch (err) {
      alert("تم الدفع بس حصلت مشكلة في التفعيل!");
    }
  };

  const getAcceptTypes = () => {
    if (activeTool.id === 'rotate-pdf') return '.pdf, image/*';
    if (['img-to-pdf', 'bg-remover', 'image-upscaler', 'watermark-remover'].includes(activeTool.id)) return 'image/*';
    if (['mp4-to-mp3', 'audio-transcription'].includes(activeTool.id)) return 'video/*, audio/*';
    if (activeTool.id === 'ai-summarizer') return '.pdf';
    return '.pdf, image/*, video/*';
  };

  const handleProcess = async () => {
    if (!activeTool.isPromptOnly && files.length === 0) return alert(loc.alertNoFiles);
    if (activeTool.isPromptOnly && !extraParam.trim()) return alert(loc.alertNoPrompt);

    if (!user || (activeTool.isPro && user.plan !== 'PRO')) {
        alert("هذه الأداة للمحترفين فقط 🔒");
        setView('login');
        return;
    }
    
    setLoading(true);
    setProgress(0);
    
    // إنشاء متحكم الإلغاء للعملية دي
    abortControllerRef.current = new AbortController();
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return prev;
        if (prev > 85) return prev + 1; 
        if (prev > 50) return prev + 5; 
        return prev + 10; 
      });
    }, 800);

    const formData = new FormData();
    if (!activeTool.isPromptOnly) {
      files.forEach(f => formData.append("files", f));
    }
    formData.append("user_email", user.email);
    if (extraParam) formData.append("extra_param", extraParam);

    try {
      const res = await axios.post(`${API_URL}/${activeTool.id}/`, formData, { 
          responseType: 'blob', 
          timeout: 300000,
          signal: abortControllerRef.current.signal // 👈 ربط الطلب بمتحكم الإلغاء
      });
      setProgress(100);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      
      let ext = 'pdf'; 
      const cType = res.headers['content-type'] || '';
      
      if (activeTool.id === 'pdf-to-word') ext = 'docx';
      else if (activeTool.id === 'pdf-to-excel') ext = 'xlsx';
      else if (['bg-remover', 'ai-image-gen', 'image-upscaler', 'watermark-remover'].includes(activeTool.id)) ext = 'png'; 
      else if (activeTool.id === 'mp4-to-mp3') ext = 'mp3';
      else if (activeTool.id === 'ai-video-gen') ext = 'mp4';
      else if (['audio-transcription', 'ai-summarizer'].includes(activeTool.id)) ext = 'pdf'; 
      else if (activeTool.id === 'pdf-to-img') {
          ext = cType.includes('zip') ? 'zip' : 'png';
      }
      else if (activeTool.id === 'compress-pdf') {
          if (cType.includes('zip')) ext = 'zip';
          else if (cType.includes('mp4')) ext = 'mp4';
          else if (cType.includes('jpeg')) ext = 'jpg';
          else if (cType.includes('png')) ext = 'png';
          else ext = files.length === 1 && files[0] ? (files[0].name.split('.').pop() || 'zip') : 'zip';
      }
      else if (['grayscale-pdf', 'rotate-pdf', 'security-pdf'].includes(activeTool.id)) {
          if (cType.includes('jpeg')) ext = 'jpg';
          else if (cType.includes('png')) ext = 'png';
          else ext = 'pdf';
      }

      let finalFileName = "Processed_File";
      if (files.length > 0) {
          const originalName = files[0].name;
          const lastDot = originalName.lastIndexOf('.');
          finalFileName = lastDot !== -1 ? originalName.substring(0, lastDot) : originalName;
      } else if (activeTool.isPromptOnly && extraParam) {
          finalFileName = extraParam.substring(0, 20).replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_') || "AI_Generated";
      }

      const a = document.createElement('a'); 
      a.href = url; 
      a.download = `${finalFileName}.${ext}`; 
      a.click();
    } catch (err: any) {
        // 👈 لو المستخدم هو اللي لغى العملية وداس عودة، منتطلعش رسالة خطأ مزعجة
        if (axios.isCancel(err)) {
            console.log("تم إلغاء العملية بواسطة المستخدم");
            return; 
        }

        console.error("Server Error:", err);
        let errorMsg = err.message || "Unknown Error";
        if (err.response && err.response.data) {
            if (err.response.data instanceof Blob) {
                try {
                    const text = await err.response.data.text();
                    const json = JSON.parse(text);
                    errorMsg = json.detail || text;
                } catch (e) {
                    errorMsg = "مشكلة في السيرفر (ممكن يكون الملف كبير أو السيرفر بيهنج)";
                }
            } else {
                errorMsg = err.response.data.detail || errorMsg;
            }
        }
        alert(lang === 'ar' ? `فشل المعالجة ❌\nالسبب: ${errorMsg}` : `Failed ❌\nReason: ${errorMsg}`);
    } finally {
      clearInterval(interval);
      setTimeout(() => { setLoading(false); setProgress(0); }, 1000);
    }
  };

  const isLocked = !user || (activeTool.isPro && user.plan !== 'PRO');

  return (
    <div className={`min-h-screen flex flex-col bg-[#020617] text-white font-sans ${lang === 'ar' ? 'rtl' : 'ltr'} relative overflow-x-hidden`}>
      <div ref={cursorRef} className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] z-[0] opacity-30 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: view === 'grid' || view === 'login' ? hoveredNeon : activeTool.neon, transform: 'translate(calc(var(--x, -100px) - 50%), calc(var(--y, -100px) - 50%))' }} />

      <nav className="p-4 md:p-6 border-b border-gray-800/50 flex justify-between items-center sticky top-0 bg-[#020617]/70 z-[100] backdrop-blur-xl">
        <h1 className="text-2xl md:text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-wider cursor-pointer hover:scale-105 transition-transform" 
            onClick={resetAndGoBack}>SABAEPDF PRO ⚡</h1>
        
        <div className="flex gap-2 md:gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-2 md:gap-3 mr-2 md:mr-4">
              {user.plan === 'PRO' ? (
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-full text-white font-black text-xs md:text-sm border border-cyan-400/50 shadow-[0_0_15px_rgba(8,145,178,0.4)] flex items-center gap-2">
                  <span>Premium</span> 🚀
                </div>
              ) : (
                <button onClick={() => { resetAndGoBack(); setView('login'); }} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 text-black font-black py-2 px-4 rounded-full transition-all text-xs md:text-sm shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-yellow-300 flex items-center gap-1 cursor-pointer">
                  {lang === 'ar' ? 'الاشتراك Premium' : 'Get Premium'} ⚡
                </button>
              )}
              <button onClick={handleSignOut} className="bg-gray-800/80 hover:bg-red-500/20 text-gray-300 hover:text-red-400 font-bold py-2 px-4 rounded-full transition-all duration-300 border border-gray-600 cursor-pointer">🚪</button>
            </div>
          ) : (
            <button onClick={() => { resetAndGoBack(); setView('login'); }} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-105 text-white font-bold py-2 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)] border border-cyan-500/50 cursor-pointer text-xs md:text-sm">Login / PRO ⚡</button>
          )}
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-gray-800/80 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition-all border border-gray-600 cursor-pointer text-xs md:text-sm">
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>
      </nav>

      <main className="flex-grow max-w-[1400px] w-full mx-auto px-6 py-16 relative z-50">
        {view === 'login' && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
               <button onClick={resetAndGoBack} className="bg-gray-800/50 hover:bg-gray-700 text-white px-6 py-3 rounded-2xl border border-gray-700 font-bold flex items-center gap-2 transition-all hover:-translate-y-1">
                  <span>🏠</span> {loc.browseTools}
               </button>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 italic uppercase">{loc.loginHeader}</h1>
            <p className="text-gray-400 text-xl font-bold mb-12">{authMode === 'login' ? loc.loginSub : loc.signupSub}</p>
            
            {!user ? (
              <>
                <form onSubmit={handleAuth} className="flex flex-col gap-4 max-w-md mx-auto mb-6">
                  <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder={loc.emailPlaceholder} required className="w-full bg-gray-900/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 text-center font-bold" />
                  <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder={loc.passwordPlaceholder} required className="w-full bg-gray-900/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 text-center font-bold" />
                  <button type="submit" disabled={loading} className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:scale-[1.03] transition-all cursor-pointer mt-2">
                    {loading ? '...' : (authMode === 'login' ? loc.loginBtn : loc.signupBtn)}
                  </button>
                </form>
                <button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} className="text-gray-400 hover:text-cyan-400 underline font-bold transition-colors cursor-pointer mb-16">
                  {authMode === 'login' ? loc.noAccount : loc.hasAccount}
                </button>
              </>
            ) : (
              <div className="mb-16 text-cyan-400 font-bold text-xl flex items-center justify-center gap-2">{loc.loggedInAs} {user.email} ✅</div>
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
                <div className="absolute top-6 left-[-40px] bg-cyan-500 text-black font-black py-1 px-12 rotate-[-45deg] text-sm">{loc.recommended}</div>
                <h3 className="text-3xl font-black mb-4 text-cyan-400">{loc.proPlan}</h3>
                <div className="text-5xl font-black mb-6 text-white">5$ <span className="text-lg text-gray-500">{loc.month}</span></div>
                <ul className="space-y-4 mb-8 text-gray-300 font-bold">
                   {loc.proFeatures.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                {(!user || user.plan === 'Free') && (
                  <div className="mt-6">
                    {user ? (
                      <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                        <PayPalButtons style={{ layout: "vertical", color: "blue", shape: "pill" }} createOrder={(data, actions) => actions.order.create({ purchase_units: [{ amount: { value: "5.00" } }] })} onApprove={async (data, actions) => { await actions.order?.capture(); handleSuccessfulPayment(); }} />
                      </PayPalScriptProvider>
                    ) : <button onClick={() => setAuthMode('signup')} className="w-full py-4 bg-gray-700 rounded-xl font-bold hover:bg-gray-600 transition-all">{loc.loginToPay}</button>}
                  </div>
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
              <div key={t.id} onClick={() => { setActiveTool(t as any); setFiles([]); setExtraParam(""); setView('tool'); }} 
                onMouseEnter={() => { setHoveredNeon(t.neon); setHoveredCardId(t.id); }} 
                onMouseLeave={() => { setHoveredNeon('#06b6d4'); setHoveredCardId(null); }}
                style={{ boxShadow: hoveredCardId === t.id ? `0 0 30px ${t.neon}70` : '0 10px 30px rgba(0,0,0,0.3)', borderColor: hoveredCardId === t.id ? t.neon : 'rgba(31, 41, 55, 0.8)' }}
                className={`group p-8 rounded-[2.5rem] bg-gray-900/40 transition-all duration-500 hover:-translate-y-3 flex flex-col items-center gap-5 cursor-pointer backdrop-blur-md border-2 overflow-hidden relative`}>
                {t.isPro && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-black py-1 px-3 rounded-full z-20 flex items-center gap-1">
                        {(!user || user.plan !== 'PRO') && <span>🔒</span>} PRO
                    </div>
                )}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${t.color} flex items-center justify-center text-4xl transform group-hover:rotate-12 transition-all duration-500 z-10`}>{t.icon}</div>
                
                <h3 className="text-2xl font-black text-white z-10 leading-snug">
                  {lang === 'ar' && t.nameAr.includes(' لـ ') ? (
                    <>
                      {t.nameAr.split(' لـ ')[0]} لـ <br/>
                      <span className="text-cyan-400">{t.nameAr.split(' لـ ')[1]}</span>
                    </>
                  ) : (
                    lang === 'ar' ? t.nameAr : t.nameEn
                  )}
                </h3>

              </div>
            ))}
          </div>
        )}

        {view === 'tool' && (
          <div className="max-w-4xl mx-auto bg-gray-900/60 border-2 border-gray-800/80 rounded-[3rem] p-12 shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-xl text-center relative overflow-hidden">
            <div className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${activeTool.color} flex items-center justify-center text-6xl mx-auto mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-500`}>{activeTool.icon}</div>
            
            <h2 className="text-5xl font-black text-white mb-4 leading-tight">
              {lang === 'ar' && activeTool.nameAr.includes(' لـ ') ? (
                <>
                  {activeTool.nameAr.split(' لـ ')[0]} لـ <br/>
                  <span className="text-cyan-400">{activeTool.nameAr.split(' لـ ')[1]}</span>
                </>
              ) : (
                lang === 'ar' ? activeTool.nameAr : activeTool.nameEn
              )}
            </h2>
            
            {/* 👈 شاشة "قريباً" للأدوات اللي لسه بتجهز لمنع استهلاك النت والوقت */}
            {(activeTool as any).isComingSoon ? (
                <div className="py-10 px-6 rounded-[2.5rem] bg-gray-900/80 border-2 border-cyan-500/30 backdrop-blur-xl flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(6,182,212,0.1)] mb-6">
                    <div className="text-7xl animate-pulse">🚀</div>
                    <h3 className="text-3xl font-black text-cyan-400">{loc.comingSoonTitle}</h3>
                    <p className="text-gray-300 font-bold max-w-lg text-lg leading-relaxed">
                        {loc.comingSoonText}
                    </p>
                    <button 
                        onClick={resetAndGoBack} 
                        className="mt-6 bg-gray-800 hover:bg-gray-700 text-white font-black py-4 px-10 rounded-2xl text-xl transition-all border border-gray-600 cursor-pointer shadow-lg hover:-translate-y-1"
                    >
                        {loc.back}
                    </button>
                </div>
            ) : isLocked ? (
                <div className="py-10 px-6 rounded-[2.5rem] bg-gray-900/80 border-2 border-yellow-500/30 backdrop-blur-xl flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(234,179,8,0.1)] mb-6">
                    <div className="text-7xl animate-bounce">🔒</div>
                    <h3 className="text-2xl font-black text-yellow-500">ميزة حصرية للمحترفين</h3>
                    <p className="text-gray-400 font-bold max-w-md">
                        {lang === 'ar' 
                            ? "عشان تستخدم الأداة دي، لازم ترقي حسابك لـ SABAEPDF PRO. استمتع بكل الأدوات بدون حدود!" 
                            : "To use this tool, you need to upgrade to SABAEPDF PRO. Enjoy all tools without limits!"}
                    </p>
                    <button 
                        onClick={() => { resetAndGoBack(); setView('login'); }} 
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black py-4 px-10 rounded-2xl text-xl hover:scale-105 transition-all shadow-lg cursor-pointer"
                    >
                        {lang === 'ar' ? "ترقية الآن ⚡" : "Upgrade Now ⚡"}
                    </button>
                    <button onClick={resetAndGoBack} className="text-gray-500 hover:text-white underline font-bold cursor-pointer">{loc.browseTools}</button>
                </div>
            ) : (
                <>
                    <p className="text-gray-400 font-bold mb-10">{user?.plan === 'PRO' ? loc.proUnlimited : loc.unlimited}</p>
                    
                    {activeTool.isPromptOnly ? (
                      <div className="mb-10 relative z-50">
                        <textarea 
                          value={extraParam} 
                          onChange={(e) => setExtraParam(e.target.value)} 
                          placeholder={lang === 'ar' ? activeTool.inputPlaceholderAr : "Enter your prompt here (English is recommended)..."} 
                          className="w-full bg-gray-950/80 border-2 border-dashed border-gray-600 rounded-[2.5rem] p-8 text-2xl text-cyan-400 outline-none focus:border-cyan-500 font-bold min-h-[250px] resize-y text-center transition-all duration-300 shadow-inner" 
                          dir={lang === 'ar' ? 'rtl' : 'ltr'}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="relative border-2 border-dashed border-gray-600/60 rounded-[2.5rem] p-10 mb-10 bg-black/30 min-h-[250px] flex flex-col items-center justify-center hover:border-cyan-500 transition-all duration-300">
                        {files.length === 0 ? (
                            <>
                            <input type="file" multiple accept={getAcceptTypes()} onChange={(e) => setFiles(Array.from(e.target.files || []))} className="absolute inset-0 opacity-0 cursor-pointer z-50 w-full h-full" />
                            <p className="text-2xl font-black text-gray-400 uppercase tracking-tighter">{loc.uploadPrompt}</p>
                            </>
                        ) : (
                            <div className="flex flex-wrap gap-5 justify-center w-full relative z-50 p-4">
                            {files.map((file, idx) => (
                                <div key={idx} className="relative w-36 h-auto min-h-[9rem] rounded-2xl border-2 border-cyan-800 bg-gray-900 flex flex-col items-center justify-center p-3 shadow-2xl transform hover:scale-105 transition-all">
                                  <button onClick={(e) => { e.stopPropagation(); setFiles(files.filter((_, i) => i !== idx)); }} className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-black z-[60] cursor-pointer">×</button>
                                  
                                  {file.type.startsWith('image/') ? (
                                    <img src={URL.createObjectURL(file)} alt="preview" className="w-16 h-16 object-cover rounded-lg mb-2 border border-gray-700" />
                                  ) : (
                                    <div className="text-5xl mb-2">📄</div>
                                  )}
                                  
                                  <div className="text-xs text-cyan-400 w-full text-center break-words px-1 font-bold" dir="ltr" title={file.name}>
                                    {file.name.length > 15 ? file.name.substring(0, 15) + '...' : file.name}
                                  </div>
                                  <div className="text-[10px] text-gray-500 mt-1 font-bold">
                                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                                  </div>
                                </div>
                            ))}
                            <button onClick={() => setFiles([])} className="text-red-500 font-bold w-full mt-6 hover:text-red-400 transition-colors cursor-pointer">{lang === 'ar' ? '× مسح الكل' : '× Clear All'}</button>
                            </div>
                        )}
                        </div>

                        {(activeTool.inputPlaceholderAr) && (
                        <div className="mb-10 relative z-50">
                            <input type="text" value={extraParam} onChange={(e) => setExtraParam(e.target.value)} placeholder={lang === 'ar' ? activeTool.inputPlaceholderAr : activeTool.id} className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 text-center font-bold" />
                        </div>
                        )}
                      </>
                    )}

                    <div className="flex gap-6 relative z-50">
                        <button onClick={resetAndGoBack} className="flex-1 py-5 rounded-2xl bg-gray-800 font-black text-xl hover:bg-gray-700 transition-all cursor-pointer border border-gray-700">{loc.back}</button>
                        <button onClick={handleProcess} disabled={loading} className="flex-[2] py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-cyan-400/50 relative overflow-hidden">
                            {loading ? (
                            <>
                                <span className="relative z-10 text-xl">{progress}% {progress > 90 ? loc.finalizing : loc.processing}</span>
                                <div className="absolute top-0 left-0 h-full bg-white/20 transition-all duration-500" style={{ width: `${progress}%` }} />
                            </>
                            ) : loc.process}
                        </button>
                    </div>
                </>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-gray-800/50 bg-[#020617]/80 backdrop-blur-xl relative z-50 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`text-center ${lang === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
            <h2 className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-wider mb-2">SABAEPDF PRO ⚡</h2>
            <p className="text-gray-400 font-bold text-sm">{loc.footerDesc}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 font-bold text-sm">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamedsabae50@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors cursor-pointer">{loc.contactUs}</a>
            <button onClick={() => setModalContent('terms')} className="hover:text-cyan-400 transition-colors cursor-pointer">{loc.terms}</button>
            <button onClick={() => setModalContent('privacy')} className="hover:text-cyan-400 transition-colors cursor-pointer">{loc.privacy}</button>
          </div>
        </div>
        <div className="border-t border-gray-800/50 py-6 text-center text-gray-500 text-xs font-bold tracking-widest">
          {loc.rights}
        </div>
      </footer>

      {modalContent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-gray-900 border-2 border-cyan-500/50 rounded-[2.5rem] p-8 max-w-2xl w-full text-white relative shadow-[0_0_50px_rgba(6,182,212,0.15)] animate-in fade-in zoom-in duration-300">
            <h2 className="text-3xl font-black text-cyan-400 mb-6">
              {modalContent === 'terms' ? loc.termsTitle : loc.privacyTitle}
            </h2>
            <div className="text-gray-300 font-bold text-lg leading-relaxed whitespace-pre-line bg-gray-950/50 p-6 rounded-2xl border border-gray-800">
              {modalContent === 'terms' ? loc.termsText : loc.privacyText}
            </div>
            <button 
              onClick={() => setModalContent(null)} 
              className="mt-8 w-full py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-black text-xl transition-all cursor-pointer border border-gray-600"
            >
              {loc.closeBtn}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
