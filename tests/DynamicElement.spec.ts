import {test,expect,Locator} from '@playwright/test';
//also handle by getByRole locator -playwright Locator
//css Locator 
//Xpath
test('Verify Dynamic Element',async({page})=>{


    page.goto('https://demowebshop.tricentis.com/')
    for(let i=0;i<5;i++){
        let button:Locator=page.locator("//button[text()='START' or text()='STOP']");
         //let button= await page.locator("//button[@name='start' or @name='stop']");
        // let button= await page.locator("//button[@name='start']");
        // let button= await page.locator("//button[contains(@name,'st')]");
        // let button= await page.locator("//button[starts-with(@name,'st')]");

        await button.click();
        await page.waitForTimeout(1000);


    }
});