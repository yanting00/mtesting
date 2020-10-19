function check_login(){
	if(!document.loginform.username.value){
		alert('对不起，用户名不能为空！');
		return false;
	}
	if(!document.loginform.pwd.value){
		alert('对不起，密码不能为空！');
		return false;
	}
	return true;
}