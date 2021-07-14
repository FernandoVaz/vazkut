import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

function ProfileSidebar(githubUser) {
  console.log(githubUser);
  return (
      <Box>
        <img src={`http://github.com/${githubUser.githubUser}.png`} style={{ borderRadius: '8px'}} />
      </Box>
  )
}


export default function Home() {
const githubUser = 'FernandoVaz';
const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'rafaballerini', 'FernandoVaz', 'marcobrunodev', 'felipefialho'];

  return (
  <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div classeName="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
            Bem vindo(a)
          </h1>
          
          <OrkutNostalgicIconSet />
        </Box>
      </div>
      <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>

          <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length}) </h2>

          <ul>
            {pessoasFavoritas.map((itemAtual) => { 
                return (
                  <li>
                    <a href={`/user/{itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>Comunidades</Box>
      </div>
    </MainGrid>
  </>
  )
}
