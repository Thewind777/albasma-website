import { SiteContent } from './types';

export const CONTENT: Record<'en' | 'ar', SiteContent> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      vision: "رؤيتنا",
      contact: "تواصل معنا"
    },
    hero: {
      title: "شركة البصمة الدولية للتفتيش و المطابقة",
      subtitle: "شريكك الموثوق لضمان الجودة و المطابقة في جميع القطاعات الصناعية و الخدمية",
      cta: "اكتشف خدماتنا"
    },
    about: {
      title: "من نحن؟",
      description: [
        "شركة البصمة الدولية للتفتيش و المطابقة: هي شركة تفتيش ليبية 100٪ ذات مسئولية محدودة أنشئت في عام 2025م متخصصة في تقديم خدمات الفحص و التفتيش و الإختبارات المختلفة و المطابقة و ضمان مراقبة الجودة.",
        "أنشئت في المقام الأول بشأن تلبية احتياجات المستوردين و المقاولين و المصنعين و الجهات الحكومية لخدمات الفحص و الاختبارات المتنوعة و لتقديم خدمات ضمان مراقبة الجودة.",
        "تعمل الشركة كطرف ثالث محايد لضمان حصول كل من طرفي التعاقد على حقوقه طبقاً لشروط التعاقد بينهما و الشروط التشريعية و التنظيمية و ذلك في مجالات البيع و الشراء بأنواعها و ضبط الجودة أثناء العملية الإنتاجية."
      ]
    },
    vision: {
      title: "رؤيتنا و أهدافنا",
      description: "نسعى لتحقيق بيئة استثمارية آمنة و مستقرة و نافعة و ذلك من خلال التميز في تقديم خدمات الفحص و المعاينة و تأكيد ضبط و مراقبة الجودة على المشاريع المختلفة بعدالة و حيادية و شفافية عالية.",
      points: [
        "الالتزام الكامل بالأصول المهنية الدولية و معايير نظم الجودة و وفقاً لمتطلبات المواصفة القياسية الدولية ISO/IEC 17020.",
        "المساعدة في حماية المجتمع عن طريق المشاركة في منع الغش و الخداع التجاري و الصناعي.",
        "تشجيع استخدام مبادئ و تقنيات مفاهيم الجودة.",
        "ضمان تقديم خدمات متقنة و عالية الجودة.",
        "توفير أكبر عدد ممكن و متنوع من خدمات الفحص و التفتيش و ضمان ضبط و مراقبة الجودة.",
        "السعي إلى ما وراء رضا الزبائن و كسب ولائهم."
      ]
    },
    services: {
      title: "خدمات التفتيش",
      items: [
        { title: "التفتيش الغذائي:", description: "المنتجات الغذائية – المواد الخام – الحبوب – البذور.", icon: "Wheat" },
        { title: "التفتيش الطبي:", description: "الأدوية – المعدات الطبية - مستلزمات المعامل.", icon: "Stethoscope" },
        { title: "التفتيش الصناعي:", description: "مواد نصف مصنعة – مستلزمات التشغيل – الآلات.", icon: "Factory" },
        { title: "التفتيش النفطي:", description: "المنتجات النفطية – مشتقات نفطية – بتروكيماويات – معدات الانتاج و الحفر.", icon: "Droplet" },
        { title: "خطوط الأنابيب:", description: "التفتيش المتخصص على خطوط الأنابيب.", icon: "Pipeline" },
        { title: "الآليات الثقيلة:", description: "التفتيش على الروافع و آلات المناولة و الآليات الثقيلة.", icon: "HardHat" },
        { title: "الموانئ و المطارات:", description: "التفتيش على الموانئ و المطارات و المنصات البحرية.", icon: "Anchor" },
      ]
    },
    features: {
      title: "المزايا التنافسية:",
      items: [
        "شركة ليبية متخصصة في مجالات الفحص و التفتيش و أنظمة الجودة.",
        "توافر طاقـم متكامـل من الخبراء و المتخصصين في معظم المجالات الهندسية و الفنية.",
        "توفر الأجهزة و المعدات الضرورية لإجراءات الفحص و المعاينة.",
        "تقديم أسعار منافسة و خدمات عالية الجودة.",
        "الثقة المتنـامية لأعمالهـا من جميع القطاعات الصناعية و الخدمية نتيجة لجودة أعمالها.",
        "تعتمد الشركة على مجموعة من الخبرات يتوفر بها التخصص و الخبرة و المهارات و التدريب المناسب."
      ]
    },
    contact: {
      title: "تواصل معنا",
      address: "جنزور-ليبيا",
      phone: "+218 94 239 6162",
      email: "info@albsma-aldwlha.ly",
      getInTouch: "ابقى على تواصل",
      sendMessage: "إرسال رسالة"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      vision: "Vision",
      contact: "Contact"
    },
    hero: {
      title: "Albasma-Aldawlia for Inspection and Conformity",
      subtitle: "Your trusted partner for quality assurance and conformity across all industrial and service sectors.",
      cta: "Explore Our Services"
    },
    about: {
      title: "Who We Are?",
      description: [
        "Albasma-Aldawlia for Inspection and Conformity is a 100% Libyan limited liability inspection company established in 2025, specializing in providing inspection, testing, conformity assessment, and quality control assurance services.",
        "Founded primarily to meet the needs of importers, contractors, manufacturers, and government entities for various inspection and testing services and to provide quality control assurance.",
        "The company operates as a neutral third party to ensure that both contracting parties receive their rights according to contractual terms and legislative regulations in various purchasing and sales fields, as well as quality control during the production process."
      ]
    },
    vision: {
      title: "Our Vision & Goals",
      description: "We strive to achieve a safe, stable, and beneficial investment environment by excelling in providing inspection and survey services and ensuring quality control on various projects with high fairness, impartiality, and transparency.",
      points: [
        "Full commitment to international professional standards and ISO/IEC 17020 requirements.",
        "Helping protect society by participating in the prevention of commercial and industrial fraud.",
        "Encouraging the use of quality concept principles and techniques.",
        "Ensuring the provision of meticulous and high-quality services.",
        "Providing the widest possible variety of inspection services and ensuring quality control in technical and commercial fields.",
        "Striving beyond customer satisfaction to earn their loyalty."
      ]
    },
    services: {
      title: "Inspection Services",
      items: [
        { title: "Food Inspection:", description: "Food products, raw materials, grains, seeds.", icon: "Wheat" },
        { title: "Medical Inspection:", description: "Medicines, medical equipment, laboratory supplies.", icon: "Stethoscope" },
        { title: "Industrial Inspection:", description: "Semi-manufactured materials, operating supplies, machinery.", icon: "Factory" },
        { title: "Petroleum Inspection:", description: "Crude oil, petroleum derivatives, petrochemicals, drilling equipment.", icon: "Droplet" },
        { title: "Pipelines:", description: "Specialized pipeline inspection.", icon: "Pipeline" },
        { title: "Heavy Machinery:", description: "Inspection of cranes, handling machinery, and heavy equipment.", icon: "HardHat" },
        { title: "Ports & Offshore:", description: "Inspection of ports, airports, and marine platforms.", icon: "Anchor" },
      ]
    },
    features: {
      title: "Competitive Advantages:",
      items: [
        "A Libyan company specialized in inspection and quality systems.",
        "Integrated team of experts and specialists in most engineering and technical fields.",
        "Availability of necessary devices and equipment for inspection and survey procedures.",
        "Competitive prices and high-quality services.",
        "Growing confidence in its operations from all industrial and service sectors.",
        "The company relies on a group of experts with appropriate specialization, experience, skills, and training."
      ]
    },
    contact: {
      title: "Contact Us",
      address: "Janzoor-Libya",
      phone: "+218 94 239 6162",
      email: "info@albsma-aldwlha.ly",
      getInTouch: "Get In Touch",
      sendMessage: "Send Message"
    }
  }
};