import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationsContext = createContext();

export function useTranslations() {
    return useContext(TranslationsContext);
}

export function TranslationsProvider({ children }) {
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        async function fetchTranslations() {
            const response = await fetch('/translations.json');
            const data = await response.json();
            setTranslations(data);
        }

        fetchTranslations();
    }, []);

    return (
        <TranslationsContext.Provider value={translations}>
            {children}
        </TranslationsContext.Provider>
    );
}
