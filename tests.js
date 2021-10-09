    let enterNum = function (number) {
        let reg = /^[1-9]$|^1[012]$/;
        if(reg.test(number) === true)
            return true;
        else
            return false;
    }
    QUnit.test("enterNum test", function (assert) {
        assert.strictEqual(enterNum(1), true,'strictEqual test pass');
        assert.strictEqual(enterNum(12), true,'strictEqual test pass');
        assert.strictEqual(enterNum(13), false,'strictEqual test pass');
        assert.strictEqual(enterNum(-1), false,'strictEqual test pass');
        assert.strictEqual(enterNum(0), false,'strictEqual test pass');
        assert.strictEqual(enterNum('cvsdkj'), false,'strictEqual test pass');
        assert.strictEqual(enterNum('001'), false,'strictEqual test pass');
        assert.strictEqual(enterNum(100), false,'strictEqual test pass');
    });
    let clickToPlay=function (n1,n2,n3,n4,n5,n6) {
        // let dices=["../source/1.png","../source/2.png","../source/3.png","../source/4.png","../source/5.png","../source/6.png"];
        let tips=["状元插金花！","六杯红！","六杯黑！","五王！","五子带一秀！","五子登科！","状元！","对堂！","三红！","四进！","二举！","一秀！","yee~啥也没中"];
        let dicesResult=[n1,n2,n3,n4,n5,n6];    /*-------------骰子结果*/
        let dicesResultSort=[0,0,0,0,0,0,0];
        /*-----------------------------------当前玩家骰子出结果过程-----------*/
        for(let j =0;j<6;++j){
            dicesResultSort[dicesResult[j]]++;
        }
        let grade;
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
        return tips[grade];
    }
    QUnit.test("clickToPlay test", function (assert) {
        assert.strictEqual(clickToPlay(1,4,4,4,1,4), '状元插金花！','strictEqual test pass');
        assert.strictEqual(clickToPlay(4,4,4,4,4,4), '六杯红！','strictEqual test pass');
        assert.strictEqual(clickToPlay(6,6,6,6,6,6), '六杯黑！','strictEqual test pass');
        assert.strictEqual(clickToPlay(4,4,4,4,4,1), '五王！','strictEqual test pass');
        assert.strictEqual(clickToPlay(3,3,3,4,3,3), '五子带一秀！','strictEqual test pass');
        assert.strictEqual(clickToPlay(3,3,3,3,3,5), '五子登科！','strictEqual test pass');
        assert.strictEqual(clickToPlay(1,4,3,4,4,4), '状元！','strictEqual test pass');
        assert.strictEqual(clickToPlay(5,4,3,6,2,1), '对堂！','strictEqual test pass');
        assert.strictEqual(clickToPlay(3,5,4,4,2,4), '三红！','strictEqual test pass');
        assert.strictEqual(clickToPlay(1,2,4,2,2,2), '四进！','strictEqual test pass');
        assert.strictEqual(clickToPlay(4,6,5,4,3,3), '二举！','strictEqual test pass');
        assert.strictEqual(clickToPlay(4,3,2,5,6,6), '一秀！','strictEqual test pass');
        assert.strictEqual(clickToPlay(3,3,3,2,2,1), 'yee~啥也没中','strictEqual test pass');
    });
