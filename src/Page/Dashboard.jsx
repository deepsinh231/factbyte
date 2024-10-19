

import { Navlink, Headers} from "../Components";
import { Outlet } from 'react-router-dom';


export default function Dashboard() {
    return (
        <>
            <Headers />
            <div className="bg-[#f2f2f2] md:px-5 md:py-14 p-2">
                <div className="grid grid-cols-5 sm:gap-10 gap-2">
                    <Navlink />
                    <div className="all-manu-card shadow rounded-xl col-span-4 md:p-7 p-3 bg-white">
                        <div className="name pb-5">
                            <h4 className="md:text-2xl text-xl  text-primary-text333333 font-normal">Welcome to FactByte Thanks for Business, <span className="capitalize">Mitesh M Parmar!</span></h4>
                            <p className="md:text-xl text-lg py-2 text-primary-text333333">Manage all your services in one place.</p>
                        </div>
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}
