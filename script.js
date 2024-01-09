var homeWorkBai1=document.getElementById("bai1");
var homeWorkBai2=document.getElementById("bai2");
var homeWorkBai3=document.getElementById("bai3");
var homeWorkBai4=document.getElementById("bai4");
var homeWorkBai5=document.getElementById("bai5");
var title =document.getElementById("title");
var input1= document.getElementById("input1");
var input2= document.getElementById("input2");
var input3= document.getElementById("input3");
var input4= document.getElementById("input4");
var input5= document.getElementById("input5");
var result=document.getElementById("result");
var nameButton=document.getElementById("ans");
var check=1;
var ans=0;
function bai1(){
    homeWorkBai1.style.backgroundColor="#106CF6";
    homeWorkBai1.style.color="#fff";
    // reset button homeWork
    homeWorkBai2.style.backgroundColor="transparent";
    homeWorkBai2.style.color="black";
    homeWorkBai3.style.backgroundColor="transparent";
    homeWorkBai3.style.color="black";
    homeWorkBai4.style.backgroundColor="transparent";
    homeWorkBai4.style.color="black";
    homeWorkBai5.style.backgroundColor="transparent";
    homeWorkBai5.style.color="black";
    check=1;
    // process
    title.innerHTML="Tính tiền lương nhân viên";
    input1.setAttribute("placeholder","Nhập lương 1 ngày làm");
    input2.setAttribute("placeholder","Nhập số ngày làm");
    input2.style.visibility="visible";
    input3.style.visibility="hidden";
    input4.style.visibility="hidden";
    input5.style.visibility="hidden";
}
function bai2(){
    homeWorkBai2.style.backgroundColor="#106CF6";
    homeWorkBai2.style.color="#fff";
    check=2;
    // reset button homeWork
    homeWorkBai1.style.backgroundColor="transparent";
    homeWorkBai1.style.color="black";
    homeWorkBai3.style.backgroundColor="transparent";
    homeWorkBai3.style.color="black";
    homeWorkBai4.style.backgroundColor="transparent";
    homeWorkBai4.style.color="black";
    homeWorkBai5.style.backgroundColor="transparent";
    homeWorkBai5.style.color="black";
    // process
    title.innerHTML="Tính giá trị trung bình";
    input2.style.visibility="visible";
    input3.style.visibility="visible";
    input4.style.visibility="visible";
    input5.style.visibility="visible";
    input1.setAttribute("placeholder","Nhập số thứ 1");
    input2.setAttribute("placeholder","Nhập số thứ 2");
    nameButton.innerHTML="Tính trung bình";
}
function bai3(){
    homeWorkBai3.style.backgroundColor="#106CF6";
    homeWorkBai3.style.color="#fff";
    check=3;
    // reset button homeWork
    homeWorkBai2.style.backgroundColor="transparent";
    homeWorkBai2.style.color="black";
    homeWorkBai1.style.backgroundColor="transparent";
    homeWorkBai1.style.color="black";
    homeWorkBai4.style.backgroundColor="transparent";
    homeWorkBai4.style.color="black";
    homeWorkBai5.style.backgroundColor="transparent";
    homeWorkBai5.style.color="black";
    // process
    title.innerHTML="Quy đổi tiền";
    input2.style.visibility="hidden";
    input3.style.visibility="hidden";
    input4.style.visibility="hidden";
    input5.style.visibility="hidden";
    input1.setAttribute("placeholder","Nhập số tiền USD");
    nameButton.innerHTML="Quy đổi tiền"

}
function bai4(){
    homeWorkBai4.style.backgroundColor="#106CF6";
    homeWorkBai4.style.color="#fff";
    check=4;
    // reset button homeWork
    homeWorkBai2.style.backgroundColor="transparent";
    homeWorkBai2.style.color="black";
    homeWorkBai3.style.backgroundColor="transparent";
    homeWorkBai3.style.color="black";
    homeWorkBai1.style.backgroundColor="transparent";
    homeWorkBai1.style.color="black";
    homeWorkBai5.style.backgroundColor="transparent";
    homeWorkBai5.style.color="black";
    // process
    title.innerHTML="Tính diện tích, chu vi hình chữ nhật";
    input2.style.visibility="visible";
    input3.style.visibility="hidden";
    input4.style.visibility="hidden";
    input5.style.visibility="hidden";
    input1.setAttribute("placeholder","Nhập Chiều dài");
    input2.setAttribute("placeholder","Nhập Chiều rộng");
    nameButton.innerHTML="Tính"
}
function bai5(){
    homeWorkBai5.style.backgroundColor="#106CF6";
    homeWorkBai5.style.color="#fff";
    check=5;
    // reset button homeWork
    homeWorkBai2.style.backgroundColor="transparent";
    homeWorkBai2.style.color="black";
    homeWorkBai3.style.backgroundColor="transparent";
    homeWorkBai3.style.color="black";
    homeWorkBai4.style.backgroundColor="transparent";
    homeWorkBai4.style.color="black";
    homeWorkBai1.style.backgroundColor="transparent";
    homeWorkBai1.style.color="black";
    // process
    title.innerHTML="Tính tổng hai ký số";
    input2.style.visibility="hidden";
    input3.style.visibility="hidden";
    input4.style.visibility="hidden";
    input5.style.visibility="hidden";
    input1.setAttribute("placeholder","Nhập số có 2 chữ số");
    nameButton.innerHTML="Tính tổng"

}
function calculateAns(){
    if(check==1){
        ans= Number(input1.value)*Number(input2.value);
    }
    if(check==2){
        ans=(Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value) + Number(input5.value))/5.0;
    }
    if(check==3){
        ans=Number(input1.value)*23500;
    }
    if(check==4){
        var s=Number(input1.value)*Number(input2.value);
        var c=(Number(input1.value)+Number(input2.value))*2;
        ans="Diện tích: " +s.toString() +"; Chu vi: " +c.toString();
    }
    if(check==5){
        var number1=Number(input1.value);
        var number=0;
        while(number1>0){
            number+=number1%10;
            number1=parseInt(number1/10);
        }
        ans=number;
    }
    result.innerHTML=ans;
}
