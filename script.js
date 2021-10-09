window.onload=function(){
    var now;
    var num;
    var playerName=[];    /*玩家名*/
    var playerAward=[];    /*玩家获奖列表*/
    for(let i=0;i<12;i++){
<<<<<<< HEAD
        playerAward[i]=""; 
    }
    //-----------------------主界面-----------------------
=======
        playerAward[i]="";
    }
     //-----------------------主界面-----------------------
>>>>>>> 3967636 (4.0)
    let start=document.getElementById("start");
    start.onclick=function () {    //点击开始游戏进入设置界面
        let mainPage=document.getElementsByClassName("mainPage");
        for(let i=0;i<mainPage.length;i++){
            mainPage[i].style.display="none";
        }
        let setNumPage=document.getElementsByClassName("setNumPage");
        for(let i=0;i<setNumPage.length;i++){
            setNumPage[i].style.display="block";
        }
    };
    var rule=document.getElementById("rule");
    rule.onclick=function () {
        var mainPage=document.getElementsByClassName("mainPage");
        mainPage[0].style.display="none";
        var rulePage=document.getElementsByClassName("rulesPage");
        rulePage[0].style.display="block";
    }
    var present=document.getElementById("present");
    present.onclick=function () {    //点击开始游戏进入设置界面
        var mainPage=document.getElementsByClassName("mainPage");
        for(let i=0;i<mainPage.length;i++){
            mainPage[i].style.display="none";
        }
        var setPresentPage=document.getElementsByClassName("setPresentPage");
        for(let i=0;i<setPresentPage.length;i++){
            setPresentPage[i].style.display="block";
        }
    };
    //------------------------规则界面---------------------------
    var retbtn=document.getElementById("ret");
    retbtn.onclick=function () {
        var rulesPage=document.getElementsByClassName("rulesPage");
        rulesPage[0].style.display="none";
        var mainPage=document.getElementsByClassName("mainPage");
        mainPage[0].style.display="block";
    }

    //-----------------------设置人数界面-------------------------
    var enter = document.getElementById("enter");
    var backToMain=document.getElementById("backToMain");
    var clear = document.getElementById("clear");
    enter.onclick=function () {
        var reg=/^[1-9]$|^1[012]$/;
        let number = document.getElementById("number");
        num=number.value;
        now=0;
        if(reg.test(num)==true){    //如果符合要求则转换为数字，进入游戏界面
            num=num-0;
            /*-----------------------------------------------------------------创建玩家数据---------------*/
            for(let i=0;i<num;i++){
                playerName[i]="玩家"+(i+1)
                playerAward[i]="";
            }
            /*---------------------------将玩家名贴到房间成员*/
            for(let i=0;i<12;i++){
                let player="player"+(i+1);
                if(i<num){
                    let text=playerName[i]+"    中:";
                    document.getElementById(player).innerText=text;
                }
                else {
                    document.getElementById(player).innerText="";
                }
            }
            var setNumberPage=document.getElementsByClassName("setNumPage");
            for(var i=0;i<setNumberPage.length;i++){
                setNumberPage[i].style.display="none";
            }
            var playPage=document.getElementsByClassName("playPage");
            playPage[0].style.display="block";
            let playing=document.getElementsByClassName("playing");
            playing[0].style.display="none";
            let waiting=document.getElementsByClassName("waiting");
            waiting[0].style.display="block";
        }
        else {
            alert("输入不合法，请输入1~12的数字。");
        }
    };
<<<<<<< HEAD
    clear.onclick=function () {
        for(let i=0;i<12;i++){
            playerAward[i]="";
            playerName[i]="";
        }
        alert("数据已被清空");
    }
=======
>>>>>>> 3967636 (4.0)
    backToMain.onclick=function () {
        var setNumPage=document.getElementsByClassName("setNumPage");
        setNumPage[0].style.display="none";
        let mainPage=document.getElementsByClassName("mainPage");
        mainPage[0].style.display="block";
    }
    //--------------------------------礼物设置界面----------------------
    let backToMain2 =document.getElementById("backToMain2");
    backToMain2.onclick=function () {
        /*判断礼物数量是否合法*/
        let legal=true;
        for(let i=0;i<12;i++){
            let awardName=document.getElementById("a"+(i+1));
            let awardNum=document.getElementById("n"+(i+1));
<<<<<<< HEAD
            if(awardName.value!=""){
                let temp=awardNum.value-0;
                if(temp<0||temp>99){
=======
            let reg=/^[0-9]$|^[1-9][0-9]$/;
            if(awardName.value!==""){
                let temp=awardNum.value;
                if(!reg.test(temp)){
>>>>>>> 3967636 (4.0)
                    legal=false;
                    break;
                }
            }
        }
        if(legal){
            /*复制到兑换礼物界面*/
            for(let i=0;i<12;i++){
                document.getElementById("aw"+(i+1)).innerHTML=document.getElementById("a"+(i+1)).value;
                document.getElementById("n2"+(i+1)).innerHTML=document.getElementById("n"+(i+1)).value;
            }
            /*回到上一界面*/
            var setPresentPage=document.getElementsByClassName("setPresentPage");
            setPresentPage[0].style.display="none";
            var mainPage=document.getElementsByClassName("mainPage");
            mainPage[0].style.display="block";
        }
        else {
            alert("违法！礼物数量是0-99噢");
        }
    }

    //--------------------------------游戏界面--------------------------
    var backToSet=document.getElementById("backToSet");
    backToSet.onclick=function () {
        /*返回设置界面*/
        var afterRoll=document.getElementsByClassName("afterRoll");
        afterRoll[0].style.display="none";
        var playPage=document.getElementsByClassName("playPage");
        playPage[0].style.display="none";
        var setNumPage=document.getElementsByClassName("setNumPage");
        setNumPage[0].style.display="block";
        var playing=document.getElementsByClassName("playing");
        playing[0].style.display="none";
        var waiting=document.getElementsByClassName("waiting");
        waiting[0].style.display="block";
    }
    var goToPlay=document.getElementById("goToPlay");
    goToPlay.onclick=function () {
        /*设置游戏界面当前玩家*/
        now=0;
        document.getElementById("who").innerText=playerName[now];
        var waiting=document.getElementsByClassName("waiting");
        waiting[0].style.display="none";
        var playing=document.getElementsByClassName("playing");
        playing[0].style.display="block";
    }
    /*---------------------------------游戏内容-------------------*/
    var clickToPlay=document.getElementById("clickToPlay");
    clickToPlay.onclick=function () {
<<<<<<< HEAD
        var dices=["../source/1.png","../source/2.png","../source/3.png","../source/4.png","../source/5.png","../source/6.png"];
=======
        var dices=["resources/1.png","resources/2.png","resources/3.png","resources/4.png","resources/5.png","resources/6.png"];
>>>>>>> 3967636 (4.0)
        var tips=["状元插金花！","六杯红！","六杯黑！","五王！","五子带一秀！","五子登科！","状元！","对堂！","三红！","四进！","二举！","一秀！","yee~啥也没中"];
        var dicesResult=[];    /*-------------骰子结果*/
        let dicesResultSort=[0,0,0,0,0,0,0];
        var awardTemp=[];
<<<<<<< HEAD

=======
>>>>>>> 3967636 (4.0)
        /*-----------------------------------当前玩家骰子出结果过程-----------*/
        for(var j=0;j<6;j++){
            dicesResult[j]=(Math.ceil(Math.random()*6));
            document.getElementById(("d0"+(j+1))).src=dices[dicesResult[j]-1];    /*贴图*/
        }
        for(let j =0;j<6;++j){
            dicesResultSort[dicesResult[j]]++;
        }
        var grade;
        if(dicesResultSort[4]===4&&dicesResultSort[1]===2)
            grade =0;
        else if(dicesResultSort[4]===6)
            grade =1;
        else if(dicesResultSort[6]===6)
            grade =2;
        else if(dicesResultSort[4]===5)
            grade =3;
        else if(dicesResultSort[3]===5&&dicesResultSort[4]===1)
            grade =4;
        else if(dicesResultSort[3]===5)
            grade =5;
        else if(dicesResultSort[4]===4)
            grade =6;
        else if(dicesResultSort[1]===1&&dicesResultSort[2]===1&&dicesResultSort[3]===1&&dicesResultSort[4]===1&&dicesResultSort[5]===1&&dicesResultSort[6]===1)
            grade =7;
        else if(dicesResultSort[4]===3)
            grade =8;
        else if(dicesResultSort[2]===4)
            grade =9;
        else if(dicesResultSort[4]===2)
            grade =10;
        else if(dicesResultSort[4]===1)
            grade =11;
        else grade =12;
        let showResult=document.getElementById("showResult");
<<<<<<< HEAD
        showResult.innerText=tips[grade];
        playerAward[now]=tips[grade];


=======
        showResult.innerHTML=tips[grade];
        playerAward[now]=tips[grade];
>>>>>>> 3967636 (4.0)
        /*显示结果*/
        let afterRoll=document.getElementsByClassName("afterRoll");
        afterRoll[0].style.display="block";
    }
    let nextPlayer=document.getElementById("nextPlayer");
    nextPlayer.onclick=function () {
        /*更改当前玩家获奖情况*/
        document.getElementById("player"+(now+1)).innerText=playerName[now]+"    中:"+playerAward[now];
        now++;
        if(now<num){
            /*更改当前玩家标签*/
            document.getElementById("who").innerText=playerName[now];
            /*隐藏结果*/
            let afterRoll=document.getElementsByClassName("afterRoll");
            afterRoll[0].style.display="none";
        }
        else {
            /*布置结算界面*/               ///------------------------------做一下
            for(let i=0;i<12;i++){
                let p="p"+(i+1);
                if(i<num){
                    let text=playerName[i]+"            获得:"+playerAward[i];
                    document.getElementById(p).innerText=text;
                }
                else {
                    document.getElementById(p).innerText="";
                }
            }
            /*设置显示*/
            let afterRoll=document.getElementsByClassName("afterRoll");
            afterRoll[0].style.display="none";
            let playPage=document.getElementsByClassName("playPage");
            playPage[0].style.display="none";
            let resultPage=document.getElementsByClassName("resultPage");
            resultPage[0].style.display="block";
        }
<<<<<<< HEAD

        /*判断中奖并存入缓存*/

    }

=======
        /*判断中奖并存入缓存*/
    }
>>>>>>> 3967636 (4.0)
    //--------------------------结算界面-------------------------------
    var ret=document.getElementById("back");
    ret.onclick=function () {
        var resultPage=document.getElementsByClassName("resultPage");
        resultPage[0].style.display="none";
        var setNumberPage=document.getElementsByClassName("setNumPage");
        setNumberPage[0].style.display="block";
    };
    var again=document.getElementById("again");
    again.onclick=function () {
        /*重置游戏*/
        now=0;
        document.getElementById("who").innerText=playerName[now];
        for(let i=0;i<num;i++){
            playerAward[i]="";
            document.getElementById("player"+(i+1)).innerText=playerName[i]+"    中:";
        }
<<<<<<< HEAD

=======
>>>>>>> 3967636 (4.0)
        var resultPage=document.getElementsByClassName("resultPage");
        resultPage[0].style.display="none";
        let playing=document.getElementsByClassName("playing");
        playing[0].style.display="none";
        let waiting=document.getElementsByClassName("waiting");
        waiting[0].style.display="block";
        var playPage=document.getElementsByClassName("playPage");
        playPage[0].style.display="block";
<<<<<<< HEAD

=======
>>>>>>> 3967636 (4.0)
    }
    let showAward=document.getElementById("showAward");
    showAward.onclick=function () {
        let resultPage=document.getElementsByClassName("resultPage");
        resultPage[0].style.display="none";
        let awardPage=document.getElementsByClassName("awardPage");
        awardPage[0].style.display="block";
    }
<<<<<<< HEAD

=======
>>>>>>> 3967636 (4.0)
    /*------------------------------------------------兑奖界面---------------------------*/
    let backToResult=document.getElementById("backToResult");
    backToResult.onclick=function () {
        let awardPage=document.getElementsByClassName("awardPage");
        awardPage[0].style.display="none";
        let resultPage=document.getElementsByClassName("resultPage");
        resultPage[0].style.display="block";
    }
    for(let i=0;i<12;i++){
        let awardButton=document.getElementById("award"+(i+1));
        let awardNum=document.getElementById("n2"+(i+1));
        let awardName=document.getElementById("aw"+(i+1));
        awardButton.onclick=function () {
            if(awardName.innerHTML!=""){
                if(awardNum.innerHTML-1>=0){
                    awardNum.innerHTML--;
                    document.getElementById("n"+(i+1)).value=awardNum.innerHTML;
                }
                else {
                    alert("yee~倒霉，奖品兑换完了");
                }
            }
            else {
                alert("没有设置这个奖品啊喂");
            }
        }
    }
};