$(function(){
    // 点击“去注册账号”的链接
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
    // 点击“去登录账号"的链接
    $('#link_log').on('click',function(){
        $('.reg-box').hide()
        $('.login-box').show()
    })

    let form = layui.form
    form.verify({
        // 自定义一个pwd校验规则
        pwd:[/^\S{6,12}$/,'密码必须6到12位,且不能出现空格']
    })
})