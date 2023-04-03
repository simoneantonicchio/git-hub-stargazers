import { useRef, useEffect } from 'react';

export default function usePreviousValue(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }