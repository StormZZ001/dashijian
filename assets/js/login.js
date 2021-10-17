$(function () {
  // 点击“去注册账号”的链接
  $("#link_reg").on("click", function () {
    $(".login-box").hide();
    $(".reg-box").show();
  });
  // 点击“去登录账号"的链接
  $("#link_log").on("click", function () {
    $(".reg-box").hide();
    $(".login-box").show();
  });

  let form = layui.form;
  let layer = layui.layer;
  form.verify({
    // 自定义了一个叫做 pwd 校验规则
    pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    // 校验两次密码是否一致的规则
    repwd: function (value) {
      // 通过形参拿到的是确认密码框中的内容
      // 还需要拿到密码框中的内容
      // 然后进行一次等于的判断
      // 如果判断失败,则return一个提示消息即可
      var pwd = $(".reg-box [name=password]").val();
      if (pwd !== value) {
        return "两次密码不一致！";
      }
    },
  });

  //监听注册表单的提交时间
  $("#form_reg").on("submit", function (e) {
    //1.阻止表单的默认提交行为
    e.preventDefault();
    var username = $("#form_reg [name=username]").val();
    var password = $("#form_reg [name=password]").val();
    //2.调用ajax的post请求
    $.post(
      "http://api-breakingnews-web.itheima.net/api/reguser",
      {
        username,
        password,
      },
      function (res) {
        if (res.status !== 0) {
          return console.log(res.message)
        }
        console.log("注册成功");
      }
    );
  });
});
