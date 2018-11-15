// let $ = window.Zepto
// let $scope = $(window.document)
let root = window.baoxiu;
console.log($)

/*************************************************************** */

// 教师 保修
if ($("#lsBxWrap").length) {
    console.log("教师保修")
    let textareEle = document.getElementsByTagName("textarea")
    root.autoTextarea(textareEle[0])
    root.autoTextarea(textareEle[1])
    // textareEle.forEach( (index, item)=> {
    //     root.autoTextarea(item[index])
    // });
    // $.each(textareEle, function(index, item){
    //     root.autoTextarea(item[index])
    // })

    // 调取教师提交标签切换
    root.lsSubmit()

    // 调取教师保修状态 初始化
    // root.ifCheck()
    // root.ifDone()

    // 防重复提交
    root.onceSubmit(".submit_input", "form")
} else if ($("#xzBxList").length) {

    // 校长 保修列表
    // 是否查看  保修 渲染
    // root.xzIfCheck()
    // root.xzIfDoneF()
}