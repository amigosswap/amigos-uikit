import React from "react";
import { Language } from "../types";
interface Props {
    currentLang: string;
    langs: Language[];
    setLang: (lang: Language) => void;
    isDark?: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
