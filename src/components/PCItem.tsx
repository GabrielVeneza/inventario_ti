import PC from "@/model/PC";

interface PcitemProps {
    pc: PC;
}

export default function PCItem(props: PcitemProps) {
    const pc = props.pc;

    return (
        <div>
            <div className="flex-row">
                <span className="text-black">{pc.patrimonio}</span><br />
                <span className="text-black text-3xl font-bold">{pc.usuario}</span>
                <div className="grid grid-cols-12 gap-4 mt-8">
                    <div>
                        <span className="text-zinc-500 text-sm">SETOR</span><br />
                        <span className="text-zinc-800 text-sm">{pc.setor}</span>
                    </div>
                    <div>
                        <span className="text-zinc-500 text-sm">IP</span><br />
                        <span className="text-zinc-800 text-sm">{pc.ip}</span>
                    </div>
                    <div>
                        <span className="text-zinc-500 text-sm">PLACA MÃE</span><br />
                        <span className="text-zinc-800 text-sm">{pc.placamae}</span>
                    </div>
                    <div>
                        <span className="text-zinc-500 text-sm">PROCESSADOR</span><br />
                        <span className="text-zinc-800 text-sm">{pc.cpu}</span>
                    </div>
                    <div>
                        <span className="text-zinc-500 text-sm">SSD | HDD</span><br />
                        <span className="text-zinc-800 text-sm">{pc.armazenamento}</span>
                    </div>
                    <div>
                        <span className="text-zinc-500 text-sm">MEMÓRIA</span><br />
                        <span className="text-zinc-800 text-sm">{pc.ram}</span>
                    </div>
                    <div>
                        <span className="text-zinc-500 text-sm">ID MONITOR</span><br />
                        <span className="text-zinc-800 text-sm">{pc.patrimonio_monitor}.</span>
                    </div>
                    <div>
                        <span className="text-zinc-500 text-sm">MARCA</span><br />
                        <span className="text-zinc-800 text-sm">{pc.marca_monitor}</span>
                    </div>
                    <div>
                        <span className="text-zinc-500 text-sm">POLEGADAS</span><br />
                        <span className="text-zinc-800 text-sm">{pc.polegadas}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}