import './circle.css';
import { forwardRef, ForwardedRef } from 'react';

type CircleProps = object

const Circle = (_props: CircleProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="circle" ref={ref}>
      <div className="inner-circle"></div>
    </div>
  );
};

export default forwardRef<HTMLDivElement, CircleProps>(Circle);
