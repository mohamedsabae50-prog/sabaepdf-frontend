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
    namePlaceholder: "الاسم بالكامل (اختياري)",
    emailPlaceholder: "البريد الإلكتروني",
    passwordPlaceholder: "كلمة السر",
    confirmPasswordPlaceholder: "تأكيد كلمة السر",
    passwordMismatch: "كلمتا السر غير متطابقتين! ❌",
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
    loginRequired: "سجل دخولك أو رقي حسابك عشان تستخدم الأداة 🔒",
    comingSoonTitle: "قريباً جداً! 🚀",
    comingSoonText: "عذراً يا بطل! هذه الأداة تتطلب واجهة وتجهيزات خاصة، وجاري العمل عليها لتكون متاحة قريباً جداً.",
    footerDesc: "منصتك الأولى للتعامل مع الملفات بذكاء وسرعة.",
    contactUs: "تواصل معنا",
    terms: "شروط الخدمة",
    privacy: "سياسة الخصوصية",
    rights: "جميع الحقوق محفوظة © 2026 SABAEPDF PRO",
    closeBtn: "إغلاق ❌",
    upgradeBtn: "الترقية ⚡",
    sizeLimitAlert: "الملفات كبيرة جداً على الخطة المجانية! 😅 (أقصى حجم 150 ميجا). يرجى تقليل حجم الملفات أو الترقية لباقة احترافية ⚡"
  },
  en: { 
    title: "SABAEPDF PRO ⚡", 
    subtitle: "The premier business platform for smart documents", 
    uploadPrompt: "Drag or click to upload files here", 
    back: "Back to Tools 🔙", 
    process: "Start Now ⚡", 
    processing: "Processing...", 
    finalizing: "Finalizing... (Please wait)",
    alertNoFiles: "Upload your files first!",
    alertNoPrompt: "Enter your prompt first for the AI to work! ✨",
    loginHeader: "Welcome Back 👋",
    signupHeader: "Start Your Journey 🚀",
    loginSub: "Login to continue working on your files",
    signupSub: "Create your free account and join professionals",
    namePlaceholder: "Full Name (Optional)",
    emailPlaceholder: "Email Address",
    passwordPlaceholder: "Password",
    confirmPasswordPlaceholder: "Confirm Password",
    passwordMismatch: "Passwords do not match! ❌",
    loginBtn: "Login ⚡",
    signupBtn: "Create New Account 🚀",
    noAccount: "Don't have an account? Sign up for free",
    hasAccount: "Already have an account? Login",
    loggedInAs: "Logged in as:",
    freePlan: "Free 🆓",
    proPlan: "Sabae PRO ⚡",
    businessPlan: "Business 💼",
    recommended: "Best Seller",
    month: "/month",
    loginToPay: "Login to Subscribe",
    browseTools: "Back to Main Site 🏠",
    freeFeatures: ["✅ Edit, Merge, Compress, Rotate", "✅ Unlimited basic operations", "❌ Locked: AI Tools", "❌ Locked: Translation & Redaction"],
    proFeatures: ["✅ All Free features", "✅ AI Edit & Summarize 🧠", "✅ Sensitive Redaction ⬛", "✅ Remove Watermarks 💧", "✅ AI Image & Transcription 🎙️"],
    businessFeatures: ["✅ All PRO features", "✅ Full Layout Translation 🌍", "✅ High-Accuracy OCR 📊", "✅ Priority Server Processing 🚀", "✅ Premium Support"],
    unlimited: "Unlimited operations available ∞",
    proUnlimited: "Welcome to the Pro Workspace 🚀",
    businessUnlimited: "Welcome to the Ultimate Business Workspace 💼",
    loginRequired: "Login or upgrade to use this tool 🔒",
    comingSoonTitle: "Coming Soon! 🚀",
    comingSoonText: "Sorry hero! This tool requires a special interface and setup. We are currently working on it.",
    footerDesc: "Your premier platform for smart and fast file handling.",
    contactUs: "Contact Us",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    rights: "All Rights Reserved © 2026 SABAEPDF PRO",
    closeBtn: "Close ❌",
    upgradeBtn: "Upgrade ⚡",
    sizeLimitAlert: "Files are too large for the free plan! 😅 (Max 150MB). Please reduce file size or upgrade to a Pro plan ⚡"
  }
};

const tools = [
  { id: 'ai-pdf-translator', nameAr: 'ترجمة ذكية (AI)', nameEn: 'Smart Translation', icon: '🌍', color: 'from-blue-600 to-indigo-900', neon: '#3b82f6', descAr: 'ترجمة كاملة مع حفظ التنسيق.', reqPlan: 'Business', isAI: true },
  { id: 'pdf-to-excel', nameAr: 'PDF لـ Excel (OCR)', nameEn: 'Pro OCR to Excel', icon: '📊', color: 'from-green-600 to-emerald-900', neon: '#059669', descAr: 'استخراج الجداول بدقة عالية.', reqPlan: 'Business' },
  { id: 'ai-pdf-editor', nameAr: 'تعديل ذكي (AI)', nameEn: 'AI Editor', icon: '✨', color: 'from-purple-600 to-fuchsia-800', neon: '#d946ef', descAr: 'أعد صياغة النصوص داخل الملف.', reqPlan: 'PRO', inputPlaceholderAr: 'اكتب التعديل اللي عايزه (مثال: أعد صياغة هذا الملف)...', isAI: true },
  { id: 'pdf-redaction', nameAr: 'تعتيم حساس', nameEn: 'Smart Redaction', icon: '⬛', color: 'from-gray-700 to-black', neon: '#ffffff', descAr: 'إخفاء الأرقام والأسماء للأبد.', reqPlan: 'PRO', inputPlaceholderAr: 'الكلمة أو الرقم المراد إخفاؤه وتمويهه...' },
  { id: 'ai-summarizer', nameAr: 'تلخيص PDF (AI)', nameEn: 'AI Summarizer', icon: '🧠', color: 'from-indigo-600 to-blue-800', neon: '#4f46e5', descAr: 'لخص 100 صفحة في ثواني.', reqPlan: 'PRO', isAI: true },
  { id: 'bg-remover', nameAr: 'إزالة الخلفية (AI)', nameEn: 'Remove BG', icon: '✂️', color: 'from-fuchsia-500 to-purple-600', neon: '#d946ef', descAr: 'مسح الخلفية بالذكاء الاصطناعي.', reqPlan: 'PRO', isAI: true },
  { id: 'mp4-to-mp3', nameAr: 'استخراج الصوت', nameEn: 'MP4 to MP3', icon: '🎧', color: 'from-cyan-500 to-blue-600', neon: '#06b6d4', descAr: 'فصل الصوت كملف MP3.', reqPlan: 'PRO' }, 
  { id: 'watermark-remover', nameAr: 'مسح العلامة المائية', nameEn: 'Watermark Remover', icon: '💧', color: 'from-cyan-500 to-teal-600', neon: '#06b6d4', descAr: 'إزالة الشعارات من الصور.', reqPlan: 'PRO', isComingSoon: true },
  { id: 'ai-image-gen', nameAr: 'توليد صور (AI)', nameEn: 'AI Image Gen', icon: '🎨', color: 'from-indigo-500 to-purple-600', neon: '#8b5cf6', descAr: 'توليد صور بالوصف.', reqPlan: 'PRO', isPromptOnly: true, inputPlaceholderAr: 'اكتب وصف للصورة (يفضل باللغة الإنجليزية)...', isAI: true },
  
  {
    id: 'pdf-img-combo', nameAr: 'صور ↔ PDF', nameEn: 'PDF ↔ Images', icon: '🔁', color: 'from-orange-500 to-red-600', neon: '#ef4444', descAr: 'تحويل متبادل بين الصور والـ PDF.', reqPlan: 'Free', isCombo: true,
    subTools: [
      { id: 'pdf-to-img', nameAr: 'PDF لـ صور', nameEn: 'PDF to Images', icon: '📸', reqPlan: 'Free' },
      { id: 'img-to-pdf', nameAr: 'صور لـ PDF', nameEn: 'Images to PDF', icon: '🖼️', reqPlan: 'Free' }
    ]
  },

  {
    id: 'media-optimizer', nameAr: 'تحسين الميديا', nameEn: 'Media Optimizer', icon: '⚖️', color: 'from-pink-500 to-rose-600', neon: '#f43f5e', descAr: 'ضغط وتكبير جودة الملفات والصور.', reqPlan: 'Free', isCombo: true,
    subTools: [
      { id: 'compress-pdf', nameAr: 'ضغط الميديا', nameEn: 'Compress Media', icon: '📉', reqPlan: 'Free' },
      { id: 'image-upscaler', nameAr: 'تكبير الصور (4K)', nameEn: 'Image Upscaler', icon: '🪄', reqPlan: 'PRO', isAI: true }
    ]
  },
  
  { id: 'pdf-to-word', nameAr: 'PDF لـ Word', nameEn: 'PDF to Word', icon: '📝', color: 'from-emerald-500 to-teal-600', neon: '#10b981', descAr: 'تحويل الملف لنص قابل للتعديل.', reqPlan: 'Free' },
  { id: 'merge-pdf', nameAr: 'دمج ملفات', nameEn: 'Merge PDF', icon: '📑', color: 'from-blue-600 to-indigo-700', neon: '#3b82f6', descAr: 'دمج عدة ملفات في مستند واحد.', reqPlan: 'Free' },
  { id: 'grayscale-pdf', nameAr: 'توفير حبر', nameEn: 'Grayscale', icon: '🏁', color: 'from-gray-500 to-slate-700', neon: '#64748b', descAr: 'تحويل لأبيض وأسود.', reqPlan: 'Free' },
  { id: 'delete-pages', nameAr: 'مسح صفحات', nameEn: 'Delete Pages', icon: '✂️', color: 'from-red-500 to-pink-600', neon: '#ec4899', descAr: 'حذف صفحات من الملف.', reqPlan: 'Free', inputPlaceholderAr: 'أرقام الصفحات (1, 3)' },
  { id: 'rotate-pdf', nameAr: 'تدوير الملف', nameEn: 'Rotate PDF', icon: '🔄', color: 'from-yellow-500 to-orange-600', neon: '#f59e0b', descAr: 'تدوير الصفحات أو الصور.', reqPlan: 'Free', inputPlaceholderAr: 'الزاوية (90, 180)' },
  { id: 'security-pdf', nameAr: 'قفل وفك التشفير', nameEn: 'Lock & Unlock', icon: '🔒', color: 'from-purple-600 to-violet-700', neon: '#a78bfa', descAr: 'تشفير أو فك الحماية.', reqPlan: 'Free', inputPlaceholderAr: 'اكتب كلمة السر' }
];

const PAYPAL_CLIENT_ID = "AQtXECvCPx2nWKmNV23EwUPmNRozM16vxJ2vlBP9IQTKzPtkbwMiKR08fVPjYhHP3xrP9OK93sNbWI--"; 
const API_URL = "https://memosssssss-sabaepdf-backen.hf.space";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [user, setUser] = useState<{email: string, plan: string} | null>(null);
  
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [view, setView] = useState<'grid' | 'login' | 'tool'>('grid');
  
  const [activeTool, setActiveTool] = useState<any>(tools[0]);
  const [activeSubTool, setActiveSubTool] = useState<any>(null);
  
  const [files, setFiles] = useState<File[]>([]);
  const [extraParam, setExtraParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoveredNeon, setHoveredNeon] = useState('#06b6d4');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

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

  const getCurrentUserPlan = () => user?.plan?.trim().toLowerCase() || 'free';
  const isBusinessUser = () => getCurrentUserPlan() === 'business';
  const isProUser = () => getCurrentUserPlan() === 'pro' || getCurrentUserPlan() === 'business'; 

  const currentTool = activeSubTool || activeTool;

  const resetAndGoBack = () => {
    if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
    }
    setFiles([]);
    setExtraParam("");
    setLoading(false);
    setProgress(0);
    setActiveSubTool(null);
    setView('grid');
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'signup' && passwordInput !== confirmPasswordInput) return alert(loc.passwordMismatch);
    if (!emailInput || !passwordInput) return alert("الرجاء إدخال البيانات المطلوبة!");
    
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
      setConfirmPasswordInput("");
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
      
      alert(`🎉 مبروك! تم تفعيل اشتراك ${planType} بنجاح.`);
      setView('grid');
    } catch (err) {
      alert("تم الدفع بس حصلت مشكلة في التفعيل!");
    }
  };

  const getAcceptTypes = () => {
    if (currentTool.id === 'rotate-pdf') return '.pdf, image/*';
    if (['img-to-pdf', 'image-upscaler', 'watermark-remover', 'bg-remover'].includes(currentTool.id)) return 'image/*';
    if (currentTool.id === 'mp4-to-mp3') return 'video/*, audio/*';
    if (['ai-summarizer', 'ai-pdf-translator', 'pdf-redaction', 'ai-pdf-editor', 'pdf-to-img', 'grayscale-pdf', 'delete-pages', 'security-pdf', 'pdf-to-word', 'pdf-to-excel'].includes(currentTool.id)) return '.pdf';
    return '.pdf, image/*, video/*';
  };

  const handleProcess = async () => {
    if (!currentTool.isPromptOnly && files.length === 0) return alert(loc.alertNoFiles);
    if (currentTool.isPromptOnly && !extraParam.trim()) return alert(loc.alertNoPrompt);

    const requiredPlan = currentTool.reqPlan.toLowerCase();
    if (requiredPlan === 'business' && !isBusinessUser()) {
        alert("هذه الأداة تتطلب اشتراك Business 💼");
        setView('login'); return;
    }
    if (requiredPlan === 'pro' && !isProUser()) {
        alert("هذه الأداة تتطلب اشتراك PRO ⚡");
        setView('login'); return;
    }

    if (getCurrentUserPlan() === 'free') {
        const MAX_FREE_SIZE = 150 * 1024 * 1024;
        const totalSize = files.reduce((acc, file) => acc + file.size, 0);
        if (totalSize > MAX_FREE_SIZE) {
            alert(loc.sizeLimitAlert);
            return;
        }
    }
    
    setLoading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return prev;
        if (prev > 85) return prev + 1; 
        return prev + 10; 
      });
    }, 800);

    abortControllerRef.current = new AbortController();
    const formData = new FormData();
    if (!currentTool.isPromptOnly) {
      files.forEach(f => formData.append("files", f));
    }
    formData.append("user_email", user?.email || "guest");
    if (extraParam) formData.append("extra_param", extraParam);

    try {
      // 🚀 ركز هنا: ضفتلك ?bypass_cache عشان يكسر أي كاش في المتصفح ويوصل للسيرفر الجديد غصب عنه
      const res = await axios.post(`${API_URL}/${currentTool.id}/?bypass_cache=${Date.now()}`, formData, { 
          responseType: 'blob', 
          timeout: 300000,
          signal: abortControllerRef.current.signal
      });
      setProgress(100);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      
      let ext = 'pdf'; 
      const cType = res.headers['content-type'] || '';
      
      if (currentTool.id === 'pdf-to-word') ext = 'docx';
      else if (currentTool.id === 'pdf-to-excel') ext = 'xlsx';
      else if (['bg-remover', 'image-upscaler', 'watermark-remover', 'ai-image-gen'].includes(currentTool.id)) ext = 'png'; 
      else if (currentTool.id === 'mp4-to-mp3') ext = 'mp3';
      else if (currentTool.id === 'pdf-to-img') {
          ext = cType.includes('zip') ? 'zip' : 'png';
      }
      else if (currentTool.id === 'compress-pdf') {
          if (cType.includes('zip')) ext = 'zip';
          else if (cType.includes('mp4')) ext = 'mp4';
          else if (cType.includes('jpeg')) ext = 'jpg';
          else if (cType.includes('png')) ext = 'png';
          else ext = files.length === 1 && files[0] ? (files[0].name.split('.').pop() || 'zip') : 'zip';
      }
      else if (['ai-summarizer', 'ai-pdf-translator', 'pdf-redaction', 'ai-pdf-editor', 'grayscale-pdf', 'rotate-pdf', 'security-pdf', 'delete-pages', 'merge-pdf'].includes(currentTool.id)) {
          ext = 'pdf';
      }

      let finalFileName = "Processed_File";
      if (files.length > 0) {
          const originalName = files[0].name;
          const lastDot = originalName.lastIndexOf('.');
          finalFileName = lastDot !== -1 ? originalName.substring(0, lastDot) : originalName;
      } else if (currentTool.isPromptOnly && extraParam) {
          finalFileName = extraParam.substring(0, 20).replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_') || "AI_Generated";
      }

      const a = document.createElement('a'); 
      a.href = url; 
      a.download = `${finalFileName}.${ext}`; 
      a.click();
    } catch (err: any) {
        if (axios.isCancel(err)) return; 
        console.error("Server Error:", err);
        let errorMsg = err.message || "خطأ غير معروف";
        
        if (err.response && err.response.data) {
            if (err.response.data instanceof Blob) {
                try {
                    const text = await err.response.data.text();
                    const json = JSON.parse(text);
                    errorMsg = json.detail || text;
                } catch (e) {
                    errorMsg = "السيرفرات العالمية مشغولة، جرب وصف آخر لاحقاً.";
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

  const isLocked = () => {
    if (!user && currentTool.reqPlan !== 'Free') return true;
    const requiredPlan = currentTool.reqPlan.toLowerCase();
    if (requiredPlan === 'business' && !isBusinessUser()) return true;
    if (requiredPlan === 'pro' && !isProUser()) return true;
    return false;
  };

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
              {getCurrentUserPlan() === 'free' && (
                  <button onClick={() => { resetAndGoBack(); setView('login'); }} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1.5 md:py-2 rounded-full font-black text-xs md:text-sm hover:scale-105 transition-all shadow-[0_0_10px_rgba(234,179,8,0.4)] animate-pulse cursor-pointer">
                      {loc.upgradeBtn}
                  </button>
              )}
              <div className={`bg-gradient-to-r ${isBusinessUser() ? 'from-purple-600 to-indigo-600' : isProUser() ? 'from-cyan-600 to-blue-600' : 'from-gray-600 to-gray-500'} px-4 py-2 rounded-full text-white font-black text-xs md:text-sm shadow-lg flex items-center gap-2`}>
                <span className="capitalize">{getCurrentUserPlan()}</span> {getCurrentUserPlan() !== 'free' && '🚀'}
              </div>
              <button onClick={handleSignOut} className="bg-gray-800/80 hover:bg-red-500/20 text-gray-300 hover:text-red-400 font-bold py-2 px-4 rounded-full transition-all border border-gray-600 cursor-pointer">🚪</button>
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
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
               <button onClick={resetAndGoBack} className="bg-gray-800/50 hover:bg-gray-700 text-white px-6 py-3 rounded-2xl border border-gray-700 font-bold flex items-center gap-2 transition-all hover:-translate-y-1">
                  <span>🏠</span> {loc.browseTools}
               </button>
            </div>

            {!user ? (
              <div className="mb-16 transition-all duration-500">
                  {authMode === 'login' ? (
                      <div className="max-w-md mx-auto bg-gray-900/50 border border-cyan-500/30 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(6,182,212,0.1)] backdrop-blur-xl">
                          <div className="text-6xl mb-6">👋</div>
                          <h2 className="text-4xl font-black text-cyan-400 mb-2">{loc.loginHeader}</h2>
                          <p className="text-gray-400 font-bold mb-8">{loc.loginSub}</p>
                          
                          <form onSubmit={handleAuth} className="flex flex-col gap-5">
                              <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder={loc.emailPlaceholder} required className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-4 text-lg text-white outline-none focus:border-cyan-500 text-center font-bold transition-all" />
                              <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder={loc.passwordPlaceholder} required className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-4 text-lg text-white outline-none focus:border-cyan-500 text-center font-bold transition-all" />
                              <button type="submit" disabled={loading} className="w-full py-4 mt-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-xl shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:scale-[1.02] transition-transform cursor-pointer">
                                  {loading ? '...' : loc.loginBtn}
                              </button>
                          </form>
                          <div className="mt-8 pt-6 border-t border-gray-800">
                              <button onClick={() => { setAuthMode('signup'); setEmailInput(""); setPasswordInput(""); }} className="text-gray-400 hover:text-cyan-400 font-bold transition-colors cursor-pointer text-sm">
                                  {loc.noAccount}
                              </button>
                          </div>
                      </div>
                  ) : (
                      <div className="max-w-lg mx-auto bg-gray-900/50 border border-purple-500/30 p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-xl">
                          <div className="text-6xl mb-6">🚀</div>
                          <h2 className="text-4xl font-black text-purple-400 mb-2">{loc.signupHeader}</h2>
                          <p className="text-gray-400 font-bold mb-8">{loc.signupSub}</p>
                          
                          <form onSubmit={handleAuth} className="flex flex-col gap-5">
                              <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder={loc.namePlaceholder} className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-4 text-lg text-white outline-none focus:border-purple-500 text-center font-bold transition-all" />
                              <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder={loc.emailPlaceholder} required className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-4 text-lg text-white outline-none focus:border-purple-500 text-center font-bold transition-all" />
                              
                              <div className="grid grid-cols-2 gap-3">
                                  <input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder={loc.passwordPlaceholder} required className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-4 text-lg text-white outline-none focus:border-purple-500 text-center font-bold transition-all" />
                                  <input type="password" value={confirmPasswordInput} onChange={(e) => setConfirmPasswordInput(e.target.value)} placeholder={loc.confirmPasswordPlaceholder} required className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-4 text-lg text-white outline-none focus:border-purple-500 text-center font-bold transition-all" />
                              </div>
                              
                              <button type="submit" disabled={loading} className="w-full py-4 mt-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 font-black text-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-transform cursor-pointer">
                                  {loading ? '...' : loc.signupBtn}
                              </button>
                          </form>
                          <div className="mt-8 pt-6 border-t border-gray-800">
                              <button onClick={() => { setAuthMode('login'); setEmailInput(""); setPasswordInput(""); setConfirmPasswordInput(""); }} className="text-gray-400 hover:text-purple-400 font-bold transition-colors cursor-pointer text-sm">
                                  {loc.hasAccount}
                              </button>
                          </div>
                      </div>
                  )}
              </div>
            ) : (
              <div className="mb-16 bg-gray-900/50 border border-cyan-500/30 p-8 rounded-[2rem] inline-block shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                 <div className="text-cyan-400 font-bold text-2xl flex items-center justify-center gap-3">
                     <span className="text-4xl">✅</span> 
                     <div>
                         <div className="text-sm text-gray-400 mb-1">{loc.loggedInAs}</div>
                         <div>{user.email}</div>
                     </div>
                 </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right mb-12">
              <div className="p-8 rounded-[2.5rem] bg-gray-900/40 border-2 border-gray-800 backdrop-blur-md">
                <h3 className="text-2xl font-black mb-4">{loc.freePlan}</h3>
                <div className="text-5xl font-black mb-6">0$</div>
                <ul className="space-y-4 mb-8 text-gray-400 font-bold text-sm">
                  {loc.freeFeatures.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
              
              <div className="p-8 rounded-[2.5rem] bg-gray-900/60 border-2 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-md relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-6 left-[-40px] bg-cyan-500 text-black font-black py-1 px-12 rotate-[-45deg] text-xs">{loc.recommended}</div>
                <h3 className="text-3xl font-black mb-4 text-cyan-400">{loc.proPlan}</h3>
                <div className="text-5xl font-black mb-6 text-white">10$ <span className="text-lg text-gray-500">{loc.month}</span></div>
                <ul className="space-y-4 mb-8 text-gray-300 font-bold text-sm">
                   {loc.proFeatures.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                {(!user || getCurrentUserPlan() === 'free') && (
                  <div className="mt-6 relative z-50">
                    {user ? (
                      <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                        <PayPalButtons style={{ layout: "horizontal", color: "blue", height: 40 }} createOrder={(d, a) => a.order.create({ purchase_units: [{ amount: { value: "10.00" } }] })} onApprove={async (d, a) => { await a.order?.capture(); handleSuccessfulPayment('PRO'); }} />
                      </PayPalScriptProvider>
                    ) : <button onClick={() => setAuthMode('signup')} className="w-full py-3 bg-gray-700 rounded-xl font-bold hover:bg-gray-600 transition-all">{loc.loginToPay}</button>}
                  </div>
                )}
              </div>

              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-indigo-950 border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-md">
                <h3 className="text-2xl font-black mb-4 text-purple-400">{loc.businessPlan}</h3>
                <div className="text-5xl font-black mb-6">25$ <span className="text-lg text-gray-500">{loc.month}</span></div>
                <ul className="space-y-4 mb-8 text-gray-300 font-bold text-sm">
                  {loc.businessFeatures.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                {(!user || getCurrentUserPlan() !== 'business') && (
                  <div className="mt-6 relative z-50">
                    {user ? (
                      <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD" }}>
                        <PayPalButtons style={{ layout: "horizontal", color: "black", height: 40 }} createOrder={(d, a) => a.order.create({ purchase_units: [{ amount: { value: "25.00" } }] })} onApprove={async (d, a) => { await a.order?.capture(); handleSuccessfulPayment('Business'); }} />
                      </PayPalScriptProvider>
                    ) : <button onClick={() => setAuthMode('signup')} className="w-full py-3 bg-gray-700 rounded-xl font-bold hover:bg-gray-600 transition-all">{loc.loginToPay}</button>}
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
              <div key={t.id} onClick={() => { 
                  setActiveTool(t as any); 
                  if (t.isCombo) setActiveSubTool(t.subTools[0]); 
                  else setActiveSubTool(null);
                  setFiles([]); setExtraParam(""); setView('tool'); 
                }} 
                onMouseEnter={() => { setHoveredNeon(t.neon); setHoveredCardId(t.id); }} 
                onMouseLeave={() => { setHoveredNeon('#06b6d4'); setHoveredCardId(null); }}
                style={{ boxShadow: hoveredCardId === t.id ? `0 0 30px ${t.neon}70` : '0 10px 30px rgba(0,0,0,0.3)', borderColor: hoveredCardId === t.id ? t.neon : 'rgba(31, 41, 55, 0.8)' }}
                className={`group p-8 rounded-[2.5rem] bg-gray-900/40 transition-all duration-500 hover:-translate-y-3 flex flex-col items-center gap-5 cursor-pointer backdrop-blur-md border-2 overflow-hidden relative`}>
                
                {t.reqPlan === 'Business' && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-[10px] font-black py-1 px-3 rounded-full z-20 flex items-center gap-1">
                        {(!user || !isBusinessUser()) && <span>🔒</span>} Business
                    </div>
                )}
                {t.reqPlan === 'PRO' && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-black py-1 px-3 rounded-full z-20 flex items-center gap-1">
                        {(!user || !isProUser()) && <span>🔒</span>} PRO
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
            <div className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${activeTool.color} flex items-center justify-center text-6xl mx-auto mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-500`}>{currentTool.icon}</div>
            
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              {lang === 'ar' ? currentTool.nameAr : currentTool.nameEn}
            </h2>

            {activeTool.isCombo && (
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 bg-gray-900/80 p-2 rounded-3xl w-fit mx-auto border border-gray-700 shadow-inner relative z-50">
                    {activeTool.subTools.map((sub: any) => (
                        <button
                            key={sub.id}
                            onClick={() => { setActiveSubTool(sub); setFiles([]); setExtraParam(""); }}
                            className={`py-3 px-6 rounded-2xl font-black text-sm md:text-lg transition-all flex items-center gap-2 cursor-pointer ${currentTool.id === sub.id ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                        >
                            <span>{sub.icon}</span>
                            <span>{lang === 'ar' ? sub.nameAr : sub.nameEn}</span>
                            {sub.reqPlan === 'PRO' && <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] px-2 py-0.5 rounded-full ml-1">PRO</span>}
                        </button>
                    ))}
                </div>
            )}

            {(currentTool as any).isAI && !(currentTool as any).isComingSoon && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-sm font-bold p-4 rounded-2xl mb-8 flex items-center justify-center gap-2 shadow-inner">
                    <span className="text-xl">⚠️</span> تنويه: هذه الأداة تعمل بالذكاء الاصطناعي، يُرجى مراجعة النتيجة لاحتمالية وجود أخطاء.
                </div>
            )}
            
            {(currentTool as any).isComingSoon ? (
                <div className="py-10 px-6 rounded-[2.5rem] bg-gray-900/80 border-2 border-cyan-500/30 backdrop-blur-xl flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(6,182,212,0.1)] mb-6">
                    <div className="text-7xl animate-pulse">🚀</div>
                    <h3 className="text-3xl font-black text-cyan-400">{loc.comingSoonTitle}</h3>
                    <p className="text-gray-300 font-bold max-w-lg text-lg leading-relaxed">
                        {loc.comingSoonText}
                    </p>
                    <button onClick={resetAndGoBack} className="mt-6 bg-gray-800 hover:bg-gray-700 text-white font-black py-4 px-10 rounded-2xl text-xl transition-all border border-gray-600 cursor-pointer shadow-lg">
                        {loc.back}
                    </button>
                </div>
            ) : isLocked() ? (
                <div className="py-10 px-6 rounded-[2.5rem] bg-gray-900/80 border-2 border-yellow-500/30 backdrop-blur-xl flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(234,179,8,0.1)] mb-6">
                    <div className="text-7xl animate-bounce">🔒</div>
                    <h3 className="text-2xl font-black text-yellow-500">ميزة حصرية للمشتركين</h3>
                    <p className="text-gray-400 font-bold max-w-md">
                        للوصول لهذه الأداة، تحتاج إلى الترقية لباقة أعلى. استمتع بقوة الذكاء الاصطناعي في إدارة أعمالك!
                    </p>
                    <button onClick={() => { resetAndGoBack(); setView('login'); }} className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black py-4 px-10 rounded-2xl text-xl hover:scale-105 transition-all shadow-lg cursor-pointer">
                        الترقية الآن ⚡
                    </button>
                    {!activeTool.isCombo && (
                        <button onClick={resetAndGoBack} className="text-gray-500 hover:text-white underline font-bold cursor-pointer">{loc.browseTools}</button>
                    )}
                </div>
            ) : (
                <>
                    <p className="text-gray-400 font-bold mb-10">{isBusinessUser() ? loc.businessUnlimited : isProUser() ? loc.proUnlimited : loc.unlimited}</p>
                    
                    {currentTool.isPromptOnly ? (
                      <div className="mb-10 relative z-50">
                        <textarea value={extraParam} onChange={(e) => setExtraParam(e.target.value)} placeholder={lang === 'ar' ? currentTool.inputPlaceholderAr : "Enter your prompt..."} className="w-full bg-gray-950/80 border-2 border-dashed border-gray-600 rounded-[2.5rem] p-8 text-2xl text-cyan-400 outline-none focus:border-cyan-500 font-bold min-h-[250px] resize-y text-center transition-all shadow-inner" dir={lang === 'ar' ? 'rtl' : 'ltr'} />
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
                                  {file.type.startsWith('image/') ? <img src={URL.createObjectURL(file)} alt="preview" className="w-16 h-16 object-cover rounded-lg mb-2" /> : <div className="text-5xl mb-2">📄</div>}
                                  <div className="text-xs text-cyan-400 w-full text-center break-words px-1 font-bold" dir="ltr" title={file.name}>{file.name.length > 15 ? file.name.substring(0, 15) + '...' : file.name}</div>
                                </div>
                            ))}
                            <button onClick={() => setFiles([])} className="text-red-500 font-bold w-full mt-6 hover:text-red-400 cursor-pointer">× مسح الكل</button>
                            </div>
                        )}
                        </div>
                        {(currentTool.inputPlaceholderAr) && (
                        <div className="mb-10 relative z-50">
                            <input type="text" value={extraParam} onChange={(e) => setExtraParam(e.target.value)} placeholder={lang === 'ar' ? currentTool.inputPlaceholderAr : ''} className="w-full bg-gray-950/80 border-2 border-gray-700 rounded-2xl p-5 text-xl text-white outline-none focus:border-cyan-500 text-center font-bold" />
                        </div>
                        )}
                      </>
                    )}

                    <div className="flex gap-6 relative z-50">
                        <button onClick={resetAndGoBack} className="flex-1 py-5 rounded-2xl bg-gray-800 font-black text-xl hover:bg-gray-700 transition-all cursor-pointer border border-gray-700">{loc.back}</button>
                        <button onClick={handleProcess} disabled={loading} className="flex-[2] py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 font-black text-2xl shadow-[0_0_30px_rgba(8,145,178,0.5)] hover:scale-[1.03] transition-all duration-300 cursor-pointer border border-cyan-400/50 relative overflow-hidden">
                            {loading ? <span className="relative z-10 text-xl">{progress}% {progress > 90 ? loc.finalizing : loc.processing}</span> : loc.process}
                            {loading && <div className="absolute top-0 left-0 h-full bg-white/20 transition-all duration-500" style={{ width: `${progress}%` }} />}
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
