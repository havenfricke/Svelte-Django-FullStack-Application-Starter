import { baseURL } from "../../../../env"

export const GET = async ({ params }) => {
    const res = await fetch(baseURL + `/posts/${params.postId}`)
    const data = await res.json()


    return new Response(
        JSON.stringify({
            data
        })
    )
}