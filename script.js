// ページ内のすべてのギャラリーセット（親要素）を取得
const gallerySets = document.querySelectorAll('.gallery-set');

gallerySets.forEach((set) => {
    // 各セット内にあるメイン、サムネイル、矢印ボタンを個別に取得
    const thumbsEl = set.querySelector('.js-thumbs-slider');
    const mainEl = set.querySelector('.js-main-slider');
    const nextEl = set.querySelector('.swiper-button-next');
    const prevEl = set.querySelector('.swiper-button-prev');

    // 1. まずサムネイルを初期化
    const swiperThumbs = new Swiper(thumbsEl, {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    // 2. メインを初期化し、同じセット内のサムネイルと紐付け
    const swiperMain = new Swiper(mainEl, {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: nextEl, // 自分のセット内の矢印を指定
            prevEl: prevEl,
        },
        thumbs: {
            swiper: swiperThumbs, // 自分のセット内のサムネイルを指定
        },
    });
});
