import {
    query
} from "chatty-core";

export default async function handler(req, res) {
    const {q} = req.query;

    if (req.method === 'GET') {
        const indexName = process.env.PINECONE_INDEX;
        const namespace = 'handbook-v1';

        const {response} = await query(q, {
            indexName,
            namespace
        });

        res.status(200).json({
            role: "bot",
            message: response
        });
    }
}