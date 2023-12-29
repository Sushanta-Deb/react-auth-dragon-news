import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex gap-2">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className="mr-10">
                I can be a React component, multiple React components, or just some text........
            </Marquee>
            <Marquee className="mr-10">
                I can be a React component, multiple React components, or just some text........
            </Marquee>
            <Marquee className="mr-10">
                I can be a React component, multiple React components, or just some text........
            </Marquee>
        </div>
    );
};

export default BreakingNews;