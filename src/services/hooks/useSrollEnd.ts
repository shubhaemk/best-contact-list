import React, { useEffect } from "react"
type useScrollEndProps = {
    shouldTriggerCallback: boolean,
    callback: () => void,
    containerRef: {
        current: HTMLElement | null
    }
}

const useScrollEnd = ({ shouldTriggerCallback, callback, containerRef }: useScrollEndProps) => {
    useEffect(() => {
        if (containerRef && containerRef?.current && shouldTriggerCallback) {
            const scrollEventHandler = (event: any) => {
                const bottom =
                    event.target.scrollHeight - event.target.scrollTop ===
                    event.target.clientHeight;

                if (bottom) {
                    if (shouldTriggerCallback) {
                        callback();
                    }
                }
            }
            containerRef.current?.addEventListener("scroll", scrollEventHandler);

            return () => containerRef.current?.removeEventListener("scroll", scrollEventHandler);
        }
    }, [shouldTriggerCallback]);
}

export default useScrollEnd;