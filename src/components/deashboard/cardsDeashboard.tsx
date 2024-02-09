import { IconDevices2, IconPrinter, IconUserExclamation } from "@tabler/icons-react";

export default function CardsDeashboard() {
    return (
        <div>
            <div className="min-w-screen flex items-center justify-center">
                <div className="max-w-7xl w-full mx-auto  sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row w-full lg:space-x-8 space-y-2 lg:space-y-0 mb-2 lg:mb-4 items-center justify-center">

                        <div className="w-full lg:w-1/5 sm:w-2 cursor-pointer">
                            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400 shadow-sm hover:shadow-purple-400 hover:border-l-8 duration-100">
                                <div className="flex items-center">
                                    <div className="icon p-3.5 bg-purple-400 text-white rounded-full mr-3">
                                        <IconUserExclamation />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-lg text-black">16</div>
                                        <div className="text-sm text-gray-400">Chamados</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/5 cursor-pointer">
                            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400 shadow-sm hover:shadow-blue-400 hover:border-l-8 duration-100">
                                <div className="flex items-center">
                                    <div className="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-lg text-black">3456</div>
                                        <div className="text-sm text-gray-400">Usuários</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/5 cursor-pointer">
                            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400 shadow-sm hover:shadow-yellow-400 hover:border-l-8 duration-100">
                                <div className="flex items-center">
                                    <div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
                                        <IconDevices2 />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-lg text-black">625</div>
                                        <div className="text-sm text-gray-400">Computadores</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/5 cursor-pointer">
                            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-[#ec1c4c] shadow-sm hover:shadow-[#ec1c4c] hover:border-l-8 duration-100">
                                <div className="flex items-center">
                                    <div className="icon w-14 p-3.5 bg-[#ec1c4c] text-white rounded-full mr-3">
                                        <IconPrinter />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-lg text-black">15</div>
                                        <div className="text-sm text-gray-400">Impressoras</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}