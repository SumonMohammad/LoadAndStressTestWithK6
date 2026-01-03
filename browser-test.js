import {browser} from "k6/browser"


export const options ={
    scenarios:{
        browser_test:{   //test Name
            executor: "constant-vus",
            vus: 2,
            duration: "30s",
            options:{
                browser:{
                    type: "chromium"
                }
            }

        }
    }
}

export default async function(){
    const page = await browser.newPage()
    await page.setViewportSize({
        width: 378,
        height: 812
    })
    await page.goto("https://www.google.com/")
    page.close()
}


//make the run with headed mode for browser 
// K6_BROWSER_HEADLESS=false k6 run browser-test.js