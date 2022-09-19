
jQuery(function($) {
    $('.slidetop').bgSwitcher({
        images: ['img/hoshizora.png','img/kotatsutent.png','img/midoritent.png'], // 切替背景画像を指定
	interval: 2500, // 背景画像を切り替える間隔を指定 3000=3秒
    loop:true,// 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle:false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "linear" // エフェクトのイージングをlinear,swingから指定
    });
});
	
jQuery(function($) {
    $('.slidealbum').bgSwitcher({
        images: ['img/hoshizora.png','img/kotatsutent.png','img/midoritent.png'], // 切替背景画像を指定
	interval: 2500, // 背景画像を切り替える間隔を指定 3000=3秒
    loop:true,// 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle:false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "linear" // エフェクトのイージングをlinear,swingから指定
    });
});
	