var regComponent = Vue.extend({
  template: '<div class="register-box"><form class="layui-form" action=""><div class="layui-form-item"><label class="layui-form-label">用户名：</label><div class="layui-input-inline"><input type="text" name="username" lay-verify="username" placeholder="请输入用户名" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><label class="layui-form-label">密码：</label><div class="layui-input-inline"><input type="password" name="password" lay-verify="passF" placeholder="请输入密码" autocomplete="off" class="layui-input"></div><div class="layui-form-mid layui-word-aux">请填写6到20位密码</div></div><div class="layui-form-item"><label class="layui-form-label">确认密码：</label><div class="layui-input-inline"><input type="password" name="password" lay-verify="passS" placeholder="请重复密码" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><label class="layui-form-label">手机号码：</label><div class="layui-input-inline"><input type="tel" name="phone" lay-verify="phone" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><div class="layui-input-block"><button class="layui-btn" lay-submit="" lay-filter="btn-submit">立即提交</button></div></div></form></div>'
})