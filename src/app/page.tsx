import { server_component_pb } from "@/state/pb/server_component_pb";
import { WontCauseHydrationIssues } from "./root/WontCauseHydrationIssues";
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import SingleProject from '@/components/custom/singleProject';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import ProjectList from '@/components/custom/projectList';

export default async function Home() {
  const { pb } = await server_component_pb()
  const user = pb.authStore.model

  const projects = await pb.collection("projects").getFullList()
  console.log(projects)

  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-between p-10">
      <div className="h-full flex flex-col items-center justify-center gap-3">
        {/* <h1 className="text-8xl font-bold text-center">Platform for Erasmus Projects</h1> */}

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Find the perfect project
              </h1>
              <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search Now</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">How It Works</button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <ProjectList projects={projects} />
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
              A platform for Erasmus Projects
            </h2>
            <ul className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <li className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">How it works</h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </li>
              <li className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Who's it for?</h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </li>
              <li className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">About us</h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>


        {/* <WontCauseHydrationIssues user={user} /> */}

        {/* both components below are client compoents that render optional elements basedon the user logedin status*/}
        {/* <WontCauseHydrationIssues user={user}/> */}
        {/* comment this one out to see the unideal case which will cause hydration issue */}
        {/* <WillCauseHydrationIssues/> */}
      </div>
    </main>
  )
}
