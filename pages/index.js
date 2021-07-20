import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

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



function ComunidadesPessoasSidebar(props) {

  return (
    <>
      <h2 className="smallTitle">{props.title} ({props.list.length}) </h2>

      <ul>
        {props.list.map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={itemAtual.url} key={itemAtual.url}>
                  <img src={itemAtual.image}/>
                  <span>{itemAtual.title}</span>
                </a>
              </li>
            )
          })}
      </ul>
    </>
  )
}

function SeguidoresComponent(props) {
  
  return (
    <>
      <h2 className="smallTitle">{props.title} ({props.list.length}) </h2>

      <ul>
        {props.list.map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={itemAtual.html_url} >
                  <img src={itemAtual.avatar_url}/>
                  <span>{itemAtual.login}</span>
                </a>
              </li>
            )
          })}
      </ul>
    </>
  )
}


export default function Home(props) {
const githubUser = props.githubUser;
const [comunidades, setComunidades] = React.useState([]);


//const comunidades = React.useState(['Alurakut'])[0];
//const setComuniddes = React.useState(['Alurakut'])[1];

const pessoasFavoritas = [{
  id: 11111,
  title: 'juunegreiros',
  url: 'https://github.com/juunegreiros',
  image: 'https://github.com/juunegreiros.png',
},
{
  id: 11112,
  title: 'omariosouto',
  url: 'https://github.com/omariosouto',
  image: 'https://github.com/omariosouto.png',
},
{
  id: 11113,
  title: 'rafaballerini',
  url: 'https://github.com/rafaballerini',
  image: 'https://github.com/rafaballerini.png',
},
{
  id: 11114,
  title: 'FernanvoVaz',
  url: 'https://github.com/fernandovaz',
  image: 'https://github.com/fernandovaz.png',
},
{
  id: 11115,
  title: 'marcobrunodev',
  url: 'https://github.com/marcobrunodev',
  image: 'https://github.com/marcobrunodev.png',
},
{
  id: 11116,
  title: 'felipefialho',
  url: 'https://github.com/felipefialho',
  image: 'https://github.com/felipefialho.png',
}];

const [seguidores, setSeguidores] = React.useState([]);

React.useEffect(function() {
  // GET
  fetch('https://api.github.com/users/fernandovaz/followers')
    .then(function (res) {
      return res.json();
    })
    .then(function(resCompleta) {
      setSeguidores(resCompleta);
    })


    // fetch('/api/comunidades/', {
    //   method: 'POST',

    // })

    // API GraphQL
    fetch('https://graphql.datocms.com', {
      method: 'POST',
      headers: {
        'Authorization':'e5bcad5809c1db118c4aa7e31a37ab',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "query": ` {
          allCommunities {
            title 
            id
            image
            creatorSlug
          }
        }
      `})
    })
    .then((response) =>  response.json())
    .then((respostaCompleta) => {
      const comunidadesDoDato = respostaCompleta.data.allCommunities;
      setComunidades(comunidadesDoDato);
    })
}, [])

// 0 - pegar as arrays
// 1 - Crair um box que vai ter um map, baseado nos item array que pegamos do github;
// 
  return (
  <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
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
              title: dadosDoFormulario.get('title'),
              image: dadosDoFormulario.get('image'),
              creatorSlug: githubUser,
            }

            //console.log(dadoComunidade);

            fetch('/api/comunidades', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(dadoComunidade)
            }).then(async (response) => {
              const dados = await response.json();
              console.log(dados);
              const comunidade = dados.registroCriado;
              const comunidadesAtualizadas = [...comunidades, dadoComunidade];
              setComunidades(comunidadesAtualizadas);
            })
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


            <div>
              <input 
                placeholder="URL da comunidade externa" 
                name="url" 
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
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
        
         <SeguidoresComponent list={seguidores} title='Seguidores'/>
         
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>

         <ComunidadesPessoasSidebar list={comunidades} title='Comunidade'/>
         
        </ProfileRelationsBoxWrapper>
        
        <ProfileRelationsBoxWrapper>

          <ComunidadesPessoasSidebar list={pessoasFavoritas} title='Pessoas da comunidade' />
    
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
  </>
  )
}


export async function getServerSideProps(context) {
  //console.log('teste');
  const token = nookies.get(context).USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token,
    }
  }).then((response) => response.json())

  console.log(isAuthenticated);
  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);

  return {
    props: {
      githubUser
    },
  }
}