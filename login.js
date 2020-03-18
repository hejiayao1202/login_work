$(
    function(){
        var $username=$('#username'),
            $msgname=$('#msgname');
        var $tel=$('#tel'),
            $msgtel=$('#msgtel');
        var $pwd=$('#pwd'),
            $msgpwd=$('#msgpwd');
        var $yan=$('#yan'),
            $msgyan=$('#msgyan'),
            $msgyan2=$('#msgyan2'),
            $get=$('#get');
        var $sub=$('#sub');

        // 用户名验证
        $username.keypress(function(e){
            // console.log(/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(e.key),e.key);
            if(/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(e.key)){
                $msgname.css("display","none");
                $username.css("border","1px solid rgb(185, 185, 185)");
            }else{
                e.preventDefault();
                $msgname.css("display","block");
                $username.css("border","1px solid red");
            }
        })
        function nameVerify(){
            var username=$username.val();
            if(username==""){
                $msgname.css("display","block");
                $username.css("border","1px solid red");
            }else{
                if(/^[0-9]+$/.test(username)){
                    $msgname.css("display","block");
                    $username.css("border","1px solid red");
                }else{
                    $msgname.css("display","none");
                    $username.css("border","1px solid rgb(185, 185, 185)");
                    return true;
                }
            }   
        }
        $username.focusout(nameVerify);

        // 手机号验证
        function telVerify(){
            var tel=$tel.val();
            // console.log(/^[1][3,4,5,7,8][0-9]{9}$/.test(tel),tel);
            if(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(tel)){
                $msgtel.css("display","none");
                $tel.css("border","1px solid rgb(185, 185, 185)");
                return true;
            }else{
                $msgtel.css("display","block");
                $tel.css("border","1px solid red");
            }
        }
        $tel.focusout(telVerify);

        // 密码验证
        function pwdVerify(){
            var pwd=$pwd.val();
            if(pwd==""){
                $msgpwd.css("display","block");
                $pwd.css("border","1px solid red");
            }else{
                // console.log(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(pwd),pwd);
                if(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(pwd)){
                    $msgpwd.css("display","none");
                    $pwd.css("border","1px solid rgb(185, 185, 185)");
                    return true;
                }else{
                    $msgpwd.css("display","block");
                    $pwd.css("border","1px solid red");
                }
            }       
        }
        $pwd.focusout(pwdVerify);

        // 获取验证码
        $get.click(function(){
            $get.attr("disabled",true);
            var num=10;
            var timer=setInterval(function(){
                num--;
                if(num===0){
                    clearInterval(timer);
                    $get.val("获取验证码");
                    $get.removeAttr("disabled");
                    $msgyan.css("display","block");
                    $yan.css("border","1px solid red");
                    setTimeout(function () { 
                        $msgyan.css("display","none");
                        $yan.css("border","1px solid rgb(185, 185, 185)");
                     },700);
                }else{
                    $get.val("（"+num+"s）");
                }
            }, 1000);
        })
        // 验证码验证
        function yanVerify(){
            var yan=$yan.val();
            if(yan==""){
                $msgyan2.css("display","block");
                $yan.css("border","1px solid red");
            }else{
                $msgyan2.css("display","none");
                $yan.css("border","1px solid rgb(185, 185, 185)");
                return true;

            }   
        }
        $yan.focusout(yanVerify);

        $sub.click(function(){
            if(nameVerify()==true&&telVerify()==true&&pwdVerify()==true&&yanVerify()==true){
                alert("注册成功");
            }
        })
    }
)