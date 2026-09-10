import{test,expect, Locator}from '@playwright/test';

test('Verify Logo',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/')

    //Absolute Xpath
    // let Logo1:Locator=page.locator('/html/body/div[1]/div[1]/div[1]/div[1]/a/img');
    // await expect(Logo1).toBeVisible();

    //Relative Xpath
    let Logo2:Locator=page.locator('//img[@alt="Tricentis Demo Web Shop"]');
    await expect(Logo2).toBeVisible();

//Contains
let Products:Locator=page.locator('//a[contains(text(),"computer")]');
const ProductsCount:Number=await Products.count();
console.log('Products Link is visible:'+ ProductsCount);
await expect(ProductsCount).toBeGreaterThan(0);  

const productsText = await Products.textContent();
// console.log('Products Link Text: ' + productsText);

console.log("First Product:"+await Products.first().textContent());
console.log("Last Product:"+await Products.nth(2).textContent());

let allProductsText:string[] = await Products.allTextContents();

for(let pt of allProductsText){
    console.log('Products Link Text: ' + pt);
}



//start with
let Products2:Locator=page.locator("//a[starts-with(@href,'/build')]");

const Products2Count:Number=await Products2.count();
console.log('Products Link is visible:'+ Products2Count);
await expect(Products2Count).toBeGreaterThan(0);  

//text()
let Products3:Locator=page.locator("//a[starts-with(text(),'Build')]");

const Products3Count:Number=await Products3.count();
console.log('Products Link is visible:'+ Products3Count);
await expect(Products3Count).toBeGreaterThan(0); 

//last()
let LastProduct:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
await expect(LastProduct).toBeVisible();
console.log('Last Product Link Text: ' + await LastProduct.textContent());

//position()
let positionItem:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");
await expect(positionItem).toBeVisible();  
console.log('Position Product Link Text: ' + await positionItem.textContent()); 

});