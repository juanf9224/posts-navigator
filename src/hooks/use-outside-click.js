import { useState, useEffect } from 'react';

/**
 * Outside click handler 
 * @param {Ref} ref 
 */
const useOutsideClick = (ref) => {
    let [ outsideClicked, setOutsideClicked ] = useState(false);

    useEffect(() => {
        // If the current ref doesnt have the element where the 'mousedown'
        // event listener was triggered then it is an outside click
        const handleOutsideClick = (e) => {
            setOutsideClicked(ref.current && !ref.current.contains(e.target));
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [ref]);

    return outsideClicked;
};

export { useOutsideClick as default };