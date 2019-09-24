/*You will recieve an object.
If in the received object discount property is true, you will receive discount percentage which should be applied in the price.
If discount property is false you will get a tax property which should be added to the price.
 ​ // if true  discountPpercent: 20
  else tax: { taxPercent: 10} }. 
REQUIREMENTS: Please sum all prices with discount or tax for the products and print TOTAL PRICE. 
*/

var obj1 = { 
    "products": [
        {"Name": "glasses", "price": 20} ,
        {"Name": "dishes", "price":30 },
        {"Name": "knife", "price":6  }  
    ],
    "discount": true, 
    "discountPpercent": 20,
    "tax": {"taxPercent": 0 }
}

var obj2 = { 
    "products": [
        {"Name": "toy", "price": 8 },
        {"Name": "car", "price": 340 },
        {"Name": "helmet", "price" : 6}    
    ],
    "discount": false, 
    "discountPpercent": 0,
    "tax": {"taxPercent": 15 }
}

function total(obj1,obj2) {
    let sum = 0;

    for(let i = 0; i < obj1.products.length; i++){   
        sum += obj1.products[i].price;
    }

    if(obj1.discount){
        let discount = obj1.discountPpercent / 100; 
        let finalPrice = sum - (sum * discount);        
        return finalPrice;
    } 
    else {
        let taxes = obj1.tax.taxPercent / 100;
        let totalPrice = sum - (sum * taxes);
        return totalPrice;
    }
}
console.log(total(obj1,obj2));
