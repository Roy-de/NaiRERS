import {Facebook, Phone, Twitter} from "lucide-react";
import {Link} from "react-router-dom";

const HomePage = () =>{
    const smoothScroll =(event)=> {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({behavior:"smooth"})
    };

    return (
        <>
            <nav className={"items-center flex flex-wrap justify-between py-6"}>
                <div className={"flex flex-wrap pl-28 items-center"}>
                    <img className={"h-14"}
                         src={"https://ik.imagekit.io/3paggvhlz/paramedic-removebg-preview-JTZhZFAhf-transformed.png?updatedAt=1704387133967"}
                         alt={""}/>
                    <span className={"pl-4 text-2xl font-extrabold text-[#006ab4]"}>NAIRERS</span>
                </div>
                <div className={"flex flex-wrap items-center justify-end px-28"}>
                    <Link to={"/medic-login"}>
                        <button
                            className={"py-2 border-[#006ab4] border rounded-xl px-4 text-md hover:bg-[#006ab4] hover:text-white transition hover:scale-110 duration-500 ease-in-out font-bold text-[#006ab4] mr-10"}>Medic
                        </button>
                    </Link>
                    <Link to={"/dispatch-login"}>
                        <button
                            className={"py-2 border-[#A30B37] border rounded-xl px-4 text-md hover:bg-[#A30B37] hover:text-white transition hover:scale-110 duration-500 ease-in-out font-bold text-[#A30B37]"}>Dispatch
                        </button>
                    </Link>
                </div>
            </nav>
            <div className={"grid grid-cols-2 px-48 pt-28"}>
                <div className={"col-start-1"}>
                    <div className={" flex flex-wrap items-center mx-5"}>
                    <div
                            className={"flex flex-wrap bg-blue-200 items-center px-3 py-1.5 rounded-3xl shadow drop-shadow-md hover:scale-105 duration-300 shadow-blue-200"}>
                            <div
                                className="w-2.5 h-2.5 bg-blue-500 rounded-full flex items-center justify-center mr-1.5 blur-sm">
                            </div>
                            <button className={"text-blue-800 text-xs font-bold"}>
                                <a href={"#about"} onClick={smoothScroll}>
                                    Contact Us
                                </a>

                            </button>
                        </div>
                    </div>
                    <div className={"m-4"}>
                        <img className={"rounded-3xl"}
                             src={"https://ik.imagekit.io/3paggvhlz/Online-Urgent-care-.org_-1-removebg-preview.png?updatedAt=1709277719282"}
                             alt={""}/>
                    </div>
                </div>
                <div className={"col-start-2"}>
                    <div className={"px-10 pb-6"}>
                        <span className={"text-7xl font-extrabold font-heading text-[#18183A]"}>On a mission to <span
                            className={"font-serif text-[#006ab4] italic"}>Revolutionize</span> Emergency response time </span>
                        <div className={"pt-20 pr-32"}>
                            <span className={"text-gray-600 text-wrap text-lg"}>Nairers is a revolutionary emergency response system in Nairobi, saving lives by
                                streamlining accident reporting and dispatching emergency personnel swiftly.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 bg-white rounded-3xl flex flex-wrap mb-32 mx-20 mt-20">
                <div className="w-1/4 py-8">
                    <div className="border-r border-gray-200 px-12">
                        <p className="text-gray-600 mb-2 text-center">Founded</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-center">2024</h2>
                    </div>
                </div>
                <div className="w-1/4 py-8">
                    <div className="border-r border-gray-200 px-12">
                        <p className="text-gray-600 mb-2 text-center">Served</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-center">4.2M+</h2>
                    </div>
                </div><div className="w-1/2 lg:w-1/4 py-8">
                    <div className="border-r border-gray-200 px-12">
                        <p className="text-gray-600 mb-2 text-center">Responses</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-center">500K+</h2>
                    </div>
                </div><div className="w-1/2 lg:w-1/4 py-8">
                    <div className="border-r border-gray-200 px-12">
                        <p className="text-gray-600 mb-2 text-center">Hospitals</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-center">38</h2>
                    </div>
                </div>
            </div>
            <div className={"grid grid-cols-2 px-64"}>
                <div className={"col-start-1"}>
                    <div className={"flex flex-wrap justify-center"}>
                        <span className={"text-5xl font-semibold mt-8"}>Our Team</span>
                    </div>
                    <div className={"text-wrap mx-28 my-40"}>
                        <span className={"font-semibold text-lg"}>Celebrate our Nairers team -  </span>
                        <span className={"text-gray-600 text-lg"}>a dedicated family committed to revolutionizing emergency
                            response in Nairobi. With diverse talents and unwavering dedication, each member contributes
                            to our mission. From skilled dispatchers orchestrating swift responses to compassionate first
                            aid experts providing critical care, we embody resilience, innovation, and unwavering commitment.
                            Together, we stand as a beacon of hope and reliability, ensuring the safety and well-being of our
                            community.</span>
                    </div>
                    <div className={"col-start-2"}>
                        <div className={"m-2 mx-12"}>
                            <img
                                className={"rounded-2xl h-full"}
                                src={"https://ik.imagekit.io/3paggvhlz/_9ed07ce7-7887-4c1f-8397-1d203c2b7b62.jpeg?updatedAt=1709308049977"}
                                alt={""}/>
                        </div>
                    </div>
                </div>
                <div className={"col-start-2"}>
                    <div className={"m-2 mx-12"}>
                        <img
                            className={"rounded-2xl h-full"}
                            src={"https://ik.imagekit.io/3paggvhlz/_64172a12-ed0a-4e3b-ab03-1e78f3da600b.jpeg?updatedAt=1709307444571"}
                            alt={""}/>
                    </div>
                    <div className={"flex flex-wrap justify-center mt-16"}>
                        <span className={"font-semibold text-5xl"}>Our Partners</span>
                    </div>
                    <div className={"text-wrap mx-28 mt-20 text-gray-600"}>
                        <span>By joining Nairers, hospitals unlock a world of efficiency and effectiveness in emergency response.
                            Our seamless integration streamlines communication between hospitals and citizens, ensuring
                            timely arrival and optimal care for patients. Real-time updates on accident scenes empower hospitals to
                            prepare resources and personnel, minimizing wait times and maximizing treatment outcomes. With Nairers,
                            hospitals gain access to a network of skilled first responders, enhancing their ability to deliver quality
                            care swiftly and effectively. Together, we pave the way for a safer and healthier community, transforming
                            emergency response and saving lives.</span>
                    </div>
                    <div className={"flex flex-wrap justify-center mt-20"}>
                        <Link to={"/join-us"}>
                            <button
                                className={"px-9 py-3 border border-[#006ab4] hover:scale-110 hover:bg-[#006ab4] hover:text-white font-bold text-xl duration-500 ease-in-out rounded-xl text-[#006ab4]"}>Join
                                us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div id={"about"} className={"mt-28 mx-48 bg-slate-200 rounded-3xl p-10 mb-20 drop-shadow-lg shadow shadow-slate-50"}>
                <div className={"flex flex-wrap items-center justify-center"}>
                    <div className={"my-10 justify-center flex"}>
                        <span className={"text-slate-500 font-bold text-lg"}>Contact us</span>
                    </div>
                </div>
                <div className={"flex flex-wrap justify-between items-center mx-96 px-36 mb-16"}>
                    <div className={"flex flex-col items-center"}>
                        <p className={"pb-8 text-slate-600"}>Facebook</p>
                        <button>
                            <Facebook color={"#505e71"}/>
                        </button>
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <p className={"pb-8 text-slate-600"}>Whatsapp</p>
                        <button>
                            <Phone color={"#505e71"}/>
                        </button>
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <p className={"pb-8 text-slate-600"}>Twitter</p>
                        <button>
                            <Twitter color={"#505e71"}/>
                        </button>
                    </div>

                </div>
                <div className={"border border-b border-slate-300 mb-10 mx-16"}></div>
                <div>
                    <p className="text-center text-sm text-gray-400 mt-10 mb-6">All rights reserved © ERS Corporation
                        2024</p>
                </div>
            </div>
        </>
    );
}

export default HomePage;