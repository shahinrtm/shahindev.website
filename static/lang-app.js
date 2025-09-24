(function () {
    const storageKey = 'preferredLanguage';

    function getStorage() {
        try {
            return window.localStorage;
        } catch (error) {
            return null;
        }
    }

    const copy = {
            "nav": {
                "services": {
                    "en": "Services",
                    "fa": "خدمات"
                },
                "projects": {
                    "en": "Projects",
                    "fa": "نمونه‌کارها"
                },
                "process": {
                    "en": "Process",
                    "fa": "فرایند"
                },
                "testimonials": {
                    "en": "Testimonials",
                    "fa": "دیدگاه مشتریان"
                },
                "contact": {
                    "en": "Contact",
                    "fa": "ارتباط"
                },
                "cta": {
                    "en": "Let's talk",
                    "fa": "بیایید گفت‌وگو کنیم"
                }
            },
            "hero": {
                "badge": {
                    "en": "Digital experience design",
                    "fa": "طراحی تجربه‌های دیجیتال"
                },
                "headlinePrimary": {
                    "en": "Premium web products that convert.",
                    "fa": "محصولات وبِ درجه‌یک با نرخ تبدیل بالا."
                },
                "headlineAccent": {
                    "en": "Crafted for bold businesses.",
                    "fa": "برای کسب‌وکارهای جسور."
                },
                "blurb": {
                    "en": "Shahin Developer partners with visionary teams to design, build, and scale digital experiences that feel effortless. We merge research-driven strategy, polished UI engineering, and modern aesthetics to accelerate your growth.",
                    "fa": "شاهین دولوپر با تیم‌های آینده‌نگر همکاری می‌کند تا تجربه‌های دیجیتالی روان را طراحی، توسعه و مقیاس دهد. با ترکیب استراتژی مبتنی بر پژوهش، مهندسی دقیق رابط کاربری و زیباشناسی مدرن، به رشد شما شتاب می‌دهیم."
                },
                "primaryCta": {
                    "en": "Explore projects",
                    "fa": "مشاهده‌ی نمونه‌کارها"
                },
                "secondaryCta": {
                    "en": "Schedule a call",
                    "fa": "هماهنگی تماس"
                },
                "stats": [
                    {
                        "value": {
                            "en": "8+",
                            "fa": "۸+"
                        },
                        "label": {
                            "en": "Years shipping UI",
                            "fa": "سال تجربه در ساخت رابط کاربری"
                        }
                    },
                    {
                        "value": {
                            "en": "45+",
                            "fa": "۴۵+"
                        },
                        "label": {
                            "en": "Products delivered",
                            "fa": "محصولات تحویل‌داده‌شده"
                        }
                    },
                    {
                        "value": {
                            "en": "92%",
                            "fa": "۹۲٪"
                        },
                        "label": {
                            "en": "Repeat partnerships",
                            "fa": "همکاری‌های دوباره"
                        }
                    },
                    {
                        "value": {
                            "en": "24/7",
                            "fa": "۲۴/۷"
                        },
                        "label": {
                            "en": "Launch support",
                            "fa": "پشتیبانی راه‌اندازی"
                        }
                    }
                ],
                "feature": {
                    "label": {
                        "en": "Feature Project",
                        "fa": "پروژه شاخص"
                    },
                    "year": {
                        "en": "2025",
                        "fa": "۲۰۲۵"
                    },
                    "title": {
                        "en": "jib.plus - Gift Cards",
                        "fa": "jib.plus - کارت هدیه"
                    },
                    "body": {
                        "en": "Automated identity verification, instant delivery, and a brand system that elevates trust for global shoppers.",
                        "fa": "احراز هویت خودکار، تحویل آنی و سیستم برندِ یکپارچه که اعتماد خریداران بین‌المللی را تقویت می‌کند."
                    },
                    "cta": {
                        "en": "Visit website",
                        "fa": "بازدید از وب‌سایت"
                    }
                }
            },
            "services": {
                "tag": {
                    "en": "Services",
                    "fa": "خدمات"
                },
                "title": {
                    "en": "End-to-end digital craftsmanship",
                    "fa": "طراحی و توسعه‌ی یکپارچهٔ دیجیتال"
                },
                "blurb": {
                    "en": "We shape future-proof products with conversion-focused UX, modern engineering, and brand systems that stand out across every screen.",
                    "fa": "با UX متمرکز بر تبدیل، مهندسی مدرن و سیستم‌های برند متمایز، محصولاتی آینده‌محور می‌سازیم."
                },
                "cards": [
                    {
                        "title": {
                            "en": "Product Strategy & Research",
                            "fa": "استراتژی و پژوهش محصول"
                        },
                        "body": {
                            "en": "Customer interviews, positioning, and data-backed playbooks that clarify what to build and why it matters.",
                            "fa": "مصاحبه با مشتری، تعیین جایگاه و راهنماهای عملی مبتنی بر داده که روشن می‌کند چه بسازیم و چرا مهم است."
                        },
                        "bullets": [
                            {
                                "en": "- Discovery & market fit",
                                "fa": "- کشف مسئله و تناسب بازار"
                            },
                            {
                                "en": "- CX mapping",
                                "fa": "- نقشه سفر مشتری"
                            },
                            {
                                "en": "- Growth & analytics setup",
                                "fa": "- راه‌اندازی زیرساخت تحلیل و رشد"
                            }
                        ]
                    },
                    {
                        "title": {
                            "en": "Interface & Experience Design",
                            "fa": "طراحی رابط و تجربه"
                        },
                        "body": {
                            "en": "Tailored design systems, micro-interactions, and high-fidelity prototypes that make your brand unforgettable.",
                            "fa": "سیستم‌های طراحی اختصاصی، ریزتعامل‌ها و نمونه‌های اولیه با جزئیات بالا که برندتان را ماندگار می‌کند."
                        },
                        "bullets": [
                            {
                                "en": "- Responsive UI systems",
                                "fa": "- سیستم‌های رابط کاربری واکنش‌گرا"
                            },
                            {
                                "en": "- Interactive prototyping",
                                "fa": "- نمونه‌سازی تعاملی"
                            },
                            {
                                "en": "- Brand visual identity",
                                "fa": "- هویت بصری برند"
                            }
                        ]
                    },
                    {
                        "title": {
                            "en": "Development & Launch",
                            "fa": "توسعه و راه‌اندازی"
                        },
                        "body": {
                            "en": "Production-grade engineering, performance tuning, and support to launch fast with confidence.",
                            "fa": "مهندسی در سطح تولید، بهینه‌سازی عملکرد و پشتیبانی تا با اطمینان سریع راه‌اندازی کنید."
                        },
                        "bullets": [
                            {
                                "en": "- Front-end engineering",
                                "fa": "- مهندسی سمت کاربر"
                            },
                            {
                                "en": "- CMS & e-commerce builds",
                                "fa": "- سامانه‌های مدیریت محتوا و فروشگاه اینترنتی"
                            },
                            {
                                "en": "- QA + performance audits",
                                "fa": "- تضمین کیفیت و بهینه‌سازی عملکرد"
                            }
                        ]
                    }
                ]
            },
            "projects": {
                "tag": {
                    "en": "Projects",
                    "fa": "پروژه‌ها"
                },
                "title": {
                    "en": "Selected launches & experiments",
                    "fa": "راه‌اندازی‌ها و تجربه‌های منتخب"
                },
                "blurb": {
                    "en": "Every engagement is tailored for measurable outcomes—conversion lifts, faster onboarding, and experiences your community loves sharing.",
                    "fa": "هر همکاری برای نتایج قابل اندازه‌گیری شکل می‌گیرد؛ افزایش تبدیل، کوتاه‌تر شدن فرایند آغاز کار و تجربه‌هایی که جامعهٔ شما دوست دارد به اشتراک بگذارد."
                },
                "cta": {
                    "en": "Request case study",
                    "fa": "درخواست مطالعهٔ موردی"
                },
                "cards": [
                    {
                        "badge": {
                            "en": "Scale",
                            "fa": "مقیاس"
                        },
                        "title": {
                            "en": "jib.plus - Gift card marketplace",
                            "fa": "jib.plus - بازار کارت هدیه"
                        },
                        "body": {
                            "en": "E-commerce experience with automated compliance, custom CMS, and 42% uplift in repeat purchases.",
                            "fa": "تجربهٔ تجارت الکترونیک با رعایت خودکار مقررات، CMS سفارشی و رشد ۴۲٪ در خریدهای تکراری."
                        },
                        "tags": [
                            "Next.js",
                            "Branding",
                            "Automation"
                        ]
                    },
                    {
                        "badge": {
                            "en": "In progress",
                            "fa": "در حال انجام"
                        },
                        "timeline": {
                            "en": "Q3 2025",
                            "fa": "سه‌ماههٔ سوم ۲۰۲۵"
                        },
                        "title": {
                            "en": "AI Customer Concierge",
                            "fa": "دستیار هوشمند مشتری"
                        },
                        "body": {
                            "en": "Conversational AI playbooks for hospitality with seamless POS integrations and analytics dashboards.",
                            "fa": "راهنماهای عملی گفت‌وگومحور برای صنعت مهمان‌نوازی با یکپارچه‌سازی روان با سامانه‌های فروش (POS) و داشبوردهای تحلیلی."
                        },
                        "tags": [
                            "Design System",
                            "AI",
                            "Dashboard"
                        ]
                    },
                    {
                        "badge": {
                            "en": "Opportunity",
                            "fa": "فرصت"
                        },
                        "timeline": {
                            "en": "Available",
                            "fa": "آمادهٔ همکاری"
                        },
                        "title": {
                            "en": "Your next launch",
                            "fa": "راه‌اندازی بعدی شما"
                        },
                        "body": {
                            "en": "Ready to co-create a flagship experience? We build high-converting SaaS dashboards, e-commerce flows, and immersive marketing sites.",
                            "fa": "آماده‌اید یک تجربهٔ شاخص بسازیم؟ داشبوردهای SaaS با نرخ تبدیل بالا، فرایندهای تجارت الکترونیک و وب‌سایت‌های بازاریابی تعاملی می‌سازیم."
                        },
                        "bullets": [
                            {
                                "en": "- 3-week design sprints",
                                "fa": "- اسپرینت‌های طراحی سه‌هفته‌ای"
                            },
                            {
                                "en": "- Embedded dev team",
                                "fa": "- تیم توسعهٔ همراه شما"
                            },
                            {
                                "en": "- Growth analytics baked in",
                                "fa": "- تحلیل رشد در بطن محصول"
                            }
                        ]
                    }
                ]
            },
            "process": {
                "tag": {
                    "en": "Process",
                    "fa": "فرایند"
                },
                "title": {
                    "en": "A rhythm built for momentum",
                    "fa": "ریتمی برای حفظ شتاب"
                },
                "blurb": {
                    "en": "We plug into your team, run fast discovery, and avoid handoffs through a shared workflow. Expect clarity, transparency, and a partner that ships.",
                    "fa": "به تیم شما وصل می‌شویم، کشف سریع انجام می‌دهیم و با گردش‌کار مشترک از دست‌به‌دست‌شدن‌های اضافی جلوگیری می‌کنیم. انتظار شفافیت، سرعت و شریکی که به‌موقع تحویل می‌دهد داشته باشید."
                },
                "steps": [
                    {
                        "index": {
                            "en": "01",
                            "fa": "۰۱"
                        },
                        "title": {
                            "en": "Discover & align",
                            "fa": "کشف و هم‌راستاسازی"
                        },
                        "body": {
                            "en": "Stakeholder interviews, success metrics, and competitive research align the roadmap around what moves the needle.",
                            "fa": "مصاحبه با ذی‌نفعان، سنجه‌های موفقیت و بررسی رقبا نقشهٔ راه را حول محرک‌های اثرگذار همراستا می‌کند."
                        },
                        "bullets": [
                            {
                                "en": "- Kickoff workshops",
                                "fa": "- کارگاه آغاز"
                            },
                            {
                                "en": "- Brand & UX audit",
                                "fa": "- ارزیابی برند و UX"
                            },
                            {
                                "en": "- Success metric stack",
                                "fa": "- مجموعه سنجه‌های موفقیت"
                            }
                        ]
                    },
                    {
                        "index": {
                            "en": "02",
                            "fa": "۰۲"
                        },
                        "title": {
                            "en": "Design & iterate",
                            "fa": "طراحی و تکرار"
                        },
                        "body": {
                            "en": "Rapid ideation, design sprints, and weekly stakeholder reviews keep momentum high and feedback actionable.",
                            "fa": "ایده‌پردازی سریع، اسپرینت‌های طراحی و بازنگری هفتگی ذی‌نفعان شتاب را حفظ می‌کند و بازخورد را قابل اجرا می‌سازد."
                        },
                        "bullets": [
                            {
                                "en": "- Live Figma delivery",
                                "fa": "- تحویل زنده در فیگما"
                            },
                            {
                                "en": "- Interactive prototypes",
                                "fa": "- نمونه‌های اولیه تعاملی"
                            },
                            {
                                "en": "- Usability validations",
                                "fa": "- اعتبارسنجی قابلیت استفاده"
                            }
                        ]
                    },
                    {
                        "index": {
                            "en": "03",
                            "fa": "۰۳"
                        },
                        "title": {
                            "en": "Build & launch",
                            "fa": "ساخت و راه‌اندازی"
                        },
                        "body": {
                            "en": "Rigorous front-end builds, QA automation, and launch war rooms ensure your go-live is fast, stable, and measurable.",
                            "fa": "پیاده‌سازی دقیق فرانت‌اند، خودکارسازی تضمین کیفیت و اتاق وضعیت راه‌اندازی، انتشار سریع، پایدار و قابل سنجش را تضمین می‌کند."
                        },
                        "bullets": [
                            {
                                "en": "- Engineering & QA",
                                "fa": "- مهندسی و تضمین کیفیت"
                            },
                            {
                                "en": "- Performance tuning",
                                "fa": "- تنظیم عملکرد"
                            },
                            {
                                "en": "- Growth analytics",
                                "fa": "- تحلیل رشد"
                            }
                        ]
                    }
                ]
            },
            "testimonials": {
                "tag": {
                    "en": "Testimonials",
                    "fa": "دیدگاه مشتریان"
                },
                "title": {
                    "en": "Trusted by founders & growth teams",
                    "fa": "مورد اعتماد بنیان‌گذاران و تیم‌های رشد"
                },
                "blurb": {
                    "en": "We build partnerships that feel like an in-house team—transparent, proactive, and focused on measurable impact.",
                    "fa": "شراکت‌هایی می‌سازیم که شبیه تیم داخلی شماست؛ شفاف، پیش‌قدم و متمرکز بر اثر قابل اندازه‌گیری."
                },
                "items": [
                    {
                        "name": {
                            "en": "Neda Farhadi",
                            "fa": "ندا فرهادی"
                        },
                        "role": {
                            "en": "CEO, Lumen Commerce",
                            "fa": "مدیرعامل، لومن کامرس"
                        },
                        "quote": {
                            "en": "\"From the first roadmap session, Shahin's team felt embedded. They launched our new storefront in four weeks and lifted conversion by 38%. Their attention to detail and responsiveness is rare.\"",
                            "fa": "«از نخستین جلسهٔ نقشهٔ راه، تیم شاهین انگار عضوی از تیم ما بود. فروشگاه جدید را در چهار هفته راه‌اندازی کردند و نرخ تبدیل را ۳۸٪ افزایش دادند. دقت و پاسخ‌گویی‌شان کم‌نظیر است.»"
                        }
                    },
                    {
                        "name": {
                            "en": "Arman Jalili",
                            "fa": "آرمان جلیلی"
                        },
                        "role": {
                            "en": "Head of Product, Nova AI",
                            "fa": "رئیس محصول، نوا AI"
                        },
                        "quote": {
                            "en": "\"They translated complex AI workflows into onboarding flows our customers loved. Weekly demos, crisp documentation, and zero surprises on launch day.\"",
                            "fa": "«جریان‌های پیچیدهٔ هوش مصنوعی را به مسیرهای ورود کاربر تبدیل کردند که مشتریان واقعاً دوست داشتند. دموهای هفتگی، مستندسازی شفاف و بدون هیچ غافلگیری در روز راه‌اندازی.»"
                        }
                    }
                ]
            },
            "contact": {
                "tag": {
                    "en": "Contact",
                    "fa": "ارتباط"
                },
                "title": {
                    "en": "Let's orchestrate your next big launch",
                    "fa": "بیایید راه‌اندازی بزرگ بعدی شما را هماهنگ کنیم"
                },
                "blurb": {
                    "en": "Tell us about the challenge you are solving—product redesign, brand refresh, or growth experiment. We respond within 24 hours with next steps.",
                    "fa": "بگویید با چه چالشی روبه‌رو هستید—بازطراحی محصول، نوسازی برند یا آزمایش رشد. ظرف ۲۴ ساعت با گام‌های بعدی پاسخ می‌دهیم."
                },
                "emailLabel": {
                    "en": "info@shahindev.com",
                    "fa": "info@shahindev.com"
                },
                "socials": {
                    "twitter": {
                        "en": "Twitter",
                        "fa": "توییتر"
                    },
                    "instagram": {
                        "en": "Instagram",
                        "fa": "اینستاگرام"
                    }
                },
                "panelTitle": {
                    "en": "Project kickoff essentials",
                    "fa": "ملزومات آغاز پروژه"
                },
                "panelBody": {
                    "en": "Share your vision, key metrics, timeline, and stakeholders. We will craft a tailored roadmap and team setup within two business days.",
                    "fa": "چشم‌انداز، شاخص‌های کلیدی، زمان‌بندی و ذی‌نفعان را با ما به اشتراک بگذارید. ظرف دو روز کاری نقشه راه و ترکیب تیم متناسب را آماده می‌کنیم."
                },
                "panelBullets": [
                    {
                        "en": "- Strategic workshop (remote or on-site)",
                        "fa": "- کارگاه راهبردی (حضوری یا آنلاین)"
                    },
                    {
                        "en": "- Team augmentation or full delivery",
                        "fa": "- تقویت تیم یا تحویل کامل"
                    },
                    {
                        "en": "- Transparent weekly reporting",
                        "fa": "- گزارش‌دهی هفتگی شفاف"
                    }
                ],
                "panelCta": {
                    "en": "Book a discovery call",
                    "fa": "رزرو جلسهٔ آشنایی"
                }
            },
            "footer": {
                "brandTag": {
                    "en": "Shahin Developer",
                    "fa": "شاهین دولوپر"
                },
                "brandSubtitle": {
                    "en": "Digital Product Studio",
                    "fa": "استودیوی محصول دیجیتال"
                },
                "about": {
                    "en": "Designing, building, and scaling digital products with character. Based in Tehran, partnering with teams worldwide.",
                    "fa": "طراحی، ساخت و مقیاس‌دهی محصولات دیجیتالِ متمایز. مستقر در تهران؛ همکار تیم‌ها در سراسر جهان."
                },
                "columns": {
                    "studio": {
                        "heading": {
                            "en": "Studio",
                            "fa": "استودیو"
                        },
                        "links": [
                            {
                                "href": "#services",
                                "label": {
                                    "en": "Services",
                                    "fa": "خدمات"
                                }
                            },
                            {
                                "href": "#projects",
                                "label": {
                                    "en": "Work",
                                    "fa": "نمونه‌کار"
                                }
                            },
                            {
                                "href": "#process",
                                "label": {
                                    "en": "Process",
                                    "fa": "فرایند"
                                }
                            }
                        ]
                    },
                    "connect": {
                        "heading": {
                            "en": "Connect",
                            "fa": "ارتباط"
                        },
                        "links": [
                            {
                                "href": "mailto:info@shahindev.com",
                                "label": {
                                    "en": "Email",
                                    "fa": "ایمیل"
                                }
                            },
                            {
                                "href": "https://twitter.com/shahin_g_rostami",
                                "label": {
                                    "en": "Twitter",
                                    "fa": "توییتر"
                                }
                            },
                            {
                                "href": "https://instagram.com/shahin_g_rostami",
                                "label": {
                                    "en": "Instagram",
                                    "fa": "اینستاگرام"
                                }
                            }
                        ]
                    },
                    "newsletter": {
                        "heading": {
                            "en": "Newsletter",
                            "fa": "خبرنامه"
                        },
                        "text": {
                            "en": "Monthly insights on product design, performance, and launch strategy.",
                            "fa": "بینش‌های ماهانه دربارهٔ طراحی محصول، عملکرد و راهبرد راه‌اندازی."
                        },
                        "cta": {
                            "en": "Join the list",
                            "fa": "عضویت در فهرست"
                        }
                    }
                },
                "meta": {
                    "rights": {
                        "en": "&copy; 2025 Shahin Developer. Crafted in Tehran with global ambition.",
                        "fa": "© ۲۰۲۵ شاهین دولوپر. ساخته‌شده در تهران با چشم‌انداز جهانی."
                    },
                    "website": {
                        "en": "Website",
                        "fa": "وب‌سایت"
                    }
                }
            }
        }

    function persistLanguage(value) {
        const storage = getStorage();
        if (storage) {
            storage.setItem(storageKey, value);
        }
    }

    function langApp(pageLanguage = 'en') {
        return {
            lang: pageLanguage,
            pageLanguage,
            menuOpen: false,
            copy,
            init() {
                this.lang = this.pageLanguage;
                this.applyLocale();
                persistLanguage(this.pageLanguage);
                if (this.$watch) {
                    this.$watch('lang', () => this.applyLocale());
                }
            },
            setLang(value) {
                this.menuOpen = false;
                persistLanguage(value);
                if (value !== this.pageLanguage) {
                    const target = value === 'fa' ? 'fa.html' : 'en.html';
                    window.location.href = target;
                    return;
                }
                this.lang = value;
                this.applyLocale();
            },
            isFa() {
                return this.lang === 'fa';
            },
            applyLocale() {
                if (typeof document === 'undefined') return;
                const html = document.documentElement;
                const body = document.body;
                if (!html || !body) return;
                const dir = this.isFa() ? 'rtl' : 'ltr';
                const langCode = this.lang || 'en';
                html.setAttribute('dir', dir);
                html.setAttribute('lang', langCode);
                body.setAttribute('dir', dir);
                body.setAttribute('lang', langCode);
                body.dataset.lang = langCode;
                body.dataset.dir = dir;
            }
        };
    }

    window.langApp = langApp;
    window.getPreferredLanguage = function () {
        const storage = getStorage();
        return storage ? storage.getItem(storageKey) : null;
    };
    window.setPreferredLanguage = function (value) {
        persistLanguage(value);
    };
})();
