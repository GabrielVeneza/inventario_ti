import { IconAffiliate, IconDeviceDesktop, IconPrinter } from "@tabler/icons-react";



export default function SideMenu() {
    return (
        <div className="hidden md:flex md:w-20 md:flex-col shadow-md">
            <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border border-r-gray-100">
                <div className="flex justify-center items-center flex-shrink-0 px-4">
                    <img className="w-auto h-[32px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLE9DGVPNVJ30saW_ABX-oMiJQ5smxF3MVm_tc7vbxXQ&s" alt="" />
                </div>

                <div className="px-4 mt-6">
                    <hr className="border-gray-200" />
                </div>

                <div className="flex flex-col justify-center flex-1 px-3 mb-[100%] mt-6">
                    <div className="space-y-4">
                        <nav className="flex-1 space-y-2">
                            <a href="#" title="" className="flex items-center px-4 py-2.5  text-sm font-medium text-white transition-all duration-200 bg-[#ec1c4c] rounded-lg group">
                                <svg className="flex-shrink-0 w-5 h-5 mr-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </a>

                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-[#ec1c4c] group">
                                <IconAffiliate />
                            </a>

                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-[#ec1c4c] group">
                                <IconDeviceDesktop />
                            </a>

                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-[#ec1c4c] group">
                                <IconPrinter />
                            </a>

                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-[#ec1c4c] group">
                                <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </a>
                        </nav>

                        <hr className="border-gray-200" />

                        <nav className="flex-1 space-y-2">
                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-[#ec1c4c] group">
                                <svg className="flex-shrink-0 w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}