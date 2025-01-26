import {SideNav, NavItem, ImageLogo, DivLogo} from '../style/Menu.js'

export default function Menu(){

    const logout = () => {
        localStorage.removeItem('token');
        console.log('excluio')
    }

    return(
        <>
            <SideNav>
                <DivLogo>
                    <ImageLogo/>
                    <h2 style={{ color: "black", marginBottom: "20px" }}>Galeria Web</h2>
                </DivLogo>
                <NavItem href="/photos">Fotos</NavItem>
                <NavItem href="/photos/upload">Upload Fotos</NavItem>
                <NavItem href="/config">Configurações</NavItem>
                <NavItem href="/" onClick={() => logout()}>Sair</NavItem>
            </SideNav>
        </>
    )
} 