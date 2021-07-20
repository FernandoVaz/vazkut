import { SiteClient } from 'datocms-client';
import TOKEN from '../../configFiles/TOKEN';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {

        <TOKEN />
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "980444", // ID DO model da communities
            ...request.body,
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Not found',
    })
}