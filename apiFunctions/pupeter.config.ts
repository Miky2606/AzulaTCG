

import puppeteer, { errors, ProtocolError, Puppeteer, TimeoutError } from 'puppeteer';




export interface PuppeteerData {
    url: string,
    selector: string,
    store: string,
    componenst: ComponentPupeterNoob[]
}

export interface ComponentPupeterNoob {
    name?: string,
    selector: string
}

export interface ResponsePuppeter<T> {
    data: T,
    error?: string
}

export interface DatosStore {
    value: string,
    store: string,
    code: string,
}


export interface ListResponse {
    name?: string,
    price?: DatosStore[],
    condition: DatosStore[],
    store?: string,
    product?: string,
    image?: string,
    rarity?: string,
    result?: string

}


export const pupeter = async (data: PuppeteerData) => {

    let resp: ResponsePuppeter<ListResponse[]>;
    let browser: puppeteer.Browser;
    browser = await puppeteer.launch({
        headless: false
    })

    try {


        const page = await browser.newPage()

        await page.goto(data.url);

        await page.waitForSelector(data.selector, {
            timeout: 3000,
            visible: true

        })








        const list_response: ListResponse[] = await page.evaluate((data: PuppeteerData) => {
            const list: ListResponse[] = [];
            const items: any = document.querySelectorAll(data.selector);
            const condition: DatosStore[] = []
            const price: DatosStore[] = []

            for (let item of items) {
                Array.from(
                    item.querySelectorAll(data.componenst[2].selector),
                    (e: HTMLDataElement) => {
                        return condition.push({
                            value: e.innerHTML,
                            store: data.store,
                            code: item.querySelector(data.componenst[5].selector).innerHTML
                        })
                    }
                )
                Array.from(
                    item.querySelectorAll(data.componenst[1].selector),
                    (e: HTMLDataElement) => {
                        return price.push({
                            value: e.innerHTML,
                            store: data.store,
                            code: item.querySelector(data.componenst[5].selector).innerHTML
                        })
                    }
                )






                list.push({
                    name: item.querySelector(data.componenst[0].selector).innerHTML,
                    price: price,
                    condition: condition,

                    product: item.querySelector(
                        data.componenst[3].selector
                    ).innerHTML,
                    store: data.store,
                    image: item.querySelector(data.componenst[4].selector).getAttribute("src"),
                    rarity: item.querySelector(data.componenst[5].selector).innerHTML,

                });


            }
            return list;
        }, data);


        await browser.close();
        return resp = {
            data: list_response
        }




    } catch (error) {
        let code: string = "Error Api";
        await browser.close();

        if (error instanceof TimeoutError) {
            code = "Error Timeout, This can be caused because the card is not found"
        }



        return resp = {
            data: [],
            error: code
        }

    }





}