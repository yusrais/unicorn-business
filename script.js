// تبديل القائمة على الجوال
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// تبديل اللغة
function switchLanguage(lang) {
    const arBtn = document.querySelector('.lang-btn:nth-child(1)');
    const enBtn = document.querySelector('.lang-btn:nth-child(2)');
    
    if (lang === 'en') {
        // إضافة كلاس للغة الإنجليزية
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        document.documentElement.style.textAlign = 'left';
        document.title = 'Unicorn Business | Global Partners in Trade & Investment';
        
        // تحديث أزرار اللغة
        arBtn.classList.remove('active');
        enBtn.classList.add('active');
        
        // رسالة للمستخدم
        alert('The website will switch to English. Note: Full translation requires backend implementation.');
        
        // يمكن هنا إضافة استدعاء AJAX لتحميل المحتوى الإنجليزي
    } else {
        // إعادة إلى العربية
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
        document.documentElement.style.textAlign = 'right';
        document.title = 'يونيكورن بزنس | شركاء عالميون في التجارة والاستثمار';
        
        // تحديث أزرار اللغة
        enBtn.classList.remove('active');
        arBtn.classList.add('active');
    }
}

// نموذج الاتصال
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // الحصول على قيم الحقول
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // هنا يمكن إضافة كود إرسال النموذج إلى الخادم
            // For now, we'll just show a success message
            
            // عرض رسالة النجاح
            alert(`شكراً ${name} على تواصلك معنا!\n\nسيتم الرد على استفسارك في أقرب وقت ممكن عبر ${email} أو ${phone}.`);
            
            // إعادة تعيين النموذج
            contactForm.reset();
            
            // إعادة التمرير إلى الأعلى للنموذج
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // إضافة تأثير التمرير السلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // تجاهل الروابط التي تبدأ بـ "#" فقط
            if (href === "#") return;
            
            // التحقق مما إذا كان الرابط يشير إلى قسم في نفس الصفحة
            if (href.startsWith('#') && document.querySelector(href)) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                const offsetTop = targetElement.offsetTop - 80; // تعويض للشريط العلوي
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إضافة تأثير التمرير للشريط العلوي
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '15px 0';
        }
    });
    
    // تهيئة تأثير التمرير عند التحميل
    window.dispatchEvent(new Event('scroll'));
});
