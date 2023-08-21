import { ReactNode } from "react";
import { PageStatePovider } from "./pageStates";
interface ProviderProps {
    children: ReactNode
}

const Providers = ({ children }: ProviderProps) => {
    return (
        <PageStatePovider>{children}</PageStatePovider>
    );
};

export default Providers;