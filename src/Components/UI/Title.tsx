import React from 'react';

type Props = {
  title: string;
  img: string;
  className: string;
}

export const Title: React.FC <Props> = ({title, img, className}) => {
  return (
    <h1 
      className={`title ${className}`}
      data-img={img}
    >
      {title}
    </h1>
  )
}