import Image from "next/image";
import InstituteCard from "./InstituteCard";
import TabBar from "./TabBar";

const Institute = () => {
    return (
        <section className="relative overflow-hidden min-h-screen">
            <div className="absolute inset-0 z-0" style={{ top: '17%' }}>
                <Image
                    src="/reviewsbg.png"
                    alt="Background"
                    layout="fill"
                    objectFit="contain"
                    className="object-fill"
                />
            </div>
            <div className="relative z-10 py-32">
                <div className="container mx-auto max-w-[60rem] p-4">
                    <InstituteCard
                        name="xyz Institute"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod-"
                        imageUrl="/google.jpg"
                    />
                    <TabBar />
                </div>
            </div>
        </section>
    );
}

export default Institute;