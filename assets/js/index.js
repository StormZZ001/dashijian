$(function () {  
    //调用getUserInfo函数
    getUserInfo()

    var layer = layui.layer
    //点击按钮,实现退出功能
    $('#btn_logout').on('click',function () {  
        //提示用户是否确认退出
        layer.confirm('是否确认退出?',{icon:3,title:'提示'},function (index) { 
            //1.清空本地缓存中的token
            localStorage.removeItem('token')
            //2.跳转到登录页面
            location.href='login.html'

            //关闭 confirm 提示框
            layer.close(index)
         })
    })
})

// 定义getUserInfo函数
function getUserInfo() { 
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        // headers 就是请求头配置对象
        // headers:{
        //     Authorization:localStorage.getItem('token') || ''
        // },
        success: function (res) {
            if(res.status !== 0){
                return layer.msg('获取用户信息失败')
            }
            //调用renderAvatar渲染用户的头像
            renderAvatar(res.data)
        },
        //无论返回成功还是失败,最终都会调用 complete 回调函数
        // complete:function (res) {  
        //     console.log('执行了 complete 回调')
        //     console.log(res.responseJSON)
        //     //在 complete 回调函数中,可以使用 res.responseJSON 拿到服务器响应回来的数据
        //     if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！'){
        //         //清空token
        //         localStorage.removeItem('token')
        //         //强制跳转到登录页面
        //         location.href = 'login.html'
        //     }
        // }
    });
}
//渲染用户的头像
function renderAvatar(user){
    //1.获取用户的名称
    var name = user.username
    //2.设置获取的文本
    $('#welcome').html('欢迎&nbsp;&nbsp;'+name)
    //3.按需渲染用户的头像
    if(user.user_pic !== null){
        //3.1渲染图片头像
        $('.layui-nav-img').attr('src',user.user_pic)
        $('.text-avatar').hide()
    }else{
        //3.2渲染文本头像
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}