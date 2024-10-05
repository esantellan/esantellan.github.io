import { useEffect, useRef } from "react";

function useInterval(callback: Function, delay: number) {
    const intervalRef = useRef<number | null>(null);
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => savedCallback.current();
        if(typeof delay === 'number') {
            intervalRef.current = window.setInterval(tick, delay);
            return () => window.clearInterval(intervalRef.current as number);
        }
    }, [delay]);

    return intervalRef;
}

export default useInterval;