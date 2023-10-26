import React from 'react';
import style from './Arrow.module.scss';

function ArrowBtn(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <span
      onClick={props.onClick}
      className={`${style.arrow} ${!disabeld && style.arrow_next}`}
    >
      {props.left && '←'}
      {!props.left && '→'}
    </span>
  );
}

export default function Arrow(instanceRef: any, currentSlide: number) {
  return (
    <div className={style.slider__arrows}>
      <ArrowBtn
        left
        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
        disabled={currentSlide === 0}
      />

      <ArrowBtn
        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
        disabled={
          currentSlide === instanceRef.current?.track.details.slides.length - 1
        }
      />
    </div>
  );
}
