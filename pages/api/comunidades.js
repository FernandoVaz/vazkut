import { SiteClient } from 'datocms-client';
import TOKEN from '../../configFiles/TOKEN';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {

        <TOKEN />
        const client = new SiteClient(TOKEN);
        
        //TODO: Criar DTO e validar os dados

        const registroCriado = await client.items.create({
            itemType: "980444", // ID DO model da communities
            ...request.body,
            // title: "Comunidade de teste",
            // image: "https://github.com/omariosouto.png",
            // creatorSlug: "Fernando Vaz",
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