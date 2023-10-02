import { storyblokEditable } from '@storyblok/react';

const reformer_pose = ({ blok }) => {
  return (
    <div className="py-2" {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-lg"> {blok.title} </h2>
    </div>
  );
};

export default reformer_pose;
