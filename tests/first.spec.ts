import{test,expect}from '@playwright/test';

test('Verify Page Title',async({page})=>{
await page.goto('https://www.scotiabank.com/ca/en/personal/credit-cards.html')
let titlee:String=await page.title()
console.log('Page Title: ' + titlee);
await expect(titlee).toBe('Apply for a Credit Card Online | Scotiabank Canada')

})
