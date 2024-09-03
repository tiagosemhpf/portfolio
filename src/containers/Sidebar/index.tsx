import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import Avatar from '../Avatar'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
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
            <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar
