import { IconArrowBigLeft, IconArrowBigRight, IconEdit, IconMessage } from "@tabler/icons-react";

export default function Lista() {
    return (
        <div className="bg-white mt-10 p-5 rounded-2xl shadow-md w-[90%] mb-10 lista-chamados">
            <div className=" flex items-center justify-between">
                <div>
                    <h2 className="text-gray-600 font-semibold text-xl">Chamados Abertos</h2>
                </div>
                <div className="flex items-center justify-between">
                    {/* <div className="flex bg-gray-50 items-center p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input className="bg-gray-50 outline-none ml-1 block" type="text" name="" />
                        </div> */}


                    {/* <input type="search" name="" id="" className={`
                                     w-full py-2 pl-10 pr-[75px] hover:pr-[130px] focus:pr-[100px] duration-100
                                    rounded-lg focus:ring-[#ec1c4c] focus:border-[#ec1c4c] 
                                    sm:text-sm text-black outline-none
                                `} placeholder="Pesquisar" /> */}


                    <input className="input-1" name="text" placeholder="Pesquisar..." type="search" />

                    <button className="btn-1 lg:ml-10 space-x-8">
                        Filtrar
                    </button>
                </div>
            </div>
            <div>
                <div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-4" >
                    <div className="shadow rounded-lg">

                        <div className="grid grid-cols-6 mt-8 tabelaHrader">
                            <div className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <span className="text-zinc-500 text-sm">Usuário</span>
                            </div>
                            <div className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <span className="text-zinc-500 text-sm">Cargo</span>
                            </div>
                            <div className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <span className="text-zinc-500 text-sm">Setor</span>
                            </div>
                            <div className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <span className="text-zinc-500 text-sm">Chamado</span>
                            </div>
                            <div className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <span className="text-zinc-500 text-sm">Status</span>
                            </div>
                            <div className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <span className="text-zinc-500 text-sm">Notas</span>
                            </div>
                        </div>

                        <div className="tabelaBody">

                            <div className="tabelaLinha">
                                <div className="grid grid-cols-6 mt-8 tabelaLinha">
                                    <div className="px-5 py-2 border-b border-gray-200 text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="http://cdn.lopesrj.com.br/perfil/imagemLocal.ashx?us=14551&wd=400&ht=400&m=crop"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Rafa Monroe
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">Programador</p>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            T.I.
                                        </p>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            -
                                        </p>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-purple-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
                                            <span className="relative">Atendimento</span>
                                        </span>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <button className="text-[#ec1c4c] whitespace-no-wrap">
                                            <IconMessage size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="tabelaLinha">
                                <div className="grid grid-cols-6 mt-8 tabelaLinha">
                                    <div className="px-5 py-2 border-b border-gray-200 text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="http://cdn.lopesrj.com.br/perfil/imagemLocal.ashx?us=10229&wd=400&ht=400&m=crop"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Helder
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">Garoto de Programa</p>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            T.I.
                                        </p>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            -
                                        </p>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span className="relative">Finalizado</span>
                                        </span>
                                    </div>
                                    <div className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <button className="text-[#ec1c4c] whitespace-no-wrap">
                                            <IconMessage size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="grid grid-cols-6 mt-8 ">
                                <div className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img className="w-full h-full rounded-full"
                                                src="https://cdn.lopesrj.com.br/perfil/imagemlocal.ashx?us=17456&wd=200&ht=200&m=crop"
                                                alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Gabriel Oliveira
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">Analista de T.I.</p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        T.I
                                    </p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        -
                                    </p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Aguardando</span>
                                    </span>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button className="text-[#ec1c4c] whitespace-no-wrap">
                                        <IconMessage size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-6 mt-8 ">
                                <div className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img className="w-full h-full rounded-full"
                                                src="https://cdn.lopesrj.com.br/perfil/imagemlocal.ashx?us=17456&wd=200&ht=200&m=crop"
                                                alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Gabriel Oliveira
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">Analista de T.I.</p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        T.I
                                    </p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        -
                                    </p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Aguardando</span>
                                    </span>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button className="text-[#ec1c4c] whitespace-no-wrap">
                                        <IconMessage size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-6 mt-8 ">
                                <div className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img className="w-full h-full rounded-full"
                                                src="https://cdn.lopesrj.com.br/perfil/imagemlocal.ashx?us=17456&wd=200&ht=200&m=crop"
                                                alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Gabriel Oliveira
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">Analista de T.I.</p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        T.I
                                    </p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        -
                                    </p>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span className="relative">Aguardando</span>
                                    </span>
                                </div>
                                <div className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button className="text-[#ec1c4c] whitespace-no-wrap">
                                        <IconMessage size={20} />
                                    </button>
                                </div>
                            </div>


                        </div>
                        <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Mostrando 1 - 4 de 50 usuários
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-zinc-700 bg-[#ec1c4c] font-semibold py-2 px-4 rounded-l-xl">
                                    <IconArrowBigLeft />
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-zinc-700 bg-[#ec1c4c] font-semibold py-2 px-4 rounded-r-xl">
                                    <IconArrowBigRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}