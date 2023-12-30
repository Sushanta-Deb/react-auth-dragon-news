import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex gap-1">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee>
                I can be a React component, multiple React components, or just some text........
                I can be a React component, multiple React components, or just some text........
            </Marquee>
            <Marquee>
                I can be a React component, multiple React components, or just some text........
            </Marquee>
            <Marquee>
                I can be a React component, multiple React components, or just some text........
            </Marquee>
        </div>
    );
};

export default BreakingNews;