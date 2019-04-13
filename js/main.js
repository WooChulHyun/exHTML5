var item = $(".menu-item");
var tab = $(".tab");
var section = $(".notice, .pds");

//메인 메뉴의 하위 메뉴 제어를 위한 스크립트

item.on("mouseover focusin", function() {
    item.removeClass("menu-act");
    $(this).addClass("menu-act");
});

tab.on("click keyup", function(e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.type === "click") {
        section.removeClass("board-act");
        $(this)
            .parent()
            .addClass("board-act");
    }
});

// 관련 사이트 목록 제어를 위한 스크립트
$(".related-list")
    .on("focusin", function() {
        $(".related-list").addClass("list-act");
    })
    .on("focusout", function() {
        $(".related-list").removeClass("list-act");
    });
