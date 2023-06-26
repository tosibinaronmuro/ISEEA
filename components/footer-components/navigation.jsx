import React from 'react'

const Navigation = () => {
  return (
    <ul
    className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
  >
    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75" target='_blank' href="/">
        About
      </a>
    </li>

    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75" target='_blank' href="/">
        Services
      </a>
    </li>

    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75" target='_blank' href="/">
        Projects
      </a>
    </li>

    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75" target='_blank' href="https://selfesteemdiary.wordpress.com/">
        Blog
      </a>
    </li>
  </ul>
  )
}

export default Navigation