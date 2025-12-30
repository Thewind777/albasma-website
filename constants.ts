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
      subtitle: "شريكك الموثوق لضمان الجودة والمطابقة في جميع القطاعات الصناعية والخدمية",
      cta: "اكتشف خدماتنا"
    },
    about: {
      title: "من نحن؟",
      description: [
        "شركة البصمة الدولية للتفتيش و المطابقة: هي شركة تفتيش ليبية 100٪ ذات مسئولية محدودة أنشئت في عام 2025م متخصصة في تقديم خدمات الفحص والتفتيش والإختبارات المختلفة والمطابقة وضمان مراقبة الجودة.",
        "أنشئت في المقام الأول بشأن تلبية احتياجات المستوردين والمقاولين والمصنعين والجهات الحكومية لخدمات الفحص والاختبارات المتنوعة ولتقديم خدمات ضمان مراقبة الجودة.",
        "تعمل الشركة كطرف ثالث محايد لضمان حصول كل من طرفي التعاقد على حقوقه طبقاً لشروط التعاقد بينهما والشروط التشريعية والتنظيمية وذلك في مجالات البيع و الشراء بأنواعها و ضبط الجودة أثناء العملية الإنتاجية."
      ]
    },
    vision: {
      title: "رؤيتنا وأهدافنا",
      description: "نسعى لتحقيق بيئة استثمارية آمنة و مستقرة ونافعة وذلك من خلال التميز في تقديم خدمات الفحص والمعاينة وتأكيد ضبط ومراقبة الجودة على المشاريع المختلفة بعدالة وحيادية وشفافية عالية.",
      points: [
        "الالتزام الكامل بالأصول المهنية الدولية ومعايير نظم الجودة ووفقاً لمتطلبات المواصفة القياسية الدولية ISO/IEC 17020.",
        "المساعدة في حماية المجتمع عن طريق المشاركة في منع الغش والخداع التجاري والصناعي.",
        "تشجيع استخدام مبادئ وتقنيات مفاهيم الجودة.",
        "ضمان تقديم خدمات متقنة وعالية الجودة.",
        "توفير أكبر عدد ممكن ومتنوع من خدمات الفحص والتفتيش وضمان ضبط ومراقبة الجودة.",
        "السعي إلى ما وراء رضا الزبائن وكسب ولائهم."
      ]
    },
    services: {
      title: "خدمات التفتيش",
      items: [
        { title: "التفتيش الغذائي:", description: "المنتجات الغذائية – المواد الخام – الحبوب – البذور.", icon: "Wheat" },
        { title: "التفتيش الطبي:", description: "الأدوية – المعدات الطبية - مستلزمات المعامل.", icon: "Stethoscope" },
        { title: "التفتيش الصناعي:", description: "مواد نصف مصنعة – مستلزمات التشغيل – الآلات.", icon: "Factory" },
        { title: "التفتيش النفطي:", description: "المنتجات النفطية – مشتقات نفطية – بتروكيماويات – معدات الانتاج والحفر.", icon: "Droplet" },
        { title: "خطوط الأنابيب:", description: "التفتيش المتخصص على خطوط الأنابيب.", icon: "Pipeline" },
        { title: "الآليات الثقيلة:", description: "التفتيش على الروافع وآلات المناولة والآليات الثقيلة.", icon: "HardHat" },
        { title: "الموانئ والمطارات:", description: "التفتيش على الموانئ والمطارات والمنصات البحرية.", icon: "Anchor" },
      ]
    },
    features: {
      title: "المزايا التنافسية",
      items: [
        "شركة ليبية متخصصة في مجالات الفحص والتفتيش وأنظمة الجودة.",
        "توافر طاقـم متكامـل من الخبراء والمتخصصين في معظم المجالات الهندسية والفنية.",
        "توفر الأجهزة والمعدات الضرورية لإجراءات الفحص والمعاينة.",
        "تقديم أسعار منافسة وخدمات عالية الجودة.",
        "الثقة المتنـامية لأعمالهـا من جميع القطاعات الصناعية والخدمية نتيجة لجودة أعمالها.",
        "تعتمد الشركة على مجموعة من الخبرات يتوفر بها التخصص والخبرة والمهارات والتدريب المناسب."
      ]
    },
    contact: {
      title: "تواصل معنا",
      address: "جنزور، ليبيا",
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
      title: "Albsma-aldwlha",
      subtitle: "Your trusted partner for quality assurance and conformity across all industrial and service sectors.",
      cta: "Explore Our Services"
    },
    about: {
      title: "Who We Are",
      description: [
        "Albsma-aldwlha is a 100% Libyan limited liability inspection company established in 2025, specializing in providing inspection, testing, conformity assessment, and quality control assurance services.",
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
        { title: "Food Inspection", description: "Food products, raw materials, grains, seeds.", icon: "Wheat" },
        { title: "Medical Inspection", description: "Medicines, medical equipment, laboratory supplies.", icon: "Stethoscope" },
        { title: "Industrial Inspection", description: "Semi-manufactured materials, operating supplies, machinery.", icon: "Factory" },
        { title: "Petroleum Inspection", description: "Crude oil, petroleum derivatives, petrochemicals, drilling equipment.", icon: "Droplet" },
        { title: "Pipelines", description: "Specialized pipeline inspection.", icon: "Pipeline" },
        { title: "Heavy Machinery", description: "Inspection of cranes, handling machinery, and heavy equipment.", icon: "HardHat" },
        { title: "Ports & Offshore", description: "Inspection of ports, airports, and marine platforms.", icon: "Anchor" },
      ]
    },
    features: {
      title: "Competitive Advantages",
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
      address: "Janzoor, Libya",
      phone: "+218 94 239 6162",
      email: "info@albsma-aldwlha.ly",
      getInTouch: "Get In Touch",
      sendMessage: "Send Message"
    }
  }
};