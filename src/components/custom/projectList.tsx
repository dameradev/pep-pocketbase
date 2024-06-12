"use client"
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import SingleProject from './singleProject';

const ProjectList = ({ projects }) => {
  return (
    <Carousel>
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem className="basis-1/3">
            <SingleProject project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
 
export default ProjectList;