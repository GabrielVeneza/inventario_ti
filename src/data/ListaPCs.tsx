import PCs from "@/model/PC";
import PCItem from "@/components/PCItem";

interface ListaPCsProps {
    pcs: PCs[];
}

export default function ListaPCs(props: ListaPCsProps) {
    const pcs = props.pcs;

    return (
        <div className="flex flex-col">
            {pcs?.map((pc, index) => {
                return (
                    <PCItem key={index} pc={pc} />
                )
            })}
        </div>
    )
}