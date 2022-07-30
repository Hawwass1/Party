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


function Grade(FinalGrade){
  if (FinalGrade >= 70 && FinalGrade<=100){
     console.log("Your grade is A")
     }
   else if (FinalGrade >=68 && FinalGrade<70){
     console.log("Your grade is A")   
    }
    else if (FinalGrade >=60 && FinalGrade<70){
     console.log("Your grade is B")
     }
    else if (FinalGrade >=58 && FinalGrade<60){
     console.log("Your grade is B")
    }
    else if (FinalGrade >=50 && FinalGrade<60){
     console.log("Your grade is C")
    }
    else if (FinalGrade >=48 && FinalGrade<50){
        console.log("Your grade is C")
    }
    else if (FinalGrade >=40 && FinalGrade<50){
        console.log("Your grade is D")
        }
    else if (FinalGrade >=38 && FinalGrade<40){
            console.log("Your grade is D")
            }
    else if (FinalGrade >=0 && FinalGrade<40){
                console.log("Your grade is F")
                }
    else{
        console.log("Your score is Invalid")
    } 
}
 function TotalScore(CA1,CA2,exam){
    if (CA1,CA2 >=0 && CA1,CA2<=20){
        return CA1+CA2+exam
    }
    else if (exam >=0 && exam <=100){
        return CA1+CA2+exam
    }
    else {
        console.log("Your score is invalid")
    }

}
var Final= TotalScore(20,20,50)
Grade(Final)