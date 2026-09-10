import{test,expect,Locator}from '@playwright/test'

test('verify dropdown contains dublicates',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //const dropdownopt:Locator=page.locator('#animals>option');// not contains dublicate
    const dropdownopt:Locator=page.locator('#colors>option'); // contains dublicate

    const optiontexts:string[]=(await dropdownopt.allTextContents()).map(text=>text.trim())

    const myset=new Set<string>(); //create set in set dublicate are not allow
    const dublicate:string[]=[];//in array dublicated are allowed

  for(const text of optiontexts) 
  {
    if(myset.has(text))
    {
        dublicate.push(text); //if dublicate then push to dublicate array 
    }
    else
    {
        myset.add(text); //if not dublicate then add to set 
    }
  }

  if(dublicate.length>0)//count dublicate array lenght if greather then 0 then it contain dublicate values else not
  {
    console.log("dropdown contains dublicates values")
  }
  else
  {
    console.log("dropdown does not contains dublicated")
  }

  expect(dublicate).toBe(0)//dublicate array lenght is 0 or not

})