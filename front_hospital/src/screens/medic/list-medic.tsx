import { Sidebar } from "../../components/sidebar/sidebar";
import { useNavigate } from "react-router-dom";

const medicos = [{name: 'Julio'}, {name: 'Maria'}]

export function ListMedic() {
    const navigate = useNavigate();

    const handleCreateMedic = () => {
        navigate('/register-medic');
    };

    return (
        <main className="flex-1 flex gap-6">
            <Sidebar />

            <div className="ml-4 p-8">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Medicos</h1>
                    <button onClick={handleCreateMedic} className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded hover:from-blue-800 hover:to-blue-500">
                        Cadastrar novo Medico
                    </button>
                </div>

                <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {medicos.map((turma, index) => (
                        <div key={index} className="bg-white rounded shadow-md p-6">
                            <p className="text-lg font-semibold">{medicos.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ListMedic;