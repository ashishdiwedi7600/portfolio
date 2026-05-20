'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? (
        <CountUp end={value} duration={duration} suffix={suffix} />
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  );
}
