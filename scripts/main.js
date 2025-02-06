// 语言切换功能
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    document.documentElement.lang = newLang;
    
    const translations = {
        zh: {
            media: '影视媒体',
            social: '自媒体运营',
            brands: '合作品牌',
            contact: '合作入口',
            title: '摄影师·视频创作者·自媒体人·0.6的I人',
            mediaTitle: '影视媒体',
            socialTitle: '自媒体运营',
            brandsTitle: '合作品牌',
            douyin: '抖音',
            xiaohongshu: '小红书',
            clicks: '点击数',
            likes: '获赞',
            sales: '年销售额',
            passwordTitle: '请输入访问密码',
            passwordPlaceholder: '请输入密码',
            confirm: '确认',
            errorMessage: '密码错误，请重试'
        },
        en: {
            media: 'Media',
            social: 'Social Media',
            brands: 'Partners',
            contact: 'More',
            title: 'Photographer · Content Creator · Social Media Influencer · INFP',
            mediaTitle: 'Media Works',
            socialTitle: 'Social Media',
            brandsTitle: 'Partner Brands',
            douyin: 'TikTok',
            xiaohongshu: 'RedNote',
            clicks: 'Views',
            likes: 'Likes',
            sales: 'Annual GMV',
            passwordTitle: 'Enter Password',
            passwordPlaceholder: 'Enter password',
            confirm: 'Confirm',
            errorMessage: 'Incorrect password, please try again'
        }
    };
    
    // 更新导航链接文本
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        if (translations[newLang][key]) {
            link.textContent = translations[newLang][key];
        }
    });
    
    // 更新个人简介
    const title = document.querySelector('.profile-content .title');
    title.textContent = translations[newLang].title;
    
    // 更新章节标题
    document.querySelector('#media h2').textContent = translations[newLang].mediaTitle;
    document.querySelector('#social h2').textContent = translations[newLang].socialTitle;
    document.querySelector('#brands h2').textContent = translations[newLang].brandsTitle;
    
    // 更新社交媒体平台名称和标签
    const platforms = document.querySelectorAll('.platform-card');
    platforms.forEach((platform, index) => {
        const name = platform.querySelector('.platform-name');
        const label = platform.querySelector('.label');
        if (index === 0) {
            name.textContent = translations[newLang].douyin;
            label.textContent = translations[newLang].clicks;
        } else if (index === 1) {
            name.textContent = translations[newLang].xiaohongshu;
            label.textContent = translations[newLang].likes;
        } else if (index === 2) {
            name.textContent = 'Etsy';
            label.textContent = translations[newLang].sales;
        }
    });
    
    // 更新密码弹窗文本
    const passwordModal = document.querySelector('#password-modal');
    passwordModal.querySelector('h3').textContent = translations[newLang].passwordTitle;
    passwordModal.querySelector('input').placeholder = translations[newLang].passwordPlaceholder;
    passwordModal.querySelector('button').textContent = translations[newLang].confirm;
    
    // 更新语言切换按钮文本
    const langButton = document.querySelector('.language-toggle');
    langButton.textContent = newLang === 'zh' ? 'EN' : '中文';
}

// 幻灯片切换功能
function initSlideshow() {
    const images = document.querySelectorAll('.slideshow img');
    const locationTitle = document.querySelector('.location-title');
    const locations = [
        'Katmai NP, Alaska',
        'Mount Rainier, Washington',
        'Baja California Sur, Mexico',
        'Brooks Falls, Alaska',
        'Volcanoes, Hawaii',
        'Chena Hot Spring, Alaska',
        'Chinitna Bay, Alaska',
        'Mount Agung, Indonesia'
    ];
    let currentSlide = 0;

    function showSlide(index) {
        // 隐藏所有图片和标题
        images.forEach(img => img.classList.remove('active'));
        locationTitle.classList.remove('active');
        
        // 短暂延迟后显示新的标题
        setTimeout(() => {
            // 更新标题文本并显示
            locationTitle.textContent = locations[index];
            locationTitle.classList.add('active');
        }, 500);

        // 显示当前图片
        images[index].classList.add('active');
    }

    // 自动切换幻灯片
    setInterval(() => {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }, 5000);
}

// 微信二维码弹窗功能
function initWechatModal() {
    const modal = document.getElementById('wechat-modal');
    const wechatIcon = document.getElementById('wechat-icon');
    const closeBtn = modal.querySelector('.close');

    wechatIcon.onclick = function(e) {
        e.preventDefault();
        openModal(modal);
    }

    closeBtn.onclick = function() {
        closeModal(modal);
    }

    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    }
}

// 密码验证弹窗功能
function initPasswordModal() {
    const modal = document.getElementById('password-modal');
    const contactLink = document.getElementById('contact-link');
    const closeBtn = modal.querySelector('.close');
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-password');
    const errorMessage = modal.querySelector('.error-message');

    contactLink.onclick = function(e) {
        e.preventDefault();
        openModal(modal);
        passwordInput.focus();
    }

    closeBtn.onclick = function() {
        closeModal(modal);
    }

    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    }

    submitButton.onclick = function() {
        checkPassword();
    }

    passwordInput.onkeypress = function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    }

    function checkPassword() {
        const password = passwordInput.value;
        if (password === '2025') {  // 设置密码为2025
            window.location.href = 'resume.html';  // 密码正确时跳转
        } else {
            errorMessage.textContent = '密码错误，请重试';
            passwordInput.value = '';
            passwordInput.focus();
            // 添加抖动效果
            errorMessage.classList.add('shake');
            setTimeout(() => {
                errorMessage.classList.remove('shake');
            }, 500);
        }
    }
}

// 通用弹窗打开函数
function openModal(modal) {
    modal.style.display = 'block';
    // 触发重排以启动动画
    modal.offsetHeight;
    modal.classList.add('show');
}

// 通用弹窗关闭函数
function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        // 如果是密码弹窗，清空输入内容和错误信息
        if (modal.id === 'password-modal') {
            const passwordInput = modal.querySelector('#password-input');
            const errorMessage = modal.querySelector('.error-message');
            if (passwordInput) passwordInput.value = '';
            if (errorMessage) errorMessage.textContent = '';
        }
    }, 300);
}

// 处理导航栏滚动效果
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// 处理滚动动画
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
    initWechatModal();
    initPasswordModal();
    
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollAnimation);
    
    // 初始运行一次动画检查
    handleScrollAnimation();
});

// 添加ESC键关闭弹窗功能
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                closeModal(modal);
            }
        });
    }
}); 