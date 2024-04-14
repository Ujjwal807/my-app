'use client'
import { Sidebar } from "../components/Sidebar";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="flex">
        {/* <Sidebar /> */}
      <div className="flex flex-col items-center mt-4 px-4 justify-center">
        <div className="mt-4 p-2 bg-gray-400/50 backdrop-blur-sm text-zinc-900 w-11/12	 rounded-md">
          <h3 className="text-4xl my-6 mt-10 font-semibold text-center">
            About Us
          </h3>
          <p className="px-6">
            Welcome to our online sentence counter website, where we're
            passionate about helping writers, bloggers, and content creators
            craft compelling, well-structured, and engaging content. Our journey
            began with a simple goal: to provide a comprehensive and
            user-friendly tool that empowers individuals to optimize their
            writing for clarity, readability, and impact.
          </p>
          <h3 className="text-3xl my-6 mt-10 font-semibold pl-5">Our Story</h3>
          <p className="px-6">
            As avid writers ourselves, we understand the challenges that come
            with creating content that resonates with your audience. We've
            experienced the frustration of manually counting sentences, words,
            and characters, and the uncertainty of whether our content meets the
            desired readability standards. That's why we set out to develop a
            powerful, yet intuitive, online sentence counter that goes beyond
            basic counting and provides a range of features to enhance your
            writing experience.
          </p>
          <h3 className="text-3xl my-6 mt-10 font-semibold pl-5">
            Our Mission
          </h3>
          <p className="px-6">
            Our mission is to empower writers worldwide by providing them with
            the tools and insights they need to create exceptional content. We
            believe that every writer, regardless of their background or
            experience level, deserves access to high-quality, easy-to-use tools
            that can help them refine their craft and communicate their ideas
            effectively.
          </p>
          <h3 className="text-3xl my-6 mt-10 font-semibold pl-5">Our Team</h3>
          <p className="px-6">
            Our team consists of experienced writers, developers, and designers
            who share a common passion for language and technology. We've
            combined our expertise to create an online sentence counter that not
            only delivers accurate results but also offers a seamless and
            enjoyable user experience.
          </p>
          <h3 className="text-3xl my-6 mt-10 font-semibold pl-5">
            Our Commitment to Excellence
          </h3>
          <p className="px-6">
            We're committed to maintaining the highest standards of quality and
            accuracy in our online sentence counter. We continuously update and
            improve our algorithms to ensure that you receive reliable results,
            even for complex sentence structures or unconventional formats. We
            also value your feedback and suggestions, as they help us shape the
            future of our tool and better serve your needs.
          </p>
          <h3 className="text-3xl my-6 mt-10 font-semibold pl-5">
            Our Core Values
          </h3>
          <ol type="1" className="py-4 px-8">
            <li>
              <span className="font-bold mt-2">Accuracy :</span> We strive to
              provide the most accurate sentence count, word count, character
              count, and other metrics to help you make informed decisions about
              your content.
            </li>
            <li className="mt-2">
              <span className="font-bold">User-Centricity :</span> We prioritize
              your experience and satisfaction by offering a user-friendly
              interface, intuitive features, and responsive customer support.
            </li>
            <li className="mt-2">
              <span className="font-bold">Innovation :</span> We're constantly
              exploring new ways to enhance our online sentence counter,
              incorporating cutting-edge technologies and user feedback to
              deliver a best-in-class tool.
            </li>
            <li className="mt-2">
              <span className="font-bold">Accessibility :</span> We believe that
              everyone should have access to powerful writing tools, which is
              why we offer a range of features for free, ensuring that writers
              of all levels can benefit from our sentence counter.
            </li>
            <li className="mt-2">
              <span className="font-bold">Collaboration :</span> We foster a
              collaborative environment where writers can share their
              experiences, insights, and suggestions, helping us build a
              supportive community of content creators.
            </li>
          </ol>
          <h3 className="text-3xl my-6 mt-10 font-semibold pl-5">
            Join Us on Our Journey
          </h3>
          <p className="px-6">
            We invite you to join us on our journey to revolutionize the way
            writers create and optimize their content. Whether you're a blogger,
            novelist, journalist, or marketer, our online sentence counter is
            designed to help you achieve your writing goals and connect with
            your audience on a deeper level.
          </p>
          <p className="px-6">
            Try our online sentence counter today and experience the difference
            for yourself. We're confident that our tool will become an
            indispensable part of your writing process, saving you time, effort,
            and frustration while empowering you to create content that truly
            shines.
          </p>
          <p className="px-6">
            Thank you for choosing our online sentence counter. We look forward
            to supporting you on your writing journey and celebrating your
            success.
          </p>
        </div>
      </div>
    </div>
  );
}