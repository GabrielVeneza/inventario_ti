import CardsDeashboard from "@/components/deashboard/cardsDeashboard";
import Lista from "@/components/lista_usuarios/Lista";
import PCItem from "@/components/PCItem";
import SideMenu from "@/components/sidemenu";
import pcs from "@/constants/pcs";

export default function Dashboard() {
    const pc = pcs[0]

    return (
        <div className="flex flex-1 h-screen bg-gray-50">

            <SideMenu />

            <div className="flex flex-col flex-1">
                <main>
                    <div className="py-6">
                        <div className="px-2 mx-[60px] max-w-[90%] mt-5 sm:px-6 md:px-1">

                            <CardsDeashboard />

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