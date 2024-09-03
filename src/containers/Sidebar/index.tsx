import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
    trocaTema: () => void
}

const Sidebar = (props: Props) => (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo fontSize={20}>Tiago Pereira</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>
                tiagosemhpf
            </Paragrafo>
            <Descricao tipo="principal" fontSize={12}>
                Dev Full Stack Python
            </Descricao>
            <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar
