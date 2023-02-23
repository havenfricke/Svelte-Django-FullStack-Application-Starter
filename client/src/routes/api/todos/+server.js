import { baseURL2 } from "../../../env"

export const GET = async () => {
    const res = await fetch(baseURL2 + '/api/todos')
    const data = await res.json()

    return new Response(
        JSON.stringify({
            data
        }),
        { status: 200 }
    )
}