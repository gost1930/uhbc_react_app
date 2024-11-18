import React from 'react'
import { AddLesson, GetLessons } from '../container';

const Lessons = () => {
  return (
    <section className='w-full md:p-10'>
      <AddLesson />
      <GetLessons />
    </section>
  )
}

export default Lessons;