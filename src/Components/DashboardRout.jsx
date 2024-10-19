import { BarChart } from '@mui/x-charts/BarChart';
import { addLabels, balanceSheet } from '../Page/netflixsBalanceSheet.ts';
import { dataset, valueFormatter } from '../dataset/weather.ts';
import { DeshboardCard } from "../Components";

const chartSetting = {
    xAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    width: 400,
    height: 400,
};
export default function DashboardRout() {
    return (
        <div>
            <DeshboardCard />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl text-[#545554] font-bold  mb-2">Order Statistics</h3>
                    <p className="text-xl text-[#545554] font-normal  mb-4">Lorem ipsum dolor sit amet consectetur</p>
                    <div className="overflow-x-auto">
                        <BarChart
                            dataset={balanceSheet}
                            series={addLabels([
                                { dataKey: 'currAss', stack: 'assets' },
                                { dataKey: 'nCurrAss', stack: 'assets' },
                                { dataKey: 'curLia', stack: 'liability' },
                                { dataKey: 'nCurLia', stack: 'liability' },
                                { dataKey: 'capStock', stack: 'equity' },
                                { dataKey: 'retEarn', stack: 'equity' },
                                { dataKey: 'treas', stack: 'equity' },
                            ])}
                            xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
                            slotProps={{ legend: { hidden: true } }}
                            width={600}
                            height={350}
                        />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl text-[#545554] font-bold  mb-2">Order Statistics</h3>
                    <p className="text-xl text-[#545554] font-normal  mb-4">Lorem ipsum dolor sit amet consectetur</p>
                    <div className="overflow-x-auto  scroll-a">
                        <BarChart
                            dataset={dataset}
                            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
                            layout="horizontal"
                            {...chartSetting}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl text-[#545554] font-normal  mb-4">Helpful resources</h3>
                    <ul>
                        <li className="py-4 flex items-center">
                            <div className="w-10 mr-3">
                                <img className="w-full" src={window.location.origin + '/IMG/dashboard/resources.png'} alt="" />
                            </div>
                            <p className="text-[#070707] font-normal sm:font-semibold">Helpful Resources</p>
                        </li>
                        <li className="py-4 flex items-center">
                            <div className="w-10 mr-3">
                                <img className="w-full" src={window.location.origin + '/IMG/dashboard/doumentation.png'} alt="" />
                            </div>
                            <p className="text-[#070707] font-normal sm:font-semibold">Documentation</p>
                        </li>
                        <li className="py-4 flex items-center">
                            <div className="w-10 mr-3">
                                <img className="w-full" src={window.location.origin + '/IMG/dashboard/Fact.world.png'} alt="" />
                            </div>
                            <p className="text-[#070707] font-normal sm:font-semibold">Fact.world For The Enterprise</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl text-[#545554] font-normal  mb-4">Your recently viewed resources</h3>
                    <ul>
                        <li className="py-4 md:w-full lg:w-[90%] w-full flex flex-wrap sm:flex-nowrap items-center">
                            <div className="sm:w-[110px] w-[70px] my-5 sm:my-0 sm:mr-3">
                                <img className="" src={window.location.origin + '/IMG/dashboard/fact-logo-resources.png'} alt="" />
                            </div>
                            <div className=" flex flex-col">
                                <p className="font-light w-full text-[#070707]">Intermediate Fact Byte</p>
                                <span className="text-sm pt-5 font-normal text-[#b3b3b3]">3 year ago</span>
                            </div>
                        </li>
                        <li className="py-4 md:w-full lg:w-[90%] w-full flex flex-wrap sm:flex-nowrap items-center">
                            <div className="sm:w-[110px] w-[70px] my-5 sm:my-0 sm:mr-3">
                                <img className="" src={window.location.origin + '/IMG/dashboard/profile.png'} alt="" />
                            </div>
                            <div className=" flex flex-col">
                                <p className="font-light w-full text-[#070707]">Sherman Madurocommented on Gender by names <br />in gender by names last year</p>
                                <span className="text-sm pt-5 font-normal text-[#b3b3b3]">3 year ago</span>
                            </div>
                        </li>
                        <li className="py-4 md:w-full lg:w-[90%] w-full flex flex-wrap sm:flex-nowrap items-center">
                            <div className="sm:w-[110px] w-[70px] my-5 sm:my-0 sm:mr-3">
                                <img className="" src={window.location.origin + '/IMG/dashboard/tv.png'} alt="" />
                            </div>
                            <div className=" flex flex-col">
                                <p className="font-light w-full text-[#070707]">@jonloyens commented on Data sets for practice. <br />Check out the Data Sheet.</p>
                                <span className="text-sm pt-5 font-normal text-[#b3b3b3]">5 min ago</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
