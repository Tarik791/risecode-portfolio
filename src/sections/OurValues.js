import Light from '@public/ourvalues/light.svg'
import Quality from '@public/ourvalues/quality.svg'
import Optimize from '@public/ourvalues/optimize.svg'
import Growth from '@public/ourvalues/growth.svg'

import Image from 'next/image';

export default function OurValues() {
    const values = [
        {
            icon: Light,
            title: "Innovation",
            text: "We transform ideas into impactful digital products.",
        },
        {
            icon: "🤝",
            title: "Collaboration",
            text: "We work closely with our clients as one team.",
        },
        {
            icon: "⚙️",
            title: "Quality",
            text: "Clean, scalable, and efficient code is at our core.",
        },
        {
            icon: "🚀",
            title: "Growth",
            text: "Every project helps us and our partners grow.",
        },
    ];

    return (
        <section className="relative bg-white text-center overflow-hidden">
            {/* Content */}
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR VALUES</h2>
                <div className="mb-16 max-w-sm mx-auto text-gray-600">
                    <p className="text-left">
                        What defines our work and drives our <br></br>
                    </p>
                    <p className="text-left">passion for software excellence.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image src={Light} alt="Innovation Icon" width={40} height={40} />
                            <h3 className="text-xl font-semibold text-gray-900">
                                Innovation
                            </h3>
                        </div>

                        {/* Opis */}
                        <p className="text-gray-600">
                            We transform ideas into impactful digital products.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image src={Quality} alt="Collaboration Icon" width={40} height={40} />
                            <h3 className="text-xl font-semibold text-gray-900">
                                Collaboration
                            </h3>
                        </div>

                        {/* Opis */}
                        <p className="text-gray-600">
                            We work closely with our clients as one team.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image src={Optimize} alt="Quality Icon" width={40} height={40} />
                            <h3 className="text-xl font-semibold text-gray-900">
                                Quality
                            </h3>
                        </div>

                        {/* Opis */}
                        <p className="text-gray-600">
                            Clean, scalable and efficient code is at our core.
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image src={Growth} alt="Growth Icon" width={40} height={40} />
                            <h3 className="text-xl font-semibold text-gray-900">
                                Growth
                            </h3>
                        </div>

                        <p className="text-gray-600">
                            Every project helps us and our partners grow.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
