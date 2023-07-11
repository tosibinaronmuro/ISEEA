import React from 'react'

const Navigation = () => {
  return (
    <ul
    className="mt-12 flex flex-wrap justify-center gap-6 md:gap-6 lg:mt-0 lg:justify-end lg:gap-6"
  >
    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75"  href="/">
        Home
      </a>
    </li>


    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75"  href="/history">
        History
      </a>
    </li>
    
    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75"  href="/">
        Projects
      </a>
    </li>

    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75"  href="/stories">
        Impact
      </a>
    </li>

    <li>
      <a className="text-gray-700 transition hover:text-gray-700/75"  href="/team">
        Team
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