/* function calculator(operation, num1, num2){
    let result
    if (operation.toLowerCase()==="add"){
        result=num1+num2
    }
    else if (operation.toLowerCase()==="sub"){
        result=num1-num2
    }
    console.log(result)
}
calculator("add",50,30)
calculator("SUB",50,30)

function score(CA1,CA2,exam){
    return CA1+CA2+exam
}
function PrintScore(totalScore){
    console.log("your score is " + totalScore)
}
var tot= score(5,2,12)
PrintScore(tot)*/
function TotalScore(CA1,CA2,exam){
    return CA1+CA2+exam
}

function Grade(FinalGrade){
  if (FinalGrade >= 70 && FinalGrade<=100){
    console.log("Your grade is A")
  }
   else if (FinalGrade >=60 && FinalGrade<=69){
    console.log("Your grade is B")   
   }
    else if (FinalGrade >=50 && FinalGrade<=59){
    console.log("Your grade is C")
  }
    else if (FinalGrade >=45 && FinalGrade<=49){
    console.log("Your grade is D")
    }
    else if (FinalGrade >=0 && FinalGrade<=44){
    console.log("Your grade is F")
    }
    else{
        console.log("Your score is Invalid")
    } 
}
var Final= TotalScore(5,10,40)
Grade(Final)