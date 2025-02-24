
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreatePost from "../components/common/CreatePost";
import MyMovementCard from "../components/common/MyMovementCard";
import MovementByCategory from "../components/common/MovementByCategory";

const myMovementData = [
    {
        id:1,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:2,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:3,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:4,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:5,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:6,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:7,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:8,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:9,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:10,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:11,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:12,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:13,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:14,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:15,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:16,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
]
const JoinedMovementData = [
    {
        category: "Arts",
        posts: [
            {
                id: 1,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 2,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 3,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 4,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            }
        ]
    },
    {
        category: "Social",
        posts: [
            {
                id: 5,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 6,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 7,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 8,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            }
        ]
    },
    {
        category: "Sports",
        posts: [
            {
                id: 9,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 10,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 11,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 12,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            }
        ]
    },
    {
        category: "Health & Wellbeing",
        posts: [
            {
                id: 13,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 14,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 15,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 16,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            }
        ]
    }
];

const halfIndex = Math.ceil(myMovementData.length / 2)
const JoinedhalfIndex = Math.ceil(JoinedMovementData.length / 2)

const MovementPage = () => {
  return (
    <section className="movement-section pt-6 custom-xl:pt-4 custom-lg:pt-0 custom-xs:pt-[6px]">
        <Tabs defaultValue="my-movement" className="w-[full]">
            {/* header  */}
            <div className="flex items-center justify-between custom-xl:block custom-lg:block max-md:block">
                <TabsList className="flex gap-[60px] custom-2xl:gap-10 custom-xl:gap-10 custom-lg:gap-8 custom-xl:justify-start custom-lg:justify-start max-md:justify-start custom-sm:gap-5 custom-xs:gap-3 custom-xs:overflow-x-auto no-scrollbar">
                    <TabsTrigger value="my-movement" className="tab-button">My Movement</TabsTrigger>
                    <TabsTrigger value="joined-movement" className="tab-button">Joined Movement</TabsTrigger>
                    <TabsTrigger value="suggested" className="tab-button">Suggested</TabsTrigger>
                </TabsList>
                <div className="w-[422px] custom-2xl:w-[300px] custom-xl:mt-5 custom-lg:mt-5 max-md:mt-5 custom-xl:w-full custom-lg:w-full max-md:w-full">
                    <CreatePost />
                </div>
            </div>
            <div className="mt-7 custom-2xl:mt-4 custom-xl:mt-4 custom-xs:mt-5">
                <div className="max-h-[calc(100vh-226px)] custom-2xl:max-h-[calc(100vh-183px)] custom-xl:max-h-[calc(100vh-235px)] custom-lg:max-h-[calc(100vh-231px)] max-md:max-h-full max-md:overflow-hidden overflow-y-auto tab-content max-md:pb-4">
                    <TabsContent value="my-movement" className="mt-0">
                        <div className="grid grid-cols-2 gap-6 custom-sm:gap-4 custom-xs:gap-4 custom-xs:grid-cols-1">
                            <div>
                                {
                                    myMovementData?.slice(0, halfIndex).map((item) => (
                                        <div key={item?.id} className="mt-4 first:mt-0">
                                            <MyMovementCard item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    myMovementData?.slice(halfIndex).map((item) => (
                                        <div key={item?.id} className="mt-4 first:mt-0">
                                            <MyMovementCard item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </TabsContent>
                </div>
                <div className="max-h-[calc(100vh-226px)] custom-2xl:max-h-[calc(100vh-183px)] custom-xl:max-h-[calc(100vh-235px)] custom-lg:max-h-[calc(100vh-231px)] max-md:max-h-full max-md:overflow-hidden overflow-y-auto tab-content">
                    <TabsContent value="joined-movement" className="mt-0">
                        <div className="grid grid-cols-2 gap-6 custom-sm:gap-4 custom-xs:gap-4 custom-xs:grid-cols-1">
                            <div>
                                {
                                    JoinedMovementData?.slice(0, JoinedhalfIndex).map((item) => (
                                        <div key={item?.category}>
                                            <MovementByCategory item={item} name="joined" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    JoinedMovementData?.slice(JoinedhalfIndex).map((item) => (
                                        <div key={item?.category}>
                                            <MovementByCategory item={item} name="joined" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </TabsContent>
                </div>
                <div className="max-h-[calc(100vh-226px)] custom-2xl:max-h-[calc(100vh-183px)] custom-xl:max-h-[calc(100vh-235px)] custom-lg:max-h-[calc(100vh-231px)] max-md:max-h-full max-md:overflow-hidden overflow-y-auto tab-content">
                    <TabsContent value="suggested" className="mt-0">
                            <div className="grid grid-cols-2 gap-6 custom-sm:gap-4 custom-xs:gap-2 custom-xs:grid-cols-1">
                                <div>
                                    {
                                        JoinedMovementData?.slice(0, JoinedhalfIndex).map((item) => (
                                            <div key={item?.category}>
                                                <MovementByCategory item={item} name="suggested" />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        JoinedMovementData?.slice(JoinedhalfIndex).map((item) => (
                                            <div key={item?.category}>
                                                <MovementByCategory item={item} name="suggested" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                    </TabsContent>
                </div>
            </div>
            
        </Tabs>
    </section>
  );
};

export default MovementPage;