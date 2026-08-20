import { ref, provide, inject } from 'vue'

export const LOCALE_KEY = Symbol('locale')

export const messages = {
  tr: {
    nav: {
      services: 'Hizmetler',
      process: 'Süreç',
      projects: 'Projeler',
      about: 'Hakkımızda',
      cta: 'Teklif Al',
      ctac: 'Teklif Al',
    },
    hero: {
      badge: 'Özel Yazılım & Özel Yapay Zeka Çözümleri',
      title1: 'İşinizi Geleceğe Taşıyan',
      titleHighlight: 'Özel Yazılım',
      title2: 've Yapay Zeka Çözümleri',
      subtitle: 'İhtiyacınıza özel ERP sistemlerinden yüksek performanslı web platformlarına kadar, dijital dönüşümünüzü uçtan uca yönetiyoruz.',
      ctaPrimary: 'Projenizi Başlatın',
      ctaSecondary: 'Çözümlerimizi İnceleyin',
      stat1Label: 'Verimlilik Artışı',
      stat1Value: '+%124',
      stat2Label: 'Yapay Zeka Verimliliği',
      stat2Value: '10x Hız',
      stat3Label: 'Sistem Sağlığı',
      carouselLabel: 'Operasyon vitrini',
      carouselPrevious: 'Önceki slayt',
      carouselNext: 'Sonraki slayt',
      carouselSlides: {
        results: {
          eyebrow: 'Vaka çalışması / NorthPeak Logistics',
          title: 'Operasyonu veriye dayalı bir sisteme dönüştürün.',
          description: 'ERP ve otomasyon altyapısıyla ekiplerin daha hızlı karar almasını sağlayan ölçülebilir dönüşüm.',
          visualLabel: 'Operasyonel verimlilik',
        },
        ai: {
          eyebrow: 'AI otomasyon katmanı',
          title: 'Tekrarlayan işleri akıllı akışlara bırakın.',
          description: 'LLM entegrasyonları ve süreç analiziyle ekibinizin zamanını gerçek iş değerine geri kazandırın.',
          visualLabel: 'AI verimlilik skoru',
        },
        stack: {
          eyebrow: 'Güvenilir mühendislik',
          title: 'Ölçeklenebilir altyapıyla güvenle büyüyün.',
          description: 'Modern cloud ve DevOps pratikleri, ürününüzün performansını ve sürekliliğini korur.',
          visualLabel: 'Sistem sağlığı',
        },
      },
    },
    services: {
      sectionTitle1: 'Uçtan Uca Dijital',
      sectionTitleHighlight: 'Mühendislik',
      sectionSubtitle: 'Geleceğin teknolojilerini bugünün iş ihtiyaçlarıyla buluşturuyoruz.',
      details: 'Detaylar',
      cards: [
        {
          title: 'Özel Web & Mobil Platformlar',
          description: 'Kullanıcı deneyimini odağa alan, yüksek performanslı ve ölçeklenebilir dijital çözümler.',
        },
        {
          title: 'Kurumsal ERP & CRM Sistemleri',
          description: 'Operasyonel mükemmellik için firmanıza özel terzi usulü yönetim platformları.',
        },
        {
          title: 'Özel Yazılım Geliştirme',
          description: 'Karmaşık iş süreçlerini kolaylaştıran, güvenli ve esnek yazılım mimarileri.',
        },
        {
          title: 'Yapay Zeka & Otomasyon',
          description: 'İş akışlarını otopilota alan akıllı algoritmalar ve LLM entegrasyonları.',
        },
      ],
    },
    ai: {
      engineLabel: 'Sartechs AI Engine Active',
      engineQuote: '"Süreç analizi tamamlandı. Operasyonel performans +%124 seviyesinde iyileştirildi."',
      title1: 'Yapay Zeka ile Süreçlerinizi',
      titleHighlight: 'Otopilota',
      title2: 'Alın',
      features: [
        {
          title: 'Akıllı Karar Mekanizmaları',
          description: 'Veri yığınlarını anlamlı içgörülere dönüştürerek stratejik kararlarınızı destekliyoruz.',
        },
        {
          title: 'Hızlandırılmış Operasyon',
          description: 'Tekrar eden görevleri otonom sistemlere devrederek ekibinizin yaratıcılığa odaklanmasını sağlıyoruz.',
        },
        {
          title: 'Öngörülebilir Güvenlik',
          description: 'Anomali tespiti ve proaktif savunma sistemleri ile verilerinizi en üst düzeyde koruyoruz.',
        },
      ],
    },
    stats: {
      reliability: 'Güvenilirlik',
      speed: 'Hız',
      bespoke: 'Özel Çözüm',
    },
    process: {
      title1: 'Mükemmelliğe Giden',
      titleHighlight: 'Yol',
      subtitle: 'Sistemli ve şeffaf çalışma modelimizle başarıyı garantiliyoruz.',
      steps: [
        { title: 'Analiz & Strateji',    description: 'İhtiyaçlarınızı derinlemesine inceliyor, yol haritasını belirliyoruz.' },
        { title: 'Mimari & UI/UX',       description: 'Estetiği fonksiyonla birleştiren, kullanıcı dostu arayüzler tasarlıyoruz.' },
        { title: 'Çevik Geliştirme',     description: 'Modern teknolojilerle güvenli ve ölçeklenebilir kod yazıyoruz.' },
        { title: 'Canlıya Alım & Destek', description: 'Projenizi yayınlıyor, süreklilik için teknik destek sağlıyoruz.' },
      ],
    },
    ecosystem: {
      title: 'Teknoloji Ekosistemimiz',
      subtitle: 'En son teknolojilerle güçlendirilmiş modern altyapı.',
      categoriesLabel: 'Teknoloji kategorileri',
      categoryAll: 'Tümü',
    },
    contact: {
      title1: 'Bir Sonraki',
      titleHighlight: 'Devriminizi',
      title2: 'Başlatalım',
      subtitle: 'Ekibimiz 24 saat içinde size özel bir strateji ile dönüş yapacaktır.',
      labelName: 'Ad Soyad',
      placeholderName: 'Ahmet Yılmaz',
      labelEmail: 'Şirket E-postası',
      placeholderEmail: 'ahmet@sirket.com',
      labelService: 'Hizmet Türü',
      labelDetails: 'Proje Detayları',
      placeholderDetails: 'Projenizden kısaca bahseder misiniz?',
      submit: 'TEKLİF TALEBİ GÖNDER',
      email: 'yusuf@sartechs.com',
      location: 'Türkiye / Uzaktan çalışma',
      quickContact: 'Hızlı iletişim için e-posta gönder',
      quickSubject: 'Acil proje görüşmesi',
      consent: 'Gizlilik Politikası ve KVKK aydınlatma metnini okudum, kişisel verilerimin teklif talebimi yanıtlamak amacıyla işlenmesini kabul ediyorum.',
      serviceOptions: [
        'Özel Yazılım Geliştirme',
        'Yapay Zeka Entegrasyonu',
        'Mobil Uygulama',
        'ERP & CRM Çözümleri',
      ],
    },
    footer: {
      tagline: 'Geleceğin teknolojilerini kullanarak işletmenizi dijital çağda zirveye taşıyoruz.',
      copyright: 'Sartechs. Tüm hakları saklıdır.',
      company: 'Şirket',
      support: 'Destek',
      companyLinks: [
        { label: 'Hizmetler', href: '#hizmetler' },
        { label: 'Süreç', href: '#surec' },
        { label: 'Projeler', href: '#projeler' },
      ],
      supportLinks: [
        { label: 'İletişim', href: '#iletisim' },
        { label: 'Gizlilik', href: '#gizlilik' },
        { label: 'KVKK', href: '#kvkk' },
      ],
      legalDocuments: [
        { id: 'gizlilik', title: 'Gizlilik Politikası', body: 'Teklif formunda paylaştığınız bilgiler yalnızca iletişim kurmak ve talebinizi değerlendirmek amacıyla işlenir. Verileriniz yetkisiz kişilerle paylaşılmaz.' },
        { id: 'cerez', title: 'Çerez Politikası', body: 'Bu tek sayfalık deneyim, zorunlu olmayan pazarlama çerezleri kullanmadan çalışır. Kullanılan teknik depolama, dil tercihi gibi temel deneyim ihtiyaçlarıyla sınırlıdır.' },
        { id: 'kvkk', title: 'KVKK Aydınlatma', body: '6698 sayılı Kanun kapsamındaki talepleriniz ve veri sahibi haklarınız için yusuf@sartechs.com adresinden bize ulaşabilirsiniz.' },
      ],
    },
    about: {
      title1: 'Biz',
      titleHighlight: 'Kimiz?',
      title2: '',
      subtitle: 'Sartechs, işletmelerin süreçlerini yeniden tasarlayan, özel yazılım ve yapay zeka mimarileri kuran bir teknoloji ortağıdır.',
      points: [
        'İş kritikliği yüksek sistemler için net mimari ve güvenli geliştirme yaklaşımı.',
        'Kurumsal operasyonları dönüştüren ERP, otomasyon ve dijital platform çözümleri.',
        'İster ürün, ister operasyonel akış olsun; her adımda teknik ve iş odaklı ekip desteği.',
      ],
      techs: ['Node.js', 'Vue', 'Spring Boot', 'PostgreSQL', 'Docker', 'LLM'],
      card: {
        label: 'Müşteriler neden bizi seçer',
        title: 'Strateji, ürün ve teslimat',
        items: [
          {
            title: 'İş odaklı düşünme',
            description: 'İş süreçlerini teknolojiyle değil, iş değeriyle eşleştirerek çözümler üretiyoruz.'
          },
          {
            title: 'Net ve güvenli yürütme',
            description: 'Mimari, geliştirme ve yayın sonrası süreçlerde net iletişim ve güvenli ilerleme sağlıyoruz.'
          },
          {
            title: 'Modern mühendislik ekosistemi',
            description: ''
          }
        ]
      }
    },
    projects: {
      title1: 'Önceki',
      titleHighlight: 'Başarı Hikâyeleri',
      title2: '',
      subtitle: 'Yüksek güven gerektiren iş akışlarında, özel yazılım ve AI çözümleriyle ölçülebilir sonuçlar üretiyoruz.',
      items: [
        { name: 'NorthPeak Logistics', metric: '+42% operasyonel verimlilik', problem: 'Dağınık operasyon verileri ve manuel planlama.', solution: 'ERP, iş akışı otomasyonu ve merkezi raporlama.', result: '+42% operasyonel verimlilik.' },
        { name: 'VerdeOne', metric: '3x daha hızlı ekip koordinasyonu', problem: 'Ekipler arası bilgi akışı ve müşteri takibi kopuktu.', solution: 'İç operasyon paneli ve birleşik müşteri akışı.', result: '3x daha hızlı ekip koordinasyonu.' },
        { name: 'HelioOps', metric: '+68% müşteri yanıt hızı', problem: 'Destek talepleri önceliklendirilemeden birikiyordu.', solution: 'AI destekli sınıflandırma, yanıt ve yönetişim sistemi.', result: '+68% müşteri yanıt hızı.' },
      ],
    },
    faq: {
      title1: 'Sıkça Sorulan',
      titleHighlight: 'Sorular',
      title2: '',
      subtitle: 'Fiyatlandırma, sözleşme, destek ve daha fazlasını öğrenin.',
      items: [
        {
          question: 'Fiyatlandırma nasıl belirleniyor?',
          answer: 'Fiyatlandırma her projenin kapsamı, karmaşıklığı ve ihtiyaçlarına göre belirlenir. İlk danışmamızda projenizi ayrıntılı anlar, teknik gereksinimleri değerlendiririz ve size şeffaf bir fiyat teklifi sunarız. Sabit fiyat modeli veya zaman ve malzeme bazlı modeller arasında seçim yapabilirsiniz.'
        },
        {
          question: 'Sözleşme süreçleri nasıl işliyor?',
          answer: 'Proje başlamadan önce kapsamı, zaman çizelgesi, ödemeler ve sorumluluklarını tanımlamış Hizmet Sözleşmesi imzalıyoruz. Her aşama net, ilerleme düzenli raporlama ile takip edilir. Değişiklik talepleri resmi taleplerle yönetilir ve bütçe etkilemeleri beraber değerlendirilir.'
        },
        {
          question: 'Bakım ve destek hizmeti nasıl veriliyor?',
          answer: 'Proje tamamlandıktan sonra, devam eden teknik destek paketleri sunuyoruz. Hata düzeltmeleri, performans iyileştirmeleri ve gerekli güncellemeler, seçtiğiniz destek seviyesine göre sağlanır. 24 saat içinde yanıt vermeyi hedefleyen acil sorunlar ve planlı bakım seansları yapılır.'
        },
        {
          question: 'Proje süresi ne kadar sürer?',
          answer: 'Proje süresi kapsamına bağlıdır. Basit web platformları 2-3 ay, ERP sistemleri 4-8 ay, kompleks AI entegrasyonları 3-6 ay sürebilir. Başlangıçta size bağlayıcı bir zaman çizelgesi sunuyoruz ve Çevik metodoloji ile iki haftalık sprint döngüleriyle ilerleriz.'
        },
        {
          question: 'Teknoloji seçiminde esneklik var mı?',
          answer: 'Evet. İş gereksinimlerinize ve ekip yetkinliklerine en iyi uygun teknolojiyi birlikte seçeriz. Node.js, Vue.js, React, Spring Boot, PostgreSQL, MongoDB gibi çeşitli stack\'ler konusunda deneyimli olup, sizin kurumsal tercihleri de göz önüne alırız.'
        },
        {
          question: 'Verilerimiz güvende midir?',
          answer: 'Güvenlik bizim en üst önceliğimizdir. Şifreli iletişim, güvenli kimlik doğrulama, düzenli güvenlik denetimleri ve GDPR/KVKK uyumluluğu sağlıyoruz. Verileri güvenli bulut altyapılarında barındırırız ve yedekleme stratejileriyle uzun vadeli koruma yapıyoruz.'
        },
      ],
    },
  },

  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      projects: 'Projects',
      about: 'About',
      cta: 'Get a Quote',
    },
    hero: {
      badge: 'Custom Software & AI Solutions',
      title1: 'Custom Software',
      titleHighlight: '& AI Solutions',
      title2: 'That Drive Your Business Forward',
      subtitle: 'From tailor-made ERP systems to high-performance web platforms, we manage your digital transformation end-to-end.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'Explore Our Solutions',
      stat1Label: 'Performance Lift',
      stat1Value: '+124%',
      stat2Label: 'AI Efficiency',
      stat2Value: '10x Speed',
      stat3Label: 'System Health',
      carouselLabel: 'Operations showcase',
      carouselPrevious: 'Previous slide',
      carouselNext: 'Next slide',
      carouselSlides: {
        results: {
          eyebrow: 'Case study / NorthPeak Logistics',
          title: 'Turn operations into a data-led system.',
          description: 'A measurable transformation helping teams make faster decisions through ERP and workflow automation.',
          visualLabel: 'Operational efficiency',
        },
        ai: {
          eyebrow: 'AI automation layer',
          title: 'Let intelligent workflows handle the repetitive work.',
          description: 'Give your team time back with process analysis and LLM integrations built around real business value.',
          visualLabel: 'AI efficiency score',
        },
        stack: {
          eyebrow: 'Reliable engineering',
          title: 'Scale with infrastructure you can trust.',
          description: 'Modern cloud and DevOps practices keep your product performant, resilient, and ready to grow.',
          visualLabel: 'System health',
        },
      },
    },
    services: {
      sectionTitle1: 'End-to-End Digital',
      sectionTitleHighlight: 'Engineering',
      sectionSubtitle: 'Bridging tomorrow\'s technologies with today\'s business needs.',
      details: 'Details',
      cards: [
        {
          title: 'Custom Web & Mobile Platforms',
          description: 'High-performance, scalable digital solutions focused on user experience.',
        },
        {
          title: 'Enterprise ERP & CRM Systems',
          description: 'Tailor-made management platforms for operational excellence.',
        },
        {
          title: 'Custom Software Development',
          description: 'Secure and flexible software architectures that streamline complex workflows.',
        },
        {
          title: 'AI & Automation',
          description: 'Intelligent algorithms and LLM integrations that put workflows on autopilot.',
        },
      ],
    },
    ai: {
      engineLabel: 'Sartechs AI Engine Active',
      engineQuote: '"Process analysis complete. Operational performance improved by 124%."',
      title1: 'Put Your Processes on',
      titleHighlight: 'Autopilot',
      title2: 'with AI',
      features: [
        {
          title: 'Intelligent Decision Engines',
          description: 'We turn data mountains into meaningful insights that support your strategic decisions.',
        },
        {
          title: 'Accelerated Operations',
          description: 'By delegating repetitive tasks to autonomous systems, we free your team to focus on creativity.',
        },
        {
          title: 'Predictive Security',
          description: 'Anomaly detection and proactive defense systems keep your data protected at the highest level.',
        },
      ],
    },
    stats: {
      reliability: 'Reliability',
      speed: 'Speed',
      bespoke: 'Bespoke',
    },
    process: {
      title1: 'The Road to',
      titleHighlight: 'Excellence',
      subtitle: 'We guarantee success with our systematic and transparent working model.',
      steps: [
        { title: 'Analysis & Strategy',  description: 'We deeply examine your needs and define the roadmap.' },
        { title: 'Architecture & UI/UX', description: 'We design user-friendly interfaces that unite aesthetics and function.' },
        { title: 'Agile Development',    description: 'We write secure, scalable code with modern technologies.' },
        { title: 'Launch & Support',     description: 'We deploy your project and provide ongoing technical support.' },
      ],
    },
    ecosystem: {
      title: 'Our Technology Ecosystem',
      subtitle: 'Modern infrastructure powered by the latest technologies.',
      categoriesLabel: 'Technology categories',
      categoryAll: 'All',
    },
    contact: {
      title1: "Let's Kick Off Your",
      titleHighlight: 'Next Revolution',
      title2: '',
      subtitle: 'Our team will get back to you within 24 hours with a tailored strategy.',
      labelName: 'Full Name',
      placeholderName: 'John Doe',
      labelEmail: 'Company Email',
      placeholderEmail: 'john@company.com',
      labelService: 'Service Type',
      labelDetails: 'Project Details',
      placeholderDetails: 'Tell us a bit about your project.',
      submit: 'SEND QUOTE REQUEST',
      email: 'yusuf@sartechs.com',
      location: 'Türkiye / Remote delivery',
      quickContact: 'Email us for an urgent conversation',
      quickSubject: 'Urgent project conversation',
      consent: 'I have read the Privacy Policy and KVKK notice, and I consent to the processing of my personal data to respond to my quote request.',
      serviceOptions: [
        'Custom Software Development',
        'AI Integration',
        'Mobile Application',
        'ERP & CRM Solutions',
      ],
    },
    footer: {
      tagline: 'Leveraging tomorrow\'s technologies to elevate your business in the digital age.',
      copyright: 'Sartechs. All rights reserved.',
      company: 'Company',
      support: 'Support',
      companyLinks: [
        { label: 'Services', href: '#hizmetler' },
        { label: 'Process', href: '#surec' },
        { label: 'Projects', href: '#projeler' },
      ],
      supportLinks: [
        { label: 'Contact', href: '#iletisim' },
        { label: 'Privacy', href: '#gizlilik' },
        { label: 'KVKK', href: '#kvkk' },
      ],
      legalDocuments: [
        { id: 'gizlilik', title: 'Privacy Policy', body: 'Information shared through the quote form is processed only to contact you and evaluate your request. We do not share it with unauthorized parties.' },
        { id: 'cerez', title: 'Cookie Policy', body: 'This single-page experience works without non-essential marketing cookies. Technical storage is limited to core experience needs such as language preference.' },
        { id: 'kvkk', title: 'KVKK Notice', body: 'For data subject requests under Turkish data protection law, contact us at yusuf@sartechs.com.' },
      ],
    },
    about: {
      title1: 'Who',
      titleHighlight: 'We Are',
      title2: '',
      subtitle: 'Sartechs is a technology partner that redesigns business operations through custom software and AI architectures.',
      points: [
        'Clear architecture and secure delivery for high-impact business systems.',
        'ERP, automation, and digital platform solutions that transform operations.',
        'Hands-on technical partnership from strategy to production support.',
      ],
      techs: ['Node.js', 'Vue', 'Spring Boot', 'PostgreSQL', 'Docker', 'LLM'],
      card: {
        label: 'Why clients choose us',
        title: 'Strategy, product and delivery',
        items: [
          {
            title: 'Business-first thinking',
            description: 'We design solutions by aligning processes with business value, not just technology.'
          },
          {
            title: 'Clear execution',
            description: 'We maintain transparent communication and safe delivery across architecture, development, and post-launch support.'
          },
          {
            title: 'Modern engineering stack',
            description: ''
          }
        ]
      }
    },
    projects: {
      title1: 'Selected',
      titleHighlight: 'Success Stories',
      title2: '',
      subtitle: 'We deliver measurable business outcomes with custom software and AI systems built for operational resilience.',
      items: [
        { name: 'NorthPeak Logistics', metric: '+42% operational efficiency', problem: 'Fragmented operations data and manual planning.', solution: 'ERP, workflow automation, and centralized reporting.', result: '+42% operational efficiency.' },
        { name: 'VerdeOne', metric: '3x faster team coordination', problem: 'Team information flow and customer follow-up were disconnected.', solution: 'Internal operations panel and unified customer journey.', result: '3x faster team coordination.' },
        { name: 'HelioOps', metric: '+68% response speed', problem: 'Support requests accumulated without prioritization.', solution: 'AI-assisted classification, response, and governance platform.', result: '+68% response speed.' },
      ],
    },
    faq: {
      title1: 'Frequently Asked',
      titleHighlight: 'Questions',
      title2: '',
      subtitle: 'Learn about pricing, contracts, support, and more.',
      items: [
        {
          question: 'How is pricing determined?',
          answer: 'Pricing is tailored to your project scope, complexity, and requirements. During our initial consultation, we understand your project in detail, assess technical needs, and provide a transparent quote. You can choose between fixed-price or time-and-materials models.'
        },
        {
          question: 'How do contract processes work?',
          answer: 'Before starting, we sign a Service Agreement that defines scope, timeline, payments, and responsibilities. Each phase is clear, and progress is tracked with regular reporting. Change requests are managed through formal requests, and budget impacts are discussed together.'
        },
        {
          question: 'How is maintenance and support service provided?',
          answer: 'After project completion, we offer ongoing technical support packages. Bug fixes, performance improvements, and necessary updates are provided based on your chosen support level. We aim to respond to critical issues within 24 hours and schedule regular maintenance sessions.'
        },
        {
          question: 'How long does a project typically take?',
          answer: 'Project duration depends on scope. Simple web platforms take 2-3 months, ERP systems 4-8 months, and complex AI integrations 3-6 months. We provide a binding timeline upfront and progress through two-week sprint cycles using Agile methodology.'
        },
        {
          question: 'Is there flexibility in technology choices?',
          answer: 'Absolutely. We select technologies that best fit your business requirements and team capabilities. We have experience with Node.js, Vue.js, React, Spring Boot, PostgreSQL, MongoDB, and many others, while also considering your organizational preferences.'
        },
        {
          question: 'Is our data secure?',
          answer: 'Security is our top priority. We provide encrypted communication, secure authentication, regular security audits, and GDPR/KVKK compliance. We host data on secure cloud infrastructure and implement backup strategies for long-term protection.'
        },
      ],
    },
  },
}

export function provideLocale() {
  const locale = ref('tr')
  provide(LOCALE_KEY, locale)
  return locale
}

export function useLocale() {
  const locale = inject(LOCALE_KEY)
  const t = (keyPath) => {
    const keys = keyPath.split('.')
    let val = messages[locale.value]
    for (const k of keys) {
      if (val == null) return keyPath
      val = val[k]
    }
    return val ?? keyPath
  }
  return { locale, t, messages }
}
