const translations = {
  "en": {
    "welcome_msg": "Welcome to AF Bazzar",
    "support_msg": "Support: help@academeforge.in",
    "promo_welcome": "Welcome",
    "promo_beta": "to the AF Bazzar Beta!",
    "promo_link": "Learn More!",
    "my_account": "My Account",
    "wishlist": "Wishlist",
    "login": "Login",
    "nav_home": "Home",
    "nav_shop": "Shop ▾",
    "nav_pages": "Pages ▾",
    "nav_digital": "Digital ▾",
    "nav_physical": "Physical ▾",
    "nav_blog": "Blog ▾",
    "hero_subtitle": "A Marketplace for Creators",
    "hero_title": "Everything you need, in one place!",
    "hero_desc": "Discover incredible digital and physical goods crafted by students and creators.",
    "btn_explore_digital": "Explore Digital",
    "btn_explore_physical": "Explore Physical",
    "feat_prod_title": "Featured Products",
    "empty_state_title": "No product from AcademeForge yet.",
    "empty_state_desc": "Stay tuned! We are currently stocking our inventory.",
    "why_choose_title": "Why Choose AF Bazzar",
    "feat_1_title": "Instant Delivery",
    "feat_1_desc": "Get seamless access to your digital purchases immediately.",
    "feat_2_title": "Secure Checkout",
    "feat_2_desc": "Your payment information is always encrypted and protected.",
    "feat_3_title": "Quality Guaranteed",
    "feat_3_desc": "Every product is verified by AcademeForge quality standards.",
    "footer_desc": "The definitive digital and physical marketplace crafted by AcademeForge.",
    "quick_links": "Quick Links",
    "about_us": "About Us",
    "contact": "Contact",
    "faq": "FAQ",
    "customer_service": "Customer Service",
    "delivery_policy": "Delivery Policy",
    "returns_exchanges": "Returns & Exchanges",
    "track_order": "Track Order",
    "copyright": "© 2026 AF Bazzar by AcademeForge. All rights reserved.",
    "modal_title": "We're still cooking!",
    "modal_desc": "We are still cooking for you, stay tuned.",
    "modal_ok": "OK",
    "powered_by": "Powered by AcademeForge",
    "lang_en": "Eng",
    "lang_hi": "Hin"
  },
  "hi": {
    "welcome_msg": "AF Bazzar में आपका स्वागत है",
    "support_msg": "सहायता: help@academeforge.in",
    "promo_welcome": "स्वागत है",
    "promo_beta": "AF Bazzar बीटा में!",
    "promo_link": "और जानें!",
    "my_account": "मेरा खाता",
    "wishlist": "विशलिस्ट",
    "login": "लॉग इन करें",
    "nav_home": "होम",
    "nav_shop": "शॉप ▾",
    "nav_pages": "पेज ▾",
    "nav_digital": "डिजिटल ▾",
    "nav_physical": "फिजिकल ▾",
    "nav_blog": "ब्लॉग ▾",
    "hero_subtitle": "क्रिएटर्स के लिए एक मार्केटप्लेस",
    "hero_title": "आपकी जरूरत की हर चीज, एक ही जगह पर!",
    "hero_desc": "छात्रों और क्रिएटर्स द्वारा तैयार किए गए बेहतरीन डिजिटल और फिजिकल सामान खोजें।",
    "btn_explore_digital": "डिजिटल एक्सप्लोर करें",
    "btn_explore_physical": "फिजिकल एक्सप्लोर करें",
    "feat_prod_title": "विशेष उत्पाद",
    "empty_state_title": "AcademeForge से अभी कोई उत्पाद नहीं है।",
    "empty_state_desc": "बने रहें! हम वर्तमान में अपनी इन्वेंट्री का स्टॉक कर रहे हैं।",
    "why_choose_title": "एएफ बाज़ार क्यों चुनें",
    "feat_1_title": "त्वरित वितरण",
    "feat_1_desc": "अपनी डिजिटल खरीदारी तक तुरंत और निर्बाध पहुंच प्राप्त करें।",
    "feat_2_title": "सुरक्षित चेकआउट",
    "feat_2_desc": "आपकी भुगतान जानकारी हमेशा एन्क्रिप्टेड और सुरक्षित रहती है।",
    "feat_3_title": "गुणवत्ता की गारंटी",
    "feat_3_desc": "प्रत्येक उत्पाद को AcademeForge गुणवत्ता मानकों द्वारा सत्यापित किया जाता है।",
    "footer_desc": "AcademeForge द्वारा तैयार किया गया अंतिम डिजिटल और फिजिकल मार्केटप्लेस।",
    "quick_links": "त्वरित लिंक",
    "about_us": "हमारे बारे में",
    "contact": "संपर्क करें",
    "faq": "सामान्य प्रश्न (FAQ)",
    "customer_service": "ग्राहक सेवा",
    "delivery_policy": "डिलीवरी नीति",
    "returns_exchanges": "रिटर्न और एक्सचेंज",
    "track_order": "ऑर्डर ट्रैक करें",
    "copyright": "© 2026 AcademeForge द्वारा AF Bazzar। सर्वाधिकार सुरक्षित।",
    "modal_title": "हम अभी भी काम कर रहे हैं!",
    "modal_desc": "हम आपके लिए अभी भी बना रहे हैं, कृपया प्रतीक्षा करें।",
    "modal_ok": "ठीक है",
    "powered_by": "Powered by AcademeForge",
    "lang_en": "Eng",
    "lang_hi": "Hin"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('af_bazzar_lang') || 'en';
  
  function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update specific document metadata if needed
    document.documentElement.lang = lang === 'en' ? 'en' : 'hi';
    
    // Update active state of language buttons
    const langBtns = document.querySelectorAll('.lang-switcher');
    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active-lang');
      } else {
        btn.classList.remove('active-lang');
      }
    });
  }

  // Initial application
  applyLanguage(currentLang);

  // Bind click events to language switchers
  const langSwitchers = document.querySelectorAll('.lang-switcher');
  langSwitchers.forEach(switcher => {
    switcher.addEventListener('click', (e) => {
      e.preventDefault();
      // Dropdown toggle logic
      const dropdown = switcher.nextElementSibling;
      if (dropdown && dropdown.classList.contains('lang-dropdown')) {
         dropdown.classList.toggle('show');
      }
    });
  });

  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
       e.preventDefault();
       const selectedLang = option.getAttribute('data-lang');
       localStorage.setItem('af_bazzar_lang', selectedLang);
       applyLanguage(selectedLang);
       
       // Update the main button text
       const mainBtnText = document.getElementById('current-lang-text');
       if(mainBtnText) {
          mainBtnText.textContent = selectedLang === 'en' ? 'Eng ▾' : 'Hin ▾';
       }

       // Hide dropdowns
       document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('show'));
    });
  });
  
  // Set initial button text correctly
  const mainBtnText = document.getElementById('current-lang-text');
  if(mainBtnText) {
    mainBtnText.textContent = currentLang === 'en' ? 'Eng ▾' : 'Hin ▾';
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.lang-selector')) {
       document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('show'));
    }
  });

});
