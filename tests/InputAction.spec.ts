import { test, expect, Locator } from '@playwright/test';

test('test Input Action', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const textbox:Locator = page.locator('#name');
    //whenever assertion we put on web element we need to use await
    //  bcoz it always return a promise so here textbox is webelement
    await expect (textbox).toBeVisible();
    await expect (textbox).toBeEnabled();

    //check how much lenghth we can pass
    const maxlength:any=await textbox.getAttribute('maxlength');
    expect(maxlength).toBe('15');

    
    //Enter value into TextBox
    await textbox.fill('john bill');

    //capture data or get data which fill into textbox

    //inputvalue() method is used to get the value which we enter into textbox and it return input value
    const EnteredValue:string=await textbox.inputValue();
    console.log('Entervale is:'+EnteredValue);
    expect(EnteredValue).toBe('john bill');
    
    //textContent() method is used to get the value which we enter into textbox and it return text content
    //but now in DOM there is no value attribute for textbox so it will return null
   const entervalue:any =await textbox.textContent();
   console.log('Enter value is:'+entervalue);

   await page.waitForTimeout(2000);
});