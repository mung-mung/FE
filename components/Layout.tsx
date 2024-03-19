import NavBar from "./NavBar";

type AppLayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
    return (
        <>
            <NavBar />
            <div className="app">{children}</div>
            <style jsx>{`
                .app {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    high: 100%;
                }
            `}</style>
        </>
    );
};
export default Layout;
