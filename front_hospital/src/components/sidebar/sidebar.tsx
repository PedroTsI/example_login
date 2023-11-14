import { useLocation } from "react-router-dom"
import { SidebarItem } from "./sidebar-item"

const Sidebar = ()  => {
    const location = useLocation()
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-black border-r shadow-sm">
                <div className="p-4 flex justify-between items-center bg-blue-800">
                    <h1 className="text-white">Hospital Care</h1>
                </div>
                <ul className="flex-1">
                    <SidebarItem icon={undefined} text={'Medicos'} active={location.pathname == '/' ? true : false} link='/' />
                    <SidebarItem icon={undefined} text={'Recepcionistas'} active={location.pathname == '/' ? true : false} link='/' />
                    <SidebarItem icon={undefined} text={'Pacientes'} active={location.pathname == '/' ? true : false} link='/' />
                    <SidebarItem icon={undefined} text={'Sair'} active={false} link='/' />
                </ul>
            </nav>
        </aside>
    )
}


export { Sidebar }