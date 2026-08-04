import { ref, provide, inject } from 'vue'

export const LOCALE_KEY = Symbol('locale')

export const messages = {
  tr: {
    nav: {
      services: 'Hizmetler',
      process: 'Süreç',
      projects: 'Projeler',
      cta: 'Teklif Al',
    },
    hero: {
      badge: 'Bespoke Software & Custom AI Solutions',
      title1: 'İşinizi Geleceğe Taşıyan',
      titleHighlight: 'Özel Yazılım',
      title2: 've Yapay Zeka Çözümleri',
      subtitle: 'İhtiyacınıza özel ERP sistemlerinden yüksek performanslı web platformlarına kadar, dijital dönüşümünüzü uçtan uca yönetiyoruz.',
      ctaPrimary: 'Projenizi Başlatın',
      ctaSecondary: 'Çözümlerimizi İnceleyin',
      stat1Label: 'Aktif Süreçler',
      stat2Label: 'Yapay Zeka Verimliliği',
      stat2Value: '10x Hız',
      stat3Label: 'Sistem Sağlığı',
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
      engineQuote: '"Süreç analizi tamamlandı. Verimlilik %85 oranında optimize edildi."',
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
      serviceOptions: [
        'Özel Yazılım Geliştirme',
        'Yapay Zeka Entegrasyonu',
        'Mobil Uygulama',
        'ERP & CRM Çözümleri',
      ],
    },
    footer: {
      tagline: 'Geleceğin teknolojilerini kullanarak işletmenizi dijital çağda zirveye taşıyoruz.',
      copyright: '© 2024 Sartechs. Tüm hakları saklıdır.',
      company: 'Şirket',
      support: 'Destek',
      companyLinks: ['Hizmetler', 'Süreç', 'Projeler'],
      supportLinks: ['İletişim', 'Kariyer', 'Blog'],
    },
  },

  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      projects: 'Projects',
      cta: 'Get a Quote',
    },
    hero: {
      badge: 'Bespoke Software & Custom AI Solutions',
      title1: 'Custom Software',
      titleHighlight: '& AI Solutions',
      title2: 'That Drive Your Business Forward',
      subtitle: 'From tailor-made ERP systems to high-performance web platforms, we manage your digital transformation end-to-end.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'Explore Our Solutions',
      stat1Label: 'Active Processes',
      stat2Label: 'AI Efficiency',
      stat2Value: '10x Speed',
      stat3Label: 'System Health',
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
      engineQuote: '"Process analysis complete. Efficiency optimized by 85%."',
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
      serviceOptions: [
        'Custom Software Development',
        'AI Integration',
        'Mobile Application',
        'ERP & CRM Solutions',
      ],
    },
    footer: {
      tagline: 'Leveraging tomorrow\'s technologies to elevate your business in the digital age.',
      copyright: '© 2024 Sartechs. All rights reserved.',
      company: 'Company',
      support: 'Support',
      companyLinks: ['Services', 'Process', 'Projects'],
      supportLinks: ['Contact', 'Careers', 'Blog'],
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
