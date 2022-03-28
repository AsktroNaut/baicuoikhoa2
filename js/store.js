
let currentProducts = productsData.topProducts.tshirt




let newList = [];
productsData.topProducts.hoodie.forEach(i=>{
    let temporaryId = i.id.toString().slice(0,4);
    if(!newList.find(i=>i.id==temporaryId)){
        
        let tempProduct = JSON.parse(JSON.stringify(i));
        tempProduct.id = temporaryId;
        newList.push(tempProduct);
    }
})
// console.log(newList);























































































