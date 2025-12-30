import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { Language, ServiceItem } from './types';
import {
    Menu,
    X,
    Globe,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    MapPin,
    Phone,
    Mail,
    Wheat,
    Stethoscope,
    Factory,
    Droplet,
    Anchor,
    HardHat,
    Activity
} from 'lucide-react';

// Helper component for Icons
const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
        case 'Wheat': return <Wheat className={className} />;
        case 'Stethoscope': return <Stethoscope className={className} />;
        case 'Factory': return <Factory className={className} />;
        case 'Droplet': return <Droplet className={className} />;
        case 'Anchor': return <Anchor className={className} />;
        case 'HardHat': return <HardHat className={className} />;
        case 'Pipeline': return <Activity className={className} />;
        default: return <CheckCircle2 className={className} />;
    }
};

const App: React.FC = () => {
    const [lang, setLang] = useState<Language>('ar');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const content = CONTENT[lang];
    const isRTL = lang === 'ar';

    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang, isRTL]);

    const toggleLang = () => {
        setLang(prev => prev === 'en' ? 'ar' : 'en');
        setIsMenuOpen(false);
    };

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className={`min-h-screen font-sans ${isRTL ? 'font-arabic' : ''} text-brand-900 bg-gray-50`}>

            {/* Navigation */}
            <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
                            <img
                                src="/logo-full.webp"
                                alt={isRTL ? 'البصمة الدولية للتفتيش و المطابقة' : 'Albsma-aldwlha'}
                                className="h-14 w-14 rounded-full border border-brand-200 shadow-sm object-cover"
                            />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                            <button onClick={() => scrollTo('hero')} className="hover:text-brand-600 font-medium transition-colors">{content.nav.home}</button>
                            <button onClick={() => scrollTo('about')} className="hover:text-brand-600 font-medium transition-colors">{content.nav.about}</button>
                            <button onClick={() => scrollTo('services')} className="hover:text-brand-600 font-medium transition-colors">{content.nav.services}</button>
                            <button onClick={() => scrollTo('vision')} className="hover:text-brand-600 font-medium transition-colors">{content.nav.vision}</button>
                            <button onClick={() => scrollTo('contact')} className="hover:text-brand-600 font-medium transition-colors">{content.nav.contact}</button>

                            <button
                                onClick={toggleLang}
                                className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 hover:border-brand-600 hover:text-brand-600 transition-all"
                            >
                                <Globe size={16} />
                                <span className="uppercase text-sm font-bold">{lang === 'en' ? 'العربية' : 'English'}</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <button onClick={toggleLang} className="text-sm font-bold uppercase">{lang}</button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-brand-900">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-4 shadow-lg flex flex-col space-y-4 animate-fade-in">
                        <button onClick={() => scrollTo('hero')} className="p-2 hover:bg-gray-50 rounded-lg text-start">{content.nav.home}</button>
                        <button onClick={() => scrollTo('about')} className="p-2 hover:bg-gray-50 rounded-lg text-start">{content.nav.about}</button>
                        <button onClick={() => scrollTo('services')} className="p-2 hover:bg-gray-50 rounded-lg text-start">{content.nav.services}</button>
                        <button onClick={() => scrollTo('vision')} className="p-2 hover:bg-gray-50 rounded-lg text-start">{content.nav.vision}</button>
                        <button onClick={() => scrollTo('contact')} className="p-2 hover:bg-gray-50 rounded-lg text-start">{content.nav.contact}</button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-900 text-white">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-900 via-brand-900/80 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-center md:text-start flex flex-col-reverse md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            {content.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                            {content.hero.subtitle}
                        </p>
                        <button
                            onClick={() => scrollTo('services')}
                            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-600 text-brand-900 font-bold py-4 px-8 rounded-lg shadow-lg shadow-amber-500/20 transition-transform hover:-translate-y-1"
                        >
                            {content.hero.cta}
                            {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                        </button>
                    </div>
                    {/* Abstract Visual Shape */}
                    <div className="flex-1 block relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-3xl"></div>
                        <img
                            src="/logo-full.webp"
                            alt="Albasma International Logo"
                            className="relative rounded-full shadow-2xl border-4 border-brand-500/50 w-full max-w-md mx-auto animate-float"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 relative inline-block">
                                {content.about.title}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-accent"></span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                {content.about.description.map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-brand-800">{content.features.title}</h3>
                            <ul className="space-y-4">
                                {content.features.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-[20px] text-brand-600">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">{content.services.title}</h2>
                        <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.services.items.map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-brand-600 group">
                                <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                    {getIcon(service.icon, "w-8 h-8")}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-brand-800">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-20 bg-brand-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.vision.title}</h2>
                        <p className="text-xl text-brand-100">{content.vision.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {content.vision.points.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                                <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                                <span className="text-gray-200">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">{content.contact.title}</h2>
                            <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">{isRTL ? 'العنوان' : 'Address'}</h4>
                                    <p className="text-gray-600">{content.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">{isRTL ? 'الهاتف' : 'Phone'}</h4>
                                    <p className="text-gray-600" dir="ltr">{content.contact.phone}</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">{isRTL ? 'البريد الإلكتروني' : 'Email'}</h4>
                                    <p className="text-gray-600">{content.contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-brand-900 text-gray-400 py-12 border-t border-brand-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6">
                        <img src="/logo-full.webp" alt="Albasma Seal" className="w-24 h-24 rounded-full shadow-lg border-2 border-brand-600" />
                    </div>
                    <p className="mb-4 text-white font-bold text-xl">
                        {isRTL ? 'شركة البصمة الدولية للتفتيش و المطابقة' : 'Albsma-aldwlha'}
                    </p>
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} {isRTL ? 'البصمة الدولية للتفتيش و المطابقة' : 'Albsma-aldwlha'}. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;