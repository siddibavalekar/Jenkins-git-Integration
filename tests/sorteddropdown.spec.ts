import{test,expect, Locator}from'@playwright/test';

test('verify dropdown is sorted',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //const dropdownopt:Locator=page.locator('#animals>option');//sorted dropdown
    const dropdownopt:Locator=page.locator('#colors>option'); // not sorted dropdown of colours

    const optiontext:string[]=(await dropdownopt.allTextContents()).map(text=>text.trim())
    
    const originalArray:string[]=[...optiontext];//... use spred operator to avoide mutability coz of sort()
    console.log(originalArray)
    const sortedArray:string[]=[...optiontext].sort();//sort is mutable that will change to original array so to not change original we use ... 3 dots
    console.log(sortedArray)


    expect(originalArray).toEqual(sortedArray); //checck dropdown is sorted or not

})