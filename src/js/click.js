(function ($, root) {
    // 教师保修 保修和列表切换
    let lsSubmit = () => {
        let lastIndex = 0
        let curIndex
        let lastEle
        let curEle
        $("#lsBxWrap .not-title span").each(function () {
            $(this).on("click", function () {
                let curIndex = $(this).index()
                if (curIndex != lastIndex) {
                    lastEle = $(".bx_item").eq(lastIndex)
                    curEle = $(".bx_item").eq(curIndex)
                    console.log(curIndex, lastIndex)
                    console.log("执行")
                    lastEle.hide()
                    $("#lsBxWrap .not-title span").eq(lastIndex).removeClass('t-select')
                    curEle.show()
                    $(this).addClass('t-select')
                    lastIndex = curIndex
                }
            })
        })
    }

    // 教师提交表单 防重复
    let onceSubmit = (btn, form) => {
        console.log("教师提交提交")
        let subBtn = btn
        $(form).submit(function () {
            $(subBtn).attr("disabled", "disabled");
            console.log("教师提交提交")
        })
    }

    root.onceSubmit = onceSubmit
    root.lsSubmit = lsSubmit



    console.log(88)
}($, window.baoxiu || (window.baoxiu = {})));