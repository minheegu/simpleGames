window.onload = function(){ // dd.html에서 주석처리한 것처럼 <script src="testjs.js">를 아래서 처리하면 window.onload=function()~으로 처리할 필요 없음
    var hw=document.getElementById('hw');
    hw.addEventListener('click',function(){
        alert('!!!');
    })
    function testFt(){
        return 'a';
    }
}

testVar={}
testVar.calculator={
    'left':null,
    'right':null
}
testmcoordinate={
    'left':null,
    'right':null
}

testVar.calculator.left=10;
testVar.calculator.right=20;

function sum(){
    return testVar.calculator.left+testVar.calculator.right;
}

//함수 지향
function calc(func,num){
    return func(num)
}

function calc2(mode){
    var funcs={
        'plus': function(left,right){return left+right},
        'minus': function(left,right){return left-right}
    }
    return funcs[mode]
}
//클로저

function factory_movie(title){
    return{
        get_title: function(){
            return title;
        },
        set_title:function(_title){
            title=_title;
        }
    }
}

// arguments - 객체의 인스턴스로 배열은 아니지만 배열처럼 이해하면됨
function sum(){
    var i,_sum=0;
    for (i=0;i<arguments.length;i++){
        document.write(i+' : '+arguments[i]+'<br />');
        _sum+=arguments[i];
    }

    return _sum;
} // sum(1,2,3,4) -> 10

function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
} // zero(); -> zero.length 0 arguments 0
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
} // one('val1','val2'); -> one.length 1, arguments 2
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    ); // two('val1'); -> two.length 2, arguments 1
}