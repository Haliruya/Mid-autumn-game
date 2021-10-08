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
