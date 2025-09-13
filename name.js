
/*Task 1: Flexible String Manipulation with Functions*/

let firstName = "rasme";
let lastName= "manick";
console.log(formatFullName(firstName,lastName));
function formatFullName(fName,lName)
{
    
    let formatedFirstName = fName.substring(0, 1).toUpperCase() + fName.substring(1);
    let formatedLastName = lName.substring(0, 1).toUpperCase() + lName.substring(1);
    return `${formatedFirstName} ${formatedLastName}`; 
}

/*Task 2: Mathematical Operations with Multiple Parameters*/

let cost={
    price:15,
    quantity:'numb',
    taxRate:5.3,
};
let cost1={
    price:50,
    quantity:3,
    taxRate:3.5,
};
let cost2={
    price:50,
    quantity:3,
    taxRate:3.5,
    discount:10,
};
function calculateTotalCost(price,quantity,taxRate,discount)
{
    let totalCost=0;
    let discountPrice;
    totalCost = (price * quantity) * (1 + taxRate);
    if(isNaN(price)||isNaN(quantity)||isNaN(taxRate))
    {
        console.log("Invalid Input");
        return;
    } 
    /*Task 4: Refactoring for Reusability*/
    else if(discount==null)
    {
        console.log("Total Cost: ",totalCost);
    }
    else
    {
        discountPrice = totalCost-discount;
        console.log("Total Cost after discount is ",discountPrice);
    }
        
}
   

calculateTotalCost(cost.price,cost.quantity,cost.taxRate);
calculateTotalCost(cost1.price,cost1.quantity,cost1.taxRate);
calculateTotalCost(cost2.price,cost2.quantity,cost2.taxRate,cost2.discount);



/*Task 3: Functions with Conditional Logic*/

let person={
    age:28,
    isEmployed:'employed',
};
let person1={
    age:18,
    isEmployed:'employed',
};
let person2={
    age:20,
    isEmployed:'Unemployed',
};
function checkEligibility(age,isEmployed)
{
    if((age>18)&&(isEmployed==='employed'))
    {
        console.log("Person is Eligible");
        return;
    }
    else if((age>18)&&(isEmployed!='employed'))
    {
        console.log("Person is conditionally eligible");
        return;
    }
    else if(age<=18)
    {
        console.log("Person is not elible");
        return;
    }
    else
        return invalid;
}
    checkEligibility(person.age,person.isEmployed);
    checkEligibility(person1.age,person1.isEmployed);
    checkEligibility(person2.age,person2.isEmployed);


    

