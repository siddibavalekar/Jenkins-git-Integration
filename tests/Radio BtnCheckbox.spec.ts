import { test, expect, Locator } from '@playwright/test';

//Radio Button

test('test Radio Button', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const femaleRadiobtn:Locator=page.locator('#female'); //female radiobtn locator

//Apply Assertion
await expect(femaleRadiobtn).toBeVisible();
await expect(femaleRadiobtn).toBeEnabled();
await expect(femaleRadiobtn).not.toBeChecked(); //check female radiobtn is not checked
expect(await femaleRadiobtn.isChecked()).toBe(false); //check female radiobtn is not

await femaleRadiobtn.check(); //check female
expect(await femaleRadiobtn.isChecked()).toBe(true); //check female radiobtn is checked or not
await expect(femaleRadiobtn).toBeChecked(); //check female prefreable assertion

await page.waitForTimeout(2000);
});



//Checkbox

test.only('test Checkbox', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//1.select specific checkbox(sunday) by getbyLabel() method
const sundayCheckbox:Locator= page.getByLabel('Sunday');//sunday Locator
await sundayCheckbox.check(); //check sunday checkbox
expect(sundayCheckbox).toBeChecked();//assertion to check sunday checkbox is checked or not

//2.select all checkboxex and asert all checkboxex are checked or not
const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //replace with actual checkbox labels
const Checkboxes:Locator[]=days.map(index=>page.getByLabel(index));//capture all checkboxex in array
expect(Checkboxes.length).toBe(7);//assertion to check all checkboxex are captured or not count of checkbpxes

//3 .select all the checkboxes
for(const checkbox of Checkboxes){
 await checkbox.check(); //check all checkboxex
 await expect(checkbox).toBeChecked(); //assertion to check all checkboxex are checked or not
}

//4.Uncheck last 3 checkBox which are now checked using slice method
for(const checkbox of Checkboxes.slice(-3)){
    await checkbox.uncheck(); //uncheck last 3 checkboxex
    await expect(checkbox).not.toBeChecked(); //assertion to check last 3 checkboxex are unchecked or not
}

//5.Toggele checkboxex :if checkbox is checked then uncheck it and if checkbox is unchecked then check it
for(const checkbox of Checkboxes){
   if(await checkbox.isChecked){
    await checkbox.uncheck(); //uncheck checkbox if it is checked
    await expect(checkbox).not.toBeChecked(); //assertion to check checkbox is unchecked or not
   }
   else
   {
    await checkbox.check(); //check checkbox if it is unchecked
    await expect(checkbox).toBeChecked(); //assertion to check checkbox is checked or not
   }
}

//6.Rnadomly select any checkbox using index(1,3,6) and assert it is checked or not
const index:number[]=[1,3,6]; //replace with actual index of checkboxex
for(const i of index){
    await Checkboxes[i].check();
    await expect(Checkboxes[i]).toBeChecked();//assertion to check checkbox is checked or not
}

//7.select checkbox based on the label
const weekday:string='Friday';

for(const label of days){
    if(label===weekday)
    {
         const checkbox=page.getByLabel(label);
         checkbox.check();
         await expect(checkbox).toBeChecked(); //assertion to check checkbox is checked or not  
    }

}

})