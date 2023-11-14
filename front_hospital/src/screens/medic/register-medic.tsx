import { Sidebar } from "../../components/sidebar/sidebar";
import { useState } from "react";

export function RegisterMedic() {
    const [formData, setFormData] = useState({
        name: '',
        crm: '',
        sexo: '',
        especialidade: '',
        telefone: '',
    });

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <main className="flex-1 flex gap-6">
            <Sidebar />
            <div className="p-4 space-y-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Cadastrar novo Medico</h1>
                    <button
                        onClick={() => {}}
                        className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded hover:from-blue-800 hover:to-blue-500"
                    >
                        Salvar Medico
                    </button>
                </div>

                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <div>
                            <label htmlFor="name" className="block font-semibold">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="crm" className="block font-semibold">CRM:</label>
                            <input
                                type="text"
                                id="crm"
                                name="crm"
                                value={formData.crm}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="sexo" className="block font-semibold">Sexo:</label>
                            <input
                                type="sexo"
                                id="sexo"
                                name="sexo"
                                value={formData.sexo}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div>
                            <label htmlFor="especialidade" className="block font-semibold">Especialidade:</label>
                            <select
                                id="especialidade"
                                name="especialidade"
                                value={formData.especialidade}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Selecione uma disciplina</option>
                                <option value="matematica">Matemática</option>
                                <option value="portugues">Português</option>
                                <option value="historia">História</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="telefone" className="block font-semibold">Telefone:</label>
                            <select
                                id="telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Selecione um professor</option>
                                <option value="joao">João</option>
                                <option value="maria">Maria</option>
                                <option value="carlos">Carlos</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none"
                        >
                            Adicionar disciplina
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
export default RegisterMedic;