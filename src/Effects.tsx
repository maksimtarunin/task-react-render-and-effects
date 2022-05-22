import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const user = props.sourceId;
    const [mess, setMess] = useState(-1);
    const callback = (messaNow: number) => {
        setMess(messaNow);
    };
    useEffect(() => {
        subscribe(user, callback);
        setMess(-1);
        return () => unsubscribe(user, callback);
    }, [user]);

    return (
        <div>
            {user}: {mess}
        </div>
    );
}
