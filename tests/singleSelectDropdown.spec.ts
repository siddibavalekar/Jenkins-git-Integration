import{test,expect, Locator}from'@playwright/test';

test('Verify single select Dropdown',async({page})=>{

    await page .goto('https://testautomationpractice.blogspot.com/');

    //1.select the option from the dropdown (4 ways)
    await page.locator('#country').selectOption('India'); //select option by value
    await page.locator('#country').selectOption({value:'India'});//select option by value attribute
    await page.locator('#country').selectOption({label:'India'})//select option by label 
    await page.locator('#country').selectOption({index:3})//select option by index 


    //2. check number of options in the dropdown count
    const dropdownopt:Locator=page .locator('#country>option');
    await expect(dropdownopt).toHaveCount(10);//assertion to check number of options in the dropdown count

    //3. check an option present in the dropdown or not
    const optionTexts:string[]=(await dropdownopt.allTextContents()).map(text=>text.trim());
    console.log('optionTexts: ' + optionTexts);//return output in array format
    expect(optionTexts).toContain('India');//assertion to check an option present in the dropdown or not
 
    //4.printing options from the dropdown
    for(const option of optionTexts){
        console.log('Dropdown Option:'+option);//
    }

})