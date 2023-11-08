import Lista from "@/components/lista_usuarios/Lista";
import PCItem from "@/components/PCItem";
import SideMenu from "@/components/sidemenu";
import pcs from "@/constants/pcs";

export default function Dashboard() {
    const pc = pcs[0]

    return (
        <div className="flex flex-1  h-screen bg-gray-50">
           
           <SideMenu/>

            <div className="flex flex-col flex-1">
                <main>
                    <div className="py-6">
                        <div className="px-2 mx-[60px] max-w-[90%] mt-5 sm:px-6 md:px-1">
                            {/* <!-- ADD YOUR CONTENT HERE --> */}
                            {/* <PCItem id="0" /> */}

                            <span className="text-black">BSJ2222</span><br />
                            <span className="text-black text-3xl font-bold">GABRIEL OLIVEIRA</span>
                            <div className="grid grid-cols-12 gap-4 mt-8">
                                <div>
                                    <span className="text-zinc-500 text-sm">SETOR</span><br />
                                    <span className="text-zinc-800 text-sm">TI</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-sm">IP</span><br />
                                    <span className="text-zinc-800 text-sm">172.18.1.1</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-sm">PLACA MÃE</span><br />
                                    <span className="text-zinc-800 text-sm">ASUS AB40</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-sm">PROCESSADOR</span><br />
                                    <span className="text-zinc-800 text-sm">i3</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-sm">SSD | HDD</span><br />
                                    <span className="text-zinc-800 text-sm">450GB SSD</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-sm">MEMÓRIA</span><br />
                                    <span className="text-zinc-800 text-sm">16GB RAM</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-sm">ID MONITOR</span><br />
                                    <span className="text-zinc-800 text-sm">BSJ2225</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-sm">MARCA</span><br />
                                    <span className="text-zinc-800 text-sm">SAmSUNG</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-sm">POLEGADAS</span><br />
                                    <span className="text-zinc-800 text-sm">24"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#ec1c4c] mt-8 overflow-visible " />


                    <div className="flex justify-center">

                        <Lista />
                        
                    </div>
                </main>
            </div>
        </div>

    )
}