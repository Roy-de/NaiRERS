import React from 'react';

const RightSideBar = () => {
    const ambulances = [
        {
            id: 1,
            type: "Toyota Land Cruiser",
            number_plate: "KAA 001A",
            status: "responding",
            ETA_minutes: 5
        },
        {
            id: 2,
            type: "Ford Ranger",
            number_plate: "KAB 002B",
            status: "responding",
            ETA_minutes: 7
        },
        {
            id: 3,
            type: "Mercedes-Benz Sprinter",
            number_plate: "KAC 003C",
            status: "responding",
            ETA_minutes: 3
        },
        {
            id: 4,
            type: "Nissan X-Trail",
            number_plate: "KAD 004D",
            status: "responding",
            ETA_minutes: 6
        },
        {
            id: 5,
            type: "Toyota Hiace",
            number_plate: "KAE 005E",
            status: "responding",
            ETA_minutes: 4
        },
        {
            id: 6,
            type: "Land Rover Defender",
            number_plate: "KAF 006F",
            status: "responding",
            ETA_minutes: 8
        },
        {
            id: 7,
            type: "Mitsubishi Pajero",
            number_plate: "KAG 007G",
            status: "responding",
            ETA_minutes: 10
        },
        {
            id: 8,
            type: "Isuzu D-Max",
            number_plate: "KAH 008H",
            status: "responding",
            ETA_minutes: 5
        },
        {
            id: 9,
            type: "Toyota Prado",
            number_plate: "KAI 009I",
            status: "responding",
            ETA_minutes: 7
        },
        {
            id: 10,
            type: "Land Cruiser Prado",
            number_plate: "KAJ 010J",
            status: "responding",
            ETA_minutes: 6
        },
        {
            id: 11,
            type: "Nissan Patrol",
            number_plate: "KAK 011K",
            status: "responding",
            ETA_minutes: 8
        },
        {
            id: 12,
            type: "Toyota Hilux",
            number_plate: "KAL 012L",
            status: "responding",
            ETA_minutes: 3
        },
        {
            id: 13,
            type: "Subaru Forester",
            number_plate: "KAM 013M",
            status: "responding",
            ETA_minutes: 5
        },
        {
            id: 14,
            type: "Toyota RAV4",
            number_plate: "KAN 014N",
            status: "responding",
            ETA_minutes: 9
        },
        {
            id: 15,
            type: "Volkswagen Transporter",
            number_plate: "KAO 015O",
            status: "responding",
            ETA_minutes: 7
        },
        {
            id: 16,
            type: "Ford Everest",
            number_plate: "KAP 016P",
            status: "responding",
            ETA_minutes: 6
        },
        {
            id: 17,
            type: "Mitsubishi Outlander",
            number_plate: "KAQ 017Q",
            status: "responding",
            ETA_minutes: 4
        },
        {
            id: 18,
            type: "Honda CR-V",
            number_plate: "KAR 018R",
            status: "responding",
            ETA_minutes: 3
        },
        {
            id: 19,
            type: "Hyundai Santa Fe",
            number_plate: "KAS 019S",
            status: "responding",
            ETA_minutes: 6
        },
        {
            id: 20,
            type: "Kia Sorento",
            number_plate: "KAT 020T",
            status: "responding",
            ETA_minutes: 5
        }
    ]
    return (
        <div className={"bg-white drop-shadow-md rounded-3xl items-center p-2 flex flex-col h-screen justify-between z-0"}>
            {/*<div className={"p-2 flex flex-row w-full justify-between"}>*/}
                <table className={"flex flex-row justify-between m-3 w-full overflow-y-auto"}>
                    <tbody>
                    {ambulances.map((ambulance)=>(
                        <tr key={ambulance.id} className={"m-2 flex w-64 flex-wrap hover:bg-gray-100 hover:rounded-xl rounded-md"}>
                            <td className={"w-full flex flex-row justify-between"}>
                                <div className={"w-full flex flex-wrap justify-between items-center p-2"}>
                                    <span className={"text-sm font-bold"}>
                                    {ambulance.number_plate}
                                    </span>
                                    {ambulance.status==="responding"? (<span className={"border-1 rounded-full p-1 bg-[#AD0B39] "}>
                                    </span>):(<span className={"border-1 rounded-full p-1.5 bg-[#18183A]"}></span>)}

                                </div>
                            </td>
                            <td className={"mx-2 w-full flex flex-row justify-between"}>
                            <div className={"w-full flex flex-wrap justify-between items-center"}>
                                    <span className={"text-xs font-light"}>
                                        {ambulance.type}
                                    </span>
                                    <span className={"text-sm"}>
                                        {ambulance.ETA_minutes} min
                                    </span>
                                </div>
                            </td>
                            <td className={"w-96 flex flex-row justify-center"}>
                                <div className={"border-b border-slate-200 w-60"}></div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            {/*</div>*/}
        </div>
    );
};

export default RightSideBar;
