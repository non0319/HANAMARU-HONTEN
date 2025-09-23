
/*=================================================
DOM準備
===================================================*/
document.addEventListener("DOMContentLoaded", () => {

    /*=============================================
    ヘッダー番号表示
    =============================================*/
    const number = document.querySelector(".number");
    const about = document.querySelector("#about");

    if (number && about) {
        const numberObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    number.style.display = "block";
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        numberObserver.observe(about);
    }

    /*=============================================
    フェード・ブラー表示
    =============================================*/
    const fadeElements = document.querySelectorAll(".fadein, .blur");
    const fadeObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("fadein")) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                } else if (entry.target.classList.contains("blur")) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "scale(1)";
                    entry.target.style.filter = "blur(0)";
                }
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => fadeObserver.observe(el));

    /*=============================================
    ページトップボタン
    =============================================*/
    const pageTopBtn = document.getElementById("page-top-btn");
    const mainVisual = document.querySelector(".main-visual");

    if (pageTopBtn && mainVisual) {
        const topObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                pageTopBtn.classList.toggle("show", !entry.isIntersecting);
            });
        }, { threshold: 0 });

        topObserver.observe(mainVisual);

        pageTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /*=============================================
    スマホ用電話リンク
    =============================================*/
   document.addEventListener("DOMContentLoaded", () => {
    const telLink = document.getElementById("tel-link");
    const phoneNumber = "08039029208"; // 最新番号に更新

    if (telLink) {
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            telLink.setAttribute("href", "tel:" + phoneNumber);
            console.log("telリンクを更新:", phoneNumber);
        } else {
            telLink.removeAttribute("href");
        }
    }
});

    /*=============================================
    ハンバーガーメニュー
    =============================================*/
    /* ハンバーガーメニュー */
    const hamburger = document.querySelector(".hamburger");
    const mask = document.getElementById("mask");
    const navMenu = document.getElementById("nav-menu");
    const html = document.documentElement; // <html>を取得
    const body = document.body;

    const toggleMenu = () => {
        document.querySelector("header")?.classList.toggle("open");

        // 背景スクロールを止める／戻す
        const isOpen = document.querySelector("header")?.classList.contains("open");
        if (isOpen) {
            html.style.overflow = "hidden";
            body.style.overflow = "hidden";
        } else {
            html.style.overflow = "";
            body.style.overflow = "";
        }
    };

    hamburger?.addEventListener("click", toggleMenu);

    // マスク・メニュークリックで閉じる
    [mask, navMenu].forEach(el => {
        el?.addEventListener("click", () => {
            document.querySelector("header")?.classList.remove("open");
            html.style.overflow = "";
            body.style.overflow = "";
        });
    });


    /*=================================================
      スムーススクロール
      ===================================================*/
    $(function () {
        $('a[href^="#"]').click(function () {
            let href = $(this).attr("href");
            let target = $(href == "#" || href == "" ? "html" : href);
            let position = target.offset().top;

            $('body,html').animate({ scrollTop: position }, 600, 'swing');
        });

    });

    /*=============================================
    コピーライト年号更新
    =============================================*/
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /*=============================================
    固定ヘッダー切り替え
    =============================================*/
    const mainHeader = document.getElementById("main-header");
    const fixedHeader = document.getElementById("fixed-header");

    window.addEventListener("scroll", () => {
        if (mainHeader && fixedHeader) {
            const isMobile = window.innerWidth <= 768; // スマホ判定
            if (!isMobile) {
                if (window.scrollY > 200) {
                    fixedHeader.style.display = "block";
                    mainHeader.style.display = "none";
                } else {
                    fixedHeader.style.display = "none";
                    mainHeader.style.display = "block";
                }
            } else {
                // スマホは常に固定ハンバーガー表示
                fixedHeader.style.display = "none";
                mainHeader.style.display = "block";
            }
        }
    });


    /*=============================================
    料理画像の時間差表示
    =============================================*/
    const dishes = document.querySelectorAll(".dish-items li");
    const dishWrapper = document.querySelector(".dish-wrapper");

    if (dishWrapper && dishes.length > 0) {
        const dishObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dishes.forEach((dish, i) => {
                        setTimeout(() => dish.classList.add("show"), i * 300);
                    });
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        dishObserver.observe(dishWrapper);
    }


});

/*=============================================
スマホ用ロゴ非表示 on scroll
=============================================*/
const headerH1 = document.querySelector(".header-h1");

window.addEventListener("scroll", () => {
    if (window.innerWidth <= 768 && headerH1) {
        if (window.scrollY > 200) {
            headerH1.classList.add("hide"); // フェードアウト
        } else {
            headerH1.classList.remove("hide"); // フェードイン
        }
    }
});

