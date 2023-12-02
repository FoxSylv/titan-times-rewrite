import { useState, useEffect } from 'react';

export default function Slider(props) {
    let [pos, setPos] = useState(props.startingPosition ?? 0);
    let [oldMouseX, setOldMouseX] = useState(null);
    let [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const endDragging = () => setIsDragging(false);
        window.addEventListener('mouseup', endDragging, {passive: true});
        return () => window.removeEventListener('mouseup', endDragging);
    }, []);
    useEffect(() => {
        const onDrag = (e) => {
            if (isDragging) {
                setPos(pos + (e.clientX - oldMouseX));
                setOldMouseX(e.clientX);
            }
        };
        window.addEventListener('mousemove', onDrag, {passive: true});
        return () => window.removeEventListener('mousemove', onDrag);
    }, [isDragging, oldMouseX, pos]);
    const startDragging = (e) => {
        setIsDragging(true);
        setOldMouseX(e.clientX);
    };



    return (
        <div className={`overflow-hidden cursor-ew-resize ${props.className ?? ""}`} onMouseDown={(e) => startDragging(e)}>
            <div className="flex justify-center" style={{transform: `translateX(${pos}px)`}}>
                {props.children}
            </div>
        </div>
    );
}
