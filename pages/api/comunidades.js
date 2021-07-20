import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {

        const TOKEN = '3b3ecb825b6c386fc32e346018f036';
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