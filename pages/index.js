import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';

function ProfileSidebar(githubUser) {

  return (
      <Box as="aside">
        <img src={`http://github.com/${githubUser.githubUser}.png`} style={{ borderRadius: '8px'}} />
        <hr />

        <p>
          <a className="boxLink" href={'https://github.com/${githubUser.githubUser}'} >
            @{githubUser.githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </Box>
  )
}


export default function Home() {
const githubUser = 'FernandoVaz';
const [comunidades, setComunidades] = React.useState([{
  id: '3213123125233128638712563871263126784',
  title: "Eu odeio acordar cedo",
  image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
}]);


//const comunidades = React.useState(['Alurakut'])[0];
//const setComuniddes = React.useState(['Alurakut'])[1];


const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'rafaballerini', 'FernandoVaz', 'marcobrunodev', 'felipefialho'];

  return (
  <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
            Bem vindo(a)
          </h1>
          
          <OrkutNostalgicIconSet />
        </Box>


        <Box>
          <h2 className="subTitle"> O que você quer fazer? </h2>
          <form onSubmit={function handleCriaComunidade(e) {
            e.preventDefault();
            const dadosDoFormulario = new FormData(e.target);


            const dadoComunidade = {
              id: new Date().toISOString(),
              title: dadosDoFormulario.get('title'),
              image: dadosDoFormulario.get('imagem'),
            }

            if(dadoComunidade.title != "") {
              const comunidadesAtualizadas = [...comunidades, dadoComunidade];
              setComunidades(comunidadesAtualizadas);
            }
            
          }}> 

            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade" 
                name="title" 
                aria-label="" 
                type="text"
              />
            </div>

            <div>
              <input 
                placeholder="URL para usar de capa" 
                name="image" 
                aria-label="" 
                type="text"
              />
            </div>

            <button>
              Criar Comunidades
            </button>

          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>

         <h2 className="smallTitle">Comunidades ({comunidades.length}) </h2>

          <ul>
            {comunidades.map((itemAtual) => { 
                return (
                  <li key={itemAtual.id}>
                    <a href={`/user/{itemAtual.title}`} key={itemAtual.title}>
                      <img src={itemAtual.image}/>
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </ProfileRelationsBoxWrapper>
        
        <ProfileRelationsBoxWrapper>

          <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length}) </h2>

          <ul>
            {pessoasFavoritas.map((itemPessoa) => { 
                return (
                  <li key={itemPessoa}>
                    <a href={`/user/{itemPessoa}`} key={itemPessoa}>
                      <img src={`https://github.com/${itemPessoa}.png`} />
                      <span>{itemPessoa}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
  </>
  )
}
