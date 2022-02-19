import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const number = (req.query.num || (req.body && req.body.num));


    interface FoodCreateInfo{
        code: string
    }

    interface FoodData {
        name: string;
        cal: number
    }

    var foods : Array<FoodData> = [
        {name: "rice", cal: 310},
        {name: "pizza", cal: 280},
    ]


    interface FoodResult {
        food: FoodData
    }

    let response : FoodResult = {
        food: foods[number]
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(response)
    };

};

export default httpTrigger;