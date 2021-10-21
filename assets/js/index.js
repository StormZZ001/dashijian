$(function () {  
    //调用getUserInfo函数
    getUserInfo()
})

// 定义getUserInfo函数
function getUserInfo() { 
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        // headers 就是请求头配置对象
        headers:{
            Authorization:localStorage.getItem('token')
        },
        success: function (res) {
            if(res.status !== 0){
                return layer.msg('获取用户信息失败')
            }
        }
    });
}