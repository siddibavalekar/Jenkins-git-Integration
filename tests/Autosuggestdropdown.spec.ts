import{test,expect,Locator}from '@playwright/test'

test('Autosuggest dropdown',async({page})=>
{
    await page.goto('https://www.google.com/');

    await page.locator("textarea[name='q']").fill('java');//search text
    await page.waitForTimeout(3000);

    //get all the suggested options --> ctrl+shift+p on DOM emulate focused page open
    const options:Locator=page.locator('ul>li');

    //count the options 
    const optionscount=await options.count();
    console.log("options count is="+optionscount)

    await page.waitForTimeout(3000);

    //print a specific option from dropdown which is present in 6rd position
    console.log("sixth  option:" + await options.nth(6).innerText())
     await page.waitForTimeout(4000);

    //print all the options from the dropdown
    for(let i=0;i<optionscount;i++)
    {
    console.log("all options are:" + await options.nth(i).innerText())
     //console.log("all option:"+options.nth(i).textContent())
    }
})