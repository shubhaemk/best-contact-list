import { useState, useEffect } from "react";
import { ContactApiPropsTypes } from "./ContactApi.type";

type ApiDataTypes = {
    data: any,
    isLoading: boolean,
    error: Error | null
}

const useWebService = ({ apiHandler, pageNumber, url }: ContactApiPropsTypes) => {

    const [apiData, setApiData] = useState<ApiDataTypes>({
        data: null,
        isLoading: false,
        error: null
    })

    useEffect(() => {
        const { isLoading } = apiData;
        if (!isLoading) {
            (async () => {
                setApiData({
                    data: null,
                    isLoading: true,
                    error: null
                });
                try {

                    const response = await fetch(url);

                    if (response.status === 200) {
                        const formatedResponse = await response.json();
                        setApiData({
                            data: apiHandler(formatedResponse.results),
                            isLoading: false,
                            error: null
                        });
                    } else {
                        throw new Error("Connection Issue");
                    }

                } catch (error) {
                    setApiData({
                        data: null,
                        isLoading: false,
                        error
                    });
                }
            })()
        }
    }, [pageNumber])

    return apiData;
}

export default useWebService;