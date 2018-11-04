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
    root.lsSubmit = lsSubmit



    console.log(88)
}($, window.baoxiu || (window.baoxiu = {})));