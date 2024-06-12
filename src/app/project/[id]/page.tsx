import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { pb } from '@/state/pb/client_config';

const Project: NextPage<{ params: { id: string } }> = async ({ params }) => {

  const { id } = params;
  const project = await pb.collection("projects").getOne(id)


  

  return project && (
    <>
    <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Title of project</h1>
        </div>
    </header>

    <main className="container mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
        <section className="mb-4">
            <h2 className="text-2xl font-semibold">Project Timeline</h2>
            <p>Start Date: <time dateTime="2024-06-13T12:00:00Z">June 13, 2024</time></p>
            <p>End Date: <time dateTime="2024-06-20T12:00:00Z">June 20, 2024</time></p>
        </section>

        <section className="mb-4">
            <h2 className="text-2xl font-semibold">Project Description</h2>
            <div className="prose">
                <p>some rich text</p>
                <ul>
                    <li>lists and shit</li>
                </ul>
            </div>
        </section>

        <section className="mb-4">
            <h2 className="text-2xl font-semibold">External Link</h2>
            <a href="https://radev.tech" className="text-blue-500 underline">https://radev.tech</a>
        </section>
    </main>

    <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
            <p>Published on: June 7, 2024</p>
            <p>Last updated on: June 11, 2024</p>
        </div>
      </footer>
      </>
  );
};

export default Project;
