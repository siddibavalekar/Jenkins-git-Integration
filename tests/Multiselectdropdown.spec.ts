import{test,expect, Locator}from '@playwright/test';

test('Multiselect Dropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
   //1.select option from the dropdown (4 ways)
    await page.locator('#colors').selectOption(['Red', 'Blue']);//using Visible Text to select multiple options from the dropdown
    await page.locator('#colors').selectOption([{value:'red'},{value:'blue'}]);//using value to select multiple options from the dropdown
    await page.locator('#colors').selectOption([{label:'Red'},{label:'Blue'}]);//using label to select multiple options from the dropdown
    await page.locator('#colors').selectOption([{index:0},{index:2}]);//using index to select multiple options from the dropdown

   //2.check number of options in the dropdown count
    const dropdownopt:Locator= page.locator('#colors option');
    await expect(dropdownopt).toHaveCount(7);//assertion to check number of options in the dropdown count

    //3.check an option present in the dropdown or not
    const optionTexts = (await dropdownopt.allTextContents()).map(text=>text.trim());
    console.log('optionTexts: ' + optionTexts);//return output in array format
    expect(optionTexts).toContain('Red');//assertion to check an option present in the dropdown or not

    //4.printing options from the dropdown
    for(const option of optionTexts)
    {
    console.log(option)
    }
})