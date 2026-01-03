import {browser, networkProfiles} from "k6/browser"


export const options ={
    scenarios:{
        throttle_test:{   //test Name
            executor: "shared-iterations",
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
    await page.throttleNetwork(networkProfiles["Slow 3G"])
    await page.setViewportSize({
        width: 378,
        height: 812
    })
    await page.goto("https://www.google.com/")
    page.close()
}