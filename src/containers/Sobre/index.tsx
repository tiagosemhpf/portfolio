import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="secundario">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=tiagosemhpf&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tiagosemhpf&layout=compact&langs_count=7&theme=dracula" />
        </GithubSecao>
    </section>
)

export default Sobre
