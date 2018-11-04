(function ($, root) {
    // 教师列表 初始化 查看
    let ifCheck = () => {
        $(".bx-main-item").each(function () {
            if ($(this).find(".chakan-b").attr("check-status") != 0) {
                console.log($(".chakan-b").attr("check-status"))
                $(".chakan").css("color", "#00a0fb")
            } else {
                console.log($(".chakan-b").attr("check-status"))
                $(".chakan").css("color", "red")
            }
        })
    }
    //教师列表 初始化 完成
    let ifDone = () => {
        $(".bx-main-item").each(function () {
            if ($(this).find(".chuli-b").attr("deal-status") != 0) {
                console.log($(".chakan-b").attr("check-status"))
                $(".chuli").css("color", "#00a0fb")
            } else {
                console.log($(".chakan-b").attr("check-status"))
                $(".chuli").css("color", "red")
            }
        })
    }

    // 校长列表 初始化 查看
    let xzIfCheck = () => {
        $(".bx-item").each(function () {
            if ($(this).find(".chakan-b").attr("check-status") != 0) {
                console.log($(".chakan-b").attr("check-status"))
                $(".chakan-btn").css("backgroundColor", "#00a0fb")
            } else {
                console.log($(".chakan-b").attr("check-status"))
                $(".chakan-btn").css("backgroundColor", "red")
            }
        })
    }

    // 校长列表 初始化 完成
    // 校长列表 初始化 查看
    let xzIfDoneF = () => {
        $(".bx-item").each(function () {
            if ($(this).find(".chuli-b").attr("deal-status") != 0) {
                console.log($(".chuli-b").attr("deal-status"))
                $(".chuli-btn").css("backgroundColor", "#00a0fb")
            } else {
                console.log($(".chuli-b").attr("deal-status"))
                $(".chuli-btn").css("backgroundColor", "red")
            }
        })
    }


    root.xzIfCheck = xzIfCheck
    root.xzIfDoneF = xzIfDoneF
    root.ifCheck = ifCheck
    root.ifDone = ifDone
}($, window.baoxiu || (window.baoxiu = {})));